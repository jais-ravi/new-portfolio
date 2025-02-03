import transporter from "@/lib/nodemailer";


export default async function sendEmail(
  name: string,
  email: string,
  message: string
) {
  const emailHTML = `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f0f4f8; padding: 30px;">
        <div style="background-color: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1e3a8a; text-align: center;">📩 New Contact Form Submission</h2>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>✉️ Email:</strong> ${email}</p>
          <p><strong>💬 Message:</strong> ${message}</p>
        </div>
      </body>
    </html>
  `;


  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.RECIPIENT_EMAIL, 
    subject: `New Message from ${name}`,
    text: message, // Plain text version
    html: emailHTML, // HTML version generated with template literals
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: `Failed to send email: ${(error as Error).message}`,
    };
  }
}
