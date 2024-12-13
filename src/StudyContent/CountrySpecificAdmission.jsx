import React, { useEffect } from 'react'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import FormImg from '../assets/images/career-form-img.jpg'
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
const CountrySpecificAdmission = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.CountrySpecificAdmission || {};

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
                    <h2>Simplifying Overseas Education Student Loans</h2>
                    <p>
                        Studying abroad is a life-changing but expensive decision. The combination of applications, admissions, relocation, and student living expenses means that the price suddenly seems high. PIIVLS can help you apply with complete peace of mind with our student education loan services. We are allied with some of the leading banks and lending institutions and can help you avail the highest quality of service at the best possible rates.
                    </p>
                    <p>
                        You can get a student loan to study abroad from the government or a private bank, it can be a bank from your home country or a foreign bank, in the country you wish to study. Co-signing (together with parents or legal guardians) is very popular for private student loans because most teens don’t have the credit history to get such a size loan.
                    </p>
                    <p>
                        Some overseas education loans are based on financial need, while others are based on your credit score.
                    </p>
                    <h3>How to Get an Education Loan for Abroad Studies</h3>
                    <p>
                        The entire loan process from the application stage to approval as well as the disbursement is time-consuming. It is always advisable to apply for the loan at the earliest.
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                First, it must be verified if the course that has been opted for overseas education is recognized or not by the Banks
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                The amount of loan that will be required and the funds that can be arranged on own by the student must be figured out
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                The student loans offered by diverse banks for overseas education must be compared to identify the best option for the student’s needs
                            </p>
                        </li>
                    </ul>
                    <br />
                    <p>
                        Documents Required for Education Loan
                    </p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                Filled application for the Education loan
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Passport-size photographs of the applicant as well as the co-applicant
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Photo ID of the applicant as well as the co-applicant
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Proof of residence of the applicant as well as the co-applicant
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Certificates and Mark sheets of the applicant
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Score report of IELTS, GMAT, GRE, etc. that is applicable
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Letter of admission offered by the College or University
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Past 6 months' statements from the bank of the co-applicant
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Proof of income of the co-applicant
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                In the case of collateral in the form of immovable property, it can be a home, flat, or non-agricultural land
                            </p>
                        </li>
                    </ul>
                    <p>
                        <strong>Note:</strong>
                        The requirements can differ as per the regulations of the banks.
                    </p>
                    <br />
                    <h2>Education Loan Eligibility in India</h2>
                    <p>Some of the common factors that are considered by most of the banks include:</p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>The student must be an Indian citizen</p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                The applicant for the loan must be 18 years old else the parents will have to obtain the loan
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                A good academic background must be possessed by the candidate
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                The applicant must have been admitted by a recognized overseas College/University/Institution
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                The course selected by the applicant must be professional or technical as job-oriented courses are preferred by the banks
                            </p>
                        </li>
                    </ul>
                    <p>
                        As a part of our end-to-end support and one-stop solution services for your Study Abroad package, PIIVLS will be mediating between you and the bank/lending institutions for processing your education loan.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CountrySpecificAdmission