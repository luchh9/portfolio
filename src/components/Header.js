import React from "react";

export default function Header() {
  return (
    <section>
      <div className="container">
        <div className="row header header-text">
          <div className="col-sm-10 name">
            <h1>
              Luciano <span>Mario</span> tti.
            </h1>
          </div>
          <div className="col-sm-10 ">
            <h1>I design &amp; build things for the web.</h1>
          </div>
          <div className="col-sm-6">
            <p>
              I&apos;m a Front-end developer who likes to create and design.
              <br></br>
              Currently I focus on creating projects and learning new
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
