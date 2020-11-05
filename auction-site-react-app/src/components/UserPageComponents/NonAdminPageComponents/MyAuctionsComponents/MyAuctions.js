import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuctionListForm from "./AuctionListForm";

class MyAuctions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.match.params.userid,
            
            auctionListFetchSuccess: false,
            auctionList: []
        }

        this.addAuction = this.addAuction.bind(this);
    }

    componentDidMount() {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    auctionListFetchSuccess: true,
                    auctionList: result.auctionList
                })
            },
            (error) => {
                // window.location.href = "/myauctions/fail/" + this.state.userId;
                this.setState({
                    auctionListFetchSuccess: true,
                    auctionList: []
                })
            }
        )
    }

    addAuction() {
        window.location.href = "/listauction/" + this.state.userId;
    }

    render() {
        let body;

        if (this.state.auctionListFetchSuccess !== false) {
            body = (
                <div>
                    <Link to={`/user/nonadmin/` + this.state.userId}>
                        <button>back to user page</button>
                    </Link>
                    <button onClick={this.addAuction}>List a new auction</button>
                    <AuctionListForm userId={this.state.userId} className="auction-form" auctionList={this.state.auctionList}></AuctionListForm>
                </div>
            )
        } else {
            body = (
                <div>
                    <p>Your auctions are being loaded...</p>
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

export default MyAuctions;