import React from "react";
import {BiChevronDown, BiChevronRight, BiMenu, BiSearch, BiChevronLeft, BiShareAlt} from "react-icons/bi";


const Navsm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between" >
            <div>
            <h3 className="text-2xl font-bold">It All Starts Here!</h3>
                
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full"/>
            </div>
        </div>
        </>
    );
};


const NavLg = () => {
    return (
        <>
            <div className="container mx-28 px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2">
                    <div className="w-15 h-12">
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center bg-white gap-3 px-3 mx-3 py-1 rounded-sm">
                        <BiSearch />
                        <input type="search" className="w-full focus:outline-none" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-grey-400 text-xs flex items-center hover:text-white cursor-pointer">
                        Bhavnagar 
                        <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-sm text-white rounded px-2 py-1">Sign in</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
        
    );
};

const MovieNavbar = () => {
    return (
        <>
        <nav className="bg-navColor-700 px-4 py-2">
            <div className="md:hidden">
                {/* This is hidden for medium and greater size screen (Mobile Screen)*/
                    <Navsm />
                }
            </div>
            <div className="hidden lg:hidden md:block py-2">
                {/* This is for tablet screen*/}
                <Navsm />
            </div>
            <div className="hidden lg:flex">
                {/*This is for desktop size screen */}
                <NavLg />
            </div>
        </nav>
        </>
    );
};

export default MovieNavbar;