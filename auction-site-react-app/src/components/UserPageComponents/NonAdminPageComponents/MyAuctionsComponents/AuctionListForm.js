import React, { Component } from "react";
import AuctionRow from './AuctionRow';

class AuctionListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.userId,
            // auctionList: props.auctionList 
            auctionList: [
                {   
                    auctionId: "1",
                    itemName: "item1",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: false,
                    buyNowPrice: 23423,
                    itemDescription: "Description...",
                    sellerRating: "A",
                    status: "Started",
                    categories: ["cat1", "cat2", "cat3"],

                    bidCount: 1
                },
                {
                    auctionId: "2",
                    itemName: "item2",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: true,
                    buyNowPrice: 23423,
                    itemDescription: "Description...",
                    sellerRating: "A",
                    status: "Not Started",
                    categories: ["cat1", "cat2", "cat3"],

                    bidCount: 1
                },
                {
                    auctionId: "3",
                    itemName: "item3",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: false,
                    buyNowPrice: 23423,
                    itemDescription: "Description...",
                    sellerRating: "A",
                    status: "Closed",
                    categories: ["cat1", "cat2", "cat3"],

                    bidCount: 1
                },
                {
                    auctionId: "4",
                    itemName: "item4",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: false,
                    buyNowPrice: 23423,
                    itemDescription: "Description...",
                    sellerRating: "A",
                    status: "Cancelled",
                    categories: ["cat1", "cat2", "cat3"],

                    bidCount: 1
                },
                {
                    auctionId: "5",
                    itemName: "item5",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: false,
                    buyNowPrice: 23423,
                    itemDescription: "Description...",
                    sellerRating: "A",
                    status: "Cancelled",
                    categories: ["cat1", "cat2", "cat3"],

                    bidCount: 1
                }
            ]
        }

        this.updateAuction = this.updateAuction.bind(this);
    }

    updateAuction(auctionId) {
        window.location.href = "/updateAuction/" + this.state.userId + "/" + auctionId;
    }

    render() {
        let form = this.state.auctionList.map(entry => {
            let auctionId = entry.auctionId;
            return (
                <AuctionRow key={entry.auctionId} onClick={() => this.updateAuction(auctionId)} auction={entry}></AuctionRow>
            )
        })
        
        return (
            <div>
                <div className="auction-row">
                    <div className="auction-cell">Item Name</div>
                    <div className="auction-cell">Categories</div>
                    <div className="auction-cell">Start Price</div>
                    <div className="auction-cell">Start Time</div>
                    <div className="auction-cell">Expire Time</div>
                    <div className="auction-cell">Status</div>
                    <div className="auction-cell">Quantity</div>
                    <div className="auction-cell">Shipping Cost</div>
                    <div className="auction-cell">Buynow</div>
                    <div className="auction-cell">Buynow Price</div>
                    <div className="auction-cell">Item Description</div>
                    <div className="auction-cell">Seller Rating</div>
                    <div className="auction-cell">Bid Count</div>
                </div>
                {form}
            </div>
        );
    }
}

export default AuctionListForm;