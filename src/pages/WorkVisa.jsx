import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import FormImg from '../assets/images/wrok-form-img.jpg'
import WorkOpportunity from '../components/WorkOpportunity/WorkOpportunity';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Worth from '../components/Worth/Worth';
import workBlogImg from '../assets/images/work-blog-img.jpg'
import { Link } from 'react-router-dom';
import TalentComponent from '../components/TalentComponent/TalentComponent';
import { Button } from 'react-bootstrap';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import talentImg from '../assets/images/talent-img.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaCheckCircle, FaRegTimesCircle, FaTimes } from 'react-icons/fa';
import { WorkFaqData } from '../components/FaqAccordion/WorkFaqData';
import { FaRegCircleCheck } from "react-icons/fa6";
import Locations from '../components/Locations/Locations';
import FaqAccordion from '../components/FaqAccordion/FaqAccordion';
import overseasImg from '../assets/images/overseas-img.jpg';
import worldTalentImg from '../assets/images/world-talent.jpg';
const WorkVisa = () => {
    const { title, image, path } = breadcrumbData.work;
    const formTitle = `Work`;
    const formDes = 'Want to Work Overseas? Avail our Job Search Services';
    const features = [
        { name: 'Large pool of jobs', pivots: true, linkedIn: true, naukri: true, visa: false },
        { name: 'Apply to jobs', pivots: true, linkedIn: true, naukri: true, visa: false },
        { name: 'International jobs', pivots: true, linkedIn: true, naukri: true, visa: false },
        { name: 'Resume writing', pivots: true, linkedIn: false, naukri: true, visa: false },
        { name: 'Resume marketing', pivots: true, linkedIn: false, naukri: false, visa: false },
        { name: 'Personalised support', pivots: true, linkedIn: false, naukri: false, visa: false },
        { name: 'Dedicated Recruitment Team', pivots: true, linkedIn: false, naukri: false, visa: false },
        { name: 'Visa consulting', pivots: true, linkedIn: false, naukri: false, visa: true },
        { name: 'Placement services', pivots: true, linkedIn: false, naukri: false, visa: false },
    ];
    return (
        <>
            <div className='work_visa_page_area'>
                <Breadcrumb title={title} image={image} path={path} />
                <div className="form_container">
                    <div className="container">
                        <div className="form_wrapper border">
                            <div className="form_img">
                                <img src={FormImg} className='img-fluid' alt="" />
                            </div>
                            <RegistrationForm formTitle={formTitle} formDes={formDes} />
                        </div>
                    </div>
                </div>
                <TalentComponent />

                <div className="potential_area">
                    <div className="container py-12">
                        <div className="row justify-content-center mb-5">
                            <div className="col-sm-7">
                                <div className="sub_heading text-center">
                                    <span>// About Us</span>s
                                    <h2>Leverage this demand <br />
                                        <span>Reach your potential</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="potential_wrapper">
                            <div className="row g-0">
                                <div className="col-lg-6 position-relative">
                                    <img src={FormImg} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="potential_content">
                                        <h3>Find the right opportunities</h3>
                                        <ul className="list-unstyled mb-5">
                                            {[
                                                "Get a Global Career Strategy",
                                                "Get expert recommendations",
                                                "Browse 300,00+ international jobs",
                                                "Apply to the right industry, city and country",
                                                "Market your resume to lucrative jobs"
                                            ].map((item) => (
                                                <li key={item} className="d-flex align-items-center mb-3">
                                                    <div className="bg-danger" style={{ height: "1px", width: "20px" }} />
                                                    <span className="ms-3">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a href="#">
                                            <button className='custom_btn'>
                                                <span>Talk to a Consult</span>
                                                <FaArrowRightLong />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-lg-6 position-relative">
                                    <img src={FormImg} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="potential_content">
                                        <h3>Overcome barriers to getting a job abroad</h3>
                                        <ul className="list-unstyled mb-5">
                                            {[
                                                "Be visible on the right platforms",
                                                "Create an appealing profile",
                                                "Improve your language skills",
                                                "Get an ATS compatible resume",
                                                "Get overseas career counseling",
                                                "Get work authorization"
                                            ].map((item) => (
                                                <li key={item} className="d-flex align-items-center mb-3">
                                                    <div className="bg-danger" style={{ height: "1px", width: "20px" }} />
                                                    <span className="ms-3">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a href="#">
                                            <button className='custom_btn'>
                                                <span>Talk to a Consult</span>
                                                <FaArrowRightLong />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="job_search_assistance">
                    <div className="container">
                        <div className="sub_heading text-center">
                            <h2>Want to reach international employers?<br /> We can be your <span>Job Search Assistant</span></h2>
                            <p>
                                To find a job abroad, you will need to spend a minimum of 15 hours every week finding and applying to jobs. You'll need to research the market, create and monitor multiple profiles, apply and schedule interviews. PIIVLS Job Search Assistance offers professionals like you a time-saving way to reach more employers and increase your chances of getting job offers.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="job_assistance_list">
                                    <ul>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Expert counseling</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Strategy document</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>International resume</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>LinkedIn optimisation</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="job_assistance_list">
                                    <ul>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Dedicated job search expert</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Essential list profile creation</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Classified job applications</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>LinkedIn job applications</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="job_assistance_list">
                                    <ul>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Cold recruitment</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Inbox management</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Interview scheduling</span>
                                        </li>
                                        <li>
                                            <FaRegCircleCheck />
                                            <span>Weekly reporting</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="expert_team">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <h3 style={{ fontWeight: "700" }}>Get a team of experts working for you</h3>
                                <p>
                                    Meet the dedicated team that will work on increasing your profile’s visibility to international recruiters
                                </p>
                            </div>
                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h4>Job Search Artist</h4>
                                        <p>
                                            Your single point of contact and the lead for the entire team
                                        </p>
                                        <hr />
                                        <h4>Resume writer</h4>
                                        <p>
                                            Your dedicated writer will create your resume, cover letter & LinkedIn
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>Job Search Artist</h4>
                                        <p>
                                            Your single point of contact and the lead for the entire team
                                        </p>
                                        <hr />
                                        <h4>Resume writer</h4>
                                        <p>
                                            Your dedicated writer will create your resume, cover letter & LinkedIn
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="get_overseas">
                    <div className="container-fluid">
                        <div className="get_overseas_wrapper">
                            <div className="get_overseas_img">
                                <img src={overseasImg} className='img-fluid' alt="" />
                            </div>
                            <div className="get_overseas_info">
                                <h2>Get overseas Job Search Assistance</h2>
                                <div className="content_wrap">
                                    <div className="overseas_content">
                                        <h3>JSS Essentials</h3>
                                        <p>Starting at Rs. 19,999/3 months</p>
                                    </div>
                                    <div className="overseas_content_link">
                                        <a href="#">
                                            <button className='btn btn-outline-light'>Learn More</button>
                                        </a>
                                    </div>
                                </div>
                                <hr />
                                <div className="content_wrap">
                                    <div className="overseas_content">
                                        <h3>JSS Extended</h3>
                                        <p>Starting at Rs. 34,999/6 months</p>
                                    </div>
                                    <div className="overseas_content_link">
                                        <a href="#">
                                            <button className='btn btn-outline-light'>Learn More</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="world_talent">
                    <div className="container-fluid">
                        <div className="world_wrapper">
                            <div className="world_img">
                                <img src={worldTalentImg} className='img-fluid' alt="" />
                            </div>
                            <div className="world_info">
                                <h2>The world needs talent</h2>
                                <h4>By Xavier Augustin</h4>
                                <p>
                                    Are you eligible to be part of the Global Talent Pool? Do you know what the world’s talent hotspots are? Learn more from our founder, Xavier Augustin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eligibility_area mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-9">
                                <div className="sub_heading text-center">
                                    <h2>Have cutting-edge skills? <br /> <span>Get placed and then pay</span></h2>
                                    <strong style={{ color: "#fff", marginBottom: '20px', display: 'block' }}><i>For select tech & biotech skills only</i></strong>
                                    <p>
                                        Are your skills part of the top 30 in-demand skills in the world? <br />
                                        If yes, apply now and pay only if we get you a job.
                                    </p>
                                    <a href="#">
                                        <button className='custom_btn'>
                                            <span>Talk to our Staffing Division</span>
                                            <MdKeyboardDoubleArrowRight />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='visa_card_page'>
                    <div className="visa_content">
                        <h2>Work Abroad</h2>
                        <p>
                            Top countries to work overseas
                        </p>
                        <div className="visa_link">
                            <ul>
                                <li>
                                    <Link>
                                        <button>USA</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>UK</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>UAE</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>Australia</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>Canada</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>Germany</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>Singapore</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>Netherlands</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>luxembourg</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>Ireland</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <button>Why choose us?</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="visa_img">
                        <img src={workBlogImg} alt="" />
                    </div>
                </div>
                <div className="improve_table">
                    <div className="container py-4">
                        <div className="row justify-content-center mb-5">
                            <div className="col-sm-8">
                                <div className="sub_heading text-center">
                                    <h2>The World Needs <span>Talent Platform</span></h2>
                                    <p>
                                        PIIVLS is your gateway to access rewarding jobs and build a flourishing international career. Our unique hybrid platform blends AI powered online technology with premium, personalised career services to help you create a career abroad.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Features</th>
                                        <th scope="col">Pivots</th>
                                        <th scope="col">LinkedIn</th>
                                        <th scope="col">Naukri</th>
                                        <th scope="col">Visa cos.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {features.map((feature, index) => (
                                        <tr key={index}>
                                            <td className="fw-medium">{feature.name}</td>
                                            <td className="text-center">
                                                {feature.pivots ? <FaCheckCircle className="text-success" /> : <FaRegTimesCircle className="text-danger" />}
                                            </td>
                                            <td className="text-center">
                                                {feature.linkedIn ? <FaCheckCircle className="text-success" /> : <FaRegTimesCircle className="text-danger" />}
                                            </td>
                                            <td className="text-center">
                                                {feature.naukri ? <FaCheckCircle className="text-success" /> : <FaRegTimesCircle className="text-danger" />}
                                            </td>
                                            <td className="text-center">
                                                {feature.visa ? <FaCheckCircle className="text-success" /> : <FaRegTimesCircle className="text-danger" />}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Locations />
                <FaqAccordion data={WorkFaqData} />
            </div>
        </>
    );
}

export default WorkVisa