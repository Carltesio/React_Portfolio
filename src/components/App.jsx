import React from "react";
import About from "../components/About";
import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Switch, Route, } from "react-router-dom";
import Projects from "../components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App
