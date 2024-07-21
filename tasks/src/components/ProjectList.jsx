import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, setSelectedProjectId, editProject, deleteProject }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem 
          key={project.id} 
          project={project} 
          setSelectedProjectId={setSelectedProjectId} 
          editProject={editProject} 
          deleteProject={deleteProject} 
        />
      ))}
    </div>
  );
};

export default ProjectList;
