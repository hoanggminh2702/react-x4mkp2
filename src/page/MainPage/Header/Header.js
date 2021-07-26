import React from 'react';
import Navbar from "./NavBar/Navbar";
import "./Header.css"
import Title from "./Title/Title";

const Header = () => {
    return (
        <header className="Header">
            <div className="master">
                <div className="overlay"></div>
                <nav className="navbar">
                    <Navbar/>
                </nav>
                <Title/>
            </div>
        </header>
    );
};

export default Header;