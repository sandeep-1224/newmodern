import React from "react";
// import web from "../src/images/3d1.jpg";
import { NavLink } from "react-router-dom";

const Card= (props) => {
    return (
        <>
        {/* <div className="row gy-5"> */}
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="{props.imgsrc}"/>
                    <div className="card body">
    <h5 className="card-title my-4 text-center font-weight-bold">{props.title}</h5>

                        <p className="card-text ">
                            Some quick example text to build on the card title and make up the bulk of the cards content.
                        </p>
                        <div className="text-center my-2">
                        <NavLink to="#" className="btn btn-primary ">Go somewhere</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
         );
};
export default Card;