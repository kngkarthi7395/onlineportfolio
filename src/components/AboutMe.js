import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id = "about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Ambitious FullStack Java Developer capable of following established expertise procedures and working under little
                        or no supervision. Offering technical expertise in programming analysis, application analysis and
                        design.Hands on Experience with Java,J2EE,BigData,SQL,PLSQL,Spring,WebServices,MicroServices and
                        Hibernate . Excellent team player with in-depth knowledge of development tools and languages. Over
                        6 years of development experience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;