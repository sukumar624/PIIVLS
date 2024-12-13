import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import CareerFormImg from '../assets/images/career-form-img.jpg';
import { useState } from 'react';
import { countries } from '../data/countries';
import Locations from '../components/Locations/Locations';
import { useEffect } from 'react';
const CareerReady = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.career_ready || {};
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

    // Handle submission for the second form with mobile validation
    const handleSecondFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        const mobileRegex = /^[0-9]{10,15}$/; // Allows only numbers, 10 to 15 digits

        if (!fullname.trim()) newErrors.fullname = 'Full Name is required.';
        if (!email.trim()) newErrors.email = 'Email is required.';
        if (!mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile Number is required.';
        } else if (!mobileRegex.test(mobileNumber)) {
            newErrors.mobileNumber = 'Enter a valid mobile number (10-15 digits).';
        }

        if (Object.keys(newErrors).length === 0) {
            console.log('Second form submitted successfully');
        }
        setErrors(newErrors);
    };
    return (
        <div className='career_page_area'>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={CareerFormImg} className='img-fluid' alt="" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div className="page_content_area">
                <div className="container">
                    <h2>What is Career Ready?</h2>
                    <p>
                        Do you feel confused about the career to take up for the future? Career Pathway? Clarity of the same?
                    </p>
                    <p>
                        We have an answer for you! Career Ready is that platform developed by PIIVLS that will help you and guide you to a successful future. We will take you on a journey of self-discovery that will help you evolve to your best possible version! We will help you understand your interest, personality and your top aptitude to explore the career choices suited for you. We will equip you with knowledge and information about various careers and of the world so you can make an informed decision. Since each student is different, their preferences are different, their choices and pathways will be different.
                    </p>
                    <h4>Why career counseling?</h4>
                    <p>
                        While planning for your career, you are planning for your life. There are many factors that must be taken into consideration while taking this decision. Career Counsellors help the student understand themselves better, their strengths, weaknesses, interests and aptitude. They give you an unbiased opinion, give you knowledge and information to help you make the decision for yourself. They make you aware of the various options available that you didn’t know of or wouldn’t have thought of. They take the help of psychometric tests to analyse the student and give their suggestions / information.
                    </p>
                    <h4>Why PIIVLS?</h4>
                    <p>
                        We at PIIVLS have been in the Immigration and Visa Consultancy field for the past 2+ decades. No one knows the requirements and the market better than us. We know that the earlier you plan for your career the better it is. We have understood that and want to help students make the right decision for the future at the right time. We have trained career counsellors, who will with the help of standardized and valid psychometric tests, help the student understand themselves better to make an informed decision about the future.
                    </p>
                    <h4>What we offer that others don’t:</h4>
                    <ul>
                        <li>Multiple one on one counselling sessions with the student and parent</li>
                        <li>Push the students to explore each and every career option before making a final decision</li>
                        <li>Help them creating a Y-Path which is their Country, College and Course of choice</li>
                        <li>
                            We do not make any decisions for the student but we make sure that the student is capable enough to and has the knowledge required to make that decision
                        </li>
                        <li>
                            Give them knowledge about the world, about what all to keep in mind before making that decision
                        </li>
                        <li>
                            We are not admission driven hence we give an unbiased opinion of the situation and help the student to make the right decision
                        </li>
                        <li>
                            We have trained career counsellors who give the students personal attention and help them declutter their mind
                        </li>
                        <li>
                            If need be we also help the student in their application process.
                        </li>
                        <li>
                            We give the student a bank of links to get them started on research about the various careers.
                        </li>
                        <li>
                            Follow up till the student makes a decision for their Career
                        </li>
                        <li>
                            Help the student come up with a plan B
                        </li>
                        <li>
                            Push the students to take up experiences from their field of interest to help make their decision
                        </li>
                    </ul>
                    <h3>Outcomes of Career Ready:</h3>
                    <h4>As an Individual </h4>
                    <ul>
                        <li>Independent in every way – Aim to be a free thinker – Aim to increase your employability and mobility.  </li>
                        <li>Confident Personality – Courage – EQ – Self-esteem – Self-actualization. </li>
                        <li>Lifetime Learner – Build a range of knowledge; constantly be reading a book or be enrolled in a course and aim to become an expert and excel in it. </li>
                        <li>Living your Purpose – your Ikigai – your reason to live.  </li>
                    </ul>
                    <h4>As a Professional  </h4>
                    <ul>
                        <li>
                            Technical Expert – Find a skillset or a subject you would like to become an expert in. This must have a STEM angle to it. Increase your employability.
                        </li>
                        <li>
                            Networker – Build your Linkedin profile and network across
                        </li>
                    </ul>
                    <h4>As an Indian  </h4>
                    <ul>
                        <li>Increased mobility – Remove your barriers. </li>
                        <li>Understand India – Be Indian – Love India – Empathize with India </li>
                        <li>Understand India – Be Indian – Love India – Empathize with India </li>
                    </ul>
                    <h3>Steps for Career Ready</h3>
                    <h4>Step 1 – Get to know each other</h4>
                    <p>
                        In this stage, you get an overview of what all we offer and rationale and reason behind doing so much. This is an introductory meeting to know each other. You will also create a digital profile on the PIIVLS Account so that you understand how we will collaborate with each other. We listen to what you and your parents have to say. Are you in agreement with each other or have different ideas? Do you have a career path that is realistic and will be applicable in the future?
                    </p>
                    <h4>Step 2  –  Know yourself</h4>
                    <p>
                        In this stage you will be given links to complete some psychometric tests, the results of which will help the counsellor generate a unique Career Report that you can refer to, to make a decision. Once you have completed these tests, a Career Report will be generated wherein there will be an in-depth breakdown of the various tests.
                    </p>
                    <h4>Step 3 – Know the world</h4>
                    <p>
                        In this stage, the student understands the world better. There is information on the understanding the world of opportunities, immigration, skills, expertise, global talent, learning opportunities and growth amongst others. You will also get a brief understanding of the application process so you can understand on how and where to start building your profile.
                    </p>
                    <h4>Stage 4 – Understand Yourself</h4>
                    <p>
                        This stage will give you more clarity. After the generation of the report, the counsellor and student meet for a discussion session where the report will be discussed with you in detail and any questions that you have will be answered. This stage will give you complete clarity on your interests, aptitude and personality.
                    </p>
                    <h4>Step 5 – Career Exploration</h4>
                    <p>
                        This is the stage where we help you explore the various options based on your Career Report. You will explore which of the career path you have chosen really fits you. You must experience it more deeply by either visiting the facility, meeting real people, taking online courses and eliminating ones that don’t interest you anymore or interning with someone from your chosen field.
                    </p>
                    <h4>Step 6 – Finalize Career Plan</h4>
                    <p>
                        In this stage, we help you finalize your Career Plan and the steps you must take to achieve your goal with deadlines and milestones. By this stage you will be clear on which career path including which country to take.
                    </p>
                    <h3>Deliverables:</h3>
                    <h4>Gold: </h4>
                    <ul>
                        <li>1 on 1 Counselling sessions   </li>
                        <li>6 different psychometric tests to understand the student    </li>
                        <li>Comprehensive Career Report    </li>
                        <li>Career Report discussion in depth   </li>
                        <li>Career Library Bank for Career search </li>
                        <li>Career Exploration with the help of Assignments  </li>
                        <li>Counselor to student Knowledge transfer    </li>
                        <li>Career Pathway Clarity for the student </li>
                        <li>Orientation to College search and application </li>
                    </ul>
                    <h4>Platinum: : </h4>
                    <ul>
                        <li>1 on 1 Counselling sessions    </li>
                        <li>6 different psychometric tests to understand the student     </li>
                        <li>Comprehensive Career Report</li>
                        <li>Career Report discussion in depth</li>
                        <li>Career Library Bank for Career search</li>
                        <li>Career Exploration with the help of Assignments</li>
                        <li>Counselor to student Knowledge transfer </li>
                        <li>Career Pathway Clarity for the student </li>
                        <li>Orientation to College search and application</li>
                        <li>Mentor for a period of 12 months</li>
                        <li>Constant communication with the student and parent on a bi-weekly basis</li>
                        <li>Opportunity to connect with the mentor if and when needed </li>
                        <li>Constant follow up in the path and plan process</li>
                    </ul>
                </div>
            </div>
            <Locations />
        </div>
    )
}

export default CareerReady