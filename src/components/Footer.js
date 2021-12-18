import React from 'react';
import '../Styles/footer/footerMain.css'
import fb from '../img/fb.png'
import tweet from '../img/tweeter.png'
import ln from '../img/ln.png'

function Footer() {
    return (
        <div className="main-footer">
            <div className="small-cont">
                <h1 className="text">Interested in getting fusely?</h1>
                <button className="footer-btn">Let's Talk</button>
            </div>


            <div className="aboutUs">
                <div className="inner">
                    <div className="about">
                        <h4>Product</h4>
                        <a href="/work">How It works</a>
                        <a href="/work">Features</a>
                        <a href="/work">Pricing</a>
                        <a href="/work">FAQ</a>
                        <a href="/work">Download</a>
                    </div>
                    <div className="about">
                        <h4>Company</h4>
                        <a href="/work">About</a>
                        <a href="/work">Blog</a>
                        <a href="/work">Partnership</a>
                        <a href="/work">Terms of use</a>
                        <a href="/work">Privacy policy</a>
                    </div>
                    <div className="support">
                        <h4>Support</h4>
                        <a href="/work">Help center</a>
                        <a href="/work">Contact us</a>
                    </div>
                    <div className="social">
                        <h4>Get in touch</h4>
                        <img src={fb} alt="logo" id="logo"/>
                        <img src={tweet} alt="logo" id="logo"/>
                        <img src={ln} alt="logo" id="logo"/>
                    </div>
                </div>
                 

            </div>

            <div><h1 className='Author'>Nikoloz Sadirini</h1></div>
        </div>
    )
}

export default Footer;
