import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// Component
import { NextArrow, PrevArrow} from "./Arrows.components";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            console.log(getImages);
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);  //[]: calls just one time



    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        infinite: true,
        centerPadding: "250px",
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    // const images = ["https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0cb3ead21f71397abf9d3071150b59d340077df60cd41d8806b072952180beb2._UR1920,1080_RI_.jpg",
    //                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlBiK_QAHQjNoqJavS-EzBDxgvgA2FbwioQ&usqp=CAU",
    //                 "https://www.desktopbackground.org/p/2013/04/21/564187_bollywood-movies-poster-full-hd-free-download-group-1-http_1600x900_h.jpg",
    //                 "https://wallpapercave.com/wp/wp9349789.jpg",
    //                 "https://dailyresearchplot.com/wp-content/uploads/2021/04/Money-Heist-Season-5-2.jpg"
    //                ];
    return (
        <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {
                    images.map((image) => (
                        <div className="w-full h-64 md:h-80 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="image" className="w-full h-full rounded-md"/>
                        </div>
                    ))
                }
            </HeroSlider>
        </div>

        <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
                {
                    images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="image" className="w-full h-full rounded-md"/>
                        </div>
                    ))
                }
            </HeroSlider>
        </div>
            
        </>
    );
};

export default HeroCarousal;