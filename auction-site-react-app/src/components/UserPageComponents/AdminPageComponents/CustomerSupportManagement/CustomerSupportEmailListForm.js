import React, { Component } from "react";
import Popup from './Popup';
import './style.css';

class CustomerSupportEmailListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailFetchStatus: "fetching",
            emailList: [],
            selectedEmail: null,
            showPopup: false
        }

        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    emailFetchStatus: "success",
                    emailList: result.emailList
                })
            },
            (error) => {
                // this.setState({
                //     emailFetchStatus: "fail"
                // })
                this.setState({
                    emailFetchStatus: "success",
                    emailList: [
                        {
                            userId: "2353463",
                            receivedTime: "64747",
                            emailTitle: "title1",
                            content: "1111111111112143523534663463",
                            replyStatus: false
                        },
                        {
                            userId: "2353463",
                            receivedTime: "64747",
                            emailTitle: "title2",
                            content: "1111111111112143523534663463",
                            replyStatus: false
                        },
                        {
                            userId: "2353463",
                            receivedTime: "64747",
                            emailTitle: "title3",
                            content: "1111111111112143523534663463",
                            replyStatus: false
                        },
                        {
                            userId: "2353463",
                            receivedTime: "64747",
                            emailTitle: "title4",
                            content: "1111111111112143523534663463",
                            replyStatus: false
                        }
                    ]
                })
            }
        )
    }

    onClick(entry) {
        this.setState({
            selectedEmail: entry,
            showPopup: true
        })
    }

    onClose() {
        this.setState ({
            showPopup: false
        })
    }

    render() {
        let body;

        if (this.state.emailFetchStatus === "success") {

            let form = this.state.emailList.map(entry => {
                return (
                    <div className="user-row" onClick={() => this.onClick(entry)}>
                        <div className="user-cell">{entry.receivedTime}</div>
                        <div className="user-cell">{entry.userId}</div>
                        <div className="user-cell">{entry.emailTitle}</div>
                        <div className="user-cell">{entry.replyStatus ? "Replied" : "Not Replied"}</div>
                    </div>
                )
            })

            body = (
                <div>
                    <div className="email-section-body">
                        <div className="user-row">
                            <div className="user-cell">Time</div>
                            <div className="user-cell">User ID</div>
                            <div className="user-cell">Email Title</div>
                            <div className="user-cell">Reply Status</div>
                        </div>
                        {form}
                    </div>
                    {this.state.showPopup ? <Popup email={this.state.selectedEmail} onClose={this.onClose}></Popup> : null}
                </div>
            )
        } else if (this.state.flaggedItemListFetchStatus === "fail") {
            body =(
                <div>
                    <p>An error occured when attempted to load the emails...</p>
                </div>
            )
        } else {
            body = (
                <div>
                    <p>The emails are being loaded...</p>
                </div>
            )
        }

        return (
            <div>
                {body}
            </div>
        );
    }
}

export default CustomerSupportEmailListForm;