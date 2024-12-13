import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import careerImg from '../assets/images/career-img.jpg'
import careerSqure from '../assets/images/caree-secure-img.jpg'
import careerMeaningfulImg from '../assets/images/career-meaningful-img.jpg'
import CareerManagersTrack from '../assets/images/career-opp1.jpg'
import CareerSpecialistTrackImg from '../assets/images/Career-Specialist-Track.jpg'
import GlobalTrackImg from '../assets/images/Career-Global-Track.jpg'
import salescrmLogo from '../assets/images/sales-crm.png'
import GenesysLogoImg from '../assets/images/GenesysLogo.png'
import MicrosoftLogo from '../assets/images/Microsoft-logo.webp'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BsArrowRightSquareFill, BsCashStack } from 'react-icons/bs';
import { FiCheckSquare, FiMapPin } from 'react-icons/fi';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { PiNotepadThin } from 'react-icons/pi';
import { MdOutlineMoreTime } from 'react-icons/md';
import { IoIosFitness } from 'react-icons/io';
const Careers = () => {
    const { title = '', image = '', path = '' } = breadcrumbData?.careers || {};
    return (
        <div className='careers_page_wrapper'>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="career_wrapper">
                <div className="career_img">
                    <img src={careerImg} alt="" />
                </div>
                <div className="career_info text-left">
                    <div className="sub_heading">
                        <h2>Careers at PIIVLS</h2>
                        <p>Build a Rewarding Career Doing Meaningful Work</p>
                        <Link>
                            <button className="custom_btn"><span>Apply Now</span> <FaArrowRightLong /></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="intro_section">

                <div className="container-fluid">
                    <div className="row g-0">
                        {/* <h2>Why Work For Us?</h2> */}
                        <div className="col-sm-6">
                            <div className="career_info">
                                <div className="sub_heading">
                                    <h2>1. Secure</h2>
                                    <h6>
                                        PIIVLS is the market leader in an industry where demand for international opportunities outstrips the supply. We have been growing year after year by maintaining our market position through stellar service and continuous marketing.
                                    </h6>
                                    <ul>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Huge demand for Indian professionals who want to go abroad
                                            </p>
                                        </li>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Indian passport holders face complex visa challenges which we help navigate
                                            </p>
                                        </li>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                PIIVLS offers a stable job with clear cut roles and well defined growth paths. Your merit will take you places
                                            </p>
                                        </li>

                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                We are fast growing, recession-proof and an established brand
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="img_box">
                                <img src={careerSqure} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="row g-0">
                        <div className="col-sm-6">
                            <div className="career_info">
                                <div className="sub_heading">
                                    <h2>2. Meaningful & purposeful work</h2>
                                    <h6>
                                        PIIVLS offers you the unique opportunity to leave a lasting impact on an entire family, and maybe even generations to come. Every aspect of your work is in service to the goal of changing someone's life for the better. Your efforts will lead to continued learning and an uncapped salary coupled with recognition among your peers.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="img_box">
                                <img src={careerMeaningfulImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-sm-6">
                            <div className="career_info">
                                <div className="sub_heading">
                                    <ul>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Enriching job that turns you into a people person & hones your skills
                                            </p>
                                        </li>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Energizing work that will revitalise your zeal to contribute
                                            </p>
                                        </li>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Create an impact on your society through your knowledge & values
                                            </p>
                                        </li>

                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Gain recognition as an expert who can transform lives
                                            </p>
                                        </li>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Our merit driven policies mean you can go as far as your skills take you
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="img_box">
                                <img src={careerSqure} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career_grow_wrapper">
                <div className="container">
                    <div className="sub_heading text-center">
                        <h2>3. Growth Mindset- Not Yet</h2>
                        <ul>
                            <li>Platform</li>
                            <li>Learning</li>
                            <li>Open to change</li>
                            <li>Transparency </li>
                            <li>Meritocracy</li>
                        </ul>
                        <p>
                            Since 1999 PIIVLS has fostered a culture of growth through our philosophy of "Not Yet". Our aim is to continually learn and grow in order to prepare for the challenges ahead. Our openness to change, our investments in technology, our cutting-edge knowledge systems, our focus on merit, and our integrity, have made us the employer of choice for dynamic individuals seeking growth.
                        </p>
                    </div>
                </div>
            </div>
            <div className="career_earn">
                <div className="container">
                    <div className="sub_heading text-center">
                        <h2>4. Earn more</h2>
                        <h6>
                            Know what? We share nearly 12% of our Gross Sales with our Teams instantly. That is nearly 25% of our profits. More than 46% of our Sales Consultants earn more than 100% of their salary in incentives and commissions alone 38%, take home between 90%-50% of their salary in incentives and commissions and rest at least 25%. This is in addition to their monthly salary. You can take home 2x of your salary in incentives alone, every month
                        </h6>
                    </div>
                </div>
            </div>
            <div className="career_benefits">
                <div className="container">
                    <div className="sub_heading text-center">
                        <h2>Great Compensation & Benefits</h2>
                    </div>
                    <ul>
                        <li>
                            <FiCheckSquare />
                            <span>Competitive Salaries</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>Statutory Benefits</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>Medical Insurance</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>Paid Leaves</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>Generous Incentives</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>Uncapped commissions</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="career-opportunities">
                <div className="container">
                    <div className="sub_heading text-center mb-5">
                        <h2>5. Opportunities to learn & grow</h2>
                        <h4>Life Long Learning | Great Training | Grow in Responsibilities</h4>
                    </div>
                    <h5>
                        Our exceptional learning systems offer you the opportunity to continuously grow in knowledge and skills. We believe that each Y-Axian is a learner for a lifetime and reward those who apply these learnings to demonstrate their growth in their career. Our streamlined growth tracks allow you to explore opportunities in your areas of interest in
                    </h5>
                    <div className="row mt-5">
                        <div className="col-sm-4">
                            <div className="career_opp_img">
                                <img src={CareerManagersTrack} className='img-fluid' alt="" />
                                <span>PIIVLS-Managers Track</span>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="career_opp_img">
                                <img src={CareerSpecialistTrackImg} className='img-fluid' alt="" />
                                <span>PIIVLS-Specialist Track</span>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="career_opp_img">
                                <img src={GlobalTrackImg} className='img-fluid' alt="" />
                                <span>PIIVLS-Global Track</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="career_cutting_technology">
                <div className="container">
                    <div className="cutting_wrap">
                        <div className="cutting_info">
                            <div className="sub_heading">
                                <h2>6. Cutting edge technology</h2>
                            </div>
                            <h5>
                                PIIVLS is a 100% digital company. We use cutting-edge technologies like Salesforce CRM, Genesys Call Center Solutions and 0365 to run our global operations. We are amongst the largest users of Salesforce.
                            </h5>
                            <h5>
                                Our extensive technical infrastructure collects data from across our systems and displays it on an intuitive dashboard. This level of sophistication allows us to be transparent, responsive, and create a culture of merit that rewards performers immediately.
                            </h5>
                        </div>
                        <div className="cutting_img">
                            <ul>
                                <li>
                                    <div className="img_box">
                                        <img src={salescrmLogo} alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img_box">
                                        <img src={GenesysLogoImg} alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="img_box">
                                        <img src={MicrosoftLogo} alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career_meritocracy">
                <div className="container">
                    <div className="sub_heading">
                        <h2>7. Meritocracy</h2>
                    </div>
                    <h5>
                        We hire, reward, and promote talent purely based on merit. You are judged solely by your efforts, skills, abilities, and performance, regardless of gender, race, class, national origin, or sexual orientation.
                    </h5>
                </div>
            </div>
            <div className="career_work">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="sub_heading text-center">
                                <h2>8. Work Life Balance</h2>
                                <p>
                                    We believe it is critical to manage your work and the rest of your life in order to create meaning for yourself. Our policies allow for flexibility to include your family, your preferred timings and your health goals.
                                </p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <div className="card_icon">
                                        <HiOutlineBriefcase />
                                    </div>
                                    <div className="card_title">
                                        <h4>Day jobs</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <div className="card_icon">
                                        <PiNotepadThin />
                                    </div>
                                    <div className="card_title">
                                        <h4>Fixed schedules</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <div className="card_icon">
                                        <MdOutlineMoreTime />
                                    </div>
                                    <div className="card_title">
                                        <h4>Flexible shifts</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <div className="card_icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="card_title">
                                        <h4>Work in the office closest to you</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <div className="card_icon">
                                        <BsCashStack />
                                    </div>
                                    <div className="card_title">
                                        <h4>Paid leave</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <div className="card_icon">
                                        <IoIosFitness />
                                    </div>
                                    <div className="card_title">
                                        <h4>On-site fitness classes</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro_section safe_container">

                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col-sm-6">
                            <div className="career_info">
                                <div className="sub_heading text-left">
                                    <h2>9. Safe place to work</h2>
                                    <p>
                                        We take the safety & security of our staff very seriously. We have invested in several physical security measures at all our offices to ensure you are safe at all times. Our policies reflect our commitment to creating a secure work environment you enjoy coming to.
                                    </p>
                                    <ul>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                All our offices are centrally located
                                            </p>
                                        </li>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Access card, CCTV and on-site security at offices
                                            </p>
                                        </li>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                49% of our workforce are women who
                                            </p>
                                        </li>

                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Appreciate our women-friendly policies
                                            </p>
                                        </li>
                                        <li>
                                            <BsArrowRightSquareFill />
                                            <p>
                                                Women are never assigned night shifts
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="img_box">
                                <img src={careerSqure} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career_benefits honest_career">
                <div className="container">
                    <div className="sub_heading text-center">
                        <h2>10. Honest taxpayer & ethical employer</h2>
                    </div>
                    <ul>
                        <li>
                            <FiCheckSquare />
                            <span>PIIVLS is a good citizen who pays 100% of all the taxes due.</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>We have written counselling notes and clear contracts with our clients.</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>We comply with every regulation with every statutory authority.</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>Our prices have integrity and don’t change based on the client.</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>We are privately held and have negligible debt allowing us to operate at the highest values without compromise.</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>We have accountability internally as all transactions are digitized.</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>We will never do anything that you would not be proud of.</span>
                        </li>
                        <li>
                            <FiCheckSquare />
                            <span>Student Counsellors: Our counselling has more integrity as we are not biased by any univerisities. We work for you.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Careers;