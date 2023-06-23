import React from "react";
import style from "./Input.module.css";

export default function InputFiled({ handler, task }) {
  return (
    <>
      <input
        className={style.taskName}
        name="in"
        onChange={handler}
        defaultValue={task}
        type="text"
        required="true"
        placeholder="Enter task"
      />
    </>
  );
}
