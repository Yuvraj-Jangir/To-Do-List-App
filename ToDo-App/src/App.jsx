import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks(tasks.concat(newTask));
  }

  function toggleTask(id) {
    const updated = tasks.map(t => {
      if (t.id === id) t.completed = !t.completed;
      return t;
    });
    setTasks(updated);
  }

  function deleteTask(id) {
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onAdd={addTask} />
    </div>
  );
}
export default App;
