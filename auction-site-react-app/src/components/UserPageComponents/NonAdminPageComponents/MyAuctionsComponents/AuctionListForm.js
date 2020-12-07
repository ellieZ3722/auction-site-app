import React, { Component } from "react";
import AuctionRow from './AuctionRow';

class AuctionListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.userId,
            auctionList: props.auctionList 
        }

        this.updateAuction = this.updateAuction.bind(this);
    }

    updateAuction(auctionId) {
        window.location.href = "/updateAuction/" + this.state.userId + "/" + auctionId;
    }

    render() {
        let form = this.state.auctionList.map(entry => {
            let auctionId = entry.itemId;

            if (entry.bidStatus !== "Closed") {
                return (
                    <AuctionRow key={entry.itemId} onClick={() => this.updateAuction(auctionId)} auction={entry}></AuctionRow>
                )
            } else {
                return (<div></div>);
            }
        })
        
        return (
            <div>
                <div className="auction-row">
                    <div className="auction-cell">Item Name</div>
                    <div className="auction-cell">Start Time</div>
                    <div className="auction-cell">Expire Time</div>
                    <div className="auction-cell">Status</div>
                    <div className="auction-cell">Quantity</div>
                    <div className="auction-cell">Shipping Cost</div>
                    <div className="auction-cell">Buynow</div>
                    <div className="auction-cell">Buynow Price</div>
                    <div className="auction-cell">Item Description</div>
                    <div className="auction-cell">Bid Count</div>
                </div>
                {form}
            </div>
        );
    }
}

export default AuctionListForm;