import React from 'react';
import { NavLink } from 'react-router-dom';
import './breadcrumb.css';

const Breadcrumb = ({ title, image, path }) => {
    return (
        <div className="bread_crumb_area" style={{ background: `url(${image})` }}>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <h2 className="title">{title}</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {title}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;
