import React from "react";
import web from "../src/images/3d1.jpg";
import {NavLink} from "react-router-dom";
import Common from "./Common";

const About = () => {
    return(
        <>
        <Common name="Welcome to About page " imgsrc={web} visit="/contact" btn="Contact Now"/>
        </>
                          
    );
};
export default About;