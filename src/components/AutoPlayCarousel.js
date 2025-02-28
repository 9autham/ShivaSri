import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './AutoPlayCarousel.css'

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('./resources/carousel', false, /\.(png|jpe?g|svg)$/));

const items = images.map((image) => {
  return {
    image: image,
  };
});


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const WithStyles = ({ image, headline}) => (
  <div>
    <img className="carousel-image" src={image} alt={headline} />
  </div>
);

function AutoPlayCarousel() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={2000}
      centerMode={false}
      className="mt-4"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {items.map((item, index) => (
        <WithStyles key={index} {...item} />
      ))} 
    </Carousel>
  );
}

export default AutoPlayCarousel;
