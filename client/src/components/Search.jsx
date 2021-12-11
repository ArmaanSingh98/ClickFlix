import React from 'react'
import {useState} from 'react'
import SlideShow from './SlidesShow';
import NoResults from './NoResults';
//import { Redirect } from 'react-router-dom';
import '../App.css'

function Search() {

    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [type, setType] = useState('movies')

    const handleSubmit = () => { 
        setList([])
        setType('movies')
        fetch('http://localhost:8080/search/keyword/' + value)
            .then(response => response.json())
            .then(data => setList(data))
    }

    const handleMovieSelection = (movieid) => {
        fetch('http://localhost:8080/search/movie/' + movieid)
            .then(response => response.json())
            .then(data => {
                if (data !== 'none') {
                    console.log(data)
                    setType('providers')
                    setList(data)
                }
            })
    }

    return (
        <div className="row-center darkColor">
            <h3 className="searchQuote">Search for your favorite movie</h3>
            <div className="row col-md-12 ml-md-auto">
                <div className="input-group col-md-6 searchDiv">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" value = {value} onChange ={(event) => setValue(event.target.value)} />
                    <button type="button" class="btn btn-outline-warning btn-dark" onClick = {handleSubmit}  >search</button>
                </div>
            </div>
            {list.length === 0 || <SlideShow pickMovie={handleMovieSelection} list={list}  type={type}/>}
        </div>
       
    )
}

export default Search