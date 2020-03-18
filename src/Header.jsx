import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          My Portfolio
        </Link>
        <div className="right menu">
          <NavLink
            id="about-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/about"
          >
            About Me
          </NavLink>
          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink
            id="contacs-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/contacts"
          >
            Contacts
          </NavLink>

          <NavLink
            id="curriculum-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/curriculum"
          >
            Curriculum
          </NavLink>

        </div>
      </div>
    </nav>

    
  );
};

export default Header;