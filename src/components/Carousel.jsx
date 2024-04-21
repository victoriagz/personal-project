import React from "react";
import Slider from "react-slick";
import "../styles/App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "../images/carousel1.jpg";
import Carousel2 from "../images/carousel2.jpg";
import Carousel3 from "../images/carousel3.jpg";
import Carousel4 from "../images/carousel4.jpg";
import Carousel5 from "../images/carousel5.jpg";
import Carousel6 from "../images/carousel6.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Carousel1} alt="Imagen 1" className="carousel-image" />
      </div>
      <div>
        <img src={Carousel2} alt="Imagen 2" className="carousel-image" />
      </div>
      <div>
        <img src={Carousel3} alt="Imagen 3" className="carousel-image" />
      </div>
      <div>
        <img src={Carousel4} alt="Imagen 4" className="carousel-image" />
      </div>
      <div>
        <img src={Carousel5} alt="Imagen 5" className="carousel-image" />
      </div>
      <div>
        <img src={Carousel6} alt="Imagen 6" className="carousel-image" />
      </div>
    </Slider>
  );
};

export default Carousel;
