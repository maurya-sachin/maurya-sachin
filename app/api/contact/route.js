// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Create transporter with correct method name
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email to you (the portfolio owner)
    const mailToOwner = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Your email
      subject: `Portfolio Contact: ${subject}`,
      html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f9; padding: 30px;">
            <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
              <div style="background: linear-gradient(135deg, #1d3557, #457b9d); padding: 20px 30px;">
                <h2 style="margin: 0; color: #ffffff;">📩 New Contact Message</h2>
              </div>
              <div style="padding: 25px 30px; color: #333;">
                <p style="font-size: 16px; margin-bottom: 20px;">You received a new message via your portfolio contact form:</p>
                
                <div style="margin-bottom: 15px;"><strong>Name:</strong> ${name}</div>
                <div style="margin-bottom: 15px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1d3557;">${email}</a></div>
                <div style="margin-bottom: 15px;"><strong>Subject:</strong> ${subject}</div>
                
                <div style="margin: 25px 0; padding: 20px; background: #f1f5f9; border-left: 4px solid #1d3557; border-radius: 6px;">
                  <strong style="display: block; margin-bottom: 10px;">Message:</strong>
                  <div style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</div>
                </div>

                <div style="font-size: 13px; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
                  Sent on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST<br>
                  <em>This message was sent from your portfolio site.</em>
                </div>
              </div>
            </div>
          </div>
        `

    };

    // Auto-reply email to the sender
    const autoReply = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for reaching out! - Sachin Maurya",
      html: `
              <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f9; padding: 30px;">
                <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
                  <div style="background: linear-gradient(135deg, #06b6d4, #3b82f6); padding: 20px 30px;">
                    <h2 style="margin: 0; color: #ffffff;">👋 Thank You for Reaching Out!</h2>
                  </div>
                  <div style="padding: 25px 30px; color: #333;">
                    <p style="font-size: 16px; margin-bottom: 20px;">Hi <strong>${name}</strong>,</p>

                    <p style="line-height: 1.6;">
                      Thanks for reaching out through my portfolio! I’ve received your message regarding <strong>"${subject}"</strong> and will get back to you shortly.
                    </p>

                    <div style="margin: 25px 0; padding: 20px; background: #f1f5f9; border-left: 4px solid #10b981; border-radius: 6px;">
                      <strong style="display: block; margin-bottom: 10px;">Your Message:</strong>
                      <p style="margin: 0; color: #555; font-style: italic;">"${message.length > 100 ? message.substring(0, 100) + "..." : message}"</p>
                    </div>

                    <p style="line-height: 1.6;">
                      I typically respond within 24–48 hours. Feel free to check out my <a href="https://github.com/maurya-sachin" style="color: #3b82f6;">GitHub</a> or <a href="https://linkedin.com/in/maurya-sachin" style="color: #3b82f6;">LinkedIn</a> in the meantime.
                    </p>

                    <p style="margin-top: 30px;">
                      Best regards,<br>
                      <strong>Sachin Maurya</strong><br>
                      <span style="color: #6c757d;">Frontend Developer</span>
                    </p>

                    <div style="font-size: 13px; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">
                      This is an automated reply. Please don’t respond directly to this email.
                    </div>
                  </div>
                </div>
              </div>
            `

    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(autoReply),
    ]);

    return NextResponse.json(
      {
        message: "Email sent successfully! I'll get back to you soon.",
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Contact form error:", error);

    // Return different error messages based on the error type
    if (error.code === "EAUTH") {
      return NextResponse.json(
        { error: "Email authentication failed. Please try again later." },
        { status: 500 },
      );
    }

    if (error.code === "ECONNECTION") {
      return NextResponse.json(
        {
          error: "Unable to connect to email service. Please try again later.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        error:
          "Failed to send email. Please try again later or contact me directly.",
      },
      { status: 500 },
    );
  }
}
