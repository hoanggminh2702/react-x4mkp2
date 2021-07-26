import React from 'react';
import Contact from "./Contact/Contact";
import Credit from "./Credit/credit";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="master">
                <div className="container">
                    <div className="row">
                        <Contact/>
                        <Credit/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;