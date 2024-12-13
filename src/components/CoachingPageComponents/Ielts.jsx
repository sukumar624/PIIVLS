import React from 'react'
import itelImg from '../../assets/images/itel-img1.jpg'
import { GoDotFill } from 'react-icons/go'
const Ielts = () => {
    return (
        <div className='container'>
            <div className="card p-4">
                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <div className="img_box">
                            <img src={itelImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="page_content_area">
                            <h2>About International English Language Testing System (IELTS)</h2>
                            <p>
                                The International English Language Testing System (IELTS) is one of the most sought-after standardized tests for checking an individual’s English language proficiency. A high score in IELTS can give you an edge over other applicants and put you in the top position among applicants. Y-Axis IELTS Coaching is an intensive training program designed to help you achieve your highest score in this exam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card p-4">
                <div className="row align-items-center">
                    <div className="col-sm-8">
                        <div className="page_content">
                            <h2>Course Highlights</h2>
                            <p>
                                The IELTS on-location and online coaching by Y-Axis offers expert guidance on all the four components of the test-
                            </p>
                            <ul>
                                <li>
                                    <GoDotFill />
                                    <p>Listening</p>
                                </li>
                                <li>
                                    <GoDotFill />
                                    <p>Reading</p>
                                </li>
                                <li>
                                    <GoDotFill />
                                    <p>Writing</p>
                                </li>
                                <li>
                                    <GoDotFill />
                                    <p>Speaking</p>
                                </li>
                            </ul>
                            <p>
                                The right IELTS coaching can help you achieve the score that matters!
                            </p>
                            <button className='btn btn-outline-primary'>Get More Information</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="img_box">
                            <img src={itelImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ielts