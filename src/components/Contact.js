import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faAt } from "@fortawesome/free-solid-svg-icons";
import {faTwitter, faGithub, faFacebookSquare,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Contact = () => {
    return (
        <div id="contact">
            <h1 id="heading">Let's work together...</h1>
            <div id="links">
                <a href="https://www.facebook.com/karthikeyan777" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} />Facebook</a>
                <a href="https://github.com/kngkarthi7" id="profile-link" target="_blank"><FontAwesomeIcon icon={faGithub} />Github</a>
                <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} />Twitter</a>
                <a href="https://www.linkedin.com/in/karthikeyan73/"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
                <a href="mailto:kngkarthi.7@gmail.com"><FontAwesomeIcon icon={faAt} />Send a mail</a>
                <a href="tel:+918144121677"><FontAwesomeIcon icon={faMobileScreenButton} />Call me</a>
                
            </div>
        </div>
    );
}

export default Contact;