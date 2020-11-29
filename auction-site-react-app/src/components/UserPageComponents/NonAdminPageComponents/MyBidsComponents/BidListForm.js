import React, { Component } from "react";
import BidRow from "./BidRow";
// import { Link } from "react-router-dom";

class BidListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.userId,

            // bidList: props.bidList
            bidList: [
                {   
                    itemId: "1",
                    itemName: "item1",
                    currHighestPrice: 50,
                    bidderOfferPrice: 40,
                    bidStatus: "won"
                },
                {   
                    itemId: "1",
                    itemName: "item1",
                    currHighestPrice: 50,
                    bidderOfferPrice: 40,
                    bidStatus: "closed"
                },
                {   
                    itemId: "1",
                    itemName: "item1",
                    currHighestPrice: 50,
                    bidderOfferPrice: 40,
                    bidStatus: "bidding"
                },
            ]
        }
    }

    render() {
        let form = this.state.bidList.map(entry => {
            // let bidId = entry.bidId;
            return (
                <BidRow userId={this.state.userId} key={entry.bidId} bid={entry}></BidRow>
            )
        })
        
        return (
            <div>
                <div className="bid-row">
                    <div className="bid-cell">Item Name</div>
                    <div className="bid-cell">Current Highest Bid</div>
                    <div className="bid-cell">My Current Bid Price</div>
                    <div className="bid-cell">Your New Bid Amount</div>
                    <div className="bid-cell">Bid Status</div>
                    <div className="bid-cell">Add to Cart</div>
                </div>
                {form}
            </div>
        );
    }
}

export default BidListForm;