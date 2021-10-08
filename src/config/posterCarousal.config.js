import React from "react";

const settings = {
    infinte: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinte: true
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinte: true
            }
        }
    ]
};

export default settings;