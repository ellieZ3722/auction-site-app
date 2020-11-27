import React, { Component } from "react";
import './style.css';

class CartPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fetchCartStatus: "fetching",
            cart: []
        }

        this.onClickCheckout = this.onClickCheckout.bind(this);
    }

    componentDidMount() {
        this.fetchCart()
    }

    fetchCart() {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    fetchCartStatus: "success",
                    cart: result.cart
                })
            },
            (error) => {
                // alert("An error occured when attempted to fetch your auction window...")
                // this.props.onClose()
                this.setState({
                    fetchCartStatus: "success",
                    cart: [
                        {   
                            itemId: "23424",
                            itemName: "001",
                            winningPrice: 34535
                        },
                        {
                            itemId: "23424",
                            itemName: "001",
                            winningPrice: 34535
                        },
                        {
                            itemId: "23424",
                            itemName: "001",
                            winningPrice: 34535
                        }
                    ]
                })

            }
        )
    }

    onClickCheckout(itemId) {

        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("Your have successfully checked out the item.")
                this.fetchCart()
            },
            (error) => {
                alert("An error happened when trying to check out the item...")
            }
        )
    }

    render() {
        let body;

        if (this.state.fetchCartStatus === "success") {
            let subbody = this.state.cart.map(entry => {
                return (
                    <div className="window-list-row">
                        <div className="window-list-cell">{entry.itemName}</div>
                        <div className="window-list-cell">{entry.winningPrice}</div>
                        <div className="window-list-cell">
                            <button onClick={() => this.onClickCheckout(entry.itemId)}>checkout</button>
                        </div>
                    </div>
                )
            })

            body = (
                <div className="modal">
                    <div className="modal-content">
                        <div className="window-list-row">
                            <div className="window-list-cell">Item Name</div>
                            <div className="window-list-cell">Winning Price</div>
                            <div className="window-list-cell"></div>
                        </div>
                        {subbody}
                        <button onClick={this.props.onClose}>Back</button>
                    </div>
                </div>
            )
        } else {
            body = (
                <div className="modal">
                    <p className="modal-content">Your cart is being loaded...</p>
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

export default CartPopup;