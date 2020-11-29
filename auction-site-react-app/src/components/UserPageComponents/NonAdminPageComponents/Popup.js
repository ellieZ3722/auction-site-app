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
        // const url = "http://localhost:9090/auction/bidding/countdown/" + this.props.userId;
        const url = ""

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
                    windowList: [
                        {
                            itemId: "001",
                            itemName: "item1",
                            startTime: "2020-11-29T17:49:00Z"
                        },
                        {
                            itemId: "002",
                            itemName: "item1",
                            startTime: "2020-11-29T17:49:00Z"
                        },
                        {
                            itemId: "003",
                            itemName: "item1",
                            startTime: "2020-11-29T17:49:00Z"
                        }
                    ]
                })
            },
            (error) => {
                // alert("An error occured when attempted to fetch your auction window...")
                // this.props.onClose()
                this.setState({
                    fetchWindowListStatus: "success",
                    windowList: [
                        {
                            itemId: "001",
                            itemName: "item1",
                            startTime: "2020-12-29T17:49:00Z"
                        },
                        {
                            itemId: "002",
                            itemName: "item1",
                            startTime: "2020-12-29T17:49:00Z"
                        },
                        {
                            itemId: "003",
                            itemName: "item1",
                            startTime: "2020-12-29T17:49:00Z"
                        }
                    ]
                })

            }
        )
    }

    render() {
        let body;

        if (this.state.fetchWindowListStatus === "success") {
            let subbody = this.state.windowList.map(entry => {
                var _date = new Date(entry.startTime);

                return (
                    <div className="window-list-row">
                        <div className="window-list-cell">{entry.itemName}</div>
                        <div className="window-list-cell">
                            <Countdown date={_date}>Started</Countdown>
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