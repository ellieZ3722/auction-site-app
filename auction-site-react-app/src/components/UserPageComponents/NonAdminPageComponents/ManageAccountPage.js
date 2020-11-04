import React, { Component } from "react";

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
    }

    componentDidMount() {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    username: result.username,
                    email: result.username,
                    isSuspended: result.isSuspended
                })
            },
            (error) => {
                    
            }
        )
    }

    onSuspendClick() {
        // bug to be fixed
        if (this.state.isSuspended) {
            alert("Your account has already been suspended.")
        } else {
            const suspendUrl = "";
            fetch(suspendUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    alert("Your account has been suspended successfully.")
                },
                (error) => {
                    alert("An error occured when attempted to suspend your account...")
                }
            )
        }
    }

    onDeleteClick() {
        const deleteUrl = "";
        fetch(deleteUrl)
        .then(res => res.json())
        .then(
            (result) => {
                alert("Your account has been deleted successfully. Now returning to homepage.")
                window.location.href = "/";
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
        return (
            <div>
                <p>Update Account Information:</p>
                <form onSubmit={this.onUpdateSubmit}>
                    <div>
                        <span>Username: </span>
                        <input type="text" name="username" onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <span>Email: </span>
                        <input type="text" name="email" onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <span>Password: </span>
                        <input type="text" name="password" onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    <input type="submit" value="Update"></input>
                </form>
                <div>
                    <button onClick={this.onSuspendClick}>Suspend Account</button>
                </div>
                <div>
                    <button onClick={this.onDeleteClick}>Delete Account</button>
                </div>
            </div>
        );
    }
}

export default ManageAccountPage;