import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="row">
      {tasks.map((task) => (
        <div key={task.id} className="col-md-4">
          <TaskCard task={task} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
