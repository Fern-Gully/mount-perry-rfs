import React, { useState } from "react";
import '../styles/donation.css';

const DonationOptions = () => {
  const [type, setType] = useState("once");
  const [amount, setAmount] = useState("");

  const handleDonate = async () => {
    if (!amount || amount < 1) {
      alert("Please enter a valid donation amount.");
      return;
    }
  
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, type }),
      });
  
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Stripe session error:", data);
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating Stripe session.");
    }
  };
  
  
  const presetAmounts = [10, 25, 50, 100];

  return (
    <section id="donate" className="donation-section">
      <div className="donation-container">
        <h2>Choose Your Donation Type</h2>

        {/* Toggle Buttons */}
        <div className="donation-toggle">
          <button
            onClick={() => setType("once")}
            className={type === "once" ? "active" : ""}
          >
            One-Time
          </button>
          <button
            onClick={() => setType("monthly")}
            className={type === "monthly" ? "active" : ""}
          >
            Monthly
          </button>
        </div>

        {/* Preset Amount Buttons */}
        <div className="donation-amounts">
          {presetAmounts.map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value)}
              className={amount == value ? "selected" : ""}
            >
              ${value}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="donation-input">
          <input
            type="number"
            placeholder="Enter custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
          />
        </div>

        {/* Final CTA Button */}
        <button className="donation-cta" onClick={handleDonate}>
          Continue to Payment
        </button>
      </div>
    </section>
  );
};

export default DonationOptions;
