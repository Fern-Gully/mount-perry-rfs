// sendEmail.js
import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends donation portal link via Resend
 * @param {string} to - Recipient's email
 * @param {string} portalUrl - Stripe portal link
 */
export async function sendManageDonationEmail(to, portalUrl) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_SENDER,
      to,
      subject: 'Manage Your Monthly Donation – Mount Perry RFS',
      html: `
        <p>Thank you for supporting Mount Perry RFS!</p>
        <p>You can manage or cancel your donation using the secure link below:</p>
        <p><a href="${portalUrl}">${portalUrl}</a></p>
      `,
    });

    if (error) throw error;
    console.log(`✅ Email sent to ${to}`);
  } catch (err) {
    console.error('❌ Failed to send email via Resend:', err.message || err);
  }
}
