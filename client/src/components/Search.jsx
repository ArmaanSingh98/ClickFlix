import React from 'react'
import {useState} from 'react'
import SlideShow from './SlidesShow';
import { Redirect } from 'react-router-dom';

function Search() {

    const [value, setValue] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = () => { 
        fetch('http://localhost:8080/search/keyword/' + value)
            .then(response => response.json())
            .then(data => setMovies(data))
    }

    console.log(movies)

    return (
        <div className="row-center">
            <h3>Search for your favorite movie</h3>
            <div className="row col-md-12 ml-md-auto">
                <div className="input-group col-md-6">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" value = {value} onChange ={(event) => setValue(event.target.value)} />
                    <button type="button" class="btn btn-outline-primary" onClick = {handleSubmit}  >search</button>
                </div>
            </div>
            <SlideShow movieList={movies}/>
        </div>
       
    )
}

export default Search