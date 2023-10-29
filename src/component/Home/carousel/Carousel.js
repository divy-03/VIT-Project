import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Carousel.css";
import slides from "../../../Data/carouselData.json";
const data = slides;

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? data.slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === data.slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSlide((prevSlide) =>
        prevSlide === data.slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 3 seconds

    return () => clearTimeout(slideTimer);
  }, [slide]);

  return (
    <div className="carousel flex-start">
      <i className="fa-solid fa-arrow-left fa-arrow" onClick={prevSlide}></i>

      {data.slides.map((item, idx) => (
        <a href={item.url} key={idx} target="_blank" rel="noreferrer">
          <img
            src={item.src}
            alt={item.alt}
            className={slide === idx ? "slide" : "slide slide-hidden"}
            style={{
              opacity: slide === idx ? 1 : 0,
              transition: "all 1s ease", // Duration of fade-in effect
            }}
          />
        </a>
      ))}

      <i className="fa-solid fa-arrow-right fa-arrow" onClick={nextSlide}></i>

      <span className="indicators">
        {data.slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => {
                setSlide(idx);
              }}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
