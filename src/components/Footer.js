import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return(
    <footer>
      <nav className="navbar navbar-expand-lg">
        <div className="footer_panel">
          <a className="socialmedia_icon" href="https://personal-portfolio-david.netlify.com"><FontAwesomeIcon icon="user-circle" size="2x" color="black"/></a>
          <a className="socialmedia_icon" href="https://www.facebook.com/david.builder.3551"><FontAwesomeIcon icon={["fab","facebook"]} size="2x" color="black"/></a>
          <a className="socialmedia_icon" href="https://www.instagram.com/9699david/"><FontAwesomeIcon icon={["fab","instagram"]} size="2x" color="black"/></a>
          <a className="socialmedia_icon" href="https://www.linkedin.com/in/david-debuilder-47b3a7160/"><FontAwesomeIcon icon={["fab","linkedin"]} size="2x" color="black"/></a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer;
