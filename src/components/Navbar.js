import React from 'react';
import '../Styles/Navbar/Navbar.css'
import '../Styles/Navbar/logo.css'
import '../Styles/Navbar/button.css'
import logo from '../img/Vector.png'

function Navbar() {

    const login = ()=>{
        alert('Sike You Can\'t use it yet')
    }

    return (
        <div className="main-navbar">
            
                <div className= "main-logo">
                    <img src={logo} alt="logo" />
                    <a id ="logo"href="/logo">Fusely</a>
                </div>

                <nav className = "nav">
                    <a href ="/home" id="home">Home</a>
                    <a href ="/Features">Features</a>
                    <a href ="/Pricing">Pricing</a>
                    <a href ="/Blog">Blog</a>
                    <a href ="/Contact">Contact</a> 
                </nav>

                <div className="main-buttons">
                    <button className="login" onClick={login}>Log in</button>
                    <button className="getstarted">Get Started</button>
                </div>
            
            
            
        </div>
    )
}

export default Navbar;
