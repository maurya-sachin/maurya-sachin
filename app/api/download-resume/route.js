import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "resume",
      "Sachin-Maurya.pdf",
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    const userAgent = request.headers.get("user-agent") || "Unknown";
    const timestamp = new Date().toISOString();

    console.log(
      `📄 Resume downloaded - ${timestamp} - User Agent: ${userAgent}`,
    );

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Sachin-Maurya_Frontend_Developer_Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600",
        "X-Download-Success": "true",
      },
    });
  } catch (error) {
    console.error("❌ Download error:", error);
    return NextResponse.json(
      { error: "Download failed", details: "Please try again later" },
      { status: 500 },
    );
  }
}