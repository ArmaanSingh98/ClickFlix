import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function SlideShow(props) {

    const selectMovie = (movieid) => {
        props.pickMovie(movieid)
    }

    const myStyle={
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
        textAlign: "center"
      }  
    return (
    <>
      <b style={myStyle}></b>
      <div className="App">
        <Carousel className="carousel" breakPoints={breakPoints}>
            {props.list.map(listItem => <Card type={props.type} pickMovie={selectMovie} listItem={listItem} key={listItem.id === null ? listItem.provider_id : listItem.id} />)}
        </Carousel>
      </div>
    </>
  );
}

export default SlideShow 


// {
//     "display_priority": 8,
//     "logo_path": "/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg",
//     "provider_id": 384,
//     "provider_name": "HBO Max"
// }