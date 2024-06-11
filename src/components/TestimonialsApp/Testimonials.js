import { useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I have ever used!",
      author: "John Doe",
    },
    {
      quote: "I have never seen anything better.",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone.",
      author: "James Doe",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <>
      <div className="testimonials">
        <div className="testimonials-quote">
          {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
          - {testimonials[currentIndex].author}
        </div>
        <div className="testimonials-nav">
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
