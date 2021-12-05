import React from 'react'
import {useState} from 'react'

function Search() {

    // constructor(props){
    //     super(props);
    //     this.state = {value: ''};

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange(event) {
    //     this.setState({value : event.target.value});
    // }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }


    const [value, setValue] = useState('');

    const handleSubmit = () => { 
        fetch('http://localhost:8080/search/keyword/' + value)
            .then(response => response.json())
            .then(data => console.log(data))
    }


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

        </div>
       
    )
}

export default Search