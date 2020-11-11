import React, { Component } from "react";
import './style.css';

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            replyContent: "Enter your reply...",
            showReplyPanel: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReply = this.handleReply.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const url = "";
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("Your reply has been successfully sent to the customer.")
                this.props.onClose();
                window.location.reload();
            },
            (error) => {
                alert("An error occured when attempted to send the reply...")
            }
        )
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleReply() {
        this.setState({
            showReplyPanel: true
        })
    }

    render() {
        let replyPanel = (
            <div>
                <form onSubmit={e => this.handleSubmit(e)} id="replyForm">
                    <textarea name="replyContent" form="replyForm" onChange={e => this.handleChange(e)} value={this.state.replyContent} />
                    <div>
                        <input type="submit" value="Modify"></input>
                        <button onClick={this.props.onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        )

        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-entry">
                        <span>Title: </span>
                        <div>{this.props.email.emailTitle}</div>
                    </div>
                    <div className="modal-entry">
                        <span>Time Received: </span>
                        <div>{this.props.email.receivedTime}</div>
                    </div>
                    <div className="modal-entry">
                        <span>User ID: </span>
                        <div>{this.props.email.userId}</div>
                    </div>
                    <div className="modal-entry">
                        <div>Content: </div>
                        <div>{this.props.email.content}</div>
                    </div>
                    { this.state.showReplyPanel ? null : <button onClick={this.handleReply}>Reply</button> }
                    { this.state.showReplyPanel ? replyPanel : null }
                </div>
            </div>
        );
    }
}

export default Popup;