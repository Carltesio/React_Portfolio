import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";


class Contacts extends Component {
  state = {
    projects: []
  };


  componentDidMount() {
    axios.get('./src/data/CVData.json')
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
        <p>
            I will display a fake Cv field here        </p>
    
    </div>
    <div className="ui stackable three column grid">{projectsList}</div>
  </div>
  );
  }
}

export default Contacts;