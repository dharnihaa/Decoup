import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../assets/car3.jpg';
import carousel2 from '../assets/cars4.jpg';
import carousel3 from '../assets/cars1.jpg';
import './Carousel.css';

const CarouselComponent = () => (
  <div className="carousel-container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default CarouselComponent;