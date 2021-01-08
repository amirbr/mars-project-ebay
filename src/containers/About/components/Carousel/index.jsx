import React, { useRef } from 'react'
import './style.css'

const Carousel = ({ images }) => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="container-carousel">
      <div ref={ref} className="carousel">
        {images.map(image => <img key={image.id} src={image.img_src} />) }
      </div>
      <span onClick={() => scroll(200)}>&#62;</span>
    </div>

  )
}

export default Carousel;
