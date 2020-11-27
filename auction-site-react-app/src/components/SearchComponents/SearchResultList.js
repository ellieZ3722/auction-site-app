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
        const url = "";

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
                <div className="search-row">
                    <div className="search-cell">{entry.itemName}</div>
                    <div className="search-cell">{entry.startTime}</div>
                    <div className="search-cell">{entry.expireTime}</div>
                    <div className="search-cell">{entry.startingPrice}</div>
                    <div className="search-cell">{entry.currentHighestBid}</div>
                    <div className="search-cell">
                        <button onClick={() => this.onDetailClick(entry)}>Detail</button>
                    </div>
                    <div className="search-cell">
                        { entry.buyNow ? <button onClick={() => this.onCartClick(entry)}>Add to cart</button> : null }
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="search-result-body">
                    <div className="search-row">
                        <div className="search-cell">Item Name</div>
                        <div className="search-cell">Start Time</div>
                        <div className="search-cell">End Time</div>
                        <div className="search-cell">Start Price</div>
                        <div className="search-cell">Current Highest Bid</div>
                        <div className="search-cell">Detail</div>
                        <div className="search-cell">BuyNow</div>
                    </div>
                    {body}
                    <button onClick={this.props.onClickBack}>Back to search</button>
                </div>
                {this.state.showPopup ? <Popup entry={this.state.selectedItem} onClose={this.onClose}></Popup> : null}
            </div>
        );
    }
}

export default SearchResultList;