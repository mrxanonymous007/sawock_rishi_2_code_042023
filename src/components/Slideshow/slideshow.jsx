import { useState, useEffect, useCallback } from "react";

import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

import "./slideshow.css";

function nextSlide(current, length, setCurrent) {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
}

function prevSlide(current, length, setCurrent) {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
}

function Slideshow({ pictures }) {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const length = pictures.length;

    const handleBulletClick = useCallback((index) => {
        setCurrent(index);
        setIsPaused(true);
    }, []);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                nextSlide(current, length, setCurrent);
            }, 3500);
            return () => clearInterval(timer);
        }
    }, [current, isPaused, length, setCurrent]);

    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    }

    return (
        <div className="slideshow">
            <div className="images_container">
                <img
                    key={pictures.id}
                    className="slideshow_img"
                    src={pictures[current]}
                    alt={pictures.title}
                />
            </div>
            <div className="buttons_container">
                {length > 1 && (
                    <>
                        <img
                            className="arrow_prev"
                            src={prevArrow}
                            onClick={() => prevSlide(current, length, setCurrent)}
                            alt="flèche précèdente"
                        />
                        <img
                            className="arrow_next"
                            src={nextArrow}
                            onClick={() => nextSlide(current, length, setCurrent)}
                            alt="flèche suivante"
                        />
                    </>
                )}
                {length > 1 && (
                    <div className="bullets_container">
                        {pictures.map((_, index) => (
                            <button
                                key={index}
                                className={`bullet ${index === current ? "active" : ""}`}
                                onClick={() => handleBulletClick(index)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Slideshow;