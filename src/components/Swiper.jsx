import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const BUTTON_WIDTH = 1.6;
const SLIDES_PER_VIEW = 4;
const SLIDE_WIDTH = 7.7;
const GAP_BETWEEN_SLIDES = 0.5;
const NUM_OF_BUTTON = 2;

const Swiper = ({ images }) => {
  const [translateValue, setTranslateValue] = React.useState(0);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [maxNumberOfSlides, setMaxNumberOfSlides] = React.useState(
    images.length
  );

  React.useEffect(() => {
    setTranslateValue(0);
    setActiveSlide(0);
    setMaxNumberOfSlides(images.length);
  }, [images]);

  const onPreviousHandler = () => {
    const unitWidth = SLIDE_WIDTH + GAP_BETWEEN_SLIDES;
    if (activeSlide > 1 && activeSlide < maxNumberOfSlides - 1) {
      setTranslateValue((prevState) => {
        if (prevState - unitWidth >= unitWidth * -1) {
          setActiveSlide(maxNumberOfSlides - 1);
          return unitWidth * -1 * (maxNumberOfSlides - 3);
        } else {
          return prevState + unitWidth;
        }
      });
    } else if (activeSlide === 0 && maxNumberOfSlides > 2) {
      setTranslateValue(unitWidth * -1 * (maxNumberOfSlides - 3));
    }
    setActiveSlide((prevState) =>
      prevState - 1 < 0 ? maxNumberOfSlides - 1 : prevState - 1
    );
  };

  const onNextHandler = () => {
    const unitWidth = SLIDE_WIDTH + GAP_BETWEEN_SLIDES;
    if (
      maxNumberOfSlides > SLIDES_PER_VIEW &&
      activeSlide > 0 &&
      activeSlide <= maxNumberOfSlides - SLIDES_PER_VIEW
    ) {
      setTranslateValue((prevState) => {
        return prevState - unitWidth;
      });
    } else if (activeSlide === maxNumberOfSlides - 1 && maxNumberOfSlides > 2) {
      setTranslateValue(0);
    }

    setActiveSlide((prevState) => {
      if (prevState >= maxNumberOfSlides - 1) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };

  return (
    <div className="swiper">
      <img
        src={images[activeSlide]}
        alt="0"
        style={{
          width: `${
            SLIDES_PER_VIEW * SLIDE_WIDTH +
            GAP_BETWEEN_SLIDES * (SLIDES_PER_VIEW - 1) +
            NUM_OF_BUTTON * BUTTON_WIDTH
          }rem`,
        }}
      />
      <div className="controls">
        <button
          onClick={onPreviousHandler}
          style={{
            width: `${BUTTON_WIDTH}rem`,
          }}
        >
          <SlArrowLeft />
        </button>
        <ul
          style={{
            width: `${
              SLIDES_PER_VIEW * SLIDE_WIDTH +
              (SLIDES_PER_VIEW - 1) * GAP_BETWEEN_SLIDES
            }rem`,
          }}
        >
          {images.map((img, idx) => (
            <li
              key={idx}
              style={{
                transform: `translateX(${translateValue}rem)`,
              }}
            >
              <img
                src={img}
                alt={idx}
                style={{
                  width: `${SLIDE_WIDTH}rem`,
                }}
                className={idx === activeSlide ? "active" : null}
                loading={"lazy"}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={onNextHandler}
          style={{
            width: `${BUTTON_WIDTH}rem`,
          }}
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Swiper;
