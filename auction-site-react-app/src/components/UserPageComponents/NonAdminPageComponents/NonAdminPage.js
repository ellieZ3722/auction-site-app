import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchResultList from "../../SearchComponents/SearchResultList";
import Popup from "./Popup";
import CartPopup from "./CartPopup";

class NonAdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            userId: props.userId,
            isSuspended: false,
            operation: 1,

            itemKeyword: "",
            searchCategories: "",
            showSearchResult: false,
            searchResult: [],

            showPopup: false,
            showCart: false
        }

        this.onClickBack = this.onClickBack.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onCloseCart = this.onCloseCart.bind(this);
        this.onClickCart = this.onClickCart.bind(this);
    }

    componentDidMount() {
        const userIdentityUrl = "";

        fetch(userIdentityUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    username: result.username,
                    isSuspended: result.isSuspended
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
        switch(operation) {
            case 1:
                window.location.href = "/manageaccount/" + this.state.userId;
                break;
            case 2:
                window.location.href = "/myauctions/" + this.state.userId;
                break;
            case 3:
                window.location.href = "/mybids/" + this.state.userId;
                break;
            case 4:
                window.location.href = "/mywatchlist/" + this.state.userId;
                break;
            case 5:
                this.setState({
                    showPopup: true
                })
                break;
            default:
        }
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSearchSubmit(e) {
        e.preventDefault()

        let keywordList = this.state.itemKeyword.split();
        let categoriesList = this.state.searchCategories.split();

        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    showSearchResult: true,
                    searchResult: result.result
                })
            },  
            (error) => {
                // alert("Some errors occured during the searching, please retry...");
                this.setState({
                    showSearchResult: true,
                    searchResult: [
                        {
                            itemName: "item1",
                            startingPrice: 2342342,
                            currentHighestBid: 34535,
                            startTime: "sdfsfs",
                            expireTime: "32425242",
                            shippingCost: "sdfrsf",
                            buyNow: false,
                            itemDescription: "sfsfsdf",
                            sellerRating: "A",
                            status: "opened",
                        },
                        {
                            itemName: "item1",
                            startingPrice: 2342342,
                            currentHighestBid: 34535,
                            startTime: "sdfsfs",
                            expireTime: "32425242",
                            shippingCost: "sdfrsf",
                            buyNow: true,
                            itemDescription: "sfsfsdf",
                            sellerRating: "A",
                            status: "opened"
                        },
                        {
                            itemName: "item1",
                            startingPrice: 2342342,
                            currentHighestBid: 34535,
                            startTime: "sdfsfs",
                            expireTime: "32425242",
                            shippingCost: "sdfrsf",
                            buyNow: true,
                            itemDescription: "sfsfsdf",
                            sellerRating: "A",
                            status: "waiting"
                        },
                    ]
                })
            }
        )
    }

    onClickBack() {
        this.setState({
            showSearchResult: false
        })
    }

    onClose() {
        this.setState({
            showPopup: false
        })
    }

    onClickCart() {
        this.setState({
            showCart: true
        })
    }

    onCloseCart() {
        this.setState({
            showCart: false
        })
    }

    render() {
        let body;
        if (this.state.username !== "") {
            let searchSection;

            if (this.state.showSearchResult) {
                searchSection = (
                    <div>
                        <SearchResultList userId={this.state.userId} onClickBack={this.onClickBack} searchResult={this.state.searchResult}></SearchResultList>
                    </div>
                )
                
            } else {
                searchSection = (
                    <div>
                        <form className="search-bar" onSubmit={e => this.handleSearchSubmit(e)}>
                            <div>Search for items to bid on!</div>
                            <div>
                                <span>Item Keywords: </span>
                                <input name="itemKeyword" type="text" onChange={e => this.handleChange(e)}></input>
                            </div>
                            <div>
                                <span>Categories: </span>
                                <input name="searchCategories" type="text" onChange={e => this.handleChange(e)}></input>
                            </div>
                            <input type="submit" value="Search"></input>
                        </form>
                    </div>
                )
            }

            body = (
                <div>
                    <div>
                        <span>{this.state.username}, WELCOME BACK!</span>
                        <Link to="/">
                            <button>Logout</button>
                        </Link>
                        <button onClick={this.onClickCart}>Cart</button>
                    </div>
                    <div className="operationButtons">
                        <button onClick={() => this.chooseOperation(1)}>Manage Account</button>
                        <button onClick={() => this.chooseOperation(2)}>My Auctions</button>
                        <button onClick={() => this.chooseOperation(3)}>My Bids</button>
                        <button onClick={() => this.chooseOperation(4)}>My Watchlist</button>
                        <button onClick={() => this.chooseOperation(5)}>My Auction Window</button>
                    </div>
                    {searchSection}
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
                <div className="non-admin-page-body">
                    {body}
                </div>
                {this.state.showPopup ? <Popup onClose={this.onClose}></Popup> : null}
                {this.state.showCart ? <CartPopup userId={this.state.userId} onClose={this.onCloseCart}></CartPopup> : null}
            </div>
        );
    }
}

export default NonAdminPage;