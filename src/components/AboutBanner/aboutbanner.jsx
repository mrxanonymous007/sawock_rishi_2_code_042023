import { useState, useEffect } from 'react';

import about_ban from '../../assets/about_ban.png';
import about_ban_mobile from '../../assets/about_ban_mobile.png';

import './aboutbanner.css';

function useChangeImage() {
    const [image, setImage] = useState(about_ban);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        if (width < 480) {
            setImage(about_ban_mobile);
        } else {
            setImage(about_ban);
        }
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);
    return image;
}

function AboutBanner() {
    return (
        <div className="about-banner">
            <img className="about-banner_img" src={useChangeImage()} alt="bannière de la page à propos" />
        </div>
    )
}

export default AboutBanner;