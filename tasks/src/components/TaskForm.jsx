import React, { useState } from 'react';

const TaskForm = ({ addTask, selectedProjectId }) => {
  const [task, setTask] = useState({ name: '', description: '', date: '', tags: '', priority: '', projectId: selectedProjectId });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now(), projectId: selectedProjectId });
    setTask({ name: '', description: '', date: '', tags: '', priority: '', projectId: selectedProjectId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={task.name} onChange={handleChange} placeholder="Task adı" required />
      <input name="description" value={task.description} onChange={handleChange} placeholder="Təsviri" required />
      <input name="date" value={task.date} onChange={handleChange} placeholder="Tarix / Vaxt" type="datetime-local" required />
      <input name="tags" value={task.tags} onChange={handleChange} placeholder="Teqlər" required />
      <select name="priority" value={task.priority} onChange={handleChange} required>
        <option value="">Prioritet</option>
        <option value="low">Aşağı</option>
        <option value="medium">Orta</option>
        <option value="high">Yüksək</option>
      </select>
      <button type="submit">Əlavə et</button>
    </form>
  );
};

export default TaskForm;
