import React, { Component } from "react";
import "./Category.css";

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            catName: props.category.categoryName
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const url = "";
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("The category is modified successfully.")
                this.props.onClose();
                window.location.reload();
            },
            (error) => {
                alert("An error occured when attempted to modify the category...")
            }
        )
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div>
                            <span>Category Name: </span>
                            <input name="catName" value={this.props.category.categoryName} type="text" onChange={e => this.handleChange(e)}></input>
                        </div>
                        <div>
                            <input type="submit" value="Modify"></input>
                            <button onClick={this.props.onClose}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Popup;