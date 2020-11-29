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
        let subfix = this.state.routeSubfixUserid ? this.state.routeSubfixUserid : "";
        return (
            <div>
                <p>{this.props.errorMessage}</p>
                <Link to={this.props.route + subfix}>
                    <button>{this.props.buttonName}</button>
                </Link>
            </div>
        );
    }
}

export default ErrorPage;