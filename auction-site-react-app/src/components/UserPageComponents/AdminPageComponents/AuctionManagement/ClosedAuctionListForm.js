import React, { Component } from "react";

class ClosedAuctionListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auctionList: props.auctionList
        }
    }

    checkMetrics(auctionId) {
        // popover window
    }

    render() {
        let body;
        body = this.state.auctionList.map(entry => {
            let categories = "";
            for (var i = 0; i < entry.categories.length; i++) {
                categories = categories + entry.categories[i];
                if (i !== entry.categories.length - 1) {
                    categories = categories + " / ";
                }
            }

            return (
                <div key={entry.auctionId} className="auction-row" onClick={() => this.checkMetrics(entry.auctionId)}>
                    <div className="auction-cell">{entry.itemId}</div>
                    <div className="auction-cell">{entry.itemName}</div>
                    <div className="auction-cell">{entry.startTime}</div>
                    <div className="auction-cell">{entry.endTime}</div>
                    <div className="auction-cell">{entry.winnerId}</div>
                    <div className="auction-cell">{entry.finalOffer}</div>
                </div>
            )
        })

        return (
            <div>
                <div className="auction-row">
                    <div className="auction-cell">Auction ID</div>
                    <div className="auction-cell">Item Name</div>
                    <div className="auction-cell">Start Time</div>
                    <div className="auction-cell">Expire Time</div>
                    <div className="auction-cell">Winner UserID</div>
                    <div className="auction-cell">Final Offer Price</div>
                </div>
                {body}
            </div>
        );
    }
}

export default ClosedAuctionListForm;