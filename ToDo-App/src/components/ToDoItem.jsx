import React, { useState } from "react";
import "./ToDoItem.css";

function ToDoItem({ task, onToggle, onDelete, onEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function saveEdit() {
    if (editMode) {
      onEdit(task.id, newText);
    }
    setEditMode(!editMode);
  }

  return (
    <li className={task.done ? "todo-item done" : "todo-item"}>
      {editMode ? (
        <input
          type="text"
          className="edit-input"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="buttons">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <button onClick={saveEdit}>{editMode ? "Save" : "Edit"}</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;
