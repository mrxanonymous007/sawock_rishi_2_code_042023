//importation de hook depuis react
import { useState, useEffect, useCallback } from "react";

//importaion des images
import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

//importation du CSS
import "./slideshow.css";

/*fonctions définissant les actions de transition vers la diapositive suivante et précédente en 
mettant à jour l'état current à l'aide de la fonction setCurrent. */
function nextSlide(current, length, setCurrent) {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
}

function prevSlide(current, length, setCurrent) {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
}


/*fonction définit le composant Slideshow qui prend une prop pictures, qui est un tableau d'images à afficher. */
function Slideshow({ pictures }) {

    //utilise le hook useState pour initialiser l'état current avec la valeur 0, ce qui représente l'index de la diapositive actuelle.
    const [current, setCurrent] = useState(0);
    //utilise le hook useState pour initialiser l'état isPaused avec la valeur false, ce qui représente l'état de pause du diaporama.
    const [isPaused, setIsPaused] = useState(false);
    //stocke la longueur du tableau d'images dans la variable length.
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

    /*condition vérifie si la prop pictures n'est pas un tableau ou si sa longueur est inférieure ou égale à 0. */
    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null;
    }

    return (
        <div className="slideshow">
            <div className="images_container">
                <img key={pictures.id} className="slideshow_img" src={pictures[current]} alt={pictures.title} />
            </div>

            <div className="buttons_container">
                {length > 1 && ( //condition vérifie si la longueur du tableau pictures est supérieure à 1 pour afficher les boutons de navigation et les indicateurs de diapositives.
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