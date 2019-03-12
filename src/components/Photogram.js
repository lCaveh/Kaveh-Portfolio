import React from "react";
import PhotogramImage from "../img/Photogram.png";
import Comment from "./Comment";
import AddComment from "./AddComment";

class Photogram extends React.Component {
  render() {
    let project = "Photogram";
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
                    src={PhotogramImage}
                    alt=""
                  />
                </div>
                <hr />
                <a
                  target="_blank"
                  href="https://photogram-46a24.firebaseapp.com"
                >
                  Check live Photogram project deployed on Firebase
                </a>
              </div>
              <hr />
              <h2>Project Description:</h2>
              <p>
                Project's Purpose or Goal: A social media application to show
                photos and discuss about them
              </p>
              <p>List of features:</p>
              <ul>
                <li>
                  It allows users and guest to see the list of all posts by
                  clicking on "All Post" tap which fixed at bottom of view.
                </li>
                <li>
                  Clients could login into app with their Google account to get
                  access to more features like creating post, like other's post,
                  or make a comment for them.
                </li>
                <li>
                  It allows users to browse images inside their devices
                  (Computer, tablet, or cellphones), upload them into firebase
                  storage and make a new post by them.
                </li>
              </ul>
              <p>List of tools, libraries, framework, database:</p>
              <ul>
                <li>Node Js, Create-React-App</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Firebase</li>
                <li>UIKit</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              {this.props.comments.map(comment => (
                <div key={comment.id}>
                  {comment.project === "Photogram" ? (
                    <div>
                      <Comment
                        comment={comment}
                        user={this.props.user}
                        editComment={this.props.editComment}
                        deleteComment={this.props.deleteComment}
                        project="Photogram"
                      />
                      <br />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </div>
            <div>
              <AddComment
                addComment={this.props.addComment}
                user={this.props.user}
                project="Photogram"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photogram;
