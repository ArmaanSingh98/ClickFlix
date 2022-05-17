import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function TVCards (props) {

    if (props.type === 'tvs') {
        if (props.listItem.poster_path != null) {
            return (
                <div className="card cardColor " style={{width: '18rem'}}  onClick={() => props.pickTV(props.listItem.id)}>
                    <img className="card-img-top" src={'https://image.tmdb.org/t/p/original'+props.listItem.poster_path} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{props.listItem.name}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card cardColor " style={{width: '18rem'}} onClick={() => props.pickTV(props.listItem.id)}>
                    <img className="card-img-top" src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226" alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{props.listItem.name}</p>
                    </div>
                </div>
            )
        }
    }
    else {
        if (props.listItem.logo_path != null) {
            return (
                <div className="card cardColor " style={{width: '7rem'}}>
                    <img className="card-img-top" src={'https://image.tmdb.org/t/p/original'+props.listItem.logo_path} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{props.listItem.provider_name}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card cardColor " style={{width: '7rem'}}>
                    <img className="card-img-top" src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226" alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">{props.listItem.provider_name}</p>
                    </div>
                </div>
            )
        }
    }
}

export default TVCards;