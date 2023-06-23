import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import InputFiled from "./Input";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/taskSlice";

export default function UpdateModal({ taskId, taskName }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handler = (e) => {
    setUpdate(() => e.target.value);
  };
  const updateHandler = () => {
    const updatedTask = {
      editedTask: update,
      id: taskId,
    };
    dispatch(editTask(updatedTask));
    setShow(false)
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
        <Modal.Body>
          <InputFiled task={taskName} handler={handler} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={updateHandler} variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
