import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import coachinFormImg from '../assets/images/coaching-form-img.jpg'
import { coachingData } from '../components/Coaching/coachingData';
import CoachingImg from '../assets/images/coaching-img.jpg'
import { Link } from 'react-router-dom';
import WhyChoose from '../components/WhyChoose/LearningSolution';
import coachingPageData from '../components/WhyChoose/coachingPageData';
import Whychoose from '../components/WhyChoose/LearningSolution';
import chooseData from '../components/WhyChoose/chooseData';
import cochingChoose from '../components/WhyChoose/cochingChoose';
import { GoDotFill } from 'react-icons/go';
const CoachingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.Coaching || {};
    return (
        <div>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={coachinFormImg} className='img-fluid' alt="coachinFormImg" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            {/* coaching */}
            <div className='coaching_page_area'>
                <div className="coaching_img">
                    <img src={CoachingImg} className='img-fluid' alt="" />
                </div>
                <div className="coaching_info">
                    <h2>Coaching</h2>
                    <p>World class coaching program to meet your needs</p>
                    <ul>
                        {coachingData.map((program) => (
                            <li key={program.path}>
                                <Link to={`/coaching/${program.path}`}>{program.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='learning_page' style={{ padding: '80px 0 30px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-9">
                            <div className="sub_heading text-center">
                                <h2>Learning solution to meet your need</h2>
                                <p>
                                    PIIVLS Coaching offers world-class coaching services designed to ace y
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="choose_wrapper" style={{ paddingTop: '50px' }}>
                        {coachingPageData.map((item) => (
                            <div className="choose_item" key={item.id}>
                                <div className="choose_img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.des}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Whychoose
                title="Why choose PIIVLS study counsellor?"
                description="Helps the students to execute their educational experience with intelligence and integrity..."
                data={cochingChoose}
            />
            <div className="page_content py-5">
                <div className="container">
                    <h2>World-Class Coaching for Students & Professionals</h2>
                    <p>
                        The world’s most advanced economies rely on standardized tests to assess <Link to="/visit-visa">visa applicants</Link>. As India’s #1 Visas & Immigration company, we have seen the positive impact of high scores in these tests on work, student, and migrant visa applications. PIIVLS Coaching delivers world-class coaching designed to help you get your best score and boost your chances of achieving your international ambitions. Explore our offerings below:
                    </p>
                    <h3>English Language Proficiency Tests</h3>
                    <p>
                        When international students are seeking admission to any foreign university, they must prove their proficiency in English language skills.
                    </p>
                    <p>
                        Most universities across the world require applicants to provide proof of their proficiency in the English language. This is often mandatory for their admission to courses in these universities. Students going abroad for higher studies are advised to take these tests at least two months before applying to universities abroad.  They can take any one of the following tests and submit their scores with their applications to prove their English language proficiency:
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                IELTS
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                TOEFL
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                PTE
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                CELPIP
                            </p>
                        </li>
                    </ul>
                    <br />
                    <p>
                        However, students belonging to English-speaking countries are exempted from taking these tests. But students from India must give these tests before they <Link to="/study-visa">move abroad for studies</Link>.  The three tests, <Link to="#">IELTS</Link>, TOEFL, and PTE are the three options students can consider for proving their English proficiency. But they must first check which of these tests are accepted by the universities they are applying to so that they can take the specific test before starting the admission process.
                    </p>
                    <p>
                        The scores of all these tests are valid for two years, and students can retake them as many times as they wish.
                    </p>
                    <p><Link to="#">IELTS Exam Dates 2024 </Link></p>
                    <br />
                    <h3>Academic Standardized Tests</h3>
                    <p>
                        Countries like the <Link to="/study-visa/usa">USA</Link>,<Link to="/study-visa/germany"> Germany</Link>, and the <Link to="/study-visa/uk"> UK</Link>  require that students have proficiency in math to pursue any related field of study. To prove their proficiency, they are required to take certain standardized tests mentioned below:
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>GRE</p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>GMAT</p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>SAT</p>
                        </li>
                    </ul>
                    <p>
                        Most universities require students to have a decent score on these tests for a positive admission decision. So, students must prepare well for these tests. These tests require good quantitative and logical thinking to score well. They test the student’s verbal ability and quantitative reasoning skills. Students should be prepared thoroughly before taking these tests.
                    </p>
                    <p>GRE and GMAT scores are required for admission to graduate courses, and the SAT is required for undergraduate courses. The performance on the GRE plus your previous academic performance can get you <Link to="">scholarships</Link> and grants when pursuing your course.</p>
                    <p>
                        Preparation for these tests will be a lot better if students take the help of coaching experts. They will provide comprehensive, rigorous, well-designed training to help students succeed. The coaching helps build a strong foundation in English or Math skills to help students tackle these tests efficiently.
                    </p>

                    <br />
                    <h2>
                        PIIVLS Coaching Services  - Best coaching center for IELTS, GRE, TOEFL, PTE, CELPIP, OET
                    </h2>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                World-class coaching material from sources like the British Council & Pearson
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Experienced faculty with a track record of success
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Platinum partner with British Council
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Coaching that fits your busy schedule
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Multiple ways to learn – online, in-class, live stream, and private
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Flipped classroom approach, which is proven to improve learning
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Assistance with test slot booking
                            </p>
                        </li>
                    </ul>
                    <h3>Handouts:</h3>
                    <ul>
                        <li>
                            <Link to="">Coaching</Link>
                        </li>
                        <li>
                            <Link to="">Demo Videos</Link>
                        </li>
                        <li>
                            <Link to="">IELTS Coaching Handout</Link>
                        </li>
                        <li>
                            <Link to="">PTE Coaching Handout</Link>
                        </li>
                        <li>
                            <Link to="">GRE Coaching Handout</Link>
                        </li>
                        <li>
                            <Link to="">TOEFL Coaching Handout</Link>
                        </li>
                        <li>
                            <Link to="">CELPIP Coaching Handout</Link>
                        </li>
                        <li>
                            <Link to="">Post Graduate Campus Ready Basic</Link>
                        </li>
                        <li>
                            <Link to="">Post Graduate Campus Ready Basic PG Diploma</Link>
                        </li>
                        <li>
                            <Link to="">Post Graduate Campus Ready Basic PG Diploma</Link>
                        </li>
                        <li>
                            <Link to="">Post Graduate Campus Ready Basic Dual Country</Link>
                        </li>
                        <li>
                            <Link to="">Advanced Diploma – Canada and Singapore with Coaching</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CoachingPage