import React from "react";


const About = () => {
  return (
    <div className="ui main container">
        <h1 className="ui header" >About Me</h1>
     
        <div>
          <div className= "ui stackable two column grid">
         <div classname= "column">
          <img className="ui large image" src="/src/pic/IMG_1696.png" ></img>
          </div>
          <div className="column">
        
              <p>
                  Thanks for visiting my Portfolio webpage. <br></br>

                  My life journey has been enriched by the mix of different cultures, from Italy to the US, South America to China and currently Sweden.<br></br>
                  I started my career as a Technician in a Design Studio developing Wearable Technologies right after two years of Mechanical Engineering.<br></br> 
                  Today I am fully commited to become a Fullstack developer to concentrate my whole life experience into digital products.<br></br>
                  I am a life lover, I love to exercise outdoors,travel and understand how the "other" thinks.
              </p>
              </div>
        </div>
      </div>
    </div>
  );
};

export default About;