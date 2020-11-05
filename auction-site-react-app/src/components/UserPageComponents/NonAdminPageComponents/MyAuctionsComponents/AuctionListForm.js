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
                    auctionId: "1234",
                    itemName: "item1",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: false,
                    itemDescription: "Description...",
                    sellerRating: "A"
                },
                {
                    auctionId: "1235",
                    itemName: "item2",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: true,
                    itemDescription: "Description...",
                    sellerRating: "A"
                },
                {
                    auctionId: "1236",
                    itemName: "item3",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: false,
                    itemDescription: "Description...",
                    sellerRating: "A"
                },
                {
                    auctionId: "1237",
                    itemName: "item4",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: false,
                    itemDescription: "Description...",
                    sellerRating: "A"
                },
                {
                    auctionId: "1238",
                    itemName: "item5",
                    startPrice: 0,
                    startTime: "7/8/2020",
                    quantity: 1,
                    timeExpire: "8/8/2020",
                    shippingCosts: "$12",
                    buyNow: false,
                    itemDescription: "Description...",
                    sellerRating: "A"
                }
            ]
        }

        this.updateAuction = this.updateAuction.bind(this);
    }

    updateAuction(auctionId) {
        console.log(11111111)
        window.location.href = "/updateAuction/" + this.state.userId + "/" + auctionId;
    }

    render() {
        let form = this.state.auctionList.map(entry => {
            let auctionId = entry.auctionId;
            return (
                <AuctionRow onClick={() => this.updateAuction(auctionId)} auction={entry}></AuctionRow>
            )
        })
        
        return (
            <div>
                <div className="auction-row">
                    <div className="auction-cell">Item Name</div>
                    <div className="auction-cell">Start Price</div>
                    <div className="auction-cell">Start Time</div>
                    <div className="auction-cell">Quantity</div>
                    <div className="auction-cell">Expire Time</div>
                    <div className="auction-cell">Shipping Cost</div>
                    <div className="auction-cell">Buynow</div>
                    <div className="auction-cell">Item Description</div>
                    <div className="auction-cell">Seller Rating</div>
                </div>
                {form}
            </div>
        );
    }
}

export default AuctionListForm;