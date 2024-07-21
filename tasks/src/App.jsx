import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const editProject = (updatedProject) => {
    setProjects(projects.map((project) => (project.id === updatedProject.id ? updatedProject : project)));
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
    setTasks(tasks.filter((task) => task.projectId !== projectId));
    setSelectedProjectId(null);
  };

  const filteredTasks = tasks.filter((task) => 
    task.projectId === selectedProjectId &&
    (task.name.includes(searchQuery) || 
    task.description.includes(searchQuery) ||
    task.tags.includes(searchQuery) ||
    task.priority.includes(searchQuery))
  );

  return (
    <div className="container">
      <h1>Görüləcək İşlər Siyahısı</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <ProjectForm addProject={addProject} />
      <ProjectList 
        projects={projects} 
        setSelectedProjectId={setSelectedProjectId} 
        editProject={editProject} 
        deleteProject={deleteProject} 
      />
      {selectedProjectId && (
        <>
          <TaskForm addTask={addTask} selectedProjectId={selectedProjectId} />
          <TaskList tasks={filteredTasks} editTask={editTask} deleteTask={deleteTask} />
        </>
      )}
    </div>
  );
};

export default App;
