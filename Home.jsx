import React from "react";
import web from "../src/images/kk6.png";
import {NavLink} from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return(
        <>
        <Common name="Welcome to Home page" imgsrc={web} visit="/service" btn="Get soon"/>
                </>
    );
};
export default Home;
