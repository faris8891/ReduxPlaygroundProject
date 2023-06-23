import React from "react";
import { addTask } from "../Redux/taskSlice";
import { useSelector } from "react-redux";
import UpdateModal from "./UpdateModal";
import style from "./TaskCard.module.css";

export default function TaskCard({ taskHandler }) {
  const tasks = useSelector((store) => store.task.tasks);

  return (
    <div>
      {tasks.map((e) => {
        return (
          <div key={e.id} className={style.card}>
            <div className="container-fluid">
              <div className="card">
                <div
                  className={
                    e.complete == true ? style.card_complete:
                    style.card_pending 
                  }
                >
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div className={style.taskName}>
                      <h3>{e.task}</h3>
                    </div>
                    <div className="d-flex align-items-center justify-content-evenly">
                      <div
                        onClick={() => taskHandler("removeTask", e.id)}
                        className="p-2"
                      >
                        <box-icon type="solid" name="trash-alt"></box-icon>
                      </div>
                      <div className="p-2">
                        <UpdateModal taskId={e.id} taskName={e.task} />
                      </div>

                      <div
                        onClick={() => taskHandler("completeTask", e.id)}
                        className="p-2"
                      >
                        {e.complete ? (
                          <box-icon
                          size='md'
                            name="toggle-right"
                            color="#6f9a37"
                          ></box-icon>
                        ) : (
                          <box-icon size='md' name="toggle-left"></box-icon>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
