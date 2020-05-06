import React from "react";
import "./App.css";
import NavBar from "./components/nav";
import ImageCard from "./components/image-card";
import Toggle from "./components/Toggle";
import ToggleParent from "./components/ToggleParent";
import CollapseCard from "./components/ColapseCard";

function App(props) {
  return (
    <div>
      <NavBar name={"ImageOnLoad"} />
      <ImageCard />
      <NavBar name={"OnClick Toggle"} />
      <Toggle />
      <NavBar name={"OnClick Toggle Parent/Children"} />
      <ToggleParent />
      <NavBar name={"CollapseCard"} />
      <CollapseCard />
    </div>
  );
}

export default App;
