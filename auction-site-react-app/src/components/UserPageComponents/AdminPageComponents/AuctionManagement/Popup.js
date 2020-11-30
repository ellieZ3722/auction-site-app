import React, { Component } from "react";
import './style.css';

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        let list = [];

        for (var key in this.props.bidList) {
            if (this.props.bidList.hasOwnProperty(key)) {
                list.push({'userId': key, 'price': this.props.bidList[key]})
            }
        }

        let body;
        body = list.map(entry => {
            return (
                <div>
                    <div className="bid-history-row">
                        <div className="bid-history-cell"> {entry.userId}</div>
                        <div className="bid-history-cell"> {entry.price}</div>
                    </div>
                </div>
            )
        })

        return (


            <div className="modal">
                <div className="modal-content">
                    <div className="bid-history-row">
                        <div className="bid-history-cell">Bidder UserID</div>
                        <div className="bid-history-cell">Bid Price</div>
                    </div>
                    {body}
                    <button onClick={this.props.onClose}>Cancel</button>
                </div>
                
            </div>
        );
    }
}

export default Popup;