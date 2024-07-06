import { useState } from "react";
import Task from "./components/Task";
import generateUniqueId from "generate-unique-id";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      title: "learn repsonsive design",
      isComplete: false,
      id: 1,
    },
    {
      title: "system design",
      isComplete: false,
      id: 2,
    },
    {
      title: "DSA 2 problems",
      isComplete: false,
      id: 3,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const buttonHandler = () => {
    setTasks([
      ...tasks,
      {
        title: newTask,
        isComplete: false,
        id: generateUniqueId(),
      },
    ]);
    setNewTask("");
  };

  const deleteHandler = (id) => {
    console.log("deleted");

    setTasks(tasks.filter((task) => task.id != id));
  };

  const editHandler = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          task.isComplete = !task.isComplete;
        }
        return task;
      })
    );
  };

  const editTask = (id, newVal) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          task.title = newVal;
        }
        return task;
      })
    );
  };

  return (
    <div>
      {/* input bar to add new tasks */}
      <div className="inputBar">
        <input
          type="text"
          placeholder="add task...."
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button onClick={buttonHandler}>Add</button>
      </div>
      <div className="taskContainer">
        {tasks.map((task, i) => (
          <Task
            key={i}
            task={task}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}
