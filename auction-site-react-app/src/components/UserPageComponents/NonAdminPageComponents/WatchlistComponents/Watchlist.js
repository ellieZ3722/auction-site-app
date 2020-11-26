import React, { Component } from "react";
import { Link } from "react-router-dom";

class Watchlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.userId,

            fetchWatchlistStatus: "fetching",
            watchlist: []
        }
    }

    componentDidMount() {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    fetchWatchlistStatus: "success",
                    watchlist: result.watchlist
                })
            },
            (error) => {
                // alert("An error occured when attempted to fetch your watchlist...")
                // window.location.href = "/user/nonadmin/" + this.state.userId
                this.setState({
                    fetchWatchlistStatus: "success",
                    watchlist: [
                        {
                            itemName: "item1",
                            lessThan: 3453563
                        },
                        {
                            itemName: "item1",
                            lessThan: 3453563
                        },
                        {
                            itemName: "item1",
                            lessThan: 3453563
                        }
                    ]
                })

            }
        )
    }

    render() {
        let body;

        if (this.state.fetchWatchlistStatus === "success") {
            let list = this.state.watchlist.map(entry => {
                return (
                    <div className="watchlist-row">
                        <div className="watchlist-cell">{entry.itemName}</div>
                        <div className="watchlist-cell">{entry.lessThan}</div>
                    </div>
                )
            })

            body = (
                <div>
                    <div className="watchlist-row">
                        <div className="watchlist-cell">Watchlist Item Name</div>
                        <div className="watchlist-cell">Notify When Price is Less Than</div>
                    </div>
                    {list}
                </div>
            )
        } else {
            body = (
                <div>
                    <p>Your watchlist is being loaded...</p>
                </div>
            )
        }

        return (
            <div>
                <Link to={`/user/nonadmin/` + this.state.userId}>
                    <button>back to user page</button>
                </Link>
                {body}
            </div>
        );
    }
}

export default Watchlist;