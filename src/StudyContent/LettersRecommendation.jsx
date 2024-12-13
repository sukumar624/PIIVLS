import React, { useEffect } from 'react'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import FormImg from '../assets/images/career-form-img.jpg'
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
const LettersRecommendation = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.LettersRecommendation || {};

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
                    <h2>Supercharge Your Admissions Application with Powerful LORs</h2>
                    <p>
                        Letters of Recommendation (LORs) play a crucial role in your application package, providing insights into your strengths, character, and suitability for admission. Typically, you'd seek LORs from teachers and colleagues to paint a well-rounded picture of your capabilities. At PIIVLS, we understand the importance of this aspect of your application and offer expert LOR solutions to help you stand out.
                    </p>
                    <h2>PIIVLS Statement of Purpose Solutions</h2>
                    <p>
                        Crafting compelling LORs is our expertise. With years of experience assisting students in securing admissions and student visas worldwide, we've honed our process to perfection. Trust us to create professional LORs tailored to showcase your strengths effectively, enhancing your chances of success.
                    </p>
                    <h3>How PIIVLS Can Assist You
                    </h3>
                    <p>Our comprehensive LOR solutions include:</p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Understanding Your Profile: </strong>
                                We take the time to understand your unique profile, ensuring that your LORs reflect your achievements, qualities, and aspirations accurately.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p><strong> Customizing LORs to Your Profile: </strong>
                                Each LOR is meticulously crafted to align with your specific academic and professional experiences, highlighting your suitability for the desired program or institution.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p><strong>Assisting with LOR Formats: </strong>
                                Our team provides guidance on the appropriate format and structure for your LORs, ensuring they meet the requirements of your target institutions.
                            </p>
                        </li>
                    </ul>
                    <p>
                        When you choose PIIVLS, you'll work closely with a dedicated consultant who will collaborate with you to create persuasive LORs that elevate your admissions package. With our support, you can present a compelling case for your candidacy and maximize your chances of securing admission to your dream school.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default LettersRecommendation