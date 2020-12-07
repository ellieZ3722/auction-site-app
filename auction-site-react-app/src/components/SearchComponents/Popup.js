import React, { Component } from "react";
import './style.css';

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bidPrice: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleAddAuctionWindow = this.handleAddAuctionWindow.bind(this)
        this.onClickFlag = this.onClickFlag.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();

        const url = "http://localhost:9090/auction/bidding/newOffer";

        var data = {
            "itemId": this.props.entry.item.id,
            "userId": this.props.userID,
            "newBidPrice": this.state.bidPrice
        }

        console.log(data)

        fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            body: JSON.stringify(data),
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                alert("Your bid has been placed on this item.")
                this.props.onClose();
                window.location.reload();
            },
            (error) => {
                alert("Your bid has been placed on this item.")
                this.props.onClose();
                window.location.reload();
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

    handleAddAuctionWindow(e) {
        e.preventDefault();

        const url = "http://localhost:9090/auction/bidding/countdown/create";

        var data = {
            "itemID": this.props.entry.item.id,
            "userId": this.props.userID,
            "itemName": this.props.entry.item.name,
            "startTime": this.props.entry.startTime
        }

        console.log(data)

        fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            body: JSON.stringify(data),
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                alert("The item has been added to your auction window, see the countdown to its openning time there.")
            },
            (error) => {
                alert("An error occured when attempted to add the item to your auction window...")
            }
        )
    }

    onClickFlag() {
        const url = "http://localhost:8080/auction/item/flagging";

        var data = {
            "itemID": this.props.entry.item.id,
            "userID": this.props.userID
        }

        fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept :'application/json',
                'Origin': 'http://localhost:3000'
            },
            body: JSON.stringify(data),
            referrerPolicy: 'no-referrer'
        })
        .then(res => res.json())
        .then(
            (result) => {
                alert("The item has been flagged as inappropriate successfully.")
            },
            (error) => {
                alert("An error occured when attempted to flag the item...")
            }
        )
    }

    render() {
        let subbody;

        if (this.props.entry.bidStatus === "Open") {
            subbody = (
                <div>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <span>Your bid price: </span>
                        <input name="bidPrice" type="number" onChange={e => this.handleChange(e)}></input>
                        <input type ="submit" value="Bid"></input>
                    </form>
                </div>
            )
        } else {
            subbody = (
                <div>
                    <button onClick={e => this.handleAddAuctionWindow(e)}>Add to my aution window</button>
                </div>
            )
        }

        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-entry">
                        <span>Item Name: </span>
                        <div> {this.props.entry.item.name}</div>
                    </div>
                    <div className="modal-entry">
                        <span>Category: </span>
                        <div> {this.props.entry.item.categoryId}</div>
                    </div>
                    <div className="modal-entry">
                        <span>Shipping Cost: </span>
                        <div> {this.props.entry.item.shippingCosts}</div>
                    </div>
                    <div className="modal-entry">
                        <span>Item Description: </span>
                        <div> {this.props.entry.item.description}</div>
                    </div>
                    <div className="modal-entry">
                        <span>Start Time: </span>
                        <div> {this.props.entry.startTime}</div>
                    </div>
                    <div className="modal-entry">
                        <div>End Time: </div>
                        <div> {this.props.entry.endTime}</div>
                    </div>
                    <div className="modal-entry">
                        {subbody}
                    </div>
                    <div className="modal-entry">
                        <button onClick={this.onClickFlag}>Flag this item as inappropriate or counterfeit</button>
                    </div>
                    <div className="modal-entry">
                        <button onClick={this.props.onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;