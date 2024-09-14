export const runtime = "nodejs"; // ensures Node.js runtime

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    let output = `
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <tr>
        <td style="padding: 20px; text-align: center;">
          <h1 style="font-size: 24px; color: #333;">Hello, ${name}</h1>
        </td>
      </tr>
      <tr>
        <td style="background-color: #fff; padding: 20px; border-radius: 8px;">
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Thank you for your message! We will get back to you soon.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Best regards,<br>
            <strong style="color: #333;">Kodee Team</strong>
          </p>
        </td>
      </tr>
    </table>
    `;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP2GO_HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP2GO_USER,
            pass: process.env.SMTP2GO_PASSWORD,
        },
    });

    try {
        // Send email to admin
        await transporter.sendMail({
            from: '"Kodee Contact" <hello@kodee.no>',
            to: "ab@kodee.no",
            subject: "New Message from Contact Form",
            text: `You have a new message from ${name} (${email}):\n\n${message}`,
        });

        // Send confirmation email to sender
        await transporter.sendMail({
            from: '"Kodee Support" <hello@kodee.no>',
            to: email,
            subject: "Confirmation: We received your message",
            html: output, // Use `html` instead of `text` for styled content
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Error sending email" },
            { status: 500 }
        );
    }
}
