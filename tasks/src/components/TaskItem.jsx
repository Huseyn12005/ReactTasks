import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input name="name" value={editedTask.name} onChange={handleEditChange} required />
          <input name="description" value={editedTask.description} onChange={handleEditChange} required />
          <input name="date" value={editedTask.date} onChange={handleEditChange} type="datetime-local" required />
          <input name="tags" value={editedTask.tags} onChange={handleEditChange} required />
          <select name="priority" value={editedTask.priority} onChange={handleEditChange} required>
            <option value="low">Aşağı</option>
            <option value="medium">Orta</option>
            <option value="high">Yüksək</option>
          </select>
          <button type="submit">Yadda saxla</button>
        </form>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>{task.date}</p>
          <p>{task.tags}</p>
          <p>{task.priority}</p>
          <button onClick={() => setIsEditing(true)}>Redaktə et</button>
          <button onClick={() => deleteTask(task.id)}>Sil</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
