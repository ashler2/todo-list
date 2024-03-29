import React from "react";

import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context/index";
function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header></Header>
          <Content></Content>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
