# Mount Perry RFS Donation System

A fully integrated, no-auth donation system built for the Mount Perry Rural Fire Service. Includes support for one-time and recurring donations using Stripe, with automated customer portal email delivery powered by Resend.

---

## 🔥 Features

- 💳 **One-time & monthly donations** via Stripe Checkout
- 🔐 **No-auth cancelation system** via secure email portal links
- ✉️ **Automated email delivery** with Resend integration
- 🌐 **Webhook-based backend** with Stripe event handling
- ⚙️ Built with **Node.js + Express**, **React + Vite**, and **Resend**
- 🧱 Modular structure for easy expansion and maintenance

---

## 🚀 Tech Stack

**Frontend:**
- React (Vite)
- Custom CSS
- Stripe Checkout (client-side session initiation)

**Backend:**
- Node.js / Express
- Stripe SDK
- Resend SDK
- Webhook handling
- Modular file structure

---

## 📁 Project Structure

```
mount-perry-rfs/
├── frontend/              # React app (Vite)
├── donation_server/       # Node.js backend (Stripe + Resend)
│   ├── server.js
│   ├── stripeWebhook.js
│   ├── sendEmail.js
│   └── .env.example
└── README.md
```

---

## ⚙️ Getting Started (Local Dev)

### 1. Clone the repo

```bash
git clone https://github.com/Fern-Gully/mount-perry-rfs.git
cd mount-perry-rfs
```

### 2. Install dependencies

```bash
cd frontend
npm install
cd ../donation_server
npm install
```

### 3. Set up environment variables

Create `.env` in `donation_server/` using this template:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_ONE_OFF_ID=price_...
STRIPE_MONTHLY_PRICE_ID=price_...
FRONTEND_URL=http://localhost:5173
RESEND_API_KEY=re_...
EMAIL_SENDER=onboarding@resend.dev
```

> ✅ For local dev, use `onboarding@resend.dev` to avoid needing domain verification.

### 4. Start the dev servers

**Backend:**
```bash
cd donation_server
node server.js
```

**Frontend:**
```bash
cd frontend
npm run dev
```

### 5. Connect Stripe CLI

```bash
stripe login
stripe listen --forward-to localhost:4242/api/stripe-webhook
```

Now complete a test donation and receive a customer portal link via email.

---

## 🛠 Deployment

### Frontend
- Deploy to [Vercel](https://vercel.com/)
- Set `VITE_API_URL` in the Vercel environment variables

### Backend
- Deploy to [Railway](https://railway.app/)
- Add all backend `.env` variables in the Railway project settings
- Make sure `/api/stripe-webhook` is publicly accessible
- Update Stripe Webhook URL in dashboard

### Resend
- Add `mountperryrfs.org` as a verified domain (optional for production)
- Use `onboarding@resend.dev` for test environments

---

## 📦 Future Improvements

- ✅ Email receipt on one-time donations
- 📝 Admin donation logs & dashboard
- 🌐 Public supporter wall
- 📊 Analytics & success tracking

---

## 🧑‍🚒 Built For:

**Mount Perry Rural Fire Service**
> Supporting our local volunteer firies with scalable, no-fuss tech.

---

## 🤘 Author

**@Fern-Gully**  
Developer | Automation Enthusiast | Builder of useful things

[github.com/Fern-Gully](https://github.com/Fern-Gully)

---

## 🪪 License

MIT

