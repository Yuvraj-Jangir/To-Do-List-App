import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    const text = inputValue.trim();
    if (text === "") return;
    const newItem = { id: Date.now(), text: text, done: false };
    setTaskList(taskList.concat(newItem));
    setInputValue("");
  }

  function toggleTask(id) {
    const updated = taskList.map(function (task) {
      if (task.id === id) {
        return { id: task.id, text: task.text, done: !task.done };
      }
      return task;
    });
    setTaskList(updated);
  }

  function deleteTask(id) {
    const updated = taskList.filter(function (task) {
      return task.id !== id;
    });
    setTaskList(updated);
  }

  function editTask(id, newText) {
    const updated = taskList.map(function (task) {
      if (task.id === id) {
        return { id: task.id, text: newText, done: task.done };
      }
      return task;
    });
    setTaskList(updated);
  }

  return (
    <div className="App">
      <Header />
      <div className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task here"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ToDoList
        tasks={taskList}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
