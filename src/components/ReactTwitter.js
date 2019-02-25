import React from "react";
import ReactTwitterImage from "../img/React-Twitter.png";
import Comment from "./Comment";
import AddComment from "./AddComment";

class ReactTwitter extends React.Component {
  render() {
    let project = "React-Twitter";
    return (
      <div className="uk-container">
        <br />
        <div className="uk-child-width-expand@s" data-uk-grid>
          <div>
          <div>
          {this.props.comments.map(comment => (
            <div key={comment.id}>
            <Comment
              comment={comment}
              user={this.props.user}
              editComment={this.props.editComment}
              deleteComment={this.props.deleteComment}
              />
              <br/>
              </div>
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
          <div>
          <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
          <div className="uk-text-center">
            <div className="uk-inline-clip uk-transition-toggle">
              <img
                className="uk-transition-scale-up uk-transition-opaque"
                src={ReactTwitterImage}
                alt=""
              />
            </div>
            <a target="_blank" href="https://react-twitter-f9154.firebaseapp.com/">
              React-Twitter
            </a>
          </div>

        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactTwitter;
