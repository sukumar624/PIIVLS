import React from 'react';
import EvaluationImg from '../assets/images/evalutions-img.jpg';
import { BsEnvelopeAt } from "react-icons/bs";
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

function EvalutionsPage() {
    return (
        <div className='evaluation_page'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-img">
                                <img src={EvaluationImg} className='img-fluid' alt="Evaluation" />
                            </div>
                            <div className="evaluation_social_link">
                                <ul>
                                    <li>
                                        <a href="#" onClick={(e) => e.preventDefault()}>
                                            <AiFillHome />
                                            <span>info@piivls4th Floor, 16/A Commercial, Phase 6, <br /> DHA, Lahore, Pakistan</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@piivls.com" target='_blank'>
                                            <BsEnvelopeAt />
                                            <span>info@piivls.com </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+9230111 00800 - 1">
                                            <FaPhoneAlt />
                                            <span>+9230111 00800 - 1</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="evaluation_content">
                            <h3>PIIVLS Products</h3>
                            <div className="product_list">
                                <div className="product-items">
                                    <div className="product_info">
                                        <h4>Australia PR Visa Eligibility Check Report</h4>
                                        <p><strong>₹2360.0</strong> (Including Taxes)</p>
                                    </div>
                                    <div className="product_btn">
                                        <button className='btn btn-danger'>Buy</button>
                                    </div>
                                </div>
                                <div className="product-items">
                                    <div className="product_info">
                                        <h4>Canada PR Visa Eligibility Check Report</h4>
                                        <p><strong>₹2360.0</strong> (Including Taxes)</p>
                                    </div>
                                    <div className="product_btn">
                                        <button className='btn btn-danger'>Buy</button>
                                    </div>
                                </div>
                                <div className="product-items">
                                    <div className="product_info">
                                        <h4>Germany Work Visa Eligibility Check Report</h4>
                                        <p><strong>₹1770.0</strong> (Including Taxes)</p>
                                    </div>
                                    <div className="product_btn">
                                        <button className='btn btn-danger'>Buy</button>
                                    </div>
                                </div>
                                <div className="product-items">
                                    <div className="product_info">
                                        <h4>UK Work Visa Eligibility Check Report</h4>
                                        <p><strong>₹1770.0</strong> (Including Taxes)</p>
                                    </div>
                                    <div className="product_btn">
                                        <button className='btn btn-danger'>Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </div>
    );
}

export default EvalutionsPage;
