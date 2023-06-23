import React from "react";
import { addTask } from "../Redux/taskSlice";
import { useSelector } from "react-redux";
import UpdateModal from "./UpdateModal";

export default function TaskCard({ taskHandler }) {
  const tasks = useSelector((store) => store.task.tasks);

  return (
    <div>
      {tasks.map((e) => {
        return (
          <div key={e.id} className="container-fluid">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h3>{e.task}</h3>
                  {e.complete ? <h1>true</h1> : <h1>false</h1>}
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
                      <box-icon name="toggle-right" color="#6f9a37"></box-icon>
                    ) : (
                      <box-icon name="toggle-left"></box-icon>
                    )}
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
