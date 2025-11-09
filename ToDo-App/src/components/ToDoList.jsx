import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

function ToDoList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map(function (task) {
        return (
          <ToDoItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;
