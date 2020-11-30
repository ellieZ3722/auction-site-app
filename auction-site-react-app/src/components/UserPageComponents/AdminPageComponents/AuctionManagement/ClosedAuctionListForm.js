import React, { Component } from "react";
import Popup from './Popup';

class ClosedAuctionListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auctionList: props.auctionList,

            prevBid: [],
            showPopup: false
        }

        this.checkBidHistory = this.checkBidHistory.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    checkBidHistory(prevBid) {
        // popover window
        this.setState({
            showPopup: true,
            prevBid: prevBid
        })
    }

    onClose() {
        this.setState({
            showPopup: false,
        })
    }

    render() {
        let body;
        body = this.state.auctionList.map(entry => {

            return (
                <div key={entry.itemId} className="auction-row">
                    <div className="auction-cell">{entry.itemId}</div>
                    <div className="auction-cell">{entry.sellerId}</div>
                    <div className="auction-cell">{entry.startTime}</div>
                    <div className="auction-cell">{entry.endTime}</div>
                    <div className="auction-cell">{entry.bidCount}</div>
                    <div className="auction-cell">{entry.winnerId}</div>
                    <div className="auction-cell">{entry.finalOffer}</div>
                    <div className="auction-cell">
                        <button onClick={() => this.checkBidHistory(entry.prevBid)}>Check</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="closed-auctions-body">
                    <div className="auction-row">
                        <div className="auction-cell">Auction ID</div>
                        <div className="auction-cell">Seller UserID</div>
                        <div className="auction-cell">Start Time</div>
                        <div className="auction-cell">Expire Time</div>
                        <div className="auction-cell">Bid Count</div>
                        <div className="auction-cell">Winner UserID</div>
                        <div className="auction-cell">Final Offer Price</div>
                        <div className="auction-cell">Check Bid History</div>
                    </div>
                    {body}
                </div>
                { this.state.showPopup ? <Popup onClose={this.onClose} bidList={this.state.prevBid}></Popup> : null}
            </div>
        );
    }
}

export default ClosedAuctionListForm;