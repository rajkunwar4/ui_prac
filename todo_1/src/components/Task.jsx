import "../index.css";

import React, { useState } from "react";

function Task({ task, deleteHandler, editHandler,editTask }) {
  const [edit, setEdit] = useState(false);
  const [input,setInput]=useState("");
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
      <input
        type="text"
        name=""
        id=""
        value={task.title}
        readOnly={!edit}
        className="taskList"
        

      />
      <button
        onClick={() => {
          setEdit(!edit);
          editTask(task.id,"edited");

        }}
      >
        {edit ? "Done" : "Edit"}
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
