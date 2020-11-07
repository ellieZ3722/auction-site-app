import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListAuction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.match.params.userid,
            
            itemName: "",
            startPrice: 0,
            startTime: "",
            quantity: 0,
            timeExpire: "",
            shippingCosts: "",
            buyNow: false,
            itemDescription: "",
            sellerRating: "",
            categories: []
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCategoryAdd = this.onCategoryAdd.bind(this);
    }

    onChange(e) {
        e.preventDefault();

        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    onCategoryAdd(e) {
        e.preventDefault();

        const target = e.target;
        const value = target.value;

        var categories = value.split(",");
        var cat_list = [];
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i].trim();
            cat_list.push(category);
        }

        this.setState({
            categories: cat_list
        })
    }

    onSubmit(e) {
        e.preventDefault()

        // check if the start time is later than the current time

        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("Your new auction has been listed successfully.");
                window.location.href = "/myauctions/" + this.state.userId;
            },
            (error) => {
                alert("An error occurred when attempted to list your auction...");
            }
        )
    }

    render() {
        return (
            <div>
                <Link to={"/myauctions/" + this.state.userId}>
                    <button>back to myAuction page</button>
                </Link>
                <p>List a new auction:</p>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div>
                        <span>Item Name: </span>
                        <input type="text" name="itemName" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Start Price: </span>
                        <input type="text" name="startPrice" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Start Time: </span>
                        <input type="text" name="startTime" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Quantity: </span>
                        <input type="text" name="quantity" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Expire Time: </span>
                        <input type="text" name="timeExpire" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Shipping Cost: </span>
                        <input type="text" name="shippingCost" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Buynow Option: </span>
                        <input type="text" name="buyNow" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Item Description: </span>
                        <input type="text" name="itemDescription" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Seller Rating: </span>
                        <input type="text" name="sellerRating" onChange={e => this.onChange(e)}></input>
                    </div>
                    <div>
                        <span>Categories (separate by comma if you have multiple categories):</span>
                        <input type="text" name="category" onChange={e => this.onCategoryAdd(e)}></input>
                    </div>
                    <div>
                        <input type ="submit" value="List"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default ListAuction;