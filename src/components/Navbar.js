import React from 'react'
import { Link } from "react-scroll";
import Logo from "../devlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#"><img src={Logo} className="logo" alt="Logo..." /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style = {{color : "#fff"}}/>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item bg-gradient-dark text-white">
                        <a className="nav-link p-3 mb-2 bg-gradient-dark text-white" href="#" >Home</a>
                    </li>
                    <li className="nav-item ">
                        <Link smooth={true} to="about" offset={-110} className="nav-link p-3 mb-2 bg-gradient-dark text-white" >About Me</Link>
                    </li>
                    <li className="nav-item ">
                        <Link smooth={true} to="skills" offset={-110} className="nav-link p-3 mb-2 bg-gradient-dark text-white" >My Skills</Link>
                    </li>
                    <li className="nav-item ">
                        <Link smooth={true} to="eduexp" offset={-110} className="nav-link p-3 mb-2 bg-gradient-dark text-white" >Experience</Link>
                    </li>
                    <li className="nav-item ">
                        <Link smooth={true} to="contact" offset={-110} className="nav-link p-3 mb-2 bg-gradient-dark text-white">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;