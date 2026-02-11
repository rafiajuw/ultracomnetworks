import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// HTML escape to prevent XSS in email content
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Email format validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "mail.ultracomnetworks.pk",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "sales@ultracomnetworks.pk",
    pass: process.env.EMAIL_PASS || "",
  },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000,
});

console.log("Email Config:", {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS ? "***hidden***" : "NOT SET",
});

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    // ---------------------------
    // 1. MULTIPART FORM (Resume / Career Form)
    // ---------------------------
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();

      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const phone = formData.get("phone")?.toString() || "";
      const position = formData.get("position")?.toString() || "";
      const message = formData.get("message")?.toString() || "";
      const resume = formData.get("resume") as File | null;

      if (!name || !email || !message || !resume) {
        return NextResponse.json(
          { error: "All fields including resume are required." },
          { status: 400 }
        );
      }

      if (!isValidEmail(email)) {
        return NextResponse.json(
          { error: "Please provide a valid email address." },
          { status: 400 }
        );
      }

      if (resume.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Resume file size must be under 10MB." },
          { status: 400 }
        );
      }

      const resumeBuffer = Buffer.from(await resume.arrayBuffer());

      const resumeResult = await transporter.sendMail({
        from: `"Career Form" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
        replyTo: email,
        subject: `Job Application: ${escapeHtml(name)} (${escapeHtml(position)})`,
        html: `
          <h2>Career Application</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Position:</strong> ${escapeHtml(position)}</p>
          <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
        attachments: [
          {
            filename: resume.name || "resume.pdf",
            content: resumeBuffer,
            contentType: resume.type,
          },
        ],
      });

      console.log("Career email sent to:", process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER);
      console.log("Message ID:", resumeResult.messageId);

      return NextResponse.json({ message: "Application sent successfully!" });
    }

    // ---------------------------
    // 2. JSON FORM (Contact / Book Now)
    // ---------------------------
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Dynamic subject for Book Now vs Contact
    const subject = service
      ? `Appointment Request: ${escapeHtml(service)} - ${escapeHtml(name)}`
      : `Website Inquiry from ${escapeHtml(name)}`;

    const mailResult = await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject,
      html: `
        <h2>${service ? "New Appointment Request" : "New Website Inquiry"}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
        <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Email sent successfully to:", process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER);
    console.log("Message ID:", mailResult.messageId);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("Mail Error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });

    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details: error.message
      },
      { status: 500 }
    );
  }
}
