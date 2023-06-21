import React from "react";

export default function Button1({ handler }) {
  return (
    <>
      <button onClick={handler} type="button">
        Add
      </button>
    </>
  );
}
