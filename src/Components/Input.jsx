import React from "react";

export default function InputFiled({ handler, task }) {
  return (
    <>
      <input onChange={handler} defaultValue={task} type="text" required />
    </>
  );
}
