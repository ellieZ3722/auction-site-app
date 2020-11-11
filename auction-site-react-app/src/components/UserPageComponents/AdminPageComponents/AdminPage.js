import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoriesListForm from "./CategoryManagement/CategoriesListForm";
import UserListForm from "./UserListForm";
import FlaggedItemListForm from "./FlaggedItemListForm"
import CustomerSupportEmailListForm from "./CustomerSupportManagement/CustomerSupportEmailListForm";
import AuctionManagement from "./AuctionManagement/AuctionManagement";

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userId: props.userId,
            operation: 1
        }
    }

    componentDidMount() {
        const userIdentityUrl = "";
        fetch(userIdentityUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    username: result.username,
                    userId: result.userId
                });
            },
            (error) => {
                // window.location.href = "/user/fail";
                this.setState({
                    username: "qieer",
                    userId: "0123"
                });
            }
        )
    }

    chooseOperation(operation) {
        this.setState({ operation: operation})
    }

    render() {
        let body;
        let subbody;

        switch(this.state.operation) {
            case 1:
                subbody = <UserListForm userId={this.state.userId}></UserListForm>;
                break;
            case 2:
                subbody = <AuctionManagement userId={this.state.userId}></AuctionManagement>;
                break;
            case 3:
                subbody = <FlaggedItemListForm userId={this.state.userId}></FlaggedItemListForm>;
                break;
            case 4:
                subbody = <CategoriesListForm userId={this.state.userId}></CategoriesListForm>;
                break;
            case 5:
                subbody = <CustomerSupportEmailListForm userId={this.state.userId}></CustomerSupportEmailListForm>;
                break;
            default:

        }

        if (this.state.username !== "") {

            body = (
                <div>
                    <div>
                        <span>{this.state.username}, WELCOME BACK!</span>
                        <Link to="/">
                            <button>Logout</button>
                        </Link>
                    </div>
                    <div className="operationButtons">
                        <button onClick={() => this.chooseOperation(1)}>Users Management</button>
                        <button onClick={() => this.chooseOperation(2)}>Auctions Management</button>
                        <button onClick={() => this.chooseOperation(3)}>Flagged Items</button>
                        <button onClick={() => this.chooseOperation(4)}>Categories Management</button>
                        <button onClick={() => this.chooseOperation(5)}>Check Customer Support Emails</button>
                    </div>
                    {subbody}
                </div>
            )
        } else {
            body = (
                <div>
                    <p>Your contents are being loaded...</p>
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

export default AdminPage;