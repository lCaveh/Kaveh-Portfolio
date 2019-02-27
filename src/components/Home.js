import React from "react";
import UIkit from "uikit";
import AngularLogo from "../img/angular-logo.png";
import JSLogo from "../img/js-logo.png";
import ReactLogo from "../img/react-logo.png";
import { NavLink } from "react-router-dom";
UIkit.parallax();
UIkit.grid();

const Home = () => {
  return (
    <div className="uk-container">
      <br />
      <div data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
        <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-text-center">
          <h3 className="uk-card-title">Hi, I'm Kaveh. Nice to meet you. </h3>
          <p>
            I began to learn Web Developing since I felt a great passion
            about coding.
          </p>
          <p>
            At first,I tried to figure out how web application works
            by my self
          </p>
          <p>
            It went really good in the beginnig, but soon I realized that I need
            to learn it academically
          </p>
          <p>
            Then I attended Epicodus web developement bootcamp, and my journey as
            a web developer began ...
          </p>
        </div>
      </div>
      <br />
      <div data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
        <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-text-center">
          <h3 className="uk-card-title">
            Here is the list of skills that I learned:{" "}
          </h3>
          <p>Web Fundamentals: Html, CSS, Javascript</p>
          <p>
            Javascript libraries and other languages: Bootstrap, UIkit, jQuery,
            Typescript, React, C#
          </p>
          <p>frameworks: .Net, Angular, NodeJs, Webpack</p>
          <p>Databases: MySQL, Firebase</p>
        </div>
      </div>
      <br />
      <div data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
        <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-text-center">
          <h3 className="uk-card-title ">And finally about my design method</h3>
          <p>
            I believe in minimalism. I don't think a well design webpage should
            be filled with lots of elements.
          </p>
          <p>
            Instead, I try to design a few elements in the best way that I can.
          </p>
          <p>Hope you enjoy my works.</p>
        </div>
      </div>
      <br />
      <div
        className="uk-child-width-expand@s uk-text-center"
        data-uk-grid="parallax: 150"
        uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true"
      >
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
            <NavLink to="/JavascriptProjects">
              <img src={JSLogo} alt="" />
            </NavLink>
            <p>
              Here is some of my projects that were written by Javascript. I
              used MySQL database for most of them.
            </p>
            <p />
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
            <NavLink to="/ReactProjects">
              <img src={ReactLogo} alt="" />
            </NavLink>
            <p>
              Here is some of my project using React for front end. I used
              different languages like C# for back end there.
            </p>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
            <NavLink to="/AngularProjects">
              <img src={AngularLogo} alt="" />
            </NavLink>
            <p>
              Here is the Angular section where I used Angular framework, JS
              libraries like Typescript and Firebase database to create some
              good looking web applications
            </p>
          </div>
        </div>
      </div>
      <button
        className="uk-button uk-button-default uk-margin-small-right contact"
        type="button"
        data-uk-toggle="target: #offcanvas-reveal"
      >
        Contact
      </button>
      <div
        id="offcanvas-reveal"
        data-uk-offcanvas="mode: reveal; overlay: true"
      >
        <div className="uk-offcanvas-bar">
          <button className="uk-offcanvas-close" type="button" data-uk-close />
          <h3>WANT TO GET IN TOUCH?</h3>
          <hr />
          <a target="_blank" href="https://github.com/lCaveh">
            Github Repository
          </a>
          <hr />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kaveh-saleminejad"
          >
            Linkedin Page
          </a>
          <hr />
          <a target="_blank" href="mailto:lcaveh@gmail.com">
            Resume
          </a>
          <hr />
          <a target="_blank" href="mailto:lcaveh@gmail.com">
            Email Address
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Home;
