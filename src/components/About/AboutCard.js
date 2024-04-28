import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanisha Mahata </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently a student in VIT Vellore pursueing my Master's in Data Science.
            <br />
            I have completed my Under Graduation in Bsc Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Crocheting
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Tech Vlogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Working hard to whisper:
          "'Maybe this is it.', in that simple acknowledgment lies the possibility of something extraordinary." {" "}
          </p>
          <footer className="blockquote-footer">Tanisha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
