import "./App.css";
import Button1 from "./Components/Button";
import Header from "./Components/Header";
import InputFiled from "./Components/Input";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid="true">
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col></Col>

          <Col
            lg={5}
            xs={8}
            className="d-flex justify-content-center align-items-center"
          >
            <InputFiled />
            <Button1 />
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
