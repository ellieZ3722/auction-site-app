import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                // returns userid and usertype
                // if a normal user
                window.location.href = "/user/admin/12345";

                // if a admin
                //window.location.href = "/admin";
            },
            (error) => {
                // window.location.href = "/login/fail";
                window.location.href = "/user/nonadmin/12345";
            }
        )
    }

    render() {
        return (
            <div>
                <p>Please login:</p>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={e => this.handleSubmit(e)}>
                        <div className="email-input">
                            <span>Email: </span>
                            <input name="email" type="text" onChange={e => this.handleChange(e)}></input>
                        </div>
                        <div className="password-input">
                            <span>Password: </span>
                            <input name="password" type="text" onChange={e => this.handleChange(e)}></input>
                        </div>
                        <div>
                            <input className="login-submit-button" type ="submit" value="Login"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;