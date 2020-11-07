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
        const bidListUrl = "";

        fetch(bidListUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    bidListFetchSuccess: true,
                    bidList: result.bidList
                })
            },
            (error) => {
                // window.location.href = "/mybids/fail/" + this.state.userId;
                this.setState({
                    bidListFetchSuccess: true,
                    bidList: []
                })
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