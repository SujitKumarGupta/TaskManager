import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'complete', 'incomplete'

  // Add a new task
  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion status
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on status
  const filteredTasks = tasks.filter(task => {
    if (filter === 'complete') return task.isComplete;
    if (filter === 'incomplete') return !task.isComplete;
    return true;
  });

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('complete')}>Complete</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskManager;
