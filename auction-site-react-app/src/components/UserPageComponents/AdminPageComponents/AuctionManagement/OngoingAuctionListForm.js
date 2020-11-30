import React, { Component } from "react";

class OngoingAuctionListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auctionList: props.auctionList
        }
    }

    stopAuction(auctionId) {
        const url = "http://localhost:9090/auction/bidding/closeBid/" + auctionId;

        fetch(url, {
            method: "POST",
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
                alert("The auction has been successfully stopped.");
                var new_list = [];
                for (var i = 0; i < this.state.auctionList; i++) {
                    var auction = this.state.auctionList[i];
                    if (auction.auctionId !== auctionId) {
                        new_list.push(auction);
                    }
                }
                this.setState({
                    auctionList: new_list
                })
            },
            (error) => {    
                alert("An error occured when attempted to stop the auction...");
            }
        )
    }

    render() {
        let body;
        body = this.state.auctionList.map(entry => {

            return (
                <div key={entry.itemId} className="auction-row">
                    <div className="auction-cell">{entry.itemId}</div>
                    <div className="auction-cell">{entry.startTime}</div>
                    <div className="auction-cell">{entry.endTime}</div>
                    <div className="auction-cell">{entry.canBuyNow ? "Available" : "Not Available"}</div>
                    <div className="auction-cell">{entry.bidStatus}</div>
                    <div className="auction-cell">
                        <button onClick={() => this.stopAuction(entry.auctionId)}>Stop</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="auction-row">
                    <div className="auction-cell">Auction Id</div>
                    <div className="auction-cell">Start Time</div>
                    <div className="auction-cell">Expire Time</div>
                    <div className="auction-cell">Buynow</div>
                    <div className="auction-cell">Auction Status</div>
                    <div className="auction-cell">
                        Stop Auction
                    </div>
                </div>
                {body}
            </div>
        );
    }
}

export default OngoingAuctionListForm;