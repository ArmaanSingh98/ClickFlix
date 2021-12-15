//The following was our rough sketch of cards for an about page in our application. We orignally wanted to create the page with all of our information with several card components. The pictures would go to the assets file as a .jpg file (created under src folder).
/*
import React from 'react'
import Card from './Card'
import tanzil_pic from '../assets/tanzil_pic.jpeg'
import Armaan_pic from '../assets/Armaan_pic.jpg'
import Muhammad_pic from '../assets/Muhammad_pic.jpg'
import Walter_pic from '../assets/Walter_pic.jpg'


const cards = [
  {
    id : 1,
    title: 'Tanzil Hassan',
    image: tanzil_pic
  },
  {
    id : 2,
    title: 'Armaan Singh',
    image: Armaan_pic
  },
  {
    id : 3,
    title: 'Muhammad Ali Sajjad',
    image: Muhammad_pic
  },
  {
    id : 4,
    title: 'Walter Broncano',
    image: Walter_pic
  }
]

function Cards() {
    console.log(cards)
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className='col-md-3' key={Card.id}>
                    <Card title={Card.title} />
                </div>
                <div className='col-md-3' key={Card.id}>
                    <Card title ={Card.title} />
                </div>
                <div className='col-md-3' key={Card.id}>
                    <Card title = {Card.title}/>
                </div>
                <div className='col-md-3' key={Card.id}>
                    <Card title = {Card.title} />
                </div>
            </div>
        </div>
    )
}

export default Cards
*/


/*
import React from 'react'

function Card({title}) {
    return (
        <div className= "card text-center bg-dark">
            <img src= '' alt=""/>
            <div className = "card-body text-light">
                <h4 classname="card-title">{title}</h4>
                <p>blah blah blah</p>
                <a href = '#!' className='btn btn-outline-secondary'>
                    Linkedin
                </a>
            </div>
        </div>
    )
}

export default Card
*/