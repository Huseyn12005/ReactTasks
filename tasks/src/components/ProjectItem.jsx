import React, { useState } from 'react';

const ProjectItem = ({ project, setSelectedProjectId, editProject, deleteProject }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState(project);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProject({ ...editedProject, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editProject(editedProject);
    setIsEditing(false);
  };

  return (
    <div className="project-item">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input name="name" value={editedProject.name} onChange={handleEditChange} required />
          <button type="submit">Yadda saxla</button>
        </form>
      ) : (
        <button className="project-button" onClick={() => setSelectedProjectId(project.id)}>
          <h3>{project.name}</h3>
        </button>
      )}
      <button onClick={() => setIsEditing(true)}>Redaktə et</button>
      <button onClick={() => deleteProject(project.id)}>Sil</button>
    </div>
  );
};

export default ProjectItem;
