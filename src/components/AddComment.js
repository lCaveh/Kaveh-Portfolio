import React from "react";
import UIkit from "uikit";


class CommentForm extends React.Component {
  contentRef = React.createRef();
  titleRef = React.createRef();

  createComment = event => {
    event.preventDefault();
    const comment = {
      id: "",
      project: this.props.project,
      title: this.titleRef.current.value,
      user: this.props.user.displayName,
      userId: this.props.user.uid,
      userImage: this.props.user.photoURL,
      content: this.contentRef.current.value,
      time: `commented: ${new Date().toDateString()} - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
    };
    this.props.addComment(comment);
    this.titleRef.current.value = "";
    this.contentRef.current.value = "";
    UIkit.notification({message: `Thank you ${this.props.user.displayName} for your comment👍🏻`, pos: 'top-right', status: 'success'});
  };
  render() {
    return (
      <div className="commentForm uk-container">
        {this.props.user ? (
          <form onSubmit={this.createComment}>
    <div className="uk-margin">
        <label className="uk-form-label">Title</label>
        <div className="uk-form-controls">
            <input ref={this.titleRef} className="uk-input" id="form-stacked-text" type="text" placeholder="Title..." required/>
        </div>
    </div>
    <div className="uk-margin">
        <label className="uk-form-label">Content</label>
        <div className="uk-form-controls">
        <textarea ref={this.contentRef} name="content" rows="5" className="uk-textarea" placeholder="Content..." required></textarea>
        </div>
    </div>
          <button type="submit" className="uk-button uk-button-text">Submit</button>
      </form>
        ) : (
          <span />
        )}
        <br/><br/><br/>
      </div>
    );
  }
}

export default CommentForm;
