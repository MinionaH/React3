import React from "react";
import Partners from '../img/Partners.png'
import '../Styles/Section2/section2.css'
import photo from "../img/SectionImage.png"


function Section2(){
    return(
        <div>
            <div className="partners">
                <img src={Partners} alt="partnersphoto"/>
            </div>
            
            <div className="main-section">
                <div className="left">
                    <img src={photo} alt="girlimg" className="girlphoto"/>
                </div>
                <div className="right">
                    <div className="inner-div">
                        <h1 className="main-text2">Detailed Examination</h1>
                        <p>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                        <a className="learnmore">Learn more</a>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Section2;