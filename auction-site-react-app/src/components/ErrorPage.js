import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routeSubfixUserid: props.match.params.userid
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.errorMessage}</p>
                <Link to={this.props.route + this.state.routeSubfixUserid}>
                    <button>{this.props.buttonName}</button>
                </Link>
            </div>
        );
    }
}

export default ErrorPage;