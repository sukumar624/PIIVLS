import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './navigation.css';
import { CgMenuLeft } from "react-icons/cg";

function Navigation() {
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Array of service paths
    const servicesPaths = [
        '/study-visa',
        '/work-visa',
        '/visit-visa',
        '/migrate-visa',
        '/invest-visa',
        '/umrah-ziaraat',
        '/ticketing',
    ];

    const isServicesActive = servicesPaths.includes(location.pathname);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        closeDropdown(); // Ensure dropdown closes when the main menu closes
    };

    // Close dropdown on any click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close dropdown if navigating to a different service or non-service link
    useEffect(() => {
        if (!isServicesActive) {
            closeDropdown();
        }
        closeMenu(); // Close the entire menu on link click in mobile
    }, [location.pathname]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    <CgMenuLeft />
                </button>
                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" onClick={closeMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                                About Us
                            </NavLink>
                        </li>
                        <li
                            className={`nav-item dropdown ${isServicesActive ? 'active' : ''}`}
                            ref={dropdownRef}
                        >
                            <a
                                className={`nav-link dropdown-toggle ${isServicesActive || dropdownOpen ? 'active-link' : ''}`}
                                role="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown();
                                }}
                                aria-expanded={dropdownOpen}
                                aria-haspopup="true"
                            >
                                Services
                            </a>
                            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                                {servicesPaths.map((path) => {
                                    const serviceName = path
                                        .replace('/', '')
                                        .replace('-', ' ')
                                        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
                                    return (
                                        <li key={path}>
                                            <NavLink to={path} className="dropdown-item" onClick={closeMenu}>
                                                {serviceName}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/assessment" className="nav-link" onClick={closeMenu}>
                                Free Assessment
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/news" className="nav-link" onClick={closeMenu}>
                                News
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact-us" className="nav-link" onClick={closeMenu}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/career-opportunities" className="nav-link" onClick={closeMenu}>
                                Career Opportunities
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
