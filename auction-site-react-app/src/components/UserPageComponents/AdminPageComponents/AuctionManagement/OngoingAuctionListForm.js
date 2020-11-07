import React, { Component } from "react";

class OngoingAuctionListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auctionList: props.auctionList
        }
    }

    stopAuction(auctionId) {
        const url = "";

        fetch(url)
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
            let categories = "";
            for (var i = 0; i < entry.categories.length; i++) {
                categories = categories + entry.categories[i];
                if (i !== entry.categories.length - 1) {
                    categories = categories + " / ";
                }
            }

            return (
                <div className="auction-row">
                    <div className="auction-cell">{entry.auctionId}</div>
                    <div className="auction-cell">{entry.itemName}</div>
                    <div className="auction-cell">{categories}</div>
                    <div className="auction-cell">{entry.startPrice}</div>
                    <div className="auction-cell">{entry.startTime}</div>
                    <div className="auction-cell">{entry.timeExpire}</div>
                    <div className="auction-cell">{entry.quantity}</div>
                    <div className="auction-cell">{entry.shippingCosts}</div>
                    <div className="auction-cell">{entry.buyNow ? "Available" : "Not Available"}</div>
                    <div className="auction-cell">{entry.itemDescription}</div>
                    <div className="auction-cell">{entry.sellerRating}</div>
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
                    <div className="auction-cell">Item Name</div>
                    <div className="auction-cell">Categories</div>
                    <div className="auction-cell">Start Price</div>
                    <div className="auction-cell">Start Time</div>
                    <div className="auction-cell">Expire Time</div>
                    <div className="auction-cell">Quantity</div>
                    <div className="auction-cell">Shipping Cost</div>
                    <div className="auction-cell">Buynow</div>
                    <div className="auction-cell">Description</div>
                    <div className="auction-cell">Seller Rating</div>
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