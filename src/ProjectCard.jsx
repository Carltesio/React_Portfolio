import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div class="ui card">
        <a class="image" href={project.link}>
            <img src={project.image}/>
        </a>
        <div class="content">
          <h3 class="ui header">{project.name}</h3>

          <div class="description">{project.description}</div>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;


// tried this code with Faraz to create a drop down menu.
// <div className="ui styled accordion" >
// <div className="title active">
//  <i class="dropdown icon"></i>
// <h3 class="ui header">{project.name}</h3>
// </div>
// </div>