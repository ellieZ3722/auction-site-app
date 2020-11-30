import React, { Component } from "react";
import ClosedAuctionListForm from "./ClosedAuctionListForm";
import OngoingAuctionListForm from "./OngoingAuctionListForm";

class AuctionManagement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingPanel: "ongoingAuctions",
            ongoingAuctions: [],
            closedAuctions: [],
            auctionListFetchedStatusOngoing: "fetching",
            auctionListFetchedStatusClosed: "fetching",
        }

        this.clickOngoingAuctions = this.clickOngoingAuctions.bind(this);
        this.clickClosedAuctions = this.clickClosedAuctions.bind(this);
    }

    componentDidMount() {
        const ourl = "http://localhost:9090/auction/bidding//activeBids";

        fetch(ourl, {
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
                    ongoingAuctions: result.activeBidList,
                    auctionListFetchedStatusOngoing: "success"
                })
            },
            (error) => {
                this.setState({
                    auctionListFetchedStatusOngoing: "fail"
                })
            }
        )

        const curl = "http://localhost:9090/auction/bidding/closedBids";

        fetch(curl, {
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
                    closedAuctions: result.closedBidList,
                    auctionListFetchedStatusClosed: "success"
                })
            },
            (error) => {
                this.setState({
                    auctionListFetchedStatusClosed: "fail"
                })
            }
        )
    }

    clickOngoingAuctions() {
        this.setState({
            showingPanel: "ongoingAuctions"
        })
    }

    clickClosedAuctions() {
        this.setState({
            showingPanel: "closedAuctions"
        })
    }

    render() {
        let body;
        let form;

        if (this.state.showingPanel === "ongoingAuctions") {
            form = <OngoingAuctionListForm auctionList={this.state.ongoingAuctions}></OngoingAuctionListForm>
        } else {
            form = <ClosedAuctionListForm type="closedAuctions" auctionList={this.state.closedAuctions}></ClosedAuctionListForm>
        }

        if (this.state.auctionListFetchedStatusOngoing === "success" && this.state.auctionListFetchedStatusClosed === "success") {
            body = (
                <div>
                    <div className="admin-auction-buttons">
                        <button onClick={this.clickOngoingAuctions}>Ongoing Auctions</button>
                        <button onClick={this.clickClosedAuctions}>Closed Auctions</button>
                    </div>
                    {form}
                </div>
            )
        } else {
            body = (
                <div>
                    <p>The auction list is being fetched...</p>
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

export default AuctionManagement;