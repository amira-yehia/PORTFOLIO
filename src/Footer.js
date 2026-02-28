import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAngleDoubleRight,
  FaArrowUp,
} from "react-icons/fa";
import "./index.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <h2 className="footer-logo">Amira Yehia</h2>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/share/18HXVtPv9f/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-box facebook"
            >
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/amira_ye7ia?igsh=eGppbmltYmZydWt0">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+201278513843">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/amira-yehia-9122b2252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="footer-quote">
            "Unlocking innovation through stellar front-end development. Ready
            to elevate your team's success."
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links">
          <ul>
            <li>
              <a href="#intro">
                <FaAngleDoubleRight className="link-icon" /> Intro
              </a>
            </li>
            <li>
              <a href="#skills">
                <FaAngleDoubleRight className="link-icon" /> Skills
              </a>
            </li>
            <li>
              <a href="#projects">
                <FaAngleDoubleRight className="link-icon" /> Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaAngleDoubleRight className="link-icon" /> Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Egypt, Portsaid</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div className="phone-numbers">
              <span>01278513843</span>
              <span>01278513843</span>
            </div>
          </div>
        </div>

        {/* Illustration Column */}
        <div className="footer-image">
          <img
            src="/path-to-your-illustration.png"
            alt="Developer Illustration"
          />
        </div>
      </div>

      {/* Scroll to Top Button  */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
