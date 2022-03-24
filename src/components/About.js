import React from "react";
import avatar from "../assets/statics/lm-avatar.png";
import tecnologies from "../assets/statics/tecnologies.png";

export default function About() {
  return (
    <section id="about" className="about-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="">About me</h1>
            <p className="about-text">
              Hello! My name is Luciano but you can call me Mario. <br />
              I'm a student and I like coding things from scratch. My dream is
              to become an excellent professional and I'm working for it. I
              program in React, design small things in Figma and I like to be
              detail-oriented. I have worked with SCRUM technologies and have
              some backend knowledge.
              <br />
              Through team projects I have developed soft skills like
              communication and teamwork, and use of tools such as Jira, Slack,
              Bitbucket/Github, etc.
            </p>
            <h5>Technologies</h5>
            <ul className="skill-list">
              <li>- HTML</li>
              <li>- Bootstrap</li>
              <li>- CSS</li>
              <li>- Git/Github</li>
              <li>- Javascript</li>
              <li>- SQL</li>
              <li>- React js</li>
              <li>- npm</li>
            </ul>
            <img className="tecnologies-img" src={tecnologies} alt="" />
          </div>
          <div className="col-md-6 centrado">
            <img className="avatar centrar" src={avatar} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </section>
  );
}
