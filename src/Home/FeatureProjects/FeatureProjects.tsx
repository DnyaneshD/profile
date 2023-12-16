import React from "react";
import { Badge } from "react-bootstrap";
import "./FeatureProjects.css";

const Project = () => {
  return (
    <div className="project">
      <div>Project details</div>
      <p>This is going to be some details</p>
      <a href="https://github.com/DnyaneshD/tictactoe-new">code</a>
      <div className="badges">
        <Badge bg="secondary">LinkedIn</Badge>
      </div>
    </div>
  );
};

export const FeatureProjects = () => {
  return (
    <div className="projects-list">
      <div className="title">Feature Projects 🤗</div>
      <Project />
      <Project />
      <Project />
    </div>
  );
};
