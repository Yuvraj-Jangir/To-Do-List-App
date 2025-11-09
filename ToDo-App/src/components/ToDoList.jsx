import { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({ tasks, onToggle, onDelete, onAdd }) {
  const [input, setInput] = useState('');

  function handleAdd() {
    if (input.trim() !== '') {
      onAdd(input);
      setInput('');
    }
  }

  return (
    <div className="todo-list">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter task" />
      <button onClick={handleAdd}>Add</button>
      <div>
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
export default ToDoList;
