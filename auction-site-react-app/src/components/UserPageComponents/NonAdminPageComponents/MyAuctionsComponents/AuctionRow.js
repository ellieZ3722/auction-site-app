import React, { Component } from "react";
// import { Link } from "react-router-dom";

class AuctionRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auctionId: props.auction.itemId,

            itemName: "",
            startTime: props.auction.startTime,
            quantity: "",
            timeExpire: props.auction.endTime,
            shippingCosts: "",
            buyNow: props.auction.canBuyNow,
            itemDescription: "",
            status: props.auction.bidStatus,
            bidCount: props.auction.bidCount,
            buyNowPrice: 0
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/auction/item/" + this.state.auctionId;

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
                this.setState({
                    itemName: result.name,
                    quantity: result.quantity,
                    shippingCosts: result.shippingCosts,
                    itemDescription: result.description
                })
            },
            (error) => {
            }
        )
    }

    render() {

        return (
            <div className="auction-row" onClick={this.props.onClick}>
                <div className="auction-cell">{this.state.itemName}</div>
                <div className="auction-cell">{this.state.startTime}</div>
                <div className="auction-cell">{this.state.timeExpire}</div>
                <div className="auction-cell">{this.state.status}</div>
                <div className="auction-cell">{this.state.quantity}</div>
                <div className="auction-cell">{this.state.shippingCosts}</div>
                <div className="auction-cell">{this.state.buyNow ? "Available" : "Not Available"}</div>
                <div className="auction-cell">{this.state.buyNow ? this.state.buyNowPrice : null }</div>
                <div className="auction-cell">{this.state.itemDescription}</div>
                <div className="auction-cell">{this.state.bidCount}</div>
            </div>
        );
    }
}

export default AuctionRow;