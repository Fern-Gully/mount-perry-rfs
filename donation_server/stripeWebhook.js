import Stripe from 'stripe';
import { sendManageDonationEmail } from './sendEmail.js';
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export function stripeWebhookHandler(req, res) {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log("🔔 Webhook event received:", event.type);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerId = session.customer;
    const email = session.customer_details?.email;

    console.log("🧾 Session mode:", session.mode);
    console.log("📧 Email:", email);
    console.log("👤 Customer ID:", customerId);

    if (session.mode === 'subscription' && customerId && email) {
      stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: process.env.FRONTEND_URL,
      })
        .then((portalSession) => {
          console.log("✅ Portal session created:", portalSession.url);
          sendManageDonationEmail(email, portalSession.url);
        })
        .catch((err) => {
          console.error('❌ Failed to create portal session:', err.message);
        });
    } else {
      console.warn('⚠️ Missing customer ID or email in session.');
    }
  } else {
    console.log(`ℹ️ Ignoring event type: ${event.type}`);
  }

  res.status(200).send('Webhook received');
}
