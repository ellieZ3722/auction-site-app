import React, { Component } from "react";
import Popup from "./Popup";

class SearchResultList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            selectedItem: null,
            showPopup: false
        }

        this.onClose = this.onClose.bind(this)
        this.onCartClick = this.onCartClick.bind(this)
    } 

    onDetailClick(entry) {
        this.setState({
            selectedItem: entry,
            showPopup: true
        })
    }

    onClose() {
        this.setState({
            showPopup: false
        })
    }

    onCartClick(entry) {
        const url = " http://localhost:23334/addItemToCart/?uid=" + this.props.userId + "&item_id=" + entry.item.id + "&price=" + entry.buyNowPrice;

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("The item has been added to your shopping cart successfully.");
            },
            (error) => {
                alert("An error occurred when attempted to add the item to your shopping cart...");
            }
        )
    }

    render() {
        let body = this.props.searchResult.map(entry => {
            return (
                <div key={entry.item.id} className="search-row">
                    <div className="search-cell">{entry.item.name}</div>
                    <div className="search-cell">{entry.item.quantity}</div>
                    <div className="search-cell">{entry.startTime}</div>
                    <div className="search-cell">{entry.endTime}</div>
                    <div className="search-cell">{entry.bidStatus}</div>
                    <div className="search-cell">{entry.initPrice}</div>
                    <div className="search-cell">{entry.currentHighestBid}</div>
                    <div className="search-cell">
                        <button onClick={() => this.onDetailClick(entry)}>Detail</button>
                    </div>
                    <div className="search-cell">
                        { entry.canBuyNow ? <button onClick={() => this.onCartClick(entry)}>Add to cart for ${entry.buyNowPrice}</button> : null }
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="search-result-body">
                    <div className="search-row">
                        <div className="search-cell">Item Name</div>
                        <div className="search-cell">Quantity</div>
                        <div className="search-cell">Start Time</div>
                        <div className="search-cell">End Time</div>
                        <div className="search-cell">Auction Status</div>
                        <div className="search-cell">Start Price</div>
                        <div className="search-cell">Current Highest Bid</div>
                        <div className="search-cell">Detail</div>
                        <div className="search-cell">BuyNow</div>
                    </div>
                    {body}
                    <button onClick={this.props.onClickBack}>Back to search</button>
                </div>
                {this.state.showPopup ? <Popup userID={this.props.userId} entry={this.state.selectedItem} onClose={this.onClose}></Popup> : null}
            </div>
        );
    }
}

export default SearchResultList;