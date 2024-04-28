import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import groffice from "../../Assets/Projects/groffice.png"
import newsapp from "../../Assets/Projects/newsapp.png"
import wheatherapp2 from "../../Assets/Projects/wheatherapp2.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groffice}
              isBlog={false}
              title="Grooffice"
              description="Official Chat app for institutes and organisations, helped in organizing groups made it using React JS, Firebase, Material UI. Have features of making subgroups under main group, upload documents."
              ghLink="https://github.com/mahatatanisha/groffice1"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="NewsMonkey"
              description="News App fetching all the latest news and organising them according to their categories , made it using React JS"
              ghLink="https://github.com/mahatatanisha/newsapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wheatherapp2}
              isBlog={false}
              title="WheatherApp"
              description="A simple Wheather app made usingReact JS , both System and Mobile friendly"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Research Paper on Rice Leaf disease detection using CNN"
              description="Our research proposes using Convolutional Neural 
              Networks (CNNs) to automatically detect these issues in 
              rice leaves. We utilize transfer learning with pre-trained 
              CNN models, followed by data preprocessing, model 
              design, and training. We evaluate the system using 
              metrics like accuracy, precision, recall, and F1-score. Our 
              work results in an automated tool to aid farmers in 
              identifying rice crop issues promptly, improving 
              management and global food security."
              ghLink="https://drive.google.com/file/d/1Hi4si5nRzpKEBmAGzRogd4ilg1prLRAq/view?usp=drive_link"
              
            />
          </Col>

          
          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
