import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import HeroSection from "./Hero";
import AnimatedBackground from "./animation";
import "./index.css";

function App() {
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
          </div>
        </div>

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
