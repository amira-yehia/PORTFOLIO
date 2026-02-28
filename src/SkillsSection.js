import CircularProgress from "./CircularProgress";
import "./index.css";

const skillData = [
  {
    category: "PROGRAMMING LANGUAGE",
    skills: [
      { label: "HTML", percentage: 95 },
      { label: "CSS", percentage: 95 },
      { label: "JavaScript", percentage: 90 },
      { label: "C++", percentage: 95 },
      { label: "Java", percentage: 50 },
      { label: "Python", percentage: 80 },
      { label: "SQL", percentage: 50 },
    ],
  },
  {
    category: "TOOLS AND CONCEPTS",
    skills: [
      { label: "GitHub", percentage: 95 },
      { label: "Figma", percentage: 80 },
      { label: "Object Oriented Programming", percentage: 90 },
      { label: "Data Structures", percentage: 90 },
      { label: "Algorithms", percentage: 90 },
      // { label: "Design Patterns", percentage: 70 },
      { label: "System Design", percentage: 60 },
      { label: "Problem Solving", percentage: 80 },
      { label: "Competitive Programming", percentage: 80 },
      { label: "Trello", percentage: 70 },
    ],
  },
  {
    category: "FRAMEWORKS",
    skills: [
      { label: "React JS", percentage: 95 },
      // { label: "Next JS", percentage: 50 },
      { label: "Tail Wind", percentage: 95 },
      // { label: "Styled Component", percentage: 95 },
      { label: "Bootstrap", percentage: 80 },
    ],
  },
  {
    category: "OPERATING SYSTEM",
    skills: [
      { label: "Windows", percentage: 95 },
      { label: "Linux", percentage: 50 },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <h1 className="main-title">SKILL</h1>

      {skillData.map((group, groupIndex) => (
        <div key={groupIndex} className="skill-category-container">
          <h2 className="category-title">
            <span className="Icon">{"</>"}</span> {group.category}
          </h2>

          <div className="skills-grid">
            {group.skills.map((skill, index) => (
              <CircularProgress
                key={index}
                percentage={skill.percentage}
                label={skill.label}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default SkillsSection;
