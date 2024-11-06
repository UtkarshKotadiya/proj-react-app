// src/components/MainImageSection.js
import React from 'react';

const MainImageSection = () => {
    return (
        <section id="home-page-img">
            <img 
                src={`${process.env.PUBLIC_URL}/proj_imgs/HP1.5.png`} 
                alt="Left Main" 
                id="left-main-img" 
            />
            <img 
                src={`${process.env.PUBLIC_URL}/proj_imgs/HP1.png`} 
                alt="Right Main" 
                id="right-main-img" 
            />
        </section>
    );
};

export default MainImageSection;
