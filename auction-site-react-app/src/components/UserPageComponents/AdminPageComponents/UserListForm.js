import React, { Component } from "react";

class UserListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userListFetchStatus: "fetching",
            userList: []
        }
    }

    componentDidMount() {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    userListFetchStatus: "success",
                    userList: result.userList
                })
            },
            (error) => {
                // this.setState({
                //     userListFetchStatus: "fail"
                // })
                this.setState({
                    userListFetchStatus: "success",
                    userList: [
                        {
                            userId: "345345",
                            username: "user1",
                            email: "@",
                            isSuspended: true
                        },
                        {
                            userId: "345315",
                            username: "user2",
                            email: "@",
                            isSuspended: false
                        },
                        {
                            userId: "346535",
                            username: "user3",
                            email: "@",
                            isSuspended: false
                        },
                        {
                            userId: "345356",
                            username: "user4",
                            email: "@",
                            isSuspended: false
                        },
                    ]
                })
            }
        )
    }

    suspend(isSuspend, userId) {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                if (isSuspend) {
                    alert("The user has been unsuspended.")
                } else {
                    alert("The user has been suspended.")
                }
            },
            (error) => {
                if (isSuspend) {
                    alert("An error occured when attempted to unsuspend the user.")
                } else {
                    alert("An error occured when attempted to suspend the user.")
                }
            }
        )
    }

    remove(userId) {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("The user has been removed.");
                window.location.reload(); 
            },
            (error) => {
                alert("An error occured when attempted to remove the user.");
            }
        )
    }

    render() {
        let body;
        if (this.state.userListFetchStatus === "success") {
            let form = this.state.userList.map(entry => {
                return (
                    <div key={entry.userId} className="user-row">
                        <div className="user-cell">{entry.userId}</div>
                        <div className="user-cell">{entry.username}</div>
                        <div className="user-cell">{entry.email}</div>
                        <div className="user-cell">
                            <button onClick={() => this.suspend(entry.isSuspended, entry.userId)}>{entry.isSuspended ? "Unsuspend" : "Suspend"}</button>
                        </div>
                        <div className="user-cell">
                            <button onClick={() => this.remove(entry.userId)}>Remove</button>
                        </div>
                    </div>
                )
            })
            body = (
                <div>
                    <div className="user-row">
                        <div className="user-cell">User ID</div>
                        <div className="user-cell">Username</div>
                        <div className="user-cell">Email</div>
                        <div className="user-cell">
                            Suspend
                        </div>
                        <div className="user-cell">
                            Remove
                        </div>
                    </div>
                    {form}
                </div>
            )
        } else if (this.state.userListFetchStatus === "fail") {
            body = (
                <div>
                    <p>An error occured when attempted to load the users...</p>
                </div>
            )
        } else {
            body = (
                <div>
                    <p>The user list is being loaded...</p>
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

export default UserListForm;