import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import studyFormImg from '../assets/images/study-blog-img.jpg';
import Search from '../components/Search/Search';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Process from '../components/Process/Process';
import VisaCard from '../components/VisaCard/VisaCard';
import Coaching from '../components/Coaching/Coaching';
import WhyChoose from '../components/WhyChoose/LearningSolution';
import Faq from '../components/Faq/Faq';
import Locations from '../components/Locations/Locations';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import { countries } from '../data/countries';
import chooseData from '../components/WhyChoose/chooseData';
import StudyFaqData from '../components/Faq/StudyFaqData'
import { Link } from 'react-router-dom';
const visaLinks = {
    columnOne: [
        { href: "/study-visa/canada", label: "Study in Canada" },
        { href: "/study-visa/australia", label: "Study in Australia" },
        { href: "/study-visa/germany", label: "Study in Germany" },
        { href: "/study-visa/uk", label: "Study in UK" },
        { href: "/study-visa/usa", label: "Study in USA" },
        { href: "/study-visa/europe", label: "Study in Europe" },
        { href: "/study-visa/korea", label: "Study in Korea" },
        { href: "/study-visa/finland", label: "Study in Finland" },
        { href: "/study-visa/netherlands", label: "Study in Netherlands" },
        { href: "/study-visa/france", label: "Study in France" },
        { href: "/study-visa/sweden", label: "Study in Sweden" },
        { href: "/study-visa/switzerland", label: "Study in Switzerland" },
        { href: "/study-visa/denmark", label: "Study in Study in Denmark" },
        { href: "/study-visa/dubai", label: "Study in Dubai" },
        { href: "/study-visa/ireland", label: "Study in Ireland" },
        { href: "/study-visa/italy", label: "Study in Italy" },
        { href: "/study-visa/japan", label: "Study in Japan" },
        { href: "/study-visa/luxembourg", label: "Study in Luxembourg" },
        { href: "/study-visa/new-zealand", label: "Study in New Zealand" },
        { href: "/study-visa/norway", label: "Study in Norway" },
        { href: "/study-visa/poland", label: "Study in Poland" },
        { href: "/study-visa/spain", label: "Study in Spain" },
    ],
};
const universities = [
    { name: "University of Toronto", slug: "university-of-toronto" },
    { name: "University of Waterloo", slug: "university-of-waterloo" },
    { name: "University of Melbourne", slug: "melbourne-business-school" },
    { name: "University of Wollongong", slug: "university-of-wollongong" },
    { name: "University of Munich", slug: "university-of-munich" },
    { name: "USA Stanford University", slug: "stanford-university" },
    { name: "California Institute of Technology", slug: "california-institute-of-technology" },
    { name: "University of Oxford", slug: "university-of-oxford" },
    { name: "University of Bern", slug: "university-of-bern" },
    { name: "University of Cambridge", slug: "university-of-cambridge" },
    { name: "Audencia Business School", slug: "audencia-business-school" },
    { name: "Karlsruhe Institute of Technology", slug: "karlsruhe-institute-of-technology" },
    { name: "University of Luxembourg", slug: "university-of-luxembourg" },
    { name: "Abu Dhabi University", slug: "abu-dhabi-university" },
    { name: "University of Warsaw", slug: "university-of-warsaw" },
    { name: "University of Oslo", slug: "university-of-oslo" },
    { name: "Kyoto University", slug: "kyoto-university" },
    { name: "University College Dublin", slug: "university-college-dublin" },
    { name: "University of Otago", slug: "university-of-otago" },
    { name: "University of Amsterdam", slug: "university-of-amsterdam" },
];
const StudyVisa = () => {
    const formatCountryName = (country) => country.replace(/\s+/g, ' ');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.study || {};
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
    // student_api.php

    return (
        <>
            <div className="study_visa_page">
                <Breadcrumb title={title} image={image} path={path} />
                <div className="form_container">
                    <div className="container">
                        <div className="form_wrapper">
                            <div className="form_img">
                                <img src={studyFormImg} className='img-fluid' alt="" />
                            </div>
                            {!showUserDetailsForm && (
                                <form onSubmit={handleFirstFormSubmit}>
                                    <h2>Study Abroad</h2>
                                    <p>
                                        Study abroad allows every student to discover and broaden their horizons. Become an adaptable global contender by Studying Abroad!
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="user-type">You are a</label>
                                            <select
                                                className="form-select"
                                                id="user-type"
                                                value={userType}
                                                onChange={handleUserTypeChange}
                                            >
                                                <option value="" disabled>Select an option</option>
                                                <option value="Undergraduate">Undergraduate</option>
                                                <option value="Graduate">Graduate</option>
                                                <option value="Professional">Professional</option>
                                                <option value="Parent">Parent</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="country">Choose Your Country</label>
                                            <select className='form-select' id="country" value={selectCountry} onChange={handleSelectCountry}>
                                                <option value="" disabled>
                                                    -- Select a Country --
                                                </option>
                                                {
                                                    countries.map((country) => (
                                                        <option key={country} value={country}>{country}</option>
                                                    ))
                                                }


                                            </select>
                                            {errors.selectCountry && <p className="error">{errors.selectCountry}</p>}
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className='btn btn-primary w-100'>Next</button>
                                        </div>
                                    </div>
                                    {/* Additional options for school students */}

                                </form>
                            )}

                            {/* Second Form */}
                            {showUserDetailsForm && (
                                <RegistrationForm userType={userType} selectCountry={selectCountry} schoolLabel={schoolLabel} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="search_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-8">
                                <Search />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchable_area">
                    <div className="container">
                        <div className="search_listing">
                            <div className="search_item">
                                <h4>By Country</h4>
                                {Object.entries(visaLinks).map(([key, links]) => (
                                    <div className="choose_country_item" key={key}>
                                        <ul>
                                            {links.map((link) => (
                                                <li key={link.href}>
                                                    <Link to={link.href}>
                                                        <MdKeyboardDoubleArrowRight />
                                                        <span>{link.label}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="search_item">
                                <h4>By Degree</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <MdKeyboardDoubleArrowRight />
                                            <span>Masters</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <MdKeyboardDoubleArrowRight />
                                            <span>MBA</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <MdKeyboardDoubleArrowRight />
                                            <span>B.TECH</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <MdKeyboardDoubleArrowRight />
                                            <span>Bachelors</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="search_item">
                                <h4>By University</h4>
                                <ul>
                                    {universities.map((university) => (
                                        <li key={university.slug}>
                                            <Link to={`/study-visa/university/${university.slug}`}>
                                                <MdKeyboardDoubleArrowRight />
                                                <span>{university.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* eligibility area */}
                <div className="eligibility_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-9">
                                <div className="sub_heading text-center">
                                    <h2>Select your <span>Career Path</span></h2>
                                    <p>
                                        Deciding to work, study or settle abroad is a life changing decision. Many people takes advices from friends or unreliable sources. Y-Path is a structured framework that makes you understand the right path.
                                    </p>
                                    <a href="#">
                                        <button className='custom_btn'>
                                            <span>Get Started</span>
                                            <MdKeyboardDoubleArrowRight />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Process Component */}
                <Process
                    title="Way Forward"
                    description="Learn more about our step-by-step visa process with guided support."
                />
                {/* Visa Card Components */}
                <VisaCard />
                {/* Coaching Card Component */}
                <Coaching />
                {/* WhyChoose component */}
                <WhyChoose
                    title="Why choose PIIVLS study counsellor?"
                    description="Helps the students to execute their educational experience with intelligence and integrity..."
                    data={chooseData}
                />

                {/* content_area */}
                <div className="page_content_area">
                    <div className="container">
                        <h2>Study Abroad: Consultants, Top Universities, Colleges, Courses & Visa Services</h2>
                        <p>
                            In this ever-changing world, Studying abroad is a dream and a life-changing experience for students. It helps them gain skills that help in professional development, foster independence, and make connections.
                        </p>
                        <p>
                            While <strong>studying abroad</strong> can offer amazing opportunities, it can also feel overwhelming for some students. In 2023, over 765,000 Indian students chose to <strong>study abroad</strong>. By 2024, that number has grown to 1.33 million, with more Indian students than ever before taking advantage of the chance to <a href="#">study abroad</a> and make the most of their <strong>international education</strong>.
                        </p>
                        <p>
                            <strong>Education overseas</strong> is one of the most advantageous experiences for a student. With foreign education, international students can study in a foreign nation and take in the experience and culture of overseas education.
                        </p>
                        <p>
                            Almost every student wishes to pursue an overseas education, <strong>but they struggle to find the best study abroad consultant, top universities, the right courses, legitimate guides</strong>, and support to excel.
                        </p>
                        <p>
                            We, at the <strong>PIIVLS</strong>, solve your problem. <strong>Studying in a foreign</strong> nation is a life-changing experience for many aspiring students. It helps students gain skills that aid in professional development, offers cultural experiences, and provides opportunities to make meaningful connections.
                        </p>
                        <h2>Benefits of Studying Abroad:</h2>
                        <ul>
                            <li>
                                <p>
                                    <strong>Familiarisation with new culture</strong>: Nothing compares to the immersive international experience you get by studying in a different country. Students get to know about the locals, customs, traditions, and way of life with first-hand experience.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Personal and professional development</strong>: Students who study abroad become explorers of a new country and also increase personal growth. The students in other countries also network and form connections with professionals that contribute to their professional development.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Experiencing a different education system</strong>: Every country has a unique educational system. Studying abroad can expand a student’s intelligence and adapt to different educational systems. International students learn to adjust to different teaching and management methodologies.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Fostering independence</strong>: Living abroad fosters independence into students and they learn to take responsibilities for themselves.
                                </p>
                            </li>
                        </ul>
                        <br />
                        <h3>QS World University Rankings 2025: Top 20 Universities</h3>
                        <p>
                            QS Has offered university and business school research for the last 20 years. The QS World University Rankings are the most widely used criteria for comparing universities worldwide.
                        </p>
                        <p>
                            For international students, the choice of university is difficult. Hence, QS has been giving the World University Rankings to give students worldwide independent and objective data to decide the best universities to study abroad.
                        </p>
                        <p>
                            There are more than 10,000 universities worldwide, and as higher education becomes more accessible, it’s essential to make a uniform and standard comparison of them over time.
                        </p>
                        <p>
                            QS Initially ranks the universities based on the primary objectives of the best universities to study abroad: quality of research, graduate employability, global engagement, teaching experience, etc.
                        </p>
                        <b><i>*Want to know more about <a href="#">QS ranking of the top universities</a> across the world, Let PIIVLS be there for your assistance!</i></b>
                        <br />
                        <br />
                        <h3>Best Universities to Study Abroad</h3>
                        <p>
                            Discover the world's best universities with the QS World University Rankings 2025. This year's ranking has been the largest, featuring over 1,500 universities across 105 higher education systems. For the 13th consecutive year, the Massachusetts Institute of Technology (MIT) maintains its position at the top. Here is a list of the top 10 best universities to study abroad.
                        </p>
                        <br />
                        <br />
                        <h2>Top 20 QS World Rankings 2024</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered mt-4 border-primary table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">QS Rank</th>
                                        <th scope="col">University </th>
                                        <th scope="col">Offered Programmes</th>
                                        <th scope="col">Intakes</th>
                                        <th scope="col">Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <a href="#">Massachusetts Institute of Technology (MIT)</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>September/October & February/march</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <a href="#">University of Cambridge</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>September-December & January–April</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <a href="#">University of Oxford</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>December/January</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <a href="#">Harvard University</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>Engineering</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>December/January</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>
                                            <a href="#">Stanford University</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>Bachelors</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>April, August, January & September</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>
                                            <a href="#">Massachusetts Institute of Technology (MIT)</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>October-December & April - June</td>
                                        <td>The UK</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>
                                            <a href="#">ETH Zurich</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>December – March</td>
                                        <td>Switzerland</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>
                                            <a href="#"> National University of Singapore (NUS)</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                                <li>Postgraduate</li>
                                            </ul>
                                        </td>
                                        <td>January & August</td>
                                        <td>Singapore</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>
                                            <a href="#">UCL London</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>November, July & October</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>
                                            <a href="#">University of California, Berkeley</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>November, July & October</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td>
                                            <a href="#"> University of Chicago</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>December - March</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12</th>
                                        <td>
                                            <a href="#">University of Pennsylvania</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>September, April & January</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">13</th>
                                        <td>
                                            <a href="#">Cornell University</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>November, January, August, October, February, September & April</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">14</th>
                                        <td>
                                            <a href="#">The University of Melbourne</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>December - March</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td>
                                            <a href="#">Massachusetts Institute of Technology (MIT)</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>February / March & July</td>
                                        <td>Australia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">15</th>
                                        <td>
                                            <a href="#"> California Institute of Technology</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>November & December</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">16</th>
                                        <td>
                                            <a href="#">Yale University</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>January & April</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17</th>
                                        <td>
                                            <a href="#">Peking University</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>November & April</td>
                                        <td>China</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">18</th>
                                        <td>
                                            <a href="#">Princeton University</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>September & January</td>
                                        <td>The US</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">19</th>
                                        <td>
                                            <a href="#"> The University of New South Wales </a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Undergraduate </li>
                                                <li>Graduate</li>
                                                <li>Business</li>
                                            </ul>
                                        </td>
                                        <td>February, June & September</td>
                                        <td>Australia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20</th>
                                        <td>
                                            <a href="#">The University of Sydney</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>B.Tech</li>
                                                <li>MBA</li>
                                                <li>MS</li>
                                            </ul>
                                        </td>
                                        <td>February & July</td>
                                        <td>Australia</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">21</th>
                                        <td>
                                            <a href="#">University of Toronto</a>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Bachelors</li>
                                                <li>Doctors</li>
                                                <li>Masters</li>
                                            </ul>
                                        </td>
                                        <td>July & May</td>
                                        <td>Canada</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <h2>Best Universities to Study Abroad</h2>
                        <p>Some of the best universities to study abroad are:</p>
                        <ul>
                            <li>Harvard University</li>
                            <li>University of Oxford</li>
                            <li>Stanford University</li>
                            <li>Massachusetts Institute of Technology (MIT)</li>
                            <li>University of Cambridge</li>
                            <li>California Institute of Technology (CalTech)</li>
                            <li>Princeton University</li>
                            <li>Yale University</li>
                            <li>UCL</li>
                        </ul>
                        <br />
                        <p>
                            According to the QS ranking 2024, the UK has many top-ranked universities, like the University of Oxford and the University of Cambridge. In the US, universities like Stanford University, Massachusetts Institute of Technology (MIT), Princeton University, California Institute of Technology (CalTech), and Harvard University are the best in quality education, infrastructure, and global standards.
                        </p>
                        <br />
                        <h2>Best Countries to Study Abroad</h2>
                        <p>
                            Foreign universities in the <a href="#">United States</a>, the <a href="#">United Kingdom</a>, <a href="#">Canada</a>, <a href="#">France</a>, <a href="#">Australia</a>, etc., have highly reputed institutions, and these nations are home to a large percentage of the world’s top universities.
                        </p>
                        <br />
                        <h2>Study in the US </h2>
                        <p>
                            The United States of America has the best educational system in the world. Its universities are well-regarded, most listed in the QS World University rankings. It is the most secure country in which to study. An Indian student can succeed in the United States because of its blend of opportunity, economy, and culture.
                        </p>
                        <i>*Willing to study in the US? Piivls is here to assist you in all the procedures. </i>
                        <br />
                        <p>
                            With over 4,000 world-class colleges, the United States provides diverse academic degrees and courses. The United States of America has great programs for international students that are widely recognized for their excellence.
                        </p>
                        <br />
                        <h2>Study in the UK</h2>
                        <p>The United Kingdom boasts one of the world's most well-known higher education systems, with some of the greatest universities in the world.</p>
                        <i>*Willing to study in the UK? Piivls is here to assist you in all the procedures. </i>
                        <p>
                            In the United Kingdom, you can study almost every subject you can think of at a diploma, bachelor’s, master’s, or doctoral level. Undergraduate degrees can take one to four years to complete, and master’s degrees can take one to two years.
                        </p>
                        <br />
                        <h2>Study in Australia</h2>
                        <p>
                            Australia is one of the most popular study abroad destinations, and the number of Indian students in Australia is steadily increasing as the country’s visa rules have been relaxed, allowing students to pursue higher education at top universities with the least difficulty.
                        </p>
                        <i>*Willing to  <a href="#">study in Australia</a>? Piivls is here to provide you expert guidance. </i>
                        <p>
                            Universities in Australia offer internationally recognized degrees, dynamic cities, student-friendly policies, and good living standards. Every year, many students flock to Australia to study at prestigious universities and gain access to the best career prospects in the world.
                        </p>
                        <br />
                        <h2>Study in Germany</h2>
                        <p>
                            For Indian students, Germany is one of Europe's most popular study locations. This country is one of the most cost-effective locations, with high-quality education that does not break the bank. Its finest universities and colleges give excellent education, yet German authorities charge overseas students only a small administration fee and other basic charges per semester. Germany has more than ten institutions in the top 200 QS world university rankings. Indian students can choose from over 350 universities that provide more than 800 courses.
                        </p>
                        <br />
                        <i>*Willing to <a href="#">study in Germany</a>? Piivls is here to guides you in step by step process. </i>
                        <br />
                        <h2>Study in Canada</h2>
                        <p>
                            For Indian students, Canada has become one of the most popular study destinations. In recent years, the number of students traveling to Canada for higher education has expanded dramatically. Canada’s education system is strong, with degrees and diplomas available in various subjects. Canada has a lower cost of education than the United States. International students have access to a greater number of scholarships, as well as the ability to work part-time off campus.
                        </p>
                        <i>*Willing to <a href="#">study in Canada</a>? Piivls is here to assist you in all the procedures. </i>
                        <br />
                        <h2>Study in Korea</h2>
                        <p>
                            Studying in Korea offers a unique blend of quality education and vibrant culture. Korea hosts over 150,000 international students annually, with 57% pursuing undergraduate programs. Korea’s universities consistently rank in the top 100 globally, offering affordable tuition averaging $4,350 per semester and various scholarships covering up to 100% of costs.
                        </p>
                        <br />
                        <i>*Willing to <a href="#">study in Korea</a>? PIIVLS is here to assist you in all the steps.</i>
                        <br />
                        <h2>Study in Singapore</h2>
                        <p>
                            Singapore is home to some of the world’s best management schools. As a result, Singapore is a popular study abroad location for Indian students pursuing management degrees. The leading management colleges in Singapore provide new and innovative management programs that appeal to Indian students.
                        </p>
                        <p>
                            The government covers 75% of overseas students’ tuition fees in exchange for them working in the country for three years. This gives students work experience once they finish their education.
                        </p>
                        <br />
                        <h2>Study Abroad Courses</h2>
                        <p>
                            Studying abroad offers students a unique blend of academic and cultural experiences. Courses range from traditional disciplines like arts, sciences, and humanities to specialized programs in fields like international business, environmental studies, and indigenous cultures. Many institutions also offer language immersion courses, enhancing linguistic skills while providing firsthand cultural insights.
                        </p>
                        <br />
                        <h3>MBA Abroad</h3>
                        <p>
                            MBA is one of the most popular courses, but it is important to consider the reasons for doing an MBA abroad as well as the type of university you will attend. These factors and the university’s reputation can help open doors. As a result, it is critical to carefully select a study location before to applying. There are various factors which need to be considered, including cost, post-study work options, and job prospects when you decide to do an MBA abroad.
                        </p>
                        <h3>MS Abroad</h3>
                        <p>
                            MS is one of the most popular courses for overseas students due to the weight that an MS degree carries on your resume. All of the world’s leading universities offer outstanding MS programs which attract the brightest brains. However, this makes it much more difficult for students to choose their university. It is better to get expert advice when making your choice.
                        </p>
                        <h3>MBBS Abroad</h3>
                        <p>
                            Many countries considered the best option for MBBS are known for delivering not just economical options but also high-quality education. MBBS in a foreign country also promises better prospects. Many countries now provide high-quality medical education at low costs.
                        </p>
                        <h3>Engineering Abroad</h3>
                        <p>
                            Engineering programs are among the most popular following high school, with many options. If you want to pursue a degree in engineering, you might be wondering which country is the best to study in. Every country has its unique engineering courses, such as comprehensive programs or research-oriented courses.
                        </p>
                        <h3>PhD Abroad</h3>
                        <p>
                            A good PhD should push the academic field’s boundaries. As a student, this can often entail moving out of the country, so millions of postgraduates opt to study for their PhD abroad each year: to find the greatest expertise and facilities for their doctoral research. For an international PhD, you’ll have a lot of options to select from.
                        </p>
                        <br />
                        <h2>Benefits of Studying Abroad</h2>
                        <ul>
                            <li>Studying abroad can help your career open up to multiple possibilities.</li>
                            <li>Employers increasingly prioritize graduates with foreign experience and education in today’s globalized society. </li>
                            <li>Learning new languages, appreciating other cultures, overcoming the hardships of living in another country, and gaining a better understanding of the globe are all benefits you will gain when you decide to study abroad.</li>
                            <li>When hiring, all of these qualities are sought by organizations, and they will only grow more significantly.</li>
                            <li>Many students study abroad to obtain a better education than they could receive in their native country. Studying abroad opens the door to better employment chances by enhancing knowledge, broadening experience, and developing a diverse set of highly valued talents worldwide. Your odds of landing a job that pays well are always good.</li>
                            <li>You are separated from your friends and family when you study abroad. This will train you to be self-sufficient and self-sufficient. You’ll meet new people and enhance your study skills. You’ll also learn to manage your limited financial and other resources. These experiences will prepare you for the upcoming career and personal challenges.</li>
                            <li>When studying in a foreign nation, you cannot communicate in the local language. Your speaking and communication abilities would undoubtedly improve as a result of this.</li>
                            <li>You tend to challenge things and yourself when living in a setting outside your comfort zone. This is a fantastic approach to acquiring confidence since it teaches you how to survive on your own, even in adverse circumstances.</li>
                            <li>Going abroad will surely broaden your social circle. Because you have connections with people from all over the world, you can be exposed to fresh opportunities.</li>
                        </ul>
                        <br />
                        <h2>Best Courses to Study Abroad</h2>
                        <p>Some of the best courses you can study abroad include:</p>
                        <ul>
                            <li>Computer Science</li>
                            <li>Medicine and Healthcare</li>
                            <li>Business Administration</li>
                            <li>Engineering and Technology</li>
                            <li>International Business</li>
                            <li>Management and Leadership</li>
                            <li>International Relations</li>
                            <li>Mathematics</li>
                        </ul>
                        <p>Popular courses to study abroad:</p>
                        <ul>
                            <li>Accounting</li>
                            <li>Social Sciences</li>
                            <li>Law</li>
                            <li>Hospitality</li>
                            <li>Environmental Sciences</li>
                            <li>Tourism</li>
                        </ul>
                        <p>
                            Courses in huge demand include creative courses like films, arts, fashion, and design. Alternatively, if you are planning to study a different stream, you can even opt for courses like criminal psychology and other courses.
                        </p>
                        <p>Most foreign universities start primary intake in September. Depending on the course of interest, the universities you plan to choose, and the country you decide to study, select any course that helps in career growth and empowerment.</p>
                        <br />
                        <h2>Study Abroad Scholarships</h2>
                        <p>Studying abroad can be financially challenging, but numerous scholarships aim to support international students. Here are some general scholarships and programs available globally:</p>
                        <ul>
                            <li><a href="#">Fulbright Program</a> : For U.S. students studying internationally and international students coming to the U.S</li>

                            <li><a href="#">Chevening Scholarships</a> : Funded by the UK government, they support international students to study in the UK.</li>

                            <li><a href="#">DAAD Scholarships</a> : For students to study in Germany.</li>

                            <li><a href="#">Endeavour Scholarships and Fellowships</a> : Australian government's initiative for international students.</li>

                            <li><a href="#">Erasmus Mundus Joint Master Degrees</a> : Funds study in European universities.</li>

                            <li><a href="#">Microsoft Scholarships</a> : For merit-based international students </li>

                            <li>Joint Japan/World Bank Graduate Scholarship Program: For students from developing countries.</li>

                            <li><a href="#">Fulbright Program.</a> : For U.S. students studying internationally and international students coming to the U.S</li>

                            <li>Rotary Foundation Global Study Grants: For study anywhere in the world.</li>

                            <li>Commonwealth Scholarships: For students from Commonwealth countries to study in another Commonwealth nation.</li>

                            <li><a href="#">Gates Cambridge Scholarships</a> : For postgraduate study at the University of Cambridge.</li>
                            <li>United World Colleges (UWC) Scholarships: For pre-university students to study in UWC colleges worldwide.</li>
                        </ul>
                        <p>
                            Remember, many universities also offer their scholarships to international students. It's essential to research individual institutions in your desired study destination. Additionally, local organizations and foundations in one's home country often have scholarship programs to support overseas education. Always ensure to check eligibility criteria and deadlines.
                        </p>
                        <h2>How to get a Scholarship to Study Abroad?</h2>
                        <p>
                            Yes, you can get a 100% scholarship to study abroad. Anyone who meets the specific criteria can avail of scholarships. Various scholarships are designed for specific groups of students based on certain qualifications or eligibility standards. These standards indicate the necessary qualifications an applicant must possess to be considered. It's essential to review these requirements to ensure the scholarship aligns with your profile, preventing unnecessary efforts on unsuitable options.</p>
                        <h2>Requirements to Apply for a Student Visa</h2>
                        <p>Once you have selected the universities/courses based on the geographical areas or the subject, you can see how far they match your chosen criteria. This will help you make a comparison between your choices.</p>
                        <p>Look for the following information to make an informed comparison between colleges:</p>
                        <ul>
                            <li>University ranking</li>
                            <li>Start dates of available programs</li>
                            <li>Content of the course</li>
                            <li>Teaching methodology</li>
                            <li>Career prospects for the course</li>
                            <li>Campus life and activities</li>
                            <li>Accommodation options</li>
                            <li>Admission requirements</li>
                            <li>Course affordability</li>
                        </ul>
                        <p>
                            When it comes to choosing a course, cost is a major consideration. As previously stated, examine the actual course fees, scholarship opportunities, and funding options. This is critical for budgeting, whether you need to apply for a loan or explore other options. Look at scholarship options in the countries you have selected. You must also consider the living expenses in the country.</p>
                        <p>The ranking is important if you want to select the right university. Universities or colleges are ranked based on their quality of teaching, research options, and global outlook.  A high-ranked university will give you a valuable learning experience. It also means better job prospects.</p>
                        <p>
                            When you choose to study abroad, you must apply for a student visa. Get the information for visa requirements and deadlines. You can get this information on the university's official website and confirm it with the local embassy or consulate.</p>
                        <p>
                            Examine the admission requirements for the country you wish to study in. Check whether you need to take additional exams such as GMAT, SAT, or GRE for the course or need to qualify with English proficiency tests.</p>
                        <p>You’ll need the following documents to apply to universities in order to study abroad:</p>
                        <ul>
                            <li><strong>Application Form</strong> - The application form is the most crucial document because it contains all of your personal and professional information. An application form must be filled out accurately. Always double-check your application before sending it to the university where you wish to study.</li>
                            <li><strong><a href="#">Statement of purpose (SOP)</a></strong> -  This is the most significant part of your application and will mostly discuss your background, reasons for pursuing your program at the specified university, and career ambitions. Spend a lot of time on your SOP because it will help your application stand out among the thousands of others. Take the help of an overseas education consultant to complete this requirement.</li>
                            <li><strong>Academic transcripts </strong> - This is essentially your academic record, which will include any courses you’ve taken and your grades, credits, and degree received (it is easily available from your university).</li>
                            <li><strong><a href="#">Letter of Recommendation (LOR) </a></strong> - A letter of recommendation (LOR) is an academic letter written by one of your professors or managers that discusses your abilities, accomplishments, experience, and usefulness to your college or professional organization. This letter allows the admissions committee to gain insight into your life and make an informed decision about your admission.</li>
                            <li><strong>Resume</strong> -A CV or resume will provide a detailed overview of your academic and professional history. Include all of your degrees, certificates, internships, and relevant professional experience in your resume.</li>
                            <li><strong>Test Scores</strong> - Your test scores must be submitted with your application. The results of English language competency exams, such as the IELTS, are required by most countries and institutions. You may need to take other exams to study abroad, such as the SAT or GRE, depending on your choice of location and institution.</li>
                            <li><strong>Essays </strong> -Some colleges may need you to submit a study abroad essay to demonstrate your commitment to your plans. This essay might be a fantastic opportunity to make a wonderful first impression and demonstrate to the university administration that you are prepared and committed to pursuing the course in their organization.
                                Valid passport - Finally, a passport should be valid for at least six months when filing for admission and a visa.</li>
                        </ul>
                        <h2>Admission Abroad</h2>
                        <p>Students wanting to study abroad must follow a well-structured plan for admission to a course in a country of their choice. The first step is to decide what course they want to study. The second step is to consider the program's eligibility requirements, including visa and immigration requirements. This also includes giving the mandatory tests for admission.</p>
                        <p>The next step is to choose your study abroad destination. Students should also consider the student visa requirements, immigration policies, and post-study career options when choosing their study abroad destination.</p>

                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Country</th>
                                        <th scope="col">Type of student visa</th>
                                        <th scope="col">Best time to apply</th>
                                        <th scope="col">Mandatory requirements</th>
                                        <th scope="col">Visa Fees</th>
                                        <th scope="col">Processing time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>USA</th>
                                        <td>Student Visa (F1)</td>
                                        <td><span>3-5 months before start date</span></td>
                                        <td>SEVIS fee payment, I-20 form, proof of funds</td>
                                        <td>$160</td>
                                        <td>3-5 weeks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Faq Data={StudyFaqData} />
                    </div>
                </div>
                <Locations />
            </div>
        </>
    )
}

export default StudyVisa