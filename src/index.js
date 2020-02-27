import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Curriculum from "./Curriculum";



const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contacts" component={Contacts}></Route>
        <Route exact path="/curriculum" component={Curriculum}></Route>

      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(<BrowserRouter>
                <App />
                </BrowserRouter>,
                document.getElementById("app"));