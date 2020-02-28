import React from "react";





const Footer = () => {
  return (
    <footer>
     
      <div className="ui footer">

            <a href="https://github.com/Carltesio" >
              <button className="ui github button">
                <i className="github icon"></i>
                Github
              </button>
            </a>
          
            <a href="https://www.instagram.com/omar_d_b/" >
              <button className="ui instagram button">
                <i className="instagram icon"></i>
                Instagram
              </button>
            </a>

            <a href= "http://linkedin.com/in/carlos-omar-delgado-03168083" >
              <button className="ui linkedin button">
                <i className="linkedin icon"></i>
                LinkedIn
              </button>
            </a>
           
            <p id="column">Made with React {React.version}</p>
          

       

        




      </div>
    </footer>
  );
};

export default Footer;

