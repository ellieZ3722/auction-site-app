import React, { Component } from "react";
import Popup from "./Popup";
import "./Category.css";

class CategoriesListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoriesFetchStatus: "fetching",
            categoriesList: [],
            showPopup: false,
            selectedCat: null
        }

        this.onPopupClose = this.onPopupClose.bind(this);
    }

    componentDidMount() {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    categoriesFetchStatus: 'success',
                    categoriesList: result.categoriesList
                })
            },
            (error) => {
                // this.setState({
                //     categoriesFetchStatus: "fail"
                // })
                this.setState({
                    categoriesFetchStatus: 'success',
                    categoriesList: [
                        {
                            categoryName: "cat1",
                            categoryId: "23534643",
                            itemList: [
                                "4353535", "0980"
                            ]
                        },
                        {
                            categoryName: "cat2",
                            categoryId: "23534643",
                            itemList: [
                                "4353535", "0980"
                            ]
                        },
                        {
                            categoryName: "cat3",
                            categoryId: "23534643",
                            itemList: [
                                "4353535", "0980"
                            ]
                        },
                        {
                            categoryName: "cat3",
                            categoryId: "23534643",
                            itemList: [
                                "4353535", "0980"
                            ]
                        },
                        {
                            categoryName: "cat3",
                            categoryId: "23534643",
                            itemList: [
                                "4353535", "0980"
                            ]
                        }
                    ]
                })
            }
        )
    }

    modifyCat(category) {
        this.setState({
            selectedCat: category,
            showPopup: true
        })
    }

    onPopupClose() {
        this.setState({
            showPopup: false
        })
    }

    removeCat(catId) {
        const url = "";

        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                alert("The category has been removed.");
                window.location.reload();
            },
            (error) => {
                alert("An error occured when attemped to remove the category...");
            }
        )
    }

    render() {
        let body;

        if (this.state.categoriesFetchStatus === "success") {

            let form = this.state.categoriesList.map(entry => {
                let items = "";
                const itemList = entry.itemList;
                for (var i = 0; i < itemList.length; i++) {
                    items = items + itemList[i];
                    if (i !== itemList.length - 1) {
                        items = items + ", "
                    }
                }

                return (
                    <div className="user-row">
                        <div className="user-cell">{entry.categoryName}</div>
                        <div className="user-cell">{entry.categoryId}</div>
                        <div className="user-cell">{items}</div>
                        <div className="user-cell">
                            <button onClick={() => this.modifyCat(entry)}>modify</button>
                        </div>
                        <div className="user-cell">
                            <button onClick={() => this.removeCat(entry.categoryId)}>remove</button>
                        </div>
                    </div>
                )
            })

            body = (
                <div>
                    <div className="category-body">
                        <div className="user-row">
                            <div className="user-cell">Category Name</div>
                            <div className="user-cell">Category ID</div>
                            <div className="user-cell">Items</div>
                            <div className="user-cell">Modify</div>
                            <div className="user-cell">Remove</div>
                        </div>
                        {form}
                    </div>
                    {this.state.showPopup ? <Popup category={this.state.selectedCat} onClose={this.onPopupClose}></Popup> : null }
                    
                </div>
            )

        } else if (this.state.categoriesFetchStatus === "fail") {
            body =(
                <div>
                    <p>An error occured when attempted to load the categories...</p>
                </div>
            )
        } else {
            body = (
                <div>
                    <p>The categories are being loaded...</p>
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

export default CategoriesListForm;