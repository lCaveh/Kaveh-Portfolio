import React from "react";

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
  };
  render() {
    return (
      <div className="commentForm">
        {this.props.user ? (
          <form className="form-group" onSubmit={this.createComment}>
            <h3>Add New comment</h3>
            <label htmlFor="title">Title:</label>
            <br />
            <input ref={this.titleRef} type="text" />
            <br />
            <label htmlFor="content">Content: </label>
            <br />
            <textarea
              ref={this.contentRef}
              name="content"
              id=""
              cols="30"
              rows="5"
            />{" "}
            <br />
            <button className="btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <span />
        )}
      </div>
    );
  }
}

export default CommentForm;
