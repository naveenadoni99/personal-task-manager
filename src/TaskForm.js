import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description && task.dueDate) {
      addTask({
        ...task,
        id: Date.now(), // Unique ID for each task
      });
      setTask({ title: '', description: '', dueDate: '', status: 'Pending' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          className="form-control"
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Add Notes</button>
    </form>
  );
};

export default TaskForm;
