import React, { useState } from "react";
import './style.css';
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_wneylfx', 'template_iek1vxv', e.target, 'TKqwHvNVtP4Kkqv6w')
      .then((result) => {
        setStatus({ message: "Message sent successfully!", type: "success" });
        e.target.reset();  // Reset form after success
      }, (error) => {
        setStatus({ message: "There was an error, please try again.", type: "error" });
      });
  }

  return (
    <div className="Contact" id="contact">
      <h1>Don't be a stranger!👋</h1>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>

      <form onSubmit={sendEmail}>
        <div className="form-group">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
        </div>

        <div className="form-group">
          <button type="submit">SEND IT</button>
        </div>
      </form>

      {status && (
        <div className={`alert ${status.type === "success" ? "success-alert" : "error-alert"}`}>
          {status.message}
        </div>
      )}
    </div>
  );
}

export default Contact;
