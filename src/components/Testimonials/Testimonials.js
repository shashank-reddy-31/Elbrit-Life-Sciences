// src/components/Testimonials/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-item">
        <p>"This app has changed the way I manage my tasks. It's incredibly efficient!"</p>
        <h4>- Jane Doe</h4>
      </div>
      <div className="testimonial-item">
        <p>"The customization options are fantastic. Highly recommended!"</p>
        <h4>- John Smith</h4>
      </div>
      <div className="testimonial-item">
        <p>"A secure and fast app that meets all my needs. Great job!"</p>
        <h4>- Emily Johnson</h4>
      </div>
    </section>
  );
}

export default Testimonials;
