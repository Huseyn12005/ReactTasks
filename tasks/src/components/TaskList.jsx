import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
