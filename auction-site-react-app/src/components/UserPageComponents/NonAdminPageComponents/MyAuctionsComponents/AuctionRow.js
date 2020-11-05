import React, { Component } from "react";
// import { Link } from "react-router-dom";

class AuctionRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auction: props.auction
        }
    }

    render() {
        return (
            <div className="auction-row" onClick={this.props.onClick}>
                <div className="auction-cell">{this.state.auction.itemName}</div>
                <div className="auction-cell">{this.state.auction.startPrice}</div>
                <div className="auction-cell">{this.state.auction.startTime}</div>
                <div className="auction-cell">{this.state.auction.quantity}</div>
                <div className="auction-cell">{this.state.auction.timeExpire}</div>
                <div className="auction-cell">{this.state.auction.shippingCosts}</div>
                <div className="auction-cell">{this.state.auction.buyNow ? "Available" : "Not Available"}</div>
                <div className="auction-cell">{this.state.auction.itemDescription}</div>
                <div className="auction-cell">{this.state.auction.sellerRating}</div>
            </div>
        );
    }
}

export default AuctionRow;