import React from 'react';
import Logo from '../../assets/images/logo.png';
import EmailIcon from '../../assets/images/email.svg';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header_logo">
                        <a href="index.html">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="header_email">
                        <a href="mailto:info@piivls.com">
                            <img src={EmailIcon} alt="" />
                            <span>info@piivls.com</span>
                        </a>
                    </div>
                    <div className="header_contact">
                        <Link to="/contact-us">
                            <button><span>Contact Us</span>
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
