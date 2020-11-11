import React, { Component } from "react";

class FlaggedItemListForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            flaggedItemListFetchStatus: "fetching",
            flaggedItemList: []
        }
    }

    componentDidMount() {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
               this.setState({
                   flaggedItemListFetchStatus: "success",
                   flaggedItemList: result.flaggedItemList
               })
            },
            (error) => {
                // this.setState({
                //     flaggedItemListFetchStatus: "fail"
                // })
                this.setState({
                    flaggedItemListFetchStatus: "success",
                    flaggedItemList: [
                        {
                            itemName: "item1",
                            itemId: "23254",
                            flaggedByUserIdList: [
                                "12", "3453", "345464"
                            ]
                        },
                        {
                            itemName: "item2",
                            itemId: "23254",
                            flaggedByUserIdList: [
                                "12", "3453", "345464"
                            ]
                        },
                        {
                            itemName: "item3",
                            itemId: "23254",
                            flaggedByUserIdList: [
                                "12", "3453", "345464"
                            ]
                        }
                    ]
                })
            }
        )
    }

    render() {
        let body;

        if (this.state.flaggedItemListFetchStatus === "success") {

            let form = this.state.flaggedItemList.map(entry => {
                let flaggedBy = "";
                const flaggedList = entry.flaggedByUserIdList;
                for (var i = 0; i < flaggedList.length; i++) {
                    flaggedBy = flaggedBy + flaggedList[i];
                    if (i !== flaggedList.length - 1) {
                        flaggedBy = flaggedBy + ", "
                    }
                }

                return (
                    <div className="user-row">
                        <div className="user-cell">{entry.itemName}</div>
                        <div className="user-cell">{entry.itemId}</div>
                        <div className="user-cell">{flaggedBy}</div>
                    </div>
                )
            })

            body = (
                <div>
                    <div className="user-row">
                        <div className="user-cell">Item Name</div>
                        <div className="user-cell">Item ID</div>
                        <div className="user-cell">Flagged By (userid)</div>
                    </div>
                    {form}
                </div>
            )
        } else if (this.state.flaggedItemListFetchStatus === "fail") {
            body =(
                <div>
                    <p>An error occured when attempted to load the flagged items...</p>
                </div>
            )
        } else {
            body = (
                <div>
                    <p>The flagged items are being loaded...</p>
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

export default FlaggedItemListForm;