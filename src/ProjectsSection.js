import React from "react";
import { FaGithub, FaEye, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTypescript, SiSocketdotio, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Green Cycle",
    description:
      "Awebappto track & visualize AWS resource usage, obtaining data by assuming IAM Roles and other methods.",
    image: "/recyle.png",
    github:
      "https://id-preview--1880de14-a172-40e9-accb-6bd481d08785.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUXNvRzg4RkZ4TGh3RUpHUXdCWnAxYzR1RkV6MSIsInByb2plY3RfaWQiOiIxODgwZGUxNC1hMTcyLTQwZTktYWNjYi02YmQ0ODFkMDg3ODUiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6IjE4ODBkZTE0LWExNzItNDBlOS1hY2NiLTZiZDQ4MWQwODc4NSIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzIzOTA2NjAsIm5iZiI6MTc3MTc4NTg2MCwiaWF0IjoxNzcxNzg1ODYwfQ.Z8RXlBor5AcChJIXH6OpuKpmfY05d68cOpT-YkmNC2QC1QbGctyoGb3-ssu-qt0ksk5jU1KrEtT6ZxzmG7opAol0QXCTVit7SblstS6gLuExoa-C_z5n2n_iTnwepvU28y1OqceRW0R6W12-JwcyqVWq4a134vOMgQKl_tfilePFxNz7XjxxBvCDYDQZODgJVlSBHylDRYpLtmLZcvu8Z5Sf-c9esjpcRjfZ8uSe24b6BA_UOpiB5CV1K8MAT-JmgRM72jLQkE2yKNWPQlJr9YwIHA3N0i_GwOiiwwOCbpxt5EY6phx4AW2pVxOVe-EiIn6sC2omXBY86OiEBBWxMQZO270FaLbakhfSNDGNzVd2LXoWVSvBEBQZovI7oH9i67WDlu6nD0Psj_ktrlBEFm_hIltUvoI-jE4ucgCBzMatvtKmuWePQiCFyQJEIx4SCMk2czSk2cBvfkpCpjadjrg59WPAmBr1-yyjofwOqhCJvoPinx_uL-_1KOpOTuJnF68GSH4MHEHNKp4gQIWSlwpp0xVc97xiyTuda0H9AfUOtPc1wCmWKZMzdfLaQZpPonD4y5j8A9CJlNHNfIlPPpxGyNHJhlQGXxXFKVi74Nd_myoo9wuU3bTz8B4YM1jbxERX7wCKaDcr3hhY8AAhLILboVKe9UCl9anEhvB37gY",
    live: "https://id-preview--1880de14-a172-40e9-accb-6bd481d08785.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUXNvRzg4RkZ4TGh3RUpHUXdCWnAxYzR1RkV6MSIsInByb2plY3RfaWQiOiIxODgwZGUxNC1hMTcyLTQwZTktYWNjYi02YmQ0ODFkMDg3ODUiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6IjE4ODBkZTE0LWExNzItNDBlOS1hY2NiLTZiZDQ4MWQwODc4NSIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzIzOTA2NjAsIm5iZiI6MTc3MTc4NTg2MCwiaWF0IjoxNzcxNzg1ODYwfQ.Z8RXlBor5AcChJIXH6OpuKpmfY05d68cOpT-YkmNC2QC1QbGctyoGb3-ssu-qt0ksk5jU1KrEtT6ZxzmG7opAol0QXCTVit7SblstS6gLuExoa-C_z5n2n_iTnwepvU28y1OqceRW0R6W12-JwcyqVWq4a134vOMgQKl_tfilePFxNz7XjxxBvCDYDQZODgJVlSBHylDRYpLtmLZcvu8Z5Sf-c9esjpcRjfZ8uSe24b6BA_UOpiB5CV1K8MAT-JmgRM72jLQkE2yKNWPQlJr9YwIHA3N0i_GwOiiwwOCbpxt5EY6phx4AW2pVxOVe-EiIn6sC2omXBY86OiEBBWxMQZO270FaLbakhfSNDGNzVd2LXoWVSvBEBQZovI7oH9i67WDlu6nD0Psj_ktrlBEFm_hIltUvoI-jE4ucgCBzMatvtKmuWePQiCFyQJEIx4SCMk2czSk2cBvfkpCpjadjrg59WPAmBr1-yyjofwOqhCJvoPinx_uL-_1KOpOTuJnF68GSH4MHEHNKp4gQIWSlwpp0xVc97xiyTuda0H9AfUOtPc1wCmWKZMzdfLaQZpPonD4y5j8A9CJlNHNfIlPPpxGyNHJhlQGXxXFKVi74Nd_myoo9wuU3bTz8B4YM1jbxERX7wCKaDcr3hhY8AAhLILboVKe9UCl9anEhvB37gY",
    tech: [<FaReact />, <FaAws />, <SiTypescript />],
  },
  {
    id: 2,
    title: "Smart Hiring",
    description:
      "React application to explore and compare pricing for AWS Cloud EC2 compute instances and Real time and interactive visualization with rich filtration options.",
    image: "/smart hire.png",
    github:
      "https://id-preview--90021a24-d07f-41e3-a7b9-c3f05ce8e953.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUXNvRzg4RkZ4TGh3RUpHUXdCWnAxYzR1RkV6MSIsInByb2plY3RfaWQiOiI5MDAyMWEyNC1kMDdmLTQxZTMtYTdiOS1jM2YwNWNlOGU5NTMiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6IjkwMDIxYTI0LWQwN2YtNDFlMy1hN2I5LWMzZjA1Y2U4ZTk1MyIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzIzOTA5MjgsIm5iZiI6MTc3MTc4NjEyOCwiaWF0IjoxNzcxNzg2MTI4fQ.Udn_RoJCyPf2-HtjBSJHpyrRSFFNdojG4mrb3J1gc6vcSIj6JD1jVVoPBQ7bnt_R568T5LJrX8M4ba4Mo8KMBqSUCv_KvU2Y_1oB6ME9_qW1QRj8Tztr8sOXPOnVNvLILeY-r0ZgXLXJrOX476uYbfoCG8ayqblmUx8UjSkdl__avcyAXhiMrqgBZhAOMhlBVCwSW1fXZ-j4geDLlSUKgALE56yebpiGrBBwf9fTSsRdPHu4CYoIMHApp0OVtunJAVfKPMRPLFsMoz80xriK6uL56xTeaoXM8xreQb7_I3dDOVnFklfmezGllq1WvQ6Ims7I2lBSdmS94XSZOwTuP6Zq0EG_Cj4n3zr82zBsWg0plQOjardoJoCvknLfDy_fPITpOzQCTd3T5_6z-dapxI8-CreqRcixP7oxvyLcUgauNHq6g7YUOyGY1jJoL_i9eWPlDJrVZNpWyeMAeNy9wWPg8Dhgvm0LbtcI7OaL4IkxBJyqxp-F-a2ylEdprQ-v-vCN1eIeMxx6Cxv52z6XnjSWbncFyETwyJa5NTlM8UOykyC5_-dp5hnzDhfIx-ett-ICrvMDG8JQl6MaectjmaxgV0B30hSlFtc3EOp28BvTgss9mCxyMX6ujdx7sNZ89G8y9CSYv0um--9gmBsp1g4oB5WP8kwbAzwt2Ixnh8E",
    live: "https://id-preview--90021a24-d07f-41e3-a7b9-c3f05ce8e953.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUXNvRzg4RkZ4TGh3RUpHUXdCWnAxYzR1RkV6MSIsInByb2plY3RfaWQiOiI5MDAyMWEyNC1kMDdmLTQxZTMtYTdiOS1jM2YwNWNlOGU5NTMiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6IjkwMDIxYTI0LWQwN2YtNDFlMy1hN2I5LWMzZjA1Y2U4ZTk1MyIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzIzOTA5MjgsIm5iZiI6MTc3MTc4NjEyOCwiaWF0IjoxNzcxNzg2MTI4fQ.Udn_RoJCyPf2-HtjBSJHpyrRSFFNdojG4mrb3J1gc6vcSIj6JD1jVVoPBQ7bnt_R568T5LJrX8M4ba4Mo8KMBqSUCv_KvU2Y_1oB6ME9_qW1QRj8Tztr8sOXPOnVNvLILeY-r0ZgXLXJrOX476uYbfoCG8ayqblmUx8UjSkdl__avcyAXhiMrqgBZhAOMhlBVCwSW1fXZ-j4geDLlSUKgALE56yebpiGrBBwf9fTSsRdPHu4CYoIMHApp0OVtunJAVfKPMRPLFsMoz80xriK6uL56xTeaoXM8xreQb7_I3dDOVnFklfmezGllq1WvQ6Ims7I2lBSdmS94XSZOwTuP6Zq0EG_Cj4n3zr82zBsWg0plQOjardoJoCvknLfDy_fPITpOzQCTd3T5_6z-dapxI8-CreqRcixP7oxvyLcUgauNHq6g7YUOyGY1jJoL_i9eWPlDJrVZNpWyeMAeNy9wWPg8Dhgvm0LbtcI7OaL4IkxBJyqxp-F-a2ylEdprQ-v-vCN1eIeMxx6Cxv52z6XnjSWbncFyETwyJa5NTlM8UOykyC5_-dp5hnzDhfIx-ett-ICrvMDG8JQl6MaectjmaxgV0B30hSlFtc3EOp28BvTgss9mCxyMX6ujdx7sNZ89G8y9CSYv0um--9gmBsp1g4oB5WP8kwbAzwt2Ixnh8E",
    tech: [<FaReact />, <FaAws />],
  },
  {
    id: 3,
    title: "Talk App",
    description:
      "Talk App is a real-time messaging application that allows users to communicate with each other instantly. It is built using Socket.io for server communication.",
    image: "/iti.png",
    github: "https://lnkd.in/dq5ZvN8n",
    live: "https://lnkd.in/dq5ZvN8n",
    tech: [<FaReact />, <SiTypescript />, <FaNodeJs />, <SiSocketdotio />],
  },
  // {
  //   id: 4,
  //   title: "Maze Game",
  //   description:
  //     "This project is a maze game built using React.js. It utilizes a backtracking algorithm to generate the maze and A* (A-Star) search algorithm to find the path.",
  //   image: "/path-to-maze-img.png",
  //   github: "#",
  //   live: "#",
  //   tech: [<FaReact />, <SiTailwindcss />],
  // },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="section-title">
        PROJECTS
        <span className="underline"></span>
      </h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="proj-img-container">
              <img src={project.image} alt={project.title} />
              {/* Hover Overlay */}
              <div className="proj-overlay">
                <a
                  href={project.github}
                  className="overlay-icon github-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  className="overlay-icon live-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEye />
                </a>
              </div>
            </div>

            <div className="proj-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack-icons">
                {project.tech.map((icon, index) => (
                  <span key={index} className="tech-icon">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
