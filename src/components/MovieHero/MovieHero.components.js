import React from "react";

import { AiFillHeart } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';


const launchRazorpay = () => {
    const options = {
        key: "rzp_test_il0OViv0cegj1c",
        amount: 500*100,
        currency: "INR",
        name: "Dhuandhaar",
        description: "Movie Purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Successfull");
        },  
        theme: {color: "#c4242d"}
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
};

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/dhuandhaar-et00314682-08-09-2021-06-27-28.jpg" alt="Poster"/>
        </div>

        <div className="hidden md:block lg:hidden">
        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/dhuandhaar-et00314682-08-09-2021-06-27-28.jpg" alt="Poster"/>
        </div>

        <div className="relative hidden lg:block" style={{height: "30rem"}}>
            <div className="absolute h-full w-full z-10" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
            <div className="flex">
            <div className="absolute z-30 w-64 h-96 left-40 top-10 flex">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhuandhaar-et00314682-08-09-2021-06-27-28.jpg" alt="poster" className="h-full w-full rounded-xl"/>
                <div className="px-20 py-10">     
                <h1 className="text-5xl text-white font-bold">Dhuandhaar</h1>
                <div className="flex text-white py-8 items-center">
                    <div className="text-red-500 text-3xl"><AiFillHeart/></div>
                    <h1 className="text-3xl font-bold px-2">58%</h1>
                    <h2 className="text-2xl">388 ratings</h2>
                    <div className="text-2xl"><BiChevronRight /></div>
                </div>
                <div className="flex justify-between text-white bg-navCol-50 py-2 px-1 w-96 rounded-md px-3">
                    <div>
                        <div className="text-xl font-bold">Add your rating & review</div>
                        <div className="text-gray-300">your ratings matter</div>
                    </div>
                        <button className="bg-white text-black my-2 p-2 rounded-md font-semibold">Rate now</button>
                </div>
                <div className="py-2">
                    <button className="bg-white m-2 px-3 font-semibold rounded-sm hover:underline">2D</button>
                    <button className="bg-white px-3 font-semibold rounded-sm hover:underline">Gujarati</button>
                </div>
                <div className="flex text-white">
                    <h1>2h 8m</h1>
                    <p className="flex"><span className="text-2xl"><BsDot/></span><span className="hover:underline cursor-pointer">Drama,</span><span className="hover:underline pl-1 cursor-pointer">Thiller</span></p>
                    <p className="flex"><span className="text-2xl"><BsDot/></span>UA</p>
                    <p className="flex"><span className="text-2xl"><BsDot/></span>17 Sep,2021</p>
                </div>
                <div>
                    <button className="bg-red-500 text-white font-semibold px-12 py-3 my-5 rounded-md" onClick={launchRazorpay}>Book tickets</button>
                </div>
                </div>
            </div>
            </div>
        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/dhuandhaar-et00314682-08-09-2021-06-27-28.jpg" alt="Poster" className="w-full h-full"/>
        </div>
        </>
    );
};

export default MovieHero;