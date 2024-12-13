import React from 'react'
import { useEffect } from 'react';
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import { useState } from 'react';
import CountryAdmissionFormImg from '../assets/images/country-form-img.jpg'
import Locations from '../components/Locations/Locations';

const CountrySpecificAdmission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.country_specific_admission || {};
    const [userType, setUserType] = useState("");
    const [schoolLabel, setSchoolLabel] = useState("");
    const handleSchoolLabelChange = (e) => setSchoolLabel(e.target.value);


    const [selectCountry, setSelectCountry] = useState("");
    const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);

    // Second form inputs
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const [errors, setErrors] = useState({});

    const handleUserTypeChange = (e) => setUserType(e.target.value);
    const handleSelectCountry = (e) => setSelectCountry(e.target.value);

    // Handle submission for the first form
    const handleFirstFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!userType) newErrors.userType = 'Please select a user type.';
        if (!selectCountry) newErrors.selectCountry = 'Please choose a country.';

        if (Object.keys(newErrors).length === 0) {
            setShowUserDetailsForm(true); // Show the second form
        }
        setErrors(newErrors);
    };
    const formTitle = "Sign up for a free expert consultation";
    return (
        <div className='country_page_area'>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={CountryAdmissionFormImg} className='img-fluid' alt="" />
                        </div>
                        <RegistrationForm formTitle={formTitle} />
                    </div>
                </div>
            </div>
            <div className="page_content_area">
                <div className="container">
                    <h4>Where would you like to study?</h4>
                    <p>
                        Want to pursue an MS in the US? Want to take advantage of Germany’s free education? Keen on studying in and later working in Australia? PIIVLS can help you begin your higher education journey in the country of your choice. Our international presence and deep understanding of educational and work trends put us in a unique position to advise and help you realise your dream of studying in the country of your choice.
                    </p>
                    <h4>PIIVLS country-specific admissions solutions</h4>
                    <p>
                        Studying abroad is all about making the right decisions. Get everything right, and you are on course for a career that can transform your life. At PIIVLS, our process begins with evaluating your preferences and profile. We understand which countries you want to study in and your career trajectory and present well-researched options that can help you realise your dreams.
                    </p>
                    <div className="row">
                        <div className="col-sm-6">
                            <table class="table table-bordered table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            COUNTRY ADMISSIONS MULTI COUNTRY
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><del>Rs.24,240</del> Rs.21,240</td>
                                    </tr>
                                    <tr>
                                        <td>(Offer Price)</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">
                                                <button className='btn btn-primary'>BUY NOW</button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-6">
                            <table class="table table-bordered table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            COUNTRY ADMISSIONS MULTI COUNTRY WITH VISA
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><del> Rs.35,090</del> Rs.30,090</td>
                                    </tr>
                                    <tr>
                                        <td>(Offer Price)</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#">
                                                <button className='btn btn-primary'>BUY NOW</button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h4>How PIIVLS can help you</h4>
                    <p>
                        PIIVLS streamlines the process of studying in the country of your choice with our student-first solutions. We will help you with:
                    </p>
                    <ul>
                        <li>Unbiased advice</li>
                        <li>Dedicated study abroad consultant</li>
                        <li>Detailed report on your options</li>
                        <li>Help in shortlisting courses and colleges</li>
                        <li>Your next steps to study abroad</li>
                    </ul>
                    <p>
                        Talk to our counsellors to understand your study abroad options.
                    </p>
                </div>
            </div>
            <Locations />
        </div>
    )
}

export default CountrySpecificAdmission