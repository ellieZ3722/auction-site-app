import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterSuccess extends Component {
    render() {
        return (
            <div>
                <p>You've been registered successfully!</p>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        );
    }
}

export default RegisterSuccess;