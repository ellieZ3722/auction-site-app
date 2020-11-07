import React, { Component } from "react";
// import { Link } from "react-router-dom";

class AuctionRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auctionId: props.auction.auctionId,

            itemName: props.auction.itemName,
            startPrice: props.auction.startPrice,
            startTime: props.auction.startTime,
            quantity: props.auction.quantity,
            timeExpire: props.auction.timeExpire,
            shippingCosts: props.auction.shippingCosts,
            buyNow: props.auction.buyNow,
            itemDescription: props.auction.itemDescription,
            sellerRating: props.auction.sellerRating,
            status: props.auction.status,
            categories: props.auction.categories
        }
    }

    render() {
        let categories = "";
        for (var i = 0; i < this.state.categories.length; i++) {
            categories = categories + this.state.categories[i];
            if (i !== this.state.categories.length - 1) {
                categories = categories + " / ";
            }
        }

        return (
            <div className="auction-row" onClick={this.props.onClick}>
                <div className="auction-cell">{this.state.itemName}</div>
                <div className="auction-cell">{categories}</div>
                <div className="auction-cell">{this.state.startPrice}</div>
                <div className="auction-cell">{this.state.startTime}</div>
                <div className="auction-cell">{this.state.timeExpire}</div>
                <div className="auction-cell">{this.state.status}</div>
                <div className="auction-cell">{this.state.quantity}</div>
                <div className="auction-cell">{this.state.shippingCosts}</div>
                <div className="auction-cell">{this.state.buyNow ? "Available" : "Not Available"}</div>
                <div className="auction-cell">{this.state.itemDescription}</div>
                <div className="auction-cell">{this.state.sellerRating}</div>
            </div>
        );
    }
}

export default AuctionRow;