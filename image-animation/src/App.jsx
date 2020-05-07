import React from "react";
import "./App.css";
import NavBar from "./components/nav";
import ImageCard from "./components/image-card";
import Toggle from "./components/Toggle";
import ToggleParent from "./components/ToggleParent";
import CollapseCard from "./components/ColapseCard";
import ButtonChange from "./components/buttonBack";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <NavBar />
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={ImageCard} />
          <Route path="/Toggle" component={Toggle} />
          <Route path="/ToggleParent" component={ToggleParent} />
          <Route path="/collapseCard" component={CollapseCard} />
          <Route path="/buttonChange" component={ButtonChange} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
