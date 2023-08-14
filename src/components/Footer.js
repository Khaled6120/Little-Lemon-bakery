import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>iLttle Lemon is a great place to go for a casual meal with friends or family. The menu features a variety of classic dishes, and the cocktails are always top-notch.</p>
                <div className="footer-content">
                    <div className="locations">
                        <ul className='list'>
                            <li>Turkey</li>
                            <li>UAE</li>
                            <li>Egypt</li>
                            <li>Syria</li>
                        </ul>
                    </div>
                 
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
