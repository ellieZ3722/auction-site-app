import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <p>{this.props.errorMessage}</p>
                <Link to={this.props.route}>
                    <button>{this.props.buttonName}</button>
                </Link>
            </div>
        );
    }
}

export default ErrorPage;