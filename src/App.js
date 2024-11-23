import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  // Initialize tasks from local storage or set an empty array if none exists
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  // Save tasks to local storage every time tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to update an existing task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask : task));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Personal Notes Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
