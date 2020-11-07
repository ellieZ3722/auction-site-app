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
                            userId: "34535",
                            username: "user1",
                            email: "@"
                        },
                        {
                            userId: "34535",
                            username: "user2",
                            email: "@"
                        },
                        {
                            userId: "34535",
                            username: "user3",
                            email: "@"
                        },
                        {
                            userId: "34535",
                            username: "user4",
                            email: "@"
                        },
                    ]
                })
            }
        )
    }

    suspend(userId) {}

    remove(userId) {}

    render() {
        let body;
        if (this.state.userListFetchStatus === "success") {
            body = this.state.userList.map(entry => {
                return (
                    <div className="user-row">
                        <div className="user-cell">{entry.userId}</div>
                        <div className="user-cell">{entry.username}</div>
                        <div className="user-cell">{entry.email}</div>
                        <div className="user-cell">
                            <button onClick={() => this.suspend(entry.userId)}>Suspend</button>
                        </div>
                        <div className="user-cell">
                            <button onClick={() => this.remove(entry.userId)}>Remove</button>
                        </div>
                    </div>
                )
            })
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
                {body}
            </div>
        );
    }
}

export default UserListForm;