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
            auctionListFetchedStatus: "fetching",
        }

        this.clickOngoingAuctions = this.clickOngoingAuctions.bind(this);
        this.clickClosedAuctions = this.clickClosedAuctions.bind(this);
    }

    componentDidMount() {
        const url = "http://localhost:9090/auction/bidding/activeBids";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    ongoingAuctions: result.activeBidList,
                    closedAuctions: result.closedBidList,
                    auctionListFetchedStatus: "success"
                })
            },
            (error) => {
                // this.setState({
                //     auctionListFetchedStatus: "fail"
                // })
                this.setState({
                    ongoingAuctions: [
                        {   
                            auctionId: "1234",
                            itemName: "item1",
                            startPrice: 0,
                            startTime: "7/8/2020",
                            quantity: 1,
                            timeExpire: "8/8/2020",
                            shippingCosts: "$12",
                            buyNow: false,
                            itemDescription: "Description...",
                            sellerRating: "A",
                            status: "Started",
                            categories: ["cat1", "cat2", "cat3"]
                        },
                        {
                            auctionId: "1235",
                            itemName: "item2",
                            startPrice: 0,
                            startTime: "7/8/2020",
                            quantity: 1,
                            timeExpire: "8/8/2020",
                            shippingCosts: "$12",
                            buyNow: true,
                            itemDescription: "Description...",
                            sellerRating: "A",
                            status: "Not Started",
                            categories: ["cat1", "cat2", "cat3"]
                        },
                    ],
                    closedAuctions: [
                        {   
                            auctionId: "1234",
                            itemName: "item3",
                            startPrice: 0,
                            startTime: "7/8/2020",
                            quantity: 1,
                            timeExpire: "8/8/2020",
                            shippingCosts: "$12",
                            buyNow: false,
                            itemDescription: "Description...",
                            sellerRating: "A",
                            status: "Started",
                            categories: ["cat1", "cat2", "cat3"]
                        },
                        {
                            auctionId: "1235",
                            itemName: "item4",
                            startPrice: 0,
                            startTime: "7/8/2020",
                            quantity: 1,
                            timeExpire: "8/8/2020",
                            shippingCosts: "$12",
                            buyNow: true,
                            itemDescription: "Description...",
                            sellerRating: "A",
                            status: "Not Started",
                            categories: ["cat1", "cat2", "cat3"]
                        },
                    ],
                    auctionListFetchedStatus: "success"
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

        if (this.state.auctionListFetchedStatus === "fail") {
            body = (
                <div>
                    <p>The auction list is fetched unsuccessfully.</p>
                    <button onClick={this.Reload}>Reload</button>
                </div>
            )
        } else if (this.state.auctionListFetchedStatus === "success") {
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