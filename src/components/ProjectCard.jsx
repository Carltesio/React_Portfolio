import React, { Fragment } from "react";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div className="ui card" 
       style={{
        height: 400
      }}>
        <a className="image" 
        href={project.link}>
          <img 
          style={{
            height: 200
          }}
          src={project.image} />
        </a>
        <div className="content">
          <h3 className="ui header">{project.name}</h3>

          <div className="description">{project.description}</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;