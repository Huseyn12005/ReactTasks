import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [project, setProject] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ ...project, id: Date.now() });
    setProject({ name: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={project.name} onChange={handleChange} placeholder="Layihə adı" required />
      <button type="submit">Əlavə et</button>
    </form>
  );
};

export default ProjectForm;
