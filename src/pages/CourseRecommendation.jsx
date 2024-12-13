import React from 'react'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import coursercommendationform from '../assets/images/course-recommendationform.jpg';
import { countries } from '../data/countries';
import Locations from '../components/Locations/Locations';
import { useEffect } from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const CourseRecommendation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.course_recommendation || {};
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
    return (
        <div className='course_recomendation_page'>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={coursercommendationform} className='img-fluid' alt="" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div className="page_content_area">
                <div className="container">
                    <h4>Choose the right course to set up your future</h4>
                    <p>
                        Studying abroad is a life-changing event. However, choosing the right course and college is critical to ensuring your future prospects are bright. Countries across the world have opened their doors to international students and the choice now lies with students. With our understanding of the overseas education and career sectors, Y-Axis has the knowledge to help you make the right decision.
                    </p>
                    <h4>Choosing your course</h4>
                    <p>
                        If you are not sure about which course you want to study, you can assess the available courses based on these factors:
                    </p>
                    <ul>
                        <li>
                            Subjects you enjoy learnng
                        </li>
                        <li>
                            Skills you want to gain through the course
                        </li>
                    </ul>
                    <p>
                        When you are making a comparison between the different colleges that offer your chosen course, use these parameters to make an informed comparison:
                    </p>
                    <ul>
                        <li>University ranking</li>
                        <li>Start dates of available programs</li>
                        <li>Content of the course</li>
                        <li>Teaching methodology</li>
                        <li>Career prospects for the course</li>
                    </ul>
                    <p>
                        You should consider the immigration options of the country in which you want to study. You should also consider the post-study work options especially if you intend to stay back in the country once your course is over. You must also review the placement record of the university you have opted for.
                    </p>
                    <h2>PIIVLS course recommendation solutions</h2>
                    <p>
                        Unlike other educational consultancies, PIIVLS offers unbiased advice that puts you on the path to success. We do not have university partnerships or tie-ups and are genuinely interested in helping you study in a course that can help you fulfil your potential. Our free online career counselling includes course and college recommendations based on your profile, preferences and the career trajectory you want to take.
                    </p>
                    <p>
                        We help you discover the right course based on your preferred career path.
                    </p>
                    <p>
                        Our service package ensures we are with you at every step of your journey from entrance exams to admissions to visas and post-landing support.
                    </p>
                    <p>
                        We take pride in providing unbiased advice to students. We are not in partnership with any university and are an independent overseas education consultant.
                    </p>
                    <h3>How PIIVLS can help you</h3>
                    <p>
                        PIIVLS course recommendation solutions were created to offer honest recommendations with the student’s interests at its core. We help you with:
                    </p>
                    <ul>
                        <li>Unbiased advice</li>
                        <li>Dedicated study abroad consultant</li>
                        <li>Help in shortlisting courses</li>
                        <li>Help in shortlisting colleges</li>
                        <li>Your next steps to study abroad</li>
                    </ul>
                    <p>
                        Talk to our counsellors to discover how we can help you study in the right course and right college.
                    </p>
                    <p>
                        Our services are competitively priced, and they include counseling, course selection, documentation, coaching & student visa application.
                    </p>
                </div>
            </div>
            <Locations />
        </div>
    )
}

export default CourseRecommendation