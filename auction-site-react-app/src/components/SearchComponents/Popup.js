import React, { Component } from "react";
import './style.css';

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bindPrince: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleAddAuctionWindow = this.handleAddAuctionWindow.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();

        const url = "";
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("Your bid has been placed on this item.")
                this.props.onClose();
                window.location.reload();
            },
            (error) => {
                alert("An error occured when attempted to place the bid...")
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

        const url = "";
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("The item has been added to your auction window, see the countdown to its openning time there.")
                this.props.onClose();
                window.location.reload();
            },
            (error) => {
                alert("An error occured when attempted to add the item to your auction window...")
            }
        )
    }

    render() {
        let subbody;

        if (this.props.entry.status === "opened") {
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
                        <div>{this.props.entry.itemName}</div>
                    </div>
                    <div className="modal-entry">
                        <span>Item Description: </span>
                        <div>{this.props.entry.itemDescription}</div>
                    </div>
                    <div className="modal-entry">
                        <span>Start Time: </span>
                        <div>{this.props.entry.startTime}</div>
                    </div>
                    <div className="modal-entry">
                        <div>End Time: </div>
                        <div>{this.props.entry.expireTime}</div>
                    </div>
                    <div className="modal-entry">
                        {subbody}
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