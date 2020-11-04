import React, { Component } from "react";
import { Link } from "react-router-dom";

class NonAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userId: props.userId,
            isSuspended: false,
            operation: 1
        }
    }

    componentDidMount() {
        const userIdentityUrl = "";
        fetch(userIdentityUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    username: result.username,
                    userId: result.userId,
                    isSuspended: result.isSuspended
                });
            },
            (error) => {
                // window.location.href = "/user/fail";
                this.setState({
                    username: "qieer",
                    userId: "0123"
                });
            }
        )
    }

    chooseOperation(operation) {
        switch(operation) {
            case 1:
                window.location.href = "/manageaccount/" + this.state.userId;
                break;
            case 2:
                window.location.href = "/myauctions/" + this.state.userId;
                break;
            case 3:
                window.location.href = "/mybids/" + this.state.userId;
                break;
            default:
        }
    }

    render() {
        let body;
        if (this.state.username !== "") {
            body = (
                <div>
                    <div>
                        <span>{this.state.username}, WELCOME BACK!</span>
                        <Link to="/">
                            <button>Logout</button>
                        </Link>
                    </div>
                    <div className="operationButtons">
                        <button onClick={() => this.chooseOperation(1)}>Manage Account</button>
                        <button onClick={() => this.chooseOperation(2)}>My Auctions</button>
                        <button onClick={() => this.chooseOperation(3)}>My Bids</button>
                    </div>
                </div>
            )
        } else {
            body = (
                <div>
                    <p>Your contents are being loaded...</p>
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

export default NonAdminPage;