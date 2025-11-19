// src/app/api/contact/route.ts
export const runtime = "nodejs"; // ✅ درست value for nodemailer

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "mail.ultracomnetworks.pk",
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Ultracom Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name} - Ultracom Networks`,
      text: `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 12px; background: #f9f9f9;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;">
          <ul style="list-style: none; padding: 0;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Company:</strong> ${company || "Not provided"}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
          </ul>
          <h3 style="color: #1e40af; margin-top: 20px;">Message:</h3>
          <div style="background:#ffffff; padding: 16px; border-radius: 8px; border-left: 5px solid #3b82f6; font-size: 15px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
            Sent from Ultracom Networks website • ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully! Thank you for choosing us." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Nodemailer Error:", error);

    const err = error as { code?: string };
    if (err.code === "EAUTH") {
      return NextResponse.json(
        { error: "Email authentication failed. Check credentials." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
