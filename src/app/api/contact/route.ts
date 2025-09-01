import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const accessKey = process.env.AWS_SES_ACCESS_KEY_ID;
const secretKey = process.env.AWS_SES_SECRET_ACCESS_KEY;

const sesClient = new SESv2Client({
  region: "eu-west-3",
  credentials: {
    accessKeyId: `${accessKey}`,
    secretAccessKey: `${secretKey}`,
  },
});

export const transporter = nodemailer.createTransport({
  SES: { sesClient, SendEmailCommand },
});

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();
    let { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Sanitize inputs (simple but effective)
    name = name.trim().replace(/[<>\"'&]/g, '').substring(0, 100);
    email = email.trim().toLowerCase().substring(0, 254); // Max email length
    subject = subject.trim().replace(/[<>\"'&]/g, '').substring(0, 200);
    message = message.trim().replace(/[<>]/g, '').substring(0, 5000);

    // Validate sanitized inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Invalid input data provided' },
        { status: 400 }
      );
    }

    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length < 3) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Basic spam detection
    const spamPatterns = [
      /(.)\1{10,}/, // Repeated characters
      /https?:\/\/[^\s]+\.(tk|ml|ga|cf)/i, // Suspicious domains
      /\b(viagra|cialis|casino|lottery|winner|pharmacy)\b/i, // Spam keywords
    ];

    const fullText = `${name} ${subject} ${message}`.toLowerCase();
    if (spamPatterns.some(pattern => pattern.test(fullText))) {
      return NextResponse.json(
        { message: 'Message appears to contain spam content' },
        { status: 400 }
      );
    }

    

    // Create email content
    const emailContent = `
New contact form submission from TREX website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from the TREX contact form.
Reply to this email to respond directly to the sender.
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission - TREX</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #023531 0%, #5FB845 100%); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    <p style="color: #5FB845; margin: 5px 0 0 0; font-weight: bold;">TREX Clipboard Manager</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #5FB845;">
    <h2 style="margin-top: 0; color: #023531;">Contact Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #5FB845;">${email}</a></p>
    <p><strong>Subject:</strong> ${subject}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #023531;">Message:</h3>
    <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e9ecef;">
      ${message.replace(/\n/g, '<br>')}
    </div>
  </div>
  
  <div style="margin-top: 30px; padding: 15px; background: #e8f5e8; border-radius: 8px; font-size: 14px; color: #666;">
    <p style="margin: 0;"><strong>Note:</strong> This message was sent from the TREX contact form. Reply to this email to respond directly to the sender.</p>
  </div>
</body>
</html>
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"TREX Contact Form" <noreply@deanstavenuiter.nl>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `[TREX Contact] ${subject}`,
      text: emailContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
