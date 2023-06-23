import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import InputFiled from "./Input";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/taskSlice";

export default function UpdateModal({ taskId, taskName }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(null);
  const [err, setErr] = useState(null);

  const handleClose = () => {
    setShow(false);
    setErr(null);
  };
  const handleShow = () => setShow(true);

  const handler = (e) => {
    setUpdate(() => e.target.value);
  };
  const updateHandler = (e) => {
    e.preventDefault();
    const updatedTask = {
      editedTask: update,
      id: taskId,
    };

    if (update) {
      dispatch(editTask(updatedTask));
      setShow(false);
      setUpdate(null);
      setErr(null);
    } else {
      setErr(
        "The task name can't be empty or if you don't have any update then please close."
      );
    }
  };
  return (
    <>
      <box-icon onClick={handleShow} type="solid" name="edit"></box-icon>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <InputFiled task={taskName} handler={handler} />
            {err ? (
              <div className="alert alert-warning" role="alert">
                {err}
              </div>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" onClick={updateHandler} variant="primary">
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
