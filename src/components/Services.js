import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {  faFileCode } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "./ProgressProvider";


const Services = () => {
  return (
    <div id = "skills" className="services">
      <h1 className="py-5">my skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={80}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>JAVA</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={65}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>Spring Framework</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={70}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>SpringBoot</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={75}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>WebServices</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={60}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>SQL and PLSQL</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={70}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>MicroServices</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={77}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>JPA and Hibernate</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={62}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>J2EE</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={55}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>Data Structures and Algorithms</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={60}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>Design Patterns</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={45}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>ReactJS</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
            <div className="circle"><div style={{ width: 66, height: 66, justifyContent: "center" ,paddingBottom : 10}} >
                <ProgressProvider valueStart={0} valueEnd={35}>
                  {(value) => <CircularProgressbar value={value} text={value} className="circlebar" styles={buildStyles({
                    pathTransitionDuration: 5.0,
                    pathColor: `#f88`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                  })} />}
                </ProgressProvider></div>
              </div>
              <h3>AWS</h3>
              <p>Version used is 1.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
