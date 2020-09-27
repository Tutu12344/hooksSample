import React, { useState, useEffect } from "react";
import axios from "axios";

const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token 8d8af9d040ceae1ff5e66f65c7fc8ae1d93722db",
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  const getTask = () => {
    axios
      .get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token 8d8af9d040ceae1ff5e66f65c7fc8ae1d93722db",
        },
      })
      .then((res) => {
        setSelectedTask(res.data);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
          Authorization: "Token 8d8af9d040ceae1ff5e66f65c7fc8ae1d93722db",
        },
      })
      .then((res) => {
        setTasks(tasks.filter((task) => task.id !== id));
        setSelectedTask([]);
      });
  };
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.id}
            <button onClick={() => deleteTask(task.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <br />
      <button type="button" onClick={() => getTask()}>
        GetTask
      </button>
      <button type="button" onClick={() => deleteTask()}>
        deleteTask
      </button>
      <h3>
        {selectedTask.title}
        {selectedTask.id}
      </h3>
    </div>
  );
};

export default DrfApiFetch;
