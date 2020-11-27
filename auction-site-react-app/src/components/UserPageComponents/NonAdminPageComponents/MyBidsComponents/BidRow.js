import React, { Component } from "react";

class BidRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bidId: props.bid.bidId,

            itemName: props.bid.itemName,
            myCurrentBidPrice: props.bid.myCurrentBidPrice,
            currentHighestBidPrice: props.bid.currentHighestBidPrice,
            bidStatus: props.bid.status,

            newBidPrice: 0
        }

        this.onIncrementSubmit = this.onIncrementSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddCart = this.handleAddCart.bind(this);
    }

    onIncrementSubmit(e) {
        e.preventDefault();

        if (this.state.myCurrentBidPrice >= this.state.newBidPrice) {
            alert("Your new bid price must be higher than your current bid price.");
            return;
        }
        if (this.state.currentHighestBidPrice >= this.state.newBidPrice) {
            alert("Your new bid price must be higher than the current highest bid price.")
            return;
        }

        const incrementBidUrl = "";

        fetch(incrementBidUrl)
        .then(res => res.json())
        .then(
            (result) => {
                alert("Your've successfully placed a new bid on the item.")
                this.setState({
                    currentHighestBidPrice: this.state.newBidPrice,
                    myCurrentBidPrice: this.state.newBidPrice
                })
            },
            (error) => {
                alert("Your new bit is not successfully placed due to some errors...")
            }
        )
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleAddCart() {
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
        return (
            <div className="bid-row">
                <div className="bid-cell">{this.state.itemName}</div>
                <div className="bid-cell">{this.state.currentHighestBidPrice}</div>
                <div className="bid-cell">{this.state.myCurrentBidPrice}</div>
                <div className="bid-cell new-bid-cell">
                    <form onSubmit={(e) => this.onIncrementSubmit(e)}>
                        <input type="number" name="newBidPrice" value={this.state.newBidPrice} onChange={e => this.handleChange(e)}></input>
                        <input type ="submit" value="place"></input>
                    </form>
                </div>
                <div className="bid-cell">{this.state.bidStatus}</div>
                <div className="bid-cell">
                    { this.state.bidStatus === "won" ? <button onClick={() => this.handleAddCart()}>Add to cart</button> : null }
                </div>
            </div>
        );
    }
}

export default BidRow;