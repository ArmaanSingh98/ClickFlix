import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import handleCardClick from './SlidesShow'

function Card (props) {

    const handleClick = () => {
        handleCardClick(props.movie.id)
    }

    if (props.movie.poster_path != null) {
        return (
            <div className="card" style={{width: '18rem'}}  onClick={handleClick}>
                <img className="card-img-top" src={'https://image.tmdb.org/t/p/original'+props.movie.poster_path} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text">{props.movie.title}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card" style={{width: '18rem'}} onClick={handleClick}>
                <img className="card-img-top" src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226" alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text">{props.movie.title}</p>
                </div>
            </div>
        )
    }
}

export default Card;