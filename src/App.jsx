import { useState } from "react";
import ButtonArea from "./ButtonArea.jsx";
import ProjectArea from "./ProjectArea.jsx";

function App() {
  const [activeProject, setProject] = useState(null);

  function handleClick(projectnumber) {
    setProject(projectnumber);
  }
  return (
    <>
      <ProjectArea activeProject={activeProject} />
      <ButtonArea handleClick={handleClick} />
    </>
  );
}

export default App;
