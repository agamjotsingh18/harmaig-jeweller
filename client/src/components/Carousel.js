// FullWidthCarouselWithLines.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import imageone from "../assets/1.png";
import imagetwo from "../assets/2.png";
import imagethree from "../assets/3.png";

const CarouselContainer = styled.div`
  position: relative;
  width: 98.9vw;
  height: 80vh;
  overflow: hidden;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100vw;
    height: 60vh;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 50vh;
  }
`;

const fadeSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Slide = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  animation: ${fadeSlide} 1s ease-out;
  position: relative;
`;

// const Caption = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 30px;
//   color: white;
//   font-size: 2rem;
//   font-weight: bold;
//   padding: 15px 20px;
//   max-width: 60%;
//   background: rgba(0, 0, 0, 0.5);
//   border-radius: 8px;
//   opacity: 0;
//   animation: ${fadeSlide} 1s ease-out 0.5s forwards;

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//     padding: 10px 15px;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//     padding: 8px 12px;
//   }
// `;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6));
  z-index: 1;
`;

const LineIndicatorContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LineIndicator = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#888888')};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: background-color 0.3s, opacity 0.3s;
  border-radius: 2px;

  @media (max-width: 480px) {
    width: 20px;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 12px;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  opacity: 0;
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 15px;
`;

const NextButton = styled(NavigationButton)`
  right: 15px;
`;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      imageUrl: imageone,
    },
    {
      imageUrl: imagetwo,
    },
    {
      imageUrl: imagethree,

    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNextSlide = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            display: index === activeIndex ? 'block' : 'none',
          }}
        >
          <GradientOverlay />
          {/* <Caption>{slide.caption}</Caption> */}
        </Slide>
      ))}

      <PrevButton onClick={goToPrevSlide} aria-label="Previous Slide" />
      <NextButton onClick={goToNextSlide} aria-label="Next Slide" />

      <LineIndicatorContainer>
        {slides.map((_, index) => (
          <LineIndicator key={index} isActive={index === activeIndex} />
        ))}
      </LineIndicatorContainer>
    </CarouselContainer>
  );
};

export default Carousel;
