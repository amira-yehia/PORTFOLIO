import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "./index.css";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Message sent!");
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="section-title">
        Contact
        <span className="underline"></span>
      </h1>

      <div className="contact-container">
        {/* Social Icons Column */}
        <div className="contact-socials">
          <a
            href="https://www.facebook.com/share/18HXVtPv9f/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-box facebook"
          >
            <FaFacebookF />
          </a>
          <a href="#" className="social-box instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-box whatsapp">
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/amira-yehia-9122b2252"
            target="_blank"
            rel="noopener noreferrer"
            className="social-box linkedin"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/amira-yehia"
            className="social-box github"
          >
            <FaGithub />
          </a>
        </div>

        {/* Form Column */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            required
          />
          <textarea
            placeholder="Message"
            className="form-input form-textarea"
            rows="8"
            required
          ></textarea>
          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
