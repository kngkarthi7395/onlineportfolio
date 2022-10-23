import React from "react";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div>
            <div className = "header-wraper">
                <div className = "main-info">
                    <h1 style = {{color : "#f9ab00"}}> Karthikeyan Manokar</h1>
                    <Typed className="typed-text"
                strings={[
                    'Software Engineer',
                    'Smart Worker',
                    'Full Stack Java Developer',
                    'Freelancer',
                    'Traveller']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop>
                </Typed>
                <a href="#" className="btn-main-offer"><div color = "#fff">Contact Me</div></a>
                </div>
            </div>
        </div>
    );
}

export default Header;