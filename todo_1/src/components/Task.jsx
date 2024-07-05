import "../index.css";

import React from "react";

function Task({ task, deleteHandler, editHandler }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        name=""
        id=""
        checked={task.isComplete}
        onChange={() => editHandler(task.id)}
      />
      {/* <span>{task.title}</span> */}
      <input type="text" name="" id="" value={task.title} readOnly={true} className="taskList"/>
      <button
        onClick={() => {
          editHandler(task.id);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          deleteHandler(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
