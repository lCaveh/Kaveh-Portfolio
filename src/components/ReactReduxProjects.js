import React from "react";
import UIkit from "uikit";
import { NavLink } from "react-router-dom";
import Photogram from "../img/Photogram.png";

UIkit.parallax();
UIkit.grid();

const ReactReduxProjects = () => {
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
          <NavLink to="/Photogram">
            <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
              <img src={Photogram} alt="" />
              <h3 className="uk-card-title">Photogram</h3>
              <p>
                A social media web application to make a post by uploading images and discuss about that.
              </p>
              <p>
                The users can upload an image from their devices, write a content and post it. Then all users
                can like or make a comment for them.
              </p>
            </div>
          </NavLink>
        </div>
        <div>
        <NavLink to="/Photogram">
            <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
              <img src={Photogram} alt="" />
              <h3 className="uk-card-title">Photogram</h3>
              <p>
                A social media web application to make a post by uploading images and discuss about that.
              </p>
              <p>
                The users can upload an image from their devices, write a content and post it. Then all users
                can like or make a comment for them.
              </p>
            </div>
          </NavLink>
        </div>
        <div>
        <NavLink to="/Photogram">
            <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
              <img src={Photogram} alt="" />
              <h3 className="uk-card-title">Photogram</h3>
              <p>
                A social media web application to make a post by uploading images and discuss about that.
              </p>
              <p>
                The users can upload an image from their devices, write a content and post it. Then all users
                can like or make a comment for them.
              </p>
            </div>
          </NavLink>>
        </div>
      </div>
    </div>
  );
};

export default ReactReduxProjects;
