import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Button1 from "./Components/Button";
import Header from "./Components/Header";
import InputFiled from "./Components/Input";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { addTask } from "./Redux/taskSlice";

function App() {
  const dispatch = useDispatch();
  const [task, setTask] = useState();
  const onchangeHandler = (e) => setTask(() => e.target.value);

  const handlerButton = () => {
    dispatch(addTask(task));
  };

  const tasks = useSelector((store) => store.task.tasks);
  // console.log(tasks);
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
            <InputFiled handler={onchangeHandler} />
            <Button1 handler={handlerButton} />
          </Col>

          <Col></Col>
        </Row>
        <Row>
          <Col></Col>

          <Col
            lg={5}
            xs={8}
            className="d-flex justify-content-center align-items-center"
          >
            <h1>{tasks[0]}</h1>
            <h1>{tasks[1]} </h1>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
