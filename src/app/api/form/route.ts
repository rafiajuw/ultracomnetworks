// src/app/api/form/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import formidable, { File as FormidableFile } from "formidable";
import fs from "fs";
import nodemailer from "nodemailer";

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "mail.ultracomnetworks.pk",
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: true,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  tls: { rejectUnauthorized: false },
});

// Disable Next.js default body parsing
export const config = { api: { bodyParser: false } };

// Helper to safely get string fields
const getField = (field: string | string[] | undefined) => Array.isArray(field) ? field[0] : field || "";

// Parse formidable form from Web Request
async function parseForm(req: NextRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const buf = Buffer.from(await req.arrayBuffer());
  const form = formidable({ keepExtensions: true });
  return new Promise((resolve, reject) => {
    form.parse(buf as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      // ==== CAREER FORM ====
      const { fields, files } = await parseForm(req);

      const name = getField(fields.name);
      const email = getField(fields.email);
      const phone = getField(fields.phone);
      const position = getField(fields.position);
      const message = getField(fields.message);
      const resumeFile = files.resume as FormidableFile | undefined;

      if (!name || !email || !message || !resumeFile) {
        return NextResponse.json({ error: "Name, email, message, and resume are required." }, { status: 400 });
      }

      const fileContent = fs.readFileSync(resumeFile.filepath);

      await transporter.sendMail({
        from: `"Ultracom Careers" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Career Application from ${name} - ${position || "General"}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nPosition: ${position || "N/A"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:12px; background:#f9f9f9;">
            <h2 style="color:#1e40af;">New Career Application</h2>
            <ul style="list-style:none; padding:0;">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
              <li><strong>Phone:</strong> ${phone || "Not Provided"}</li>
              <li><strong>Position:</strong> ${position || "Not Provided"}</li>
            </ul>
            <h3 style="color:#1e40af; margin-top:20px;">Message:</h3>
            <div style="background:#ffffff; padding:16px; border-radius:8px; border-left:5px solid #3b82f6; font-size:15px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            <p style="margin-top:20px; color:#6b7280; font-size:12px;">
              Sent from Ultracom Careers page • ${new Date().toLocaleString()}
            </p>
          </div>
        `,
        attachments: [
          {
            filename: resumeFile.originalFilename || "resume.pdf",
            content: fileContent,
          },
        ],
      });

      return NextResponse.json({ message: "Career application submitted successfully!" }, { status: 200 });
    } else {
      // ==== CONTACT FORM ====
      const body = await req.json();
      const { name, company, email, phone, message } = body;

      if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
      }

      await transporter.sendMail({
        from: `"Ultracom Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Inquiry from ${name} - Ultracom Networks`,
        text: `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:12px; background:#f9f9f9;">
            <h2 style="color:#1e40af;">New Contact Form Submission</h2>
            <ul style="list-style:none; padding:0;">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Company:</strong> ${company || "Not provided"}</li>
              <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
              <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
            </ul>
            <h3 style="color:#1e40af; margin-top:20px;">Message:</h3>
            <div style="background:#ffffff; padding:16px; border-radius:8px; border-left:5px solid #3b82f6; font-size:15px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            <p style="margin-top:20px; color:#6b7280; font-size:12px;">
              Sent from Ultracom Contact page • ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      });

      return NextResponse.json({ message: "Contact form submitted successfully!" }, { status: 200 });
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ error: "Failed to submit form. Please try again later." }, { status: 500 });
  }
}
