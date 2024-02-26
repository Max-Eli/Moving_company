import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 465, // Port for SSL
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmailWithLeadInfo(leadData) {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.MY_EMAIL_ADDRESS,
    subject: "New Lead Received",
    text: `New lead received!\nName: ${leadData.Name}\nEmail: ${leadData.Email}\nPhone: ${leadData.Phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully.");
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
}

export { sendEmailWithLeadInfo };
