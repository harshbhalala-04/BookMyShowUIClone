import React from "react";
import Slider from "react-slick";

// Component
import Poster from "../Poster/poster.components";
import settings from "../../config/posterCarousal.config";
import PremierImages from "../../config/tempPoster.config";

export const Premier = () => {
    
    console.log("Hello");
    return (
        <>
        <div className="flex flex-col items-start py-4">
            <h3 className="text-white text-xl font-bold">Premiers</h3>
            <p className="text-white text-sm">Brand New Release Every Friday</p>
        </div>
        <Slider {...settings}>
        {PremierImages.map((image) => (
            <Poster {...image} isDark />
        ))}
        
        </Slider>
        </>
    );
};