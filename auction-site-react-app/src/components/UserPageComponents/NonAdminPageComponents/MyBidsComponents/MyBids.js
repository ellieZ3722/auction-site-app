import React, { Component } from "react";
import { Link } from "react-router-dom";
import BidListForm from "./BidListForm";

class MyBids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.match.params.userid,

            bidListFetchSuccess: false,
            bidList: []
        }
    }

    componentDidMount() {
        const bidListUrl = "http://localhost:9090/auction/offer/prevBids/" + this.state.userId;

        fetch(bidListUrl, {
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
                    bidListFetchSuccess: true,
                    bidList: result.prevBidsList
                })
            },
            (error) => {
                window.location.href = "/mybids/fail/" + this.state.userId;
            }
        )
    }

    render() {
        let body;

        if (this.state.bidListFetchSuccess) {
            body = (
                <div>
                    <Link to={`/user/nonadmin/` + this.state.userId}>
                        <button>back to user page</button>
                    </Link>
                    <BidListForm userId={this.state.userId} bidList={this.state.bidList}></BidListForm>
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

export default MyBids;