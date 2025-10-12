import React from "react";
import "./Skills.css";

const Skills = () => {
  // Static skills array
  const skills = [
    { id: 1, title: "Design Tools", text: "Expert in tools like Adobe Photoshop, Illustrator, and Figma." },
    { id: 2, title: "UI/UX Design", text: "Proficient in creating user interfaces and experiences for web and mobile applications." },
    { id: 3, title: "Branding", text: "Skilled in creating strong, visually appealing brand identities." },
    { id: 4, title: "Typography", text: "Knowledge of typography principles for effective and aesthetically pleasing designs." },
    { id: 5, title: "Illustration", text: "Experienced in creating custom illustrations and vector art." },
    { id: 6, title: "Web Design", text: "Designing responsive and visually engaging websites." },
  ];

  return (
    <ul className="skillsWrap">
      {skills.map((skill) => (
        <li key={skill.id}>
          <h2>{skill.id.toString().padStart(2, "0")}</h2>
          <h3>{skill.title}</h3>
          <p>{skill.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
