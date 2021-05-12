import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name=""
                    type="text"
                    className="form-control"
                    placeholder="Type a name"
                    id="name"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;