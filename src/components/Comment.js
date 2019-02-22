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
                                <span>
                                    <b> {this.props.comment.likes}</b>
                                </span>
                                <span
                                    onClick={() => {
                                        this.props.addLikes(this.props.comment);
                                    }}
                                    className="thumb">
                                    👍
                                    </span>

                                <span>
                                    <b> {this.props.comment.dislikes}</b>
                                </span>
                                <span onClick={() => {
                                    this.props.addDislikes(this.props.comment);
                                }}
                                    className="thumb">



                                    👎
                                </span>

                                {this.props.editcomment ?
                                    <span>

                                        <span
                                            onClick={() => { this.editTriggered(this.props.comment) }}
                                            className="thumb">
                                            🖋
                                        </span>
                                        <span onClick={() => { this.props.deletecomment(this.props.comment) }}
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
                        <Editcomment user={this.props.user} comment={this.props.comment} editcomment={this.props.editcomment}></Editcomment>
                    </div> : <div></div>
                }


            </div>

        )
    }
}



export default Comment;