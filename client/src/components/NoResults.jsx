import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function NoResults() {
    return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>No providers are currently streaming criteria.</strong> Be sure to try again later!
    </div>
    )
}


export default NoResults
