import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import CampusReadyForm from '../assets/images/campus-ready-form-img.jpg'
import { GoDotFill } from 'react-icons/go';
const CampusReady = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title, image, path } = breadcrumbData.CampusReady;
    return (
        <div>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={CampusReadyForm} className='img-fluid' alt="CampusReadyForm" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div className="page_content">
                <div className="container">
                    <h2>Campus Ready: Your Pathway to Global Success <br /> What is Campus Ready?</h2>
                    <p>
                        Campus Ready is a comprehensive program offered by PIIVLS Study Overseas, specifically designed for students aspiring to study abroad. This program not only prepares you for admissions but also enhances your employability upon graduation. It provides a structured path to guide you towards a successful career as a Global Indian.
                    </p>
                    <br />
                    <h2>Who is Campus Ready For?</h2>
                    <p>
                        Campus Ready is ideal for fresh engineering graduates who are looking to pursue further studies abroad. Whether you are aiming for a master's degree or any other postgraduate program, Campus Ready equips you with the necessary tools and support to succeed.
                    </p>
                    <br />
                    <h2>Why Prepare with Campus Ready?</h2>
                    <p>
                        Preparation is the cornerstone of success in any endeavor. The more you prepare, the higher your chances of securing admission to a top university, obtaining a student visa, and enhancing your employment or entrepreneurial prospects post-graduation. Here’s why preparation with Campus Ready is crucial:
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Comprehensive Guidance:</strong>
                                From application processes to visa requirements, we provide detailed guidance every step of the way.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Expert Support:</strong>
                                Our team of experienced professionals offers expert advice and insights tailored to your specific needs.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Personalized Plans:</strong>
                                We create customized preparation plans based on your academic background, career goals, and personal preferences.
                            </p>
                        </li>
                    </ul>
                    <h3>Benefits of Preparing with Campus Ready:</h3>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Avoid Pitfalls:</strong>
                                Navigate the complexities of studying abroad with expert guidance to avoid common mistakes and challenges.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Reduce Costs:</strong>
                                Efficient planning helps in managing expenses effectively, ensuring you get the best value for your investment.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Get Higher Quality:</strong>
                                Access top-notch resources, coaching, and support for your study abroad journey, ensuring a high-quality experience.

                            </p>
                        </li>
                    </ul>
                    <br />
                    <h2>Campus Ready Score:</h2>
                    <p>
                        Your Campus Ready Score is a comprehensive measure that includes several critical components:
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Degree:</strong>
                                Assessment of your academic achievements and credentials.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Scores: </strong>
                                Evaluation of your standardized test scores and overall academic performance.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Cultural: </strong>
                                Assessment of your adaptability and understanding of cultural nuances, which are vital for successful integration abroad.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Employability:</strong>
                                Evaluation of your skills, experiences, and readiness for the job market, enhancing your career prospects post-graduation.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Your admission, visa approval, and future employability are significantly influenced by your Campus Ready Score, making it an essential aspect of your study abroad preparation.
                    </p>
                    <h3>Our Services:</h3>
                    <p>
                        To further support your journey, we offer a range of services under our Job Search Service:
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Resume Writing: </strong>
                                Craft a professional resume that highlights your strengths and achievements.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>LinkedIn Optimization:</strong>
                                Enhance your LinkedIn profile to attract opportunities and build a professional network.

                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Resume Marketing:</strong>
                                Promote your resume to potential employers to increase visibility and job prospects. (Note: We do not advertise jobs on behalf of overseas employers or represent any overseas employer. This service is not a placement/recruitment service and does not guarantee jobs.)

                            </p>
                        </li>
                    </ul>
                    <h3>Contact Us:</h3>
                    <p>
                        Our Registration number is B-0553/AP/300/5/8968/2013, and we provide services exclusively at our Registered Center.
                    </p>
                    <br />
                    <hr />
                    <br />
                    <h2>Enhance Your Study Abroad Experience with Campus Ready</h2>
                    <h3>Why Choose PIIVLS Campus Ready?</h3>
                    <p>
                        Choosing PIIVLS Campus Ready ensures that you are not just prepared for your academic journey but also equipped for a successful career post-graduation. With a focus on comprehensive preparation and support, we help you achieve your dreams of studying abroad and building a global career.
                    </p>
                    <br />
                    <h3>Personalized Support and Guidance</h3>
                    <p>
                        From understanding which career path suits you best to providing step-by-step assistance throughout your application process, Campus Ready offers personalized support tailored to your needs. Our services include:
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Career Counseling:</strong>
                                Expert advice to help you choose the right course and university.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Application Assistance: </strong>
                                Guidance on preparing and submitting a standout application.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Visa Support:</strong>
                                Assistance with visa applications and documentation.
                            </p>
                        </li>
                    </ul>
                    <h3>Start Your Journey Today</h3>
                    <p>
                        Don’t wait to make your study abroad dreams a reality. Enroll in Campus Ready and take the first step towards a successful global career. Here’s how you can start:
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Initial Consultation:</strong>
                                Schedule a consultation with our experts to discuss your goals and options.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Customized Plan: </strong>
                                Receive a tailored preparation plan that outlines your path to success.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Ongoing Support:</strong>
                                Benefit from continuous guidance and support throughout your study abroad journey.

                            </p>
                        </li>
                    </ul>
                    <h3>Get Started with PIIVLS Campus Ready</h3>
                    <p><strong>Contact Us Today: </strong>Speak with our experts and get personalized advice.</p>
                    <p><strong>Enroll Now: </strong>Join Campus Ready and start your preparation journey.</p>
                    <br />
                    <div className="table-responsive">
                        <table className='table table-bordered border-primary'>
                            <tbody>
                                <tr>
                                    <td>
                                        *Under Job Search Service, we offer Resume Writing, LinkedIn Optimization, and Resume Marketing. We do not advertise jobs on behalf of overseas employers or represent any overseas employer. This service is not a placement/recruitment service and does not guarantee jobs.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        #Our Registration number is B-0553/AP/300/5/8968/2013 and we provide services at our Registered Center only.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="faq_area pt-5">
                        <div className="row justify-content-center">
                            <div className="col-sm-8">
                                <div className="sub_heading text-center pb-4">
                                    <h2>Frequently Asked <span>Questions</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="accordion accordion-flush" id="invest_accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                                        When is the right time for submitting an application to the universities?
                                    </button>
                                </h2>
                                <div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="flush-heading1" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Every foreign University/College has their intakes during a year. Some have two intakes while others may have three or only one or a rolling intake during the academic year. Majority Institutions in a particular country follow the same intake. Hence, you should initiate steps for admission process at least one year in advance for the respective intake. In some cases, you could begin these steps 3-4 months in advance as well.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                        What is an application package?
                                    </button>
                                </h2>
                                <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            An application package consists of the material required by the University. It consists of Application forms Application fees Recommendations Transcripts and mark sheets Essays Financial aid form
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                                        What are the entry requirement to be accepted into a Course?
                                    </button>
                                </h2>
                                <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Every University has it’s set of eligibility criteria which mostly includes minimum academic requirements, English language and entrance test requirements, relevant work experience etc.Your education counsellor can help you identify relevant programs as per your profile
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading4">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                                        How much money do i need to show at the time of applying for Visa?
                                    </button>
                                </h2>
                                <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            There is no upper-limit to an amount of funds that you should show for your Visa Interview. However, you should show a little more than is necessary to cover your expenses abroad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading5">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                                        Can student change their Major upon reaching the university?
                                    </button>
                                </h2>
                                <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Yes, certainly. In fact, most undergraduate students change their major at least once during their four-year course of study. Most Universities abroad allow students the flexibility to change their major as they wish.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading6">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                                        Student has below average grades in high school or college . Will get admission?
                                    </button>
                                </h2>
                                <div id="flush-collapse6" class="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Student has below average grades in high school or college . Will get admission?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading7">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                                        What are financial aid packages?
                                    </button>
                                </h2>
                                <div id="flush-collapse7" class="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            A University offers a financial aid package, which consists of scholarships/grant and an on-campus employment program for the student. Hence this package helps students to pay a significant amount of their total expenses while studying overseas.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading8">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                                        What questions they will ask me in visa interview?
                                    </button>
                                </h2>
                                <div id="flush-collapse8" class="accordion-collapse collapse" aria-labelledby="flush-heading8" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Relax, there is absolutely no need to be nervous about the ‘Student Visa Interview.’ The people at the counter are friendly and will not grill you or have you for lunch! However, you should be thoroughly prepared for the questions. Your counsellor will help you prepare for the same.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampusReady