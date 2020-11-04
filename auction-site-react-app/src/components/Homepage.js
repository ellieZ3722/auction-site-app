import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
            <div>
                <Link to="/register">
                    <button>New User</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        );
    }
}

export default Homepage;