import React from "react";
import EditComment from "./EditComment";
import UIkit from "uikit";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editAccess: false
    };
  }

  editTriggered() {
    this.setState({ editAccess: !this.state.editAccess });
  }

  render() {
    return (
      <div>
        <article className="uk-comment uk-comment-primary">
          <header
            className="uk-comment-header uk-grid-medium uk-flex-middle"
            data-uk-grid
          >
            <div className="uk-width-auto">
              <img
                className="uk-comment-avatar"
                src={this.props.comment.userImage}
                width="80"
                height="80"
                alt=""
              />
            </div>
            <div className="uk-width-expand">
              <h4 className="uk-comment-title uk-margin-remove">
                <span className="uk-link-reset" href="#">
                  {this.props.comment.user}
                </span>
              </h4>
              <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li>
                  <span>{this.props.comment.time}</span>
                </li>
                <li>
                  <span>{this.props.user ?<span>
                    {this.props.user.uid === this.props.comment.userId ? (
                      <span>
                        <span
                          onClick={() => {
                            this.editTriggered(this.props.comment);
                          }}
                          className="thumb"
                        >
                          🖋
                        </span>
                        <span
                          onClick={() => {
                            this.props.deleteComment(this.props.comment);
                            UIkit.notification({
                                message: `${this.props.user.displayName}, your comment was deleted!❌`,
                                pos: "top-right",
                                status: "danger"
                              });
                          }}
                          className="thumb"
                        >
                          🗑
                        </span>
                      </span>
                    ) : (
                      <span />
                    )}</span>:<span/>}
                  </span>
                </li>
              </ul>
            </div>
          </header>
          <div className="uk-comment-body">
            <h3>{this.props.comment.title}</h3>
            <p> {this.props.comment.content}</p>
          </div>
          {this.state.editAccess ? (
            <div>
              <EditComment
                user={this.props.user}
                comment={this.props.comment}
                editComment={this.props.editComment}
              />
            </div>
          ) : (
            <div />
          )}
        </article>
      </div>
    );
  }
}

export default Comment;
