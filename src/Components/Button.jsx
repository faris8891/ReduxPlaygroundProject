import React from "react";
import styles from "./Button.module.css";

export default function Button1({ handler, btnName, bg_color }) {
  return (
    <>
      <button
        style={{ backgroundColor: `${bg_color}` }}
        className={styles.addTaskBtn}
        onClick={handler}
        type="submit"
      >
        {btnName}
      </button>
    </>
  );
}
