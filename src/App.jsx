import { useDispatch} from "react-redux";
import "./App.css";
import Button1 from "./Components/Button";
import Header from "./Components/Header";
import InputFiled from "./Components/Input";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { addTask, removeTask, completeTask } from "./Redux/taskSlice";
import TaskCard from "./Components/TaskCard";
import "boxicons";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const [task, setTask] = useState();
  const onchangeHandler = (e) => setTask(() => e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      complete: false,
    };
    dispatch(addTask(newTask));
    e.target.in.value = "";
  };

  const taskHandler = (action, id) => {
    switch (action) {
      case "removeTask":
        dispatch(removeTask(id));
        break;
      case "completeTask":
        dispatch(completeTask(id));
        break;

      default:
        break;
    }
  };
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
            <Form onSubmit={handleSubmit}>
              <InputFiled handler={onchangeHandler} />
              <Button1 />
            </Form>
          </Col>

          <Col></Col>
        </Row>
        <Row>
          <Col></Col>

          <Col lg={5} xs={8}>
            <TaskCard taskHandler={taskHandler} />
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
