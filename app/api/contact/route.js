// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter with correct method name
    const transporter = nodemailer.createTransport({
      service: 'gmail',
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
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
                        <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #495057;">Name:</strong>
                            <p style="margin: 5px 0; color: #6c757d;">${name}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #495057;">Email:</strong>
                            <p style="margin: 5px 0; color: #6c757d;"><a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #495057;">Subject:</strong>
                            <p style="margin: 5px 0; color: #6c757d;">${subject}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #495057;">Message:</strong>
                            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; margin-top: 10px;">
                                <p style="margin: 0; color: #495057; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                            </div>
                        </div>
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                            <p style="margin: 0; color: #6c757d; font-size: 14px;">
                                <strong>Sent from:</strong> Portfolio Contact Form<br>
                                <strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                            </p>
                        </div>
                    </div>
                </div>
            `,
    };

    // Auto-reply email to the sender
    const autoReply = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for reaching out! - Sachin Maurya',
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
                        <h2 style="color: white; margin: 0;">Thank You for Contacting Me!</h2>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
                        <p style="color: #495057; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
                        
                        <p style="color: #495057; line-height: 1.6;">
                            Thank you for reaching out to me through my portfolio website! I've received your message regarding "<strong>${subject}</strong>" and I really appreciate you taking the time to get in touch.
                        </p>
                        
                        <p style="color: #495057; line-height: 1.6;">
                            I'll review your message carefully and get back to you as soon as possible, typically within 24-48 hours. In the meantime, feel free to check out my latest projects and connect with me on social media.
                        </p>
                        
                        <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745; margin: 20px 0;">
                            <p style="margin: 0; color: #495057;"><strong>Your message:</strong></p>
                            <p style="margin: 10px 0 0 0; color: #6c757d; font-style: italic;">"${message.length > 100 ? message.substring(0, 100) + '...' : message}"</p>
                        </div>
                        
                        <p style="color: #495057; line-height: 1.6;">
                            Best regards,<br>
                            <strong>Sachin Maurya</strong><br>
                            <span style="color: #6c757d;">Frontend Developer</span>
                        </p>
                        
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                            <p style="margin: 0; color: #6c757d; font-size: 14px;">
                                This is an automated response. Please do not reply to this email directly.
                            </p>
                        </div>
                    </div>
                </div>
            `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(autoReply)
    ]);

    return NextResponse.json(
      {
        message: 'Email sent successfully! I\'ll get back to you soon.',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error);

    // Return different error messages based on the error type
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email authentication failed. Please try again later.' },
        { status: 500 }
      );
    }

    if (error.code === 'ECONNECTION') {
      return NextResponse.json(
        { error: 'Unable to connect to email service. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later or contact me directly.' },
      { status: 500 }
    );
  }
}