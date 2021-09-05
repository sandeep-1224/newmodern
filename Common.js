import React from "react";
import web from "../src/images/3d1.jpg";
import {NavLink} from "react-router-dom";

const Common = (props) => {
    return(
        <>
        <section id="header" className=" d-flex align-items-center">
            <div className="container-fluid">
            <div className="row">
            <div className=" col-lg-6 col-md-6 col-12 ">
                        <img src={props.imgsrc}  className="img-fluid"  alt="good img"/>

                       </div>

                       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h2> {props.name}<strong className="searching"> Searching</strong></h2>
                     <h3 className ="my-3" > This is my team  very cleaver</h3>
                     <div className="mt-3">
                         <NavLink to={props.visit} className="btn-get-started">{props.btn} </NavLink>
                     </div>
                     </div> 
                         </div>
                         </div>
                         </section>
                          </>
    );
};
export default Common;