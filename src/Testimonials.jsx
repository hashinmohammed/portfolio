import React, { useEffect, useState } from "react";
import { shortList, longList, list } from "./utils/TestimonialsData";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './Testimonials.css';

const Testimonials = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldState) => {
      const result = (oldState - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldState) => {
      const result = (oldState + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-section"> {/* Added slider-section class */}
          <h1 className="section-heading" data-aos="zoom-out-left">Testimonials</h1> {/* Added section-heading class */}

      <div className="slider-container">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article
              className="slide"
              key={id}
              style={{
                transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
                opacity: personIndex === currentPerson ? 1 : 0,
                visibility: personIndex === currentPerson ? 'visible' : 'hidden',
              }}
            >
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title"> {title} </p>
              <p className="text">{quote} </p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
