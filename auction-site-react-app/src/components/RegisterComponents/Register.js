import React, { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const url = "http://localhost:23333/userCreate/";

        var data = {
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password,
            "user_bio": this.state.userBio
        }

        fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            body: JSON.stringify(data),
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                window.location.href = "/register/success";
            },
            (error) => {
                window.location.href = "/register/fail";
            }
        )
    }

    render() {
        return (
            <div>
                <p>Register as a member!</p>
                <div className="register-form-container">
                    <form className="register-form" onSubmit={e => this.handleSubmit(e)}>
                        <div className="username-input">
                            <span>Username: </span>
                            <input name="username" type="text" onChange={e => this.handleChange(e)}></input>
                        </div>
                        <div className="email-input">
                            <span>Email: </span>
                            <input name="email" type="text" onChange={e => this.handleChange(e)}></input>
                        </div>
                        <div className="password-input">
                            <span>Password: </span>
                            <input name="password" type="text" onChange={e => this.handleChange(e)}></input>
                        </div>
                        <div className="password-input">
                            <span>Bio: </span>
                            <input name="userBio" type="text" onChange={e => this.handleChange(e)}></input>
                        </div>
                        <div>
                            <input className="register-submit-button" type ="submit" value="Register"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;