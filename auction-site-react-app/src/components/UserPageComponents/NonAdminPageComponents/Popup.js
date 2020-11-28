import React, { Component } from "react";
import './style.css';
// import CountdownWindow from "./CountdownWindow"
import Countdown from "react-countdown";

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fetchWindowListStatus: "fetching",
            windowList: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/auction/item/countdown/" + this.state.userId;

        fetch(url, {
            method: "GET",
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
                this.setState({
                    fetchWindowListStatus: "success",
                    watchlist: result.windowList
                })
            },
            (error) => {
                // alert("An error occured when attempted to fetch your auction window...")
                // this.props.onClose()
                this.setState({
                    fetchWindowListStatus: "success",
                    windowList: [
                        {
                            auctionId: "001",
                            itemName: "item1",
                            startTime: 654654
                        },
                        {
                            auctionId: "002",
                            itemName: "item1",
                            startTime: 654654
                        },
                        {
                            auctionId: "003",
                            itemName: "item1",
                            startTime: 654654
                        }
                    ]
                })

            }
        )
    }

    render() {
        let body;

        let countdownDate = new Date("Jan 5, 2021 15:37:25").getTime();

        if (this.state.fetchWindowListStatus === "success") {
            let subbody = this.state.windowList.map(entry => {
                return (
                    <div className="window-list-row">
                        <div className="window-list-cell">{entry.itemName}</div>
                        <div className="window-list-cell">
                            <Countdown date={countdownDate}>Started</Countdown>
                        </div>
                    </div>
                )
            })

            body = (
                <div className="modal">
                    <div className="modal-content">
                        <div className="window-list-row">
                            <div className="window-list-cell">Item Name</div>
                            <div className="window-list-cell">Countdown til Auction Start</div>
                        </div>
                        {subbody}
                        <button onClick={this.props.onClose}>Back</button>
                    </div>
                </div>
            )
        } else {
            body = (
                <div className="modal">
                    <p className="modal-content">Your auction window is being loaded...</p>
                </div>
            )
        }

        return (
            <div>
                {body}
            </div>
        );
    }
}

export default Popup;