import React from "react"
import UIkit from "uikit";
import Umbrellas from "../img/umbrellas.jpg";

UIkit.parallax();

const backStyle={
  backgroundImage : `url(${Umbrellas})`
}
const NavBar = () => {
    return (
      <div className="uk-container"><br/><br/><br/>
        <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style={backStyle}>
          <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
            <h1 data-uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">Kaveh Saleminejad </h1>
            <p data-uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">Full Stack Web Developer</p>
            <p data-uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">Responsive design JS, Angular, React</p>
          </div>
        </div>
      </div>
    )
}

export default NavBar;
