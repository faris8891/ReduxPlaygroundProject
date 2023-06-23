import React from "react";
import styles from "./Button.module.css";

export default function Button1({ handler }) {
  return (
    <>
      <button className={styles.addTaskBtn} onClick={handler} type="submit">
        Add
      </button>
    </>
  );
}
