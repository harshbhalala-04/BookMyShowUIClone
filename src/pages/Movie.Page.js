import axios from "axios";
import React, {useEffect, useState} from "react";
import MovieHero from "../components/MovieHero/MovieHero.components";
import {BiCameraMovie} from "react-icons/bi";




const Movie = () => {
    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 text-2xl font-bold">About the movie</h2>
                    <p>Everything changes for Aarav when he gets involved in a road accident. One wrong decision takes him on a journey darker than his wildest dreams. Loved by a caring father, pampered by a loyal friend, and chased by a vigilant cop, will Aarav be able to find redemption?</p>
                </div>
                <div>
                    <hr className="my-8"/>
                </div>
                
                <div>
                <h1 className="text-gray-800 text-2xl font-bold mb-4">Applicable Offers</h1>
                    <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
                        <div className="w-8 h-8">
                            <BiCameraMovie className="w-full h-full" />   
                        </div>
                        
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
                            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    );
};

export default Movie;