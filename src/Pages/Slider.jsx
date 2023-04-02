import Carousel from "react-bootstrap/Carousel";
import React from "react";

export default function BootstrapCarousel() {
  return (
    <div className="slider" >
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/34916.jpg"
            alt="First slide"
            />
        </Carousel.Item>
      
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src = "https://wallpaperaccess.com/full/37943.jpg"
            alt="First slide"
            />
        </Carousel.Item>
      
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src = "https://wallpaperaccess.com/full/37958.jpg"
            alt="First slide"
            />
        </Carousel.Item>
      
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src = "https://wallpaperaccess.com/full/34916.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src = "https://wallpaperaccess.com/full/37943.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      
      </Carousel>
      <br/>
    </div>
  );
}
