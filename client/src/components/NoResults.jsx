import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function NoResults() {
    return (
    <div class = "text-center">
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>No providers are currently streaming criteria. Be sure to try again later!</strong>
        </div>
    </div>
    )
}


export default NoResults
