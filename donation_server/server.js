import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import bodyParser from 'body-parser';
import { stripeWebhookHandler } from './stripeWebhook.js';

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());

// Stripe requires raw body for webhook signature verification
app.post(
  '/api/stripe-webhook',
  bodyParser.raw({ type: 'application/json' }),
  stripeWebhookHandler
);

// Standard JSON middleware comes AFTER raw webhook route
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  const { amount, type } = req.body;
  console.log("💡 Received request to create Stripe session");
  console.log("Payload:", req.body);

  try {
    const quantity = Math.floor(Number(amount));
    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: "Invalid amount." });
    }

    const config = {
      payment_method_types: ['card'],
      mode: type === 'monthly' ? 'subscription' : 'payment',
      line_items: [
        {
          price: type === 'monthly'
            ? process.env.STRIPE_MONTHLY_PRICE_ID
            : process.env.STRIPE_ONE_OFF_ID,
          quantity,
        },
      ],
      success_url: `${process.env.FRONTEND_URL}/success?customer={CHECKOUT_SESSION:customer}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    };

    // Only apply customer_creation for one-time donations
    if (type !== 'monthly') {
      config.customer_creation = 'always';
    }

    const session = await stripe.checkout.sessions.create(config);

    res.json({ url: session.url });
  } catch (err) {
    console.error('🔥 Stripe error:', err.message);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(process.env.PORT || 4242, () => {
  console.log(`✅ Server running on port ${process.env.PORT || 4242}`);
});
