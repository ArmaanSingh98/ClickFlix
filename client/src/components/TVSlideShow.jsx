import React from "react";
import Carousel from "react-elastic-carousel";
import TVCards from "./TVCards"
import 'bootstrap/dist/css/bootstrap.min.css';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function TVSlideShow(props) {

    const selectTVShow = (tvid) => {
        props.pickTV(tvid)
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
            {props.list.map(listItem => <TVCards type={props.type} pickTV={selectTVShow} listItem={listItem} key={listItem.id === null ? listItem.provider_id : listItem.id} />)}
        </Carousel>
      </div>
    </>
  );
}

export default TVSlideShow 