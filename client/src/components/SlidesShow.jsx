import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function SlideShow(props) {
    const myStyle={
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
        textAlign: "center"
      }
      console.log(props.movieList)
  return (
    <>
      <h1 style={myStyle}>Movies</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
            {props.movieList.map((movie) => <Card movie={movie} key={movie.id} />)}
        </Carousel>
      </div>
    </>
  );
}

export default SlideShow 


