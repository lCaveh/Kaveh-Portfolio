import React from "react";
import UIkit from "uikit";
import ReactTwitterImage from "../img/React-Twitter.png";
import Comment from "./Comment";
import AddComment from "./AddComment";

class ReactTwitter extends React.Component {
  render() {
    let project = "React-Twitter";
    return (
      <div>
        <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          <img src={ReactTwitterImage} alt="" />
          <a src="https://react-twitter-f9154.firebaseapp.com/">
            React-Twitter
          </a>
        </div>
        <div>
          {this.props.comments.map(comment => (
            <Comment
              comment={comment}
              key={comment.id}
              user={this.props.user}
              editComment={this.props.editComment}
              deleteComment={this.props.deleteComment}
            />
          ))}
        </div>
        <div>
          <AddComment
            addComment={this.props.addComment}
            user={this.props.user}
            project="React-Project"
          />
        </div>
      </div>
    );
  }
}

export default ReactTwitter;
