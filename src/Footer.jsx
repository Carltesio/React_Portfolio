import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="ui container">


        <p id="footer">Made with React {React.version}</p>

       
        <a href="https://github.com/Carltesio" >
          <button class="ui github button">
            <i class="github icon"></i>
            Github
          </button>
        </a>
      
        <a href="https://www.instagram.com/omar_d_b/" >
          <button class="ui instagram button">
            <i class="instagram icon"></i>
            Instagram
          </button>
        </a>

        <a href= "http://linkedin.com/in/carlos-omar-delgado-03168083" >
          <button class="ui linkedin button">
            <i class="linkedin icon"></i>
            LinkedIn
          </button>
        </a>




      </div>
    </footer>
  );
};

export default Footer;

