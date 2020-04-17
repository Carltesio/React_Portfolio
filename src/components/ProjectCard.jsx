import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="ui card">
        <a className="image" href={project.link}>
            <img src={project.image}/>
        </a>
        <div className="content">
          <h3 className="ui header">{project.name}</h3>

          <div className="description">{project.description}</div>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;