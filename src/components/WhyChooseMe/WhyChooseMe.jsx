import React from "react";
import "./WhyChooseMe.css";

const WhyChooseMe = () => {
  const reasons = [
    { 
      id: 1, 
      title: "Creative & Strategic", 
      text: "I combine artistic creativity with a strategic approach to deliver impactful visual solutions." 
    },
    { 
      id: 2, 
      title: "Attention to Detail", 
      text: "Every project is crafted carefully with precision, consistency, and purpose." 
    },
    { 
      id: 3, 
      title: "Reliable & Adaptive", 
      text: "I’m committed to deadlines, open to feedback, and quick to adapt to new challenges." 
    },
  ];

  return (
    <section className="whyWrap" id="why-me">
      <h1 className="whyTitle">Why Choose Me</h1>
      <ul className="tilesWrap">
        {reasons.map((reason) => (
          <li key={reason.id}>
            <h2>{reason.id.toString().padStart(2, "0")}</h2>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseMe;
