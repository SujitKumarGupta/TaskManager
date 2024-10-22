import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task.id)}>
        {task.isComplete ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
