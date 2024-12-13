
import aboutBreadcrumbImg from '../assets/images/about-breadcrumb.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import sharjahImg from '../assets/images/sharjah.png';
import UAEImge from '../assets/images/united-arab-emirates.png';
import PakistanImg from '../assets/images/pakistan.png';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFirefoxBrowser } from "react-icons/fa";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import ContactForm from '../components/ContactForm/ContactForm';
const Contact = () => {

    const [isEmailBoxVisible, setEmailBoxVisible] = useState(false);

    const handleSwitchChange = (event) => {
        setEmailBoxVisible(event.target.checked);
    };
    // Country Select Function
    const [selectCountry, setSelectCountery] = useState('');
    const handleSelectcountry = (e) => {
        setSelectCountery(e.target.value)
    }

    // Select Visa Option Function

    const [selectVisa, setSelectVisa] = useState('');
    const handleSelectVisa = (e) => {
        setSelectVisa(e.target.value)
    }

    const { title, image, path } = breadcrumbData.contact;

    return (
        <div className='contact_page_area'>
            <div className="bread_crumb_area">
                <Breadcrumb title={title} image={image} path={path} />
            </div>
            <section className="contact_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-5">
                            <div className="conatct_info">
                                <p>
                                    We value your interest in PIIVLS and are here to assist you with any legal enquiries or services you may require. Our dedicated team of professionals is ready to provide expert guidance and support. Feel free to get in touch with us using the contact details below or by filling out the form on the side. Thank you!
                                </p>
                                <div className="social_address">
                                    <ul>
                                        <li>
                                            <div className="icon_box"><FaMapMarkerAlt /></div>
                                            <a href="#" onClick={(e) => e.preventDefault()}> 4th Floor, 16/A Commercial, Phase 6, <br /> DHA, Lahore, Pakistan</a>
                                        </li>
                                        <li>
                                            <div className="icon_box">
                                                <MdCall />
                                            </div>
                                            <a href="tel:+9230111 00800 - 1" target='_blank'>+9230111 00800 - 1</a>
                                        </li>
                                        <li>
                                            <div className="icon_box">
                                                <MdEmail />
                                            </div>
                                            <a href="mailto:info@piivls.com" target='_blank'>info@piivls.com </a>
                                        </li>
                                        <li>
                                            <div className="icon_box">
                                                <FaFirefoxBrowser />
                                            </div>
                                            <a href="www.piivls.com" target='_blank'>www.piivls.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-7">
                            <div className="contact_form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <div className="our_location_area">
                <div className="container-fluid">
                    <div className="location_wrapper">
                        <div className="single_location">
                            <div className="location_header">
                                <img src={PakistanImg} alt="" />
                                <h4>Pakistan</h4>
                            </div>
                            <div className="location_info">
                                <p>
                                    4th Floor, 16/A Commercial, Phase 6, DHA, Lahore
                                </p>
                            </div>
                        </div>
                        <div className="single_location">
                            <div className="location_header">
                                <img src={UAEImge} alt="" />
                                <h4>Dubai</h4>
                            </div>
                            <div className="location_info">
                                <p>
                                    703, 7th Floor, Bin Sougat Bldg., Salah Al Din St., Diera, Dubai
                                </p>
                            </div>
                        </div>
                        <div className="single_location">
                            <div className="location_header">
                                <img src={sharjahImg} alt="" />
                                <h4>Sharjah</h4>
                            </div>
                            <div className="location_info">
                                <p>
                                    102, 1st Floor, Al Jazeera 1 Bldg., Buhaira Corniche, Al Majaz 2, Sharjah
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact;