import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
