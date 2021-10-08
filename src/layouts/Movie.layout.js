import React from "react";

import MovieNavbar from "../components/NavBar/movieNavbar.components";


const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar />
            {props.children}
        </>
    );
};

export default MovieLayout;