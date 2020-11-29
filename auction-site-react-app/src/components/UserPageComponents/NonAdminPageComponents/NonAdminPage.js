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
            categoryKeyword: "",
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
        const userIdentityUrl = "http://localhost:23333/fetchUserIdentity/?uid=" + this.state.userId;

        fetch(userIdentityUrl, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    username: result.username,
                    isSuspended: result.suspended
                });
            },
            (error) => {
                console.log(error)
                window.location.href = "/user/fail";
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

    handleKeywordSearchSubmit(e) {
        e.preventDefault()

        let keyword = this.state.itemKeyword;

        const url = "http://localhost:8080/auction/item/keyword/" + keyword;

        fetch(url, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log("search result", result)
                this.setState({
                    showSearchResult: true,
                    // searchResult: result
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
                                    buyNowPrice: 435
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
                                    status: "opened",
                                    buyNowPrice: 435
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
                                    status: "waiting",
                                    buyNowPrice: 435
                                },
                            ]
                })
            },  
            (error) => {
                alert("Some errors occured during the searching, please retry...");
                // this.setState({
                //     showSearchResult: true,
                //     searchResult: [
                //         {
                //             itemName: "item1",
                //             startingPrice: 2342342,
                //             currentHighestBid: 34535,
                //             startTime: "sdfsfs",
                //             expireTime: "32425242",
                //             shippingCost: "sdfrsf", 
                //             buyNow: false,
                //             itemDescription: "sfsfsdf",
                //             sellerRating: "A",
                //             status: "opened",
                //             buyNowPrice: 435
                //         },
                //         {
                //             itemName: "item1",
                //             startingPrice: 2342342,
                //             currentHighestBid: 34535,
                //             startTime: "sdfsfs",
                //             expireTime: "32425242",
                //             shippingCost: "sdfrsf",
                //             buyNow: true,
                //             itemDescription: "sfsfsdf",
                //             sellerRating: "A",
                //             status: "opened",
                //             buyNowPrice: 435
                //         },
                //         {
                //             itemName: "item1",
                //             startingPrice: 2342342,
                //             currentHighestBid: 34535,
                //             startTime: "sdfsfs",
                //             expireTime: "32425242",
                //             shippingCost: "sdfrsf",
                //             buyNow: true,
                //             itemDescription: "sfsfsdf",
                //             sellerRating: "A",
                //             status: "waiting",
                //             buyNowPrice: 435
                //         },
                //     ]
                // })
            }
        )
    }

    handleCategorySearchSubmit(e) {
        e.preventDefault()

        let keyword = this.state.categoryKeyword;

        const url = "http://localhost:8080/auction/item/category/" + keyword;

        fetch(url, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log("search result", result)
                this.setState({
                    showSearchResult: true,
                    searchResult: result
                })
            },  
            (error) => {
                alert("Some errors occured during the searching, please retry...");
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
                        <div>Search for items to bid on!</div>
                        <form className="search-bar" onSubmit={e => this.handleKeywordSearchSubmit(e)}>
                            <div>
                                <span>Search by Keyword: </span>
                                <input name="itemKeyword" type="text" onChange={e => this.handleChange(e)}></input>
                            </div>
                            <input type="submit" value="GO!"></input>
                        </form>
                        <form className="search-bar" onSubmit={e => this.handleCategorySearchSubmit(e)}>
                            <div>
                                <span>Search by Category: </span>
                                <input name="categoryKeyword" type="text" onChange={e => this.handleChange(e)}></input>
                            </div>
                            <input type="submit" value="GO!"></input>
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
                {this.state.showPopup ? <Popup userId={this.props.userId} onClose={this.onClose}></Popup> : null}
                {this.state.showCart ? <CartPopup userId={this.props.userId} onClose={this.onCloseCart}></CartPopup> : null}
            </div>
        );
    }
}

export default NonAdminPage;