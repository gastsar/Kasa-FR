import React, { useState } from "react";
import nextImage from "../../assets/next-icone.svg";
import prevImage from "../../assets/prev-icone.svg";

const NavBtn = ({btnSlideSrc, onClick})=> {
  const altText = btnSlideSrc === nextImage ? 'Next Image' : 'Previous Image';
  return (<img src={btnSlideSrc} alt={altText} onClick={onClick} className="carousel__btn btn" />)
} 
export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  if (images.length === 1) {
    return (
      <>
        <img className="image-carousel" src={images[0]} alt={`Slide 1`} />
      </>
    );
  }

  return (
    <>
      <div className="btn-carousel">
        <NavBtn btnSlideSrc={prevImage}  onClick={handlePrevClick} />
        <NavBtn btnSlideSrc={nextImage} onClick={handleNextClick}/>
      </div>
     
    {images.map((image, index) => (
        <img className="image-carousel"
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        />
      ))}
       <div className="slide-number">{currentIndex + 1} / {images.length}</div>
    </>
  );
}
