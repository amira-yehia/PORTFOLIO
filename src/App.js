import { useEffect, useState } from "react";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import HeroSection from "./Hero";
import AnimatedBackground from "./animation";
import "./index.css";
function App() {
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
    <div className="app">
      <div className="background"></div>
      <AnimatedBackground />
      {/* Sidebar */}
      <Sidebar />

      {/* Hero Section */}
      <HeroSection />
      <section className="about-section" id="about">
        <h1 className="section-title">
          About Me
          <span className="underline"></span>
        </h1>

        {/* SUMMARY */}
        <div className="about-block">
          <h2 className="block-title">❯ SUMMARY</h2>
          <p className="summary-text">
            Computer and Control Engineering student at Port Said University
            (Expected Graduation: 2026). React Front-End Developer with strong
            experience in competitive programming, including participation as a
            1-time ECPC Finalist. Skilled in modern front-end technologies such
            as React.js, with a passion for building responsive, user-friendly,
            and high-performance web applications.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="about-block">
          <h2 className="block-title">❯ EDUCATION</h2>

          <div className="education-item">
            <div className="edu-header">
              <h3>Port Said University</h3>
              <span>Sep 2021 – July 2026</span>
            </div>

            <p className="degree">
              Bachelor of Engineering in Computer and Control Engineering
            </p>

            {/* <ul>
              <li>
                Grade : <span className="highlight">Very Good with Honor</span>
              </li>
              <li>
                Achieved an <span className="highlight">"Excellent"</span> grade
                for the Graduation Project –
                <span className="highlight"> Cloud Tracker</span>
              </li>
            </ul> */}
          </div>
        </div>

        {/* WORK */}
        {/* <div className="about-block">
          <h2 className="block-title">❯ WORK</h2>

          <div className="education-item">
            <div className="edu-header">
              <h3>Coach Academy</h3>
              <span>Aug 2024 – Present</span>
            </div>

            <p className="degree">Problem Solving Instructor (Part Time)</p>

            <ul>
              <li>
                Sessions explain fundamental programming concepts and problem
                solving topics.
              </li>
              <li>
                Coached students in mastering fundamental programming concepts,
                including algorithms and data structures.
              </li>
            </ul>
          </div>
        </div> */}

        {/* VOLUNTEERING */}
        <div className="about-block">
          <h2 className="block-title">❯ VOLUNTEERING</h2>

          <div className="education-item">
            <div className="edu-header">
              <h3>ICPC Port Said Community</h3>
              <span>Feb 2024 – Jul 2026</span>
            </div>

            <p className="degree">Problem Setter</p>

            <ul>
              <li>
                Coached students in mastering fundamental programming concepts,
                including algorithms and data structures.
              </li>
              <li>
                Created, tested, and validated competitive programming problems
                to enhance students’ analytical and problem-solving skills.
              </li>
              <li>
                Designed contest problem sets and ensured clarity, difficulty
                balance, and correctness of test data.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
