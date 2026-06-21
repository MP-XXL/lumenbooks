import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  try {
    const { name,email, message } = await req.json()

    const mailData = {
      from: `${email}`,
      to: process.env.GMAIL_USER,
      subject: `New feedback from ${name}`,
      text: `${message}`,
      html: `<p>${message}</p>`,
    };

     const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS
      }
    });

    await transport.sendMail(mailData, (error: any, info: any) => {
      if (error) console.log(error);
      console.log(`Message sent: ${info.messageId}`);
    });

    return NextResponse.json({ ok: true, message: 'Email sent successfully' })
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }
}
