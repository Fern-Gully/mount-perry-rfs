// src/pages/ThankYou.jsx

import React from "react";
import "../styles/thankyou.css"; 

const ThankYou = () => {
  return (
    <section className="thank-you">
      <div className="thank-you-container">
        <h1>Thank You for Supporting Mount Perry RFS</h1>
        <p>
          Your donation helps us stay equipped, trained, and ready to protect our community.
          Every dollar goes toward gear, vehicles, and volunteer support.
        </p>
        <p>
          On behalf of our crew and the Mount Perry community — thank you for standing with us.
        </p>

        <a href="/" className="back-home-btn">
          Return to Home
        </a>
      </div>
    </section>
  );
};

export default ThankYou;
