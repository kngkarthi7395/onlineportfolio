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
                                <h3>Weather App</h3>
                                <h4>Web Application</h4>
                                <h4>Tools used: NodeJS, Express, Handlebars JS, HTML, CSS</h4>
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
                            <div>
                                <h3>Blue Fin</h3>
                                <h4>Web Application</h4>
                                <h4>
                                    Tools used: JavaScript, Python, Django, PostgreSQL, Jinja, HTML,
                                    Bootstrap CSS
                                </h4>
                                <ul>
                                    <li>
                                        A Zillow clone web app. Users can create their accounts complete
                                        with authentication, and search for homes eiter using a search bar
                                        with filters or an integrated Google Map Platform.
                                    </li>
                                    <li>
                                        Pulled home data from a PostgreSQL database, and then incorporated
                                        Google Maps Platform to enhance the users experience of home
                                        searching.
                                    </li>
                                    <li>
                                        Utilized the Django Framework administrative features so both
                                        client and administrators could login equipped with their own
                                        privelleges. Client could message realtors, and in doing so would
                                        also automatically send an e-mail to the realtor.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>Stratus Beats</h3>
                                <h4>Web Application</h4>
                                <h4>
                                    Tools used: ReactJS, Django, GraphQL, Graphene, Apollo Client,
                                    Insomnia
                                </h4>
                                <ul>
                                    <li>
                                        A CRUD application that allows users to share their music online
                                        with other users. The app features social interactions such as
                                        likes and comments.
                                    </li>
                                    <li>
                                        Hooked up Cloudinary upload API as the method of choice for users
                                        to Store their music files. Authentication is required to use the
                                        app and each user has their own profile complete with their list
                                        of uploaded musics and a list of songs that they liked.
                                    </li>
                                    <li>
                                        Client's cache is updated accordingly to improve loading speed.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>Muscle Pro</h3>
                                <h4>Web Application (UI Developer)</h4>
                                <h4>
                                    Tools used: LESS, HTML, React JS, Node JS
                                </h4>
                                <ul>
                                    <li>
                                        A fitness tracking-app that helps users manage their workout.
                                        Users can add workout schemes into the app and keep record of all
                                        their set, reps, and weights from their training.
                                    </li>
                                    <li>
                                        Users have to authenticate themselves to access their training
                                        profiles. User information is saved over in the database to keep
                                        track of all their training and their lifting plans.
                                    </li>
                                    <li>
                                        Utilized LESS preprocessor to style the app. Followed
                                        preprocessing principles and took advantage of features such as
                                        mixins, variables, nesting, and imports.
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