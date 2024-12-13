import './about.css'
import AboutImg from '../../assets/images/about-img-01.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
const About = () => {
    return (
        <section className="about_area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="about_img_box">
                            <div className="about_img">
                                <img src={AboutImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="about_content">
                            <div className="sub_heading">
                                <span>// About Us</span>
                                <h2>We Provide Immigration And <span>Visa Services</span></h2>
                            </div>
                            <p>
                                <strong>PIIVLS – Platform International Immigration Visa Legal Solutions</strong> is one of
                                the most trusted
                                immigration consultants having vast experience in offering high-quality solutions in visa
                                processing. People feel comfortable talking to us – not only because we have earned a strong
                                trust level but also because the way we take interest in aspirants in fulfilling their
                                dreams of migrating and settling. With our services, today hundreds of individuals and
                                families are happily settled in several countries such as UK, Turkiye, Canada, Australia,
                                Germany, USA, UAE, Denmark, Malta, Singapore, France, Austria, Ireland, etc.
                            </p>
                            <Link to="/about">
                                <button className="custom_btn">
                                    <span>Read More</span>
                                    <div className="icon">
                                        <FaArrowRightLong />
                                    </div>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About