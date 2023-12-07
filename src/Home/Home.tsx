import "./Home.css";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProfileImg from "../assests/ProfileImage";
import { FeatureProjects } from "./FeatureProjects/FeatureProjects";

function ProfileImage() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <ProfileImg />
        </Col>
      </Row>
    </Container>
  );
}

function VariationsExample() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg="primary">Github</Badge>
      <Badge bg="secondary">LinkedIn</Badge>
      <Badge bg="success">Youtube</Badge>
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
