import React from 'react'
import EditComment from './EditComment';


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editAccess: false,
        }
    }

    editTriggered() {

        this.setState({ editAccess: !this.state.editAccess });
    }

    render() {
        return (

            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.comment.title}</h5>
                        <p className="card-text">Content: {this.props.comment.content}</p>
                        <br />
                        <hr />
                        <div className="comment-info-container">

                            <div className="text-info">
                                <span className="card-text commentedBy comment-info">
                                    commented by{" "}
                                    <img className="commentImg" src={this.props.comment.userImage} alt="" />

                                    {this.props.comment.user}    -   {this.props.comment.time}
                                </span>
                            </div>

                            <div className="clickable-info">
                                

                                {this.props.editComment ?
                                    <span>

                                        <span
                                            onClick={() => { this.editTriggered(this.props.comment) }}
                                            className="thumb">
                                            🖋
                                        </span>
                                        <span onClick={() => { this.props.deleteComment(this.props.comment) }}
                                            className="thumb">
                                            🗑
                                     </span>
                                    </span> : <span></span>}
                            </div>
                        </div>
                    </div>
                </div>


                {(this.state.editAccess) ?
                    <div>
                        <EditComment user={this.props.user} comment={this.props.comment} editComment={this.props.editcomment}></EditComment>
                    </div> : <div></div>
                }
            </div>
        )
    }
}



export default Comment;