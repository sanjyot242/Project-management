import { useState } from 'react';
import AddNewProject from './components/AddNewProject';
import FallBackContent from './components/FallBackContent';
import ProjectInfo from './components/ProjectInfo';
import ProjectSideBar from './components/ProjectSideBar';

function App() {
  const [displayState, setDisplayState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function onAddProjectClickHandler() {
    setDisplayState((prevDisplayState) => {
      return {
        ...prevDisplayState,
        selectedProjectId: null,
      };
    });
  }

  function onClickProjectSave(projectData) {
    setDisplayState((prevDisplayState) => {
      return {
        ...prevDisplayState,
        selectedProjectId: undefined,
        projects: [...prevDisplayState.projects, projectData],
      };
    });
  }

  function onClickCancelHandler() {
    setDisplayState((prevDisplayState) => {
      return {
        ...prevDisplayState,
        selectedProjectId: undefined,
      };
    });
  }

  function onSelectProjectHandler(id) {
    setDisplayState((prevDisplayState) => {
      return {
        ...prevDisplayState,
        selectedProjectId: id,
      };
    });
  }

  function deleteProjectHandler() {
    setDisplayState((prevDisplayState) => {
      return {
        ...prevDisplayState,
        selectedProjectId: undefined,
        projects: prevDisplayState.projects.filter(
          (project) => project.id !== prevDisplayState.selectedProjectId
        ),
      };
    });
  }

  console.log(displayState);
  let content;

  if (displayState.selectedProjectId === undefined) {
    content = <FallBackContent onAddProjectClick={onAddProjectClickHandler} />;
  } else if (displayState.selectedProjectId === null) {
    content = (
      <AddNewProject
        onClickSave={onClickProjectSave}
        handelCancelClick={onClickCancelHandler}
      />
    );
  } else if (displayState.selectedProjectId !== null) {
    content = (
      <ProjectInfo
        project={displayState.projects.find(
          (project) => project.id === displayState.selectedProjectId
        )}
        deleteProject={deleteProjectHandler}
      />
    );
  }

  return (
    <>
      <main className='h-screen my-8 flex gap-4'>
        <ProjectSideBar
          onAddProjectClick={onAddProjectClickHandler}
          projectsList={displayState.projects}
          onClickSelect={onSelectProjectHandler}
          selectedProjectId={displayState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
