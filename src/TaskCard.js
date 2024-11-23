import React, { useState } from 'react';

const TaskCard = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="title"
                value={editedTask.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="description"
                value={editedTask.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                name="dueDate"
                value={editedTask.dueDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="status"
                value={editedTask.status}
                onChange={handleChange}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button className="btn btn-success" onClick={handleUpdate}>Update Task</button>
          </>
        ) : (
          <>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <p><strong>Due:</strong> {task.dueDate}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <button className="btn btn-info" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
