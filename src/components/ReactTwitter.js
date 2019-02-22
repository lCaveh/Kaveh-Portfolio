import React from "react";
import UIkit from "uikit";
import ReactTwitterImage from "../img/React-Twitter.png";

const ReactTwitter = () => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
        <img src={ReactTwitterImage} alt="" />

        <p>
          Here is the Angular section where I used Angular framework, JS
          libraries like Typescript and Firebase database to create some good
          looking web applications
        </p>
      </div>
      <div>
        {this.props.posts.map(post => (
          <Comment comment={comment} key={comment.id} user={this.props.user} />
        ))}
      </div>
    </div>
  );
};

export default ReactTwitter;
