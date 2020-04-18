import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(<BrowserRouter>
                <App />
                </BrowserRouter>,
                document.getElementById("app"));