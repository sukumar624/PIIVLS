import React, { useEffect } from 'react'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import FormImg from '../assets/images/career-form-img.jpg'
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
const StatementPurpose = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.StatementPurpose || {};

    return (
        <div>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={FormImg} className='img-fluid' alt="coachinFormImg" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div className="page_content">
                <div className="container">
                    <h2>Stand Out with a Bold SOP</h2>
                    <p>
                        A Statement of Purpose is one of the most critical documents in your university admissions package. Unlike the rest of the application, the SOP is where you have a chance to directly speak to the admissions officer and showcase your best self in an unrestricted format. A bold SOP that gives an insight into yourself can significantly strengthen your application.
                    </p>
                    <h2>PIIVLS Statement of Purpose Solutions</h2>
                    <p>
                        Typically, an SOP consists of information such as your roots, education, future goals and why you are applying to that university. Our team of SOP experts works with you to create a compelling narrative that showcases you in the best light. Talk to us to discover how we can craft your SOP.
                    </p>
                    <h3>How PIIVLS Can Help You?</h3>
                    <p>With our understanding of global admissions trends, We can help you with</p>
                    <p>Identifying the tone of your SOP</p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>Writing your SOP</p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>Make it customised to your needs</p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>Dedicated SOP consultant</p>
                        </li>
                    </ul>
                    <p>
                        Reach out to us for a world-class SOP that gives your admissions application the strong introduction it needs
                    </p>
                    <br />
                    <h2>Other Services</h2>
                    <div className="table-responsive">
                        <table className='table table-bordered table-striped border-primary-subtle'>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to="/statement-of-purpose">STATEMENT OF PURPOSE</Link>
                                    </td>
                                    <td>
                                        <Link to="/letters-of-recommendation">LETTERS OF RECOMMENDATION</Link>
                                    </td>
                                    <td>
                                        <Link to="#">OVERSEAS EDUCATION LOAN</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="#">COUNTRY SPECIFIC ADMISSION</Link>
                                    </td>
                                    <td>
                                        <Link to="#"> COURSE RECOMMENDATION</Link>
                                    </td>
                                    <td>
                                        <Link to="#">DOCUMENT PROCUREMENT</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatementPurpose