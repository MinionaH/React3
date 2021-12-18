import React from "react";
import photo from '../img/photo.png'
import '../Styles/Section1/section1.css'

function Section1(){
    return(

        <div className="main-section">
            <div className="left">
                <div className="inner-div">
                    <h1 className="main-text">Let’s get fusely together</h1>
                    <p className="p1">Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                    <button className="getstartedtwo">Get Started</button>
                </div>
            </div>
            <div className="right">
                <img src={photo} alt="girlimg" className="girlphoto"/>
            </div>
        </div>
    );
}

export default Section1;