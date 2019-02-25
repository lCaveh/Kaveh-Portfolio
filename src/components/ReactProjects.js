import React from "react";
import UIkit from "uikit";
import { NavLink } from "react-router-dom";
import ReactTwitterImage from "../img/React-Twitter.png";

UIkit.parallax();
UIkit.grid();

const ReactProjects = () => {
  return (
    <div className="uk-container">
      <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-text-center">
        <h3 className="uk-card-title ">
          Click on any project below to see it's details
        </h3>
      </div>
      <div
        className="uk-child-width-expand@s uk-text-center"
        data-uk-grid="parallax: 150"
        uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true"
      >
        <div>
          <NavLink to="/ReactTwitter">
            <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
              <img src={ReactTwitterImage} alt="" />
              <h3 className="uk-card-title">Simple Twitter</h3>
              <p>
                In this project, people can login with their Google account to
                be able create, edit and delete their own twitts.
              </p>
              <p>
                In addition all users and gusts can see other's twitts and use
                different filters to sort them
              </p>
            </div>
          </NavLink>
        </div>
        <div>
        <NavLink to="/ReactTwitter">
            <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
              <img src={ReactTwitterImage} alt="" />
              <h3 className="uk-card-title">Simple Twitter</h3>
              <p>
                In this project, people can login with their Google account to
                be able create, edit and delete their own twitts.
              </p>
              <p>
                In addition all users and gusts can see other's twitts and use
                different filters to sort them
              </p>
            </div>
          </NavLink>
        </div>
        <div>
        <NavLink to="/ReactTwitter">
            <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
              <img src={ReactTwitterImage} alt="" />
              <h3 className="uk-card-title">Simple Twitter</h3>
              <p>
                In this project, people can login with their Google account to
                be able create, edit and delete their own twitts.
              </p>
              <p>
                In addition all users and gusts can see other's twitts and use
                different filters to sort them
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReactProjects;
