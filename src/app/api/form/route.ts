import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

      const resumeBuffer = Buffer.from(await resume.arrayBuffer());

      const resumeResult = await transporter.sendMail({
        from: `"Career Form" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
        replyTo: email,
        subject: `Job Application: ${name} (${position})`,
        html: `
          <h2>Career Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        `,
        attachments: [
          {
            filename: resume.name || "resume.pdf",
            content: resumeBuffer,
            contentType: resume.type,
          },
        ],
      });

      console.log("✅ Career email sent to:", process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER);
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

    // Dynamic subject for Book Now vs Contact
    const subject = service
      ? `Appointment Request: ${service} - ${name}`
      : `Website Inquiry from ${name}`;

    const mailResult = await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject,
      html: `
        <h2>${service ? "New Appointment Request" : "New Website Inquiry"}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("✅ Email sent successfully to:", process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER);
    console.log("Message ID:", mailResult.messageId);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("❌ Mail Error:", {
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
