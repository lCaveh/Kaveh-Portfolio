import React from "react";
import UIkit from "uikit";
import Umbrellas from "../img/umbrellas.jpg";
import { NavLink } from "react-router-dom"

UIkit.parallax();
UIkit.sticky();

const backStyle = {
  backgroundImage: `url(${Umbrellas})`
};
class NavBar extends React.Component {
  render() {
    return (
      <div className="uk-container">
        <nav className="uk-navbar uk-navbar-container uk-margin">
          <div className="uk-navbar-left">
            <NavLink to="/" className="uk-navbar-toggle">Home</NavLink>
          </div>
          {/* <div className="uk-navbar-left">
            <NavLink to="/About" className="uk-navbar-toggle">About</NavLink>
          </div> */}
          <div className="uk-navbar-right">
            <span className="uk-navbar-toggle">{!this.props.user ? (
                  <span onClick={this.props.login}>LogIn</span>
                ) : (
                  <span onClick={this.props.logout}>
                    {this.props.user.displayName}{" "}
                  </span>
                )}</span>
          </div>
        </nav>

        <br />

        <div
          className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
          style={backStyle}
        >
          <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
            <h1 data-uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">
              Kaveh Saleminejad{" "}
            </h1>
            <p data-uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
              Full Stack Web Developer
            </p>
            <p data-uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
              Responsive design JS, Angular, React
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
