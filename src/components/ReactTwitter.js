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
            <div className="uk-card uk-card-default uk-card-body uk-grid-margin">
              <div className="uk-text-center">
                <div className="uk-inline-clip uk-transition-toggle">
                  <img
                    className="uk-transition-scale-up uk-transition-opaque"
                    src={ReactTwitterImage}
                    alt=""
                  />
                </div>
                <hr />
                <a
                  target="_blank"
                  href="https://react-twitter-f9154.firebaseapp.com/"
                >
                  Check live React-Twitter project deployed on Firebase
                </a>
              </div>
              <hr />
              <h2>Project Description:</h2>
              <p>Contributor: James Cho</p>
              <p>Project's Purpose or Goal: A simple Twitter application</p>
              <p>List of features:</p>
              <ul>
                <li>
                  It allows users and guest to see the list of all twitts and
                  filter them based on time,likes, or dislikes.
                </li>
                <li>
                  It lets clients to login with their Google account to be able
                  create,edit, and delete their own twitts. They also could like
                  or dislike other's twitts as well.
                </li>
                <li>
                  It listen to the database update, and if any user create or
                  delete a twitt, it will inform all other users by sending a
                  self destruct alert named tostr.
                </li>
              </ul>
              <p>List of tools, libraries, framework, database:</p>
              <ul>
                <li>Node Js, Create-React-App</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Firebase</li>
                <li>UIKit</li>
              </ul>
            </div>
          </div>
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
                  <br />
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
        </div>
      </div>
    );
  }
}

export default ReactTwitter;
