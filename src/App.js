import React from "react";

import "./App.css";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;