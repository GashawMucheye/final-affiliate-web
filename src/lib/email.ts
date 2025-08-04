import nodemailer from 'nodemailer';

export async function sendResetEmail(email: string, token: string) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'; // fallback just in case
  const resetUrl = `${baseUrl}/reset-password?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    to: email,
    from: process.env.EMAIL_SERVER_USER,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. This link will expire in 30 minutes.</p>`,
  });
}
