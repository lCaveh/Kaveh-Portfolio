import React from "react";
import UIkit from "uikit";

class EditComment extends React.Component {
  contentRef = React.createRef();
  titleRef = React.createRef();

  editComment = event => {
    event.preventDefault();
    const comment = {
      id: this.props.comment.id,
      project: this.props.comment.project,
      title: this.titleRef.current.value,
      user: this.props.user.displayName,
      userId: this.props.user.uid,
      userImage: this.props.user.photoURL,
      content: this.contentRef.current.value,
      time: `Last edited: ${new Date().toDateString()} - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    };
    UIkit.notification({
      message: `${this.props.user.displayName}, your comment edited successfully✍🏻`,
      pos: "top-right",
      status: "warning"
    });
    this.props.editComment(comment);
  };

  render() {
    return (
      <div>
        {this.props.user ? (
          <form onSubmit={this.editComment}>
            <div className="uk-margin">
              <label className="uk-form-label">Title</label>
              <div className="uk-form-controls">
                <input
                  ref={this.titleRef}
                  className="uk-input"
                  id="form-stacked-text"
                  type="text"
                  placeholder="Title..."
                  defaultValue={this.props.comment.title}
                  required
                />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Content</label>
              <div className="uk-form-controls">
                <textarea
                  ref={this.contentRef}
                  name="content"
                  rows="5"
                  className="uk-textarea"
                  placeholder="Content..."
                  defaultValue={this.props.comment.title}
                  required
                />
              </div>
            </div>
            <button type="submit" className="uk-button uk-button-text">
              Submit
            </button>
          </form>
        ) : (
          <div>Please Log in to make a comment</div>
        )}
      </div>
    );
  }
}

export default EditComment;
