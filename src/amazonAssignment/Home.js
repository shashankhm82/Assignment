import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { Carousel } from "react-bootstrap";
import Slider1 from './images/slider1.jpg';
import Slider2 from './images/slider2.jpg';
import Slider3 from './images/slider3.jpg';
import Slider4 from './images/slider4.jpg';
import Slider5 from './images/slider5.jpg';
import Header1 from './images/header1.jpg';
import AddOn from "./AddOn";
import Language from "./Languages";
import Kannada from "./Kannada";
function Home (){
    return(
<div>
    <div className="container_fluid m-3 bg-light">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider4}
      alt="Fourth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slider5}
      alt="Fifth slide"
    />
  </Carousel.Item>
</Carousel>
</div>
        <div className="container-fluid">
        <Link to="/"><img
      className="header1 mt-5"
      src={Header1}
      alt="header"
    /></Link>
        </div>
<div className="container-fluid bg-light p-2" >
<AddOn/>
<Language/>
<Kannada/>

</div>



</div>
    );
} export default Home;