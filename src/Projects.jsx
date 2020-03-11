import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";


class Projects extends Component {
  state = {
    projects: []
  };


  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }


  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div id={'project-' + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">

        <div className="column">
          <h1 className="ui header">My Projects</h1>
          <div>I will gather in this section the different projects I have been part of as a Owner, cofounder or collaborator.{"\n"}</div>



        </div>
        <div className="ui stackable three column grid" id = "list">{projectsList}</div>
      </div>
    );
  }
}

export default Projects;