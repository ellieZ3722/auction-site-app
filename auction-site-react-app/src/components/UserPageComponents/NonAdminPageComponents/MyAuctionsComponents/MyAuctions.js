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
        const url = "" + this.state.userId;

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
                    auctionListFetchSuccess: true,
                    auctionList: result.bidList
                })
            },
            (error) => {
                window.location.href = "/myauctions/fail/" + this.state.userId;
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