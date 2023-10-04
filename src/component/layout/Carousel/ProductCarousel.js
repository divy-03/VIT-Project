import React, { Fragment, useEffect, useState } from "react";

import "./ProductCarousel.css";

const ProductCarousel = (props) => {
  const { product } = props;

  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? product.images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === product.images.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSlide((prevSlide) =>
        prevSlide === product.images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(slideTimer);
    // eslint-disable-next-line
  }, [slide]);
  return (
    <Fragment>
      <div className="detailCarousel flex-start">
        <i className="fa-solid fa-arrow-left fa-arrowDetail" onClick={prevSlide}></i>

        {product.images.map((item, idx) => (
          <img
            key={idx}
            src={item.url}
            alt={`${idx} Slide`}
            className={slide === idx ? "detailSlide" : "slide detailSlide-hidden"}
            style={{
              opacity: slide === idx ? 1 : 0,
              transition: "opacity 1s ease", // Duration of fade-in effect
            }}
          />
        ))}

        <i className="fa-solid fa-arrow-right fa-arrowDetail" onClick={nextSlide}></i>

        <span className="detailIndicators">
          {product.images.map((_, idx) => {
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
    </Fragment>
  );
};

export default ProductCarousel;
