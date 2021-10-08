import React from "react";

import Navbar from "../components/NavBar/navbar.components";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousal />
            {props.children}
        </>
    );
};

export default DefaultLayout;