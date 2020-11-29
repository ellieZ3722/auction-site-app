import React, { Component } from "react";
import { Link } from "react-router-dom";

class ManageAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.match.params.userid,
            username: "",
            email: "",
            password: "",
            isSuspended: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onSuspendClick = this.onSuspendClick.bind(this);
        this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
    }

    componentDidMount() {
        const url = "http://localhost:23333/fetchUserIdentity/?uid=" + this.state.userId;

        fetch(url, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    username: result.username,
                    email: result.email,
                    isSuspended: result.suspend
                })
            },
            (error) => {
                window.location.href = "/user/fail";
            }
        )
    }

    onSuspendClick() {
        const suspendUrl = "http://localhost:23333/userSuspend/?uid=" + this.state.userId;

        fetch(suspendUrl, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.status === "success") {
                    if (this.state.isSuspended) {
                        alert("Your account has been unsuspended successfully.")
                    } else {
                        alert("Your account has been suspended successfully.")
                    }
                    this.setState({
                        isSuspended: !this.state.isSuspended
                    })
                } else {
                    alert("Your attemp failed due to following reason: " + result.reason)
                }
            },
            (error) => {
                if (this.state.isSuspended) {
                    alert("An error occured when attempted to unsuspend your account...")
                } else {
                    alert("An error occured when attempted to suspend your account...")
                }
            }
        )
    }

    onDeleteClick() {
        const deleteUrl = "http://localhost:23333/userDelete/?uid=" + this.state.userId;
        fetch(deleteUrl, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.status === "success") {
                    alert("Your account has been deleted successfully. Now returning to homepage.")
                    window.location.href = "/";
                } else {
                    alert("Your attempt failed due to the following reason: " + result.reason)
                }
            },
            (error) => {
                alert("An error occured when attempted to delete your account...")
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

    onUpdateSubmit() {
        const updateUrl = "";

        fetch(updateUrl)
        .then(res => res.json())
        .then(
            (result) => {
                alert("Your account has been updated successfully.");
            },
            (error) => {
                alert("An error occured when attempted to update your account...")
            }
        )
    }

    render() {
        let body;

        if (this.state.username !== "") {
            body = (
                <div>
                    <Link to={`/user/nonadmin/` + this.state.userId}>
                        <button>back to user page</button>
                    </Link>
                    <div>
                        <div>Update Account Information:</div>
                        <form onSubmit={this.onUpdateSubmit}>
                            <div>
                                <span>Username: </span>
                                <input value={this.state.username} type="text" name="username" onChange={(e) => this.handleChange(e)}></input>
                            </div>
                            <div>
                                <span>Email: </span>
                                <input value={this.state.email} type="text" name="email" onChange={(e) => this.handleChange(e)}></input>
                            </div>
                            <div>
                                <span>Password: </span>
                                <input type="text" name="password" onChange={(e) => this.handleChange(e)}></input>
                            </div>
                            <input type="submit" value="Update"></input>
                        </form>
                    </div>
                    <div>
                        <button onClick={this.onSuspendClick}>{ this.state.isSuspended ? `Unsuspend Account` : `Suspend Account`}</button>
                    </div>
                    <div>
                        <button onClick={this.onDeleteClick}>Delete Account</button>
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

export default ManageAccountPage;