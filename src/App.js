import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Templates from "./components/Templates";
import { Redirect, Route, Switch } from "react-router-dom";
import Store from "./res/Store";

const App = () => {
  return (
    <>
      <Store>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/templates" component={Templates} />
          <Redirect to="/" />
        </Switch>
      </Store>
    </>
  );
};

export default App;
