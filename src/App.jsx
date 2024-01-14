import { useState } from 'react';
import AddNewProject from './components/AddNewProject';
import FallBackContent from './components/FallBackContent';
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

  let content;

  if (displayState.selectedProjectId === undefined) {
    content = <FallBackContent onAddProjectClick={onAddProjectClickHandler} />;
  } else if (displayState.selectedProjectId === null) {
    content = <AddNewProject onAddProjectClick={onAddProjectClickHandler} />;
  }

  return (
    <>
      <main className='h-screen my-8 flex gap-4'>
        <ProjectSideBar onAddProjectClick={onAddProjectClickHandler} />
        {content}
      </main>
    </>
  );
}

export default App;
