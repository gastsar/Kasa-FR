import React from 'react';
import StarFull from '../../assets/star-full.svg';
import StarEmpty from '../../assets/star-empty.svg';

function Star({ isFull, index }) {

  return (
    <img
      key={`star-${index}`}
      className="star"
      src={isFull ? StarFull : StarEmpty}
      alt={isFull ? 'star full' : 'star empty'}
    />
  );
}

function Rating({ rating }) {
  const ratingInt = parseInt(rating);

  const Stars = Array.from({ length: 5 }, (_, index) => (
    <Star key={index} index={index} isFull={index < ratingInt} />
  ));

  return <div className='rating'>{Stars}</div>;
}

export default Rating;
