import React, { Component } from "react";
import { Link } from "react-router-dom";

class UpdateAuction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.match.params.userid,
            auctionId: props.match.params.auctionid,

            itemName: "",
            startPrice: 0,
            startTime: "",
            quantity: 0,
            timeExpire: "",
            shippingCosts: "",
            buyNow: false,
            itemDescription: "",
            sellerRating: ""
        }
    }

    componentDidMount() {
        const fetchAuctionUrl = "";

        fetch(fetchAuctionUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    itemName: result.itemName,
                    startPrice: result.startPrice,
                    startTime: result.startTime,
                    quantity: result.quantity,
                    timeExpire: result.timeExpire,
                    shippingCosts: result.shippingCosts,
                    buyNow: result.buyNow,
                    itemDescription: result.itemDescription,
                    sellerRating: result.sellerRating
                })
            },
            (error) => {
                window.location.href = "/updateauctionfail/" + this.state.userId;
            }
        )
    }

    onChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const updateUrl = "";

        fetch(updateUrl)
        .then(res => res.json())
        .then(
            (res) => {
                alert("The auction was updated successfully.");
                window.location.href = "/myauctions/" + this.state.userId;
            },
            (error) => {
                alert("An error occurred when attempted to update the auction...");
            }
        )
    }

    render() {
        let body;
        if (this.state.itemName !== "") {
            body = (
                <div>
                    <Link to={"/myauctions/" + this.state.userId}>
                        <button>back to my auctions</button>
                    </Link>
                    <form onSubmit={e => this.onSubmit(e)}>
                        <div>
                            <span>Item Name: </span>
                            <input type="text" name="itemName" value={this.state.itemName} onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <span>Start Price: </span>
                            <input type="text" name="startPrice" value={this.state.startPrice} onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <span>Start Time: </span>
                            <input type="text" name="startTime" value={this.state.startTime} onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <span>Quantity: </span>
                            <input type="text" name="quantity" value={this.state.quantity} onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <span>Expire Time: </span>
                            <input type="text" name="timeExpire" value={this.state.timeExpire} onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <span>Shipping Cost: </span>
                            <input type="text" name="shippingCost" onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <span>Buynow Option: </span>
                            <input type="text" name="buyNow" value={this.state.buyNow} onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <span>Item Description: </span>
                            <input type="text" name="itemDescription" value={this.state.itemDescription} onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <span>Seller Rating: </span>
                            <input type="text" name="sellerRating" value={this.state.sellerRating} onChange={e => this.onChange(e)}></input>
                        </div>
                        <div>
                            <input type ="submit" value="List"></input>
                        </div>
                    </form>
                </div>
            )
        } else {
            body = (
                <div>
                    <p>Your auction is being loaded...</p>
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

export default UpdateAuction;