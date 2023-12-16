import "./Home.css";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FeatureProjects } from "./FeatureProjects/FeatureProjects";
import profilePic from "../assests/profilePic.jpeg";

function ProfileImage() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <img className="pofile-pic" src={profilePic} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

function VariationsExample() {
  return (
    <Stack direction="horizontal" gap={2}>
      <a
        href="https://github.com/DnyaneshD?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <Badge bg="secondary">Github</Badge>
      </a>
      <a
        href="https://www.linkedin.com/in/dnyaneshdeshpande1/"
        target="_blank"
        rel="noreferrer"
      >
        <Badge bg="primary">LinkedIn</Badge>{" "}
      </a>
      <a
        href="https://github.com/DnyaneshD?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <Badge bg="danger">Youtube</Badge>
      </a>
    </Stack>
  );
}

export const Home = () => {
  return (
    <div className="home">
      <div className="flex">
        <div>{ProfileImage()}</div>
        <div className="flex-col">
          <div> Hi This is Dnyanesh Deshpande.</div>
          <p>This is some text depending on the view</p>
          <div> Some react </div>
          <div>{VariationsExample()}</div>
        </div>
      </div>
      <FeatureProjects />
    </div>
  );
};
