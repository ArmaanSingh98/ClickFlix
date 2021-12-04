import React from 'react'

function Search() {
    return (
        <div className="row">
            <div className="col-lg">
                <h3>Search for your favorite movie</h3>
                <div className="row col-md-12">
                    <div className="input-group col-md-6">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-primary">search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search