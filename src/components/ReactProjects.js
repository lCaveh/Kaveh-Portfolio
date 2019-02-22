import React from "react";
import UIkit from "uikit";
import { NavLink } from "react-router-dom";
import ReactTwitterImage from "../img/React-Twitter.png";

UIkit.parallax();
UIkit.grid();

const ReactProjects = () => {
  return (
    <div className="uk-container">
      <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
        <div>
          <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
            <NavLink to="/ReactTwitter">
              <img className= "react-twitter"src={ReactTwitterImage} alt="" />
            </NavLink>
            <p>
              Here is the Angular section where I used Angular framework, JS
              libraries like Typescript and Firebase database to create some
              good looking web applications
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
      </div>
      <div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
      </div>
    </div>
  );
};

export default ReactProjects;
