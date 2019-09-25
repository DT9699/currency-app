import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return(
    <footer>
      <nav className="navbar navbar-expand-lg">
        <div className="footer_panel">
          <a className="socialmedia_icon" href=""><FontAwesomeIcon icon="user-circle" size="2x" color="black"/></a>
          <a className="socialmedia_icon" href=""><FontAwesomeIcon icon={["fab","facebook"]} size="2x" color="black"/></a>
          <a className="socialmedia_icon" href=""><FontAwesomeIcon icon={["fab","instagram"]} size="2x" color="black"/></a>
          <a className="socialmedia_icon" href=""><FontAwesomeIcon icon={["fab","linkedin"]} size="2x" color="black"/></a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer;
