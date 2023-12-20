import React from "react";
import { Badge } from "react-bootstrap";
import "./FeatureProjects.css";

const Project = () => {
  return (
    <div className="project">
      <div>TicTacToe</div>
      <p>Play TicTacToe game online with 2 players with CI and CD</p>
      <a
        href="https://github.com/DnyaneshD/tictactoe-new"
        className="githubLink"
      >
        Github
      </a>{" "}
      <a
        href="http://tittactoe-new-1.s3-website.eu-central-1.amazonaws.com/"
        className="deployedLink"
      >
        Play online
      </a>
      <div className="badges">
        <Badge bg="secondary">React</Badge>
        <Badge bg="secondary">Jest</Badge>
        <Badge bg="secondary">Cypress</Badge>
        <Badge bg="secondary">CI</Badge>
        <Badge bg="secondary">CD</Badge>
      </div>
    </div>
  );
};

export const FeatureProjects = () => {
  return (
    <div className="projects-list">
      <div className="title">Feature Projects 🤗</div>
      <Project />
      {/* <Project />
      <Project /> */}
    </div>
  );
};
