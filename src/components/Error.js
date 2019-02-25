import React from "react";
import PropTypes from "prop-types";

const Error = props => {
  return (
    <div className="uk-container">
      <br />
      <br />
      <div data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
        <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-text-center">
          <h1 className="uk-card-title">This Page Doesn't Exist ⛔</h1>
        </div>
      </div>
    </div>
  );
};

export default Error;
