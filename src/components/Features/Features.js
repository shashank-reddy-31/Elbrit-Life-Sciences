// src/components/Features/Features.js
import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-grid">
        <div className="feature-item">
          <i className="fas fa-rocket"></i>
          <h3>Fast</h3>
          <p>Experience lightning-fast performance with our optimized app.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-lock"></i>
          <h3>Secure</h3>
          <p>Rest easy knowing your data is protected with top-notch security.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-cogs"></i>
          <h3>Customizable</h3>
          <p>Tailor the app to suit your needs with our flexible settings.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
