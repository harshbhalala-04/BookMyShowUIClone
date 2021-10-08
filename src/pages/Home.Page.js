import axios from "axios";
import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.components";
import { Premier } from "../components/Premiere/premiere.componets";
import PosterSlider from "../components/posterSlider/posterSlider.componet";
import tempPoster from "../config/tempPoster.config";

function HomePage() {

    const[popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies(); 
    }, []);

    console.log({popularMovies});

    return (
        <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto md:px-44 px-4">
                <h1 className="text-2xl font-bold mb-8 text-gray-800">The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
                
            </div> 
            <div className="bg-harsh-50 md:px-44 px-4 py-16">
                <div className="container mx-auto px-4">
                <div className="flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" className="w-full h-full"/>
                </div>
                    <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Releases" isDark/>
                </div>
            </div>
            <div className="container mx-auto md:px-44 px-4">
                <PosterSlider images={popularMovies} title="Online Streaming Events" isDark={false}/>
            </div>
            <div className="container mx-auto md:px-44 px-4">
                <PosterSlider images={popularMovies} title="Outdoor Events" isDark={false}/>
            </div>
        </div>
        </>
    );
}

export default HomePage;