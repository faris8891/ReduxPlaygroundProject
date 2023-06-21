import React from "react";

export default function InputFiled({handler}) {
  return (
    <>
      <input onChange={handler} type="text" required/>
    </>
  );
}
