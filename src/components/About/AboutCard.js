import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ikram</span>
            {" "}from <span className="purple">Salé, Morocco</span>.
            <br />
            I am a passionate <span className="purple">Full Stack Web Developer</span> with a background in 
            Mathematics and Computer Science.
            <br />
            I recently completed my Bachelor's degree at the <span className="purple">Faculty of Sciences, Rabat Agdal</span> (2024).
            <br />
            <br />
            I am deeply interested in emerging technologies, especially software development and artificial intelligence.
            <br />
            <br />
            Besides coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working on AI projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring web development tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new tech skills
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always looking to build innovative solutions and grow through challenges."
          </p>
          <footer className="blockquote-footer">Ikram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
