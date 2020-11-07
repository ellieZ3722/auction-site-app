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
                    bidId: "12344",
                    itemName: "item1",
                    currentHighestBidPrice: 50,
                    myCurrentBidPrice: 40,
                },
                {
                    bidId: "12344",
                    itemName: "item1",
                    currentHighestBidPrice: 50,
                    myCurrentBidPrice: 40,
                },
                {
                    bidId: "12344",
                    itemName: "item1",
                    currentHighestBidPrice: 50,
                    myCurrentBidPrice: 40,
                },
                {
                    bidId: "12344",
                    itemName: "item1",
                    currentHighestBidPrice: 50,
                    myCurrentBidPrice: 40,
                },
                {
                    bidId: "12344",
                    itemName: "item1",
                    currentHighestBidPrice: 50,
                    myCurrentBidPrice: 40,
                }
            ]
        }
    }

    render() {
        let form = this.state.bidList.map(entry => {
            // let bidId = entry.bidId;
            return (
                <BidRow bid={entry}></BidRow>
            )
        })
        
        return (
            <div>
                <div className="bid-row">
                    <div className="bid-cell">Item Name</div>
                    <div className="bid-cell">Current Highest Bid</div>
                    <div className="bid-cell">My Current Bid Price</div>
                    <div className="bid-cell">Your New Bid Amount</div>
                </div>
                {form}
            </div>
        );
    }
}

export default BidListForm;