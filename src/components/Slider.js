import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        centerMode: true,
        centerPadding: "50px",
        draggable: true,
        pauseOnDotsHover: true,
        pauseOnHover: true
    };

    return (
        <div>
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <h1 className="py-5">My Projects</h1>
                        </div>
                        <Slider {...settings}>
                            <div>
                                <h3>SMS Application</h3>
                                <h4>Software</h4>
                                <h4>Tools used: Java,
                                    Spring Framework,
                                    SpringBoot,
                                    WebServices,
                                    SQL and PLSQL,</h4>
                                <ul>
                                    <li>
                                        This platform is a Secure, High Density & Turn‐Key Infrastructure for Service Providers who use its open and scalable architecture to run profitable SMS operations globally.
                                    </li>
                                    <li>
                                        The Platform supports extensive SMPP / HTTP / XML Interoperability, delivers service assurance and enables scalable, reliable and secured connectivity between SMS Wholesale Carriers and Applications.
                                    </li>
                                    <li>
                                        The Platform can be provisioned and managed through web based Interfaces on PCs and Mobiles.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>Sella Tracker</h3>
                                <h4>Web Application</h4>
                                <h4>
                                    Tools used: JAVA,SQL,PLSQL,Spring,Hibernate,J2EE 
                                    and Rest Services
                                </h4>
                                <ul>
                                    <li>
                                        Responsible for a tracking system application
                                        which tracks the shipments from source to
                                        receiving end.Implementing solutions which
                                        impacts millions of user's data
                                    </li>
                                    <li>
                                        Pulled home data from a PostgreSQL database, and then incorporated
                                        Google Maps Platform to enhance the users experience of home
                                        searching.
                                    </li>
                                    <li>
                                        Implemented and Maintained a Digital Signature
                                        Application for signing pdf.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>5G Home</h3>
                                <h4>Web and Mobile Application</h4>
                                <h4>
                                    Tools used: Java,
                                    Spring Framework,
                                    SpringBoot,
                                    WebServices,
                                    SQL and PLSQL,
                                    MicroServices,
                                    JPA and Hibernate,
                                    J2EE,
                                    Design Patterns
                                </h4>
                                <ul>
                                    <li>
                                        5G Home is end user app which is introduced by
                                        verizon, where customer can do a self setup of 5G
                                        device in their location. App guides to users to
                                        complete the setup with good signal and
                                        manage the connected devices.
                                    </li>
                                    <li>
                                        Revised, modularized and updated old code
                                        bases to modern development standards,
                                        reducing operating costs and improving
                                        functionality.
                                    </li>
                                    <li>
                                        Client's cache is updated accordingly to improve loading speed.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>Weather App</h3>
                                <h4>Web Application</h4>
                                <h4>Tools used: HTML,CSS,ReactJS,JAVA,SpringBoot,
                                SQL,DataStructures</h4>
                                <ul>
                                    <li>
                                        A web-based application that could reveal the current week weather
                                        forecast of a desired location.
                                    </li>
                                    <li>
                                        The app uses the Google Maps Geolocation API to find user's typed
                                        location. The coordinates from the geolocator is then used to pull
                                        weather data from the Dark Sky API
                                    </li>
                                    <li>
                                        The web page is fully responsive in desktop, tablet, and mobile
                                        views.
                                    </li>
                                </ul>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleSlider