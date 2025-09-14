// // pages/api/send-email.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { name, email, subject, message } = req.body;

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL, // Set EMAIL=mollahnasir329@gmail.com in .env.local
//       pass: process.env.APP_PASS, // Set APP_PASS=xxhl hkql plpp lfkp in .env.local (use app password)
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: process.env.EMAIL, // Send to your own email
//       subject: `Contact Form: ${subject}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Subject: ${subject}
//         Message: ${message}
//       `,
//     });
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Error sending email' });
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #0a0a0f; color: #ffffff; font-family: Arial, Helvetica, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background-color: #1a1a2e; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1);">
        <tr>
          <td style="background: linear-gradient(to right, #00d4ff, #0099cc); padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #ffffff; font-weight: bold;">New Contact Form Submission</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 30px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom: 20px;">
                  <h2 style="margin: 0 0 10px; font-size: 20px; color: #00d4ff;">Submission Details</h2>
                  <p style="margin: 0; color: #ededed; font-size: 16px; line-height: 1.5;">You have received a new message from your website's contact form.</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 15px;">
                  <strong style="color: #00d4ff; font-size: 16px;">Name:</strong>
                  <p style="margin: 5px 0; color: #ededed; font-size: 16px;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 15px;">
                  <strong style="color: #00d4ff; font-size: 16px;">Email:</strong>
                  <p style="margin: 5px 0; color: #ededed; font-size: 16px;">${email}</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 15px;">
                  <strong style="color: #00d4ff; font-size: 16px;">Subject:</strong>
                  <p style="margin: 5px 0; color: #ededed; font-size: 16px;">${subject}</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 15px;">
                  <strong style="color: #00d4ff; font-size: 16px;">Message:</strong>
                  <p style="margin: 5px 0; color: #ededed; font-size: 16px; line-height: 1.6;">${message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background-color: #0a0a0f; padding: 20px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
            <p style="margin: 0; color: #ededed; font-size: 14px;">Sent from <a href="https://yourwebsite.com" style="color: #00d4ff; text-decoration: none;">UX AURA</a></p>
            <p style="margin: 5px 0 0; color: #999999; font-size: 12px;">© 2025 Rakibul Hasan Khan. All rights reserved.</p>
          </td>
        </tr>
      </table>
      <style>
        @media only screen and (max-width: 600px) {
          table {
            width: 100% !important;
            margin: 20px auto !important;
          }
          td {
            padding: 15px !important;
          }
          h1 {
            font-size: 20px !important;
          }
          h2 {
            font-size: 18px !important;
          }
          p, strong {
            font-size: 14px !important;
          }
        }
      </style>
    </body>
    </html>
  `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // in .env.local
        pass: process.env.APP_PASS, // Gmail app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: "rakibulhasannehad2025@gmail.com",
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: htmlTemplate,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
