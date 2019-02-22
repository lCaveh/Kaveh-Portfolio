import React from 'react'

class EditComment extends React.Component {
    contentRef = React.createRef();
    titleRef = React.createRef();


    editComment = (event) => {
        event.preventDefault();
        const comment = {
            id: this.props.comment.id,
            project: this.props.comment.project,
            title: this.titleRef.current.value,
            user: this.props.user.displayName,
            userId: this.props.user.uid,
            userImage: this.props.user.photoURL,
            content: this.contentRef.current.value,
            time: `Last edited: ${new Date().toDateString()} - ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
        };

        this.props.editComment(comment);
        this.titleRef.current.value = "";
        this.contentRef.current.value = "";
    };


    render() {
        return (

            <div>
                {this.props.user ?
                    <form className="form-group" onSubmit={this.editComment} >
                        <label htmlFor="title">Title:</label>
                        <br />
                        <input ref={this.titleRef} type="text" defaultValue={this.props.comment.title} />
                        <br />
                        <label htmlFor="content">Content: </label>
                        <br />
                        <textarea
                            ref={this.contentRef}
                            defaultValue={this.props.comment.content}
                            name="content"
                            id=""
                            cols="30"
                            rows="5"
                        />{" "}
                        <br />
                        <button className="btn btn-lg btn-dark" type="submit">
                            Edit
        </button>
                    </form> : <div>Please Log in to Create and View User comments</div>}
            </div>
        );
    }
}

export default EditComment;