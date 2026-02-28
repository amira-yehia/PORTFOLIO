import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";
import { TbCircleChevronRight } from "react-icons/tb";
import "./index.css";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "I am Amira Yehia";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="hero" id="intro">
      <div className="hero-image">
        <img src="/me.png" alt="Ahmed Zedan" />
      </div>

      <div className="hero-content">
        <h2 className="welcome">Welcome,</h2>
        <h1 className="typing">
          {text}
          <span className="cursor">|</span>
        </h1>

        <ul className="roles">
          <li>
            <TbCircleChevronRight className="role-icon" />
            Senior Computer and Control Engineering Student-PSU
          </li>
          <li>
            <TbCircleChevronRight className="role-icon" /> Software Engineer
          </li>
          <li>
            <TbCircleChevronRight className="role-icon" /> React Front-End
            Developer
          </li>
          <li>
            <TbCircleChevronRight className="role-icon" /> Competitive
            Programmer
          </li>
        </ul>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/amira-yehia-9122b2252"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="#" className="icon gmail">
            <FaEnvelope />
          </a>
          <a href="#" className="icon whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/amira-yehia" className="icon github">
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/share/18HXVtPv9f/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon facebook"
          >
            <FaFacebook />
          </a>
        </div>

        <button className="download-btn">
          Download Resume <FaDownload className="btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
