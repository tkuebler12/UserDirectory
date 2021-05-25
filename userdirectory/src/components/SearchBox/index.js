import React from 'react';

function SearchBox({handleSearchChange}) {
    return (
        <div>
            <form className="form-inline">
                <input className="form-control" type="search" placeholder="search" onChange={e => handleSearchChange(e)}>

                </input>
            </form>
        </div>
    )
}

export default SearchBox;