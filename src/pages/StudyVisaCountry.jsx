import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { StudyBreadCrumb } from '../components/Breadcrumb/StudyBreadCrumb';
import FormImg from "../assets/images/study-blog-img.jpg"
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Locations from '../components/Locations/Locations';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CanadaStudy from '../StudyContent/CanadaStudy';
import AustraliaStudy from '../StudyContent/AustraliaStudy';
import GermanyStudy from '../StudyContent/GermanyStudy';
import UKStudy from '../StudyContent/UKStudy';
import USAStudy from '../StudyContent/USAStudy';
import MBAStudy from '../StudyContent/MBAStudy';
import MelbourneBusinessSchool from '../StudyContent/MelbourneBusinessSchool';
const StudyVisaCountry = () => {
    const { countryName } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!countryName) {
        return <div>Error: Country name not provided</div>;
    }

    const originalCountryName = countryName.toLowerCase();
    const breadcrumb = StudyBreadCrumb?.[originalCountryName] || StudyBreadCrumb.default || {};
    const formTitle = `Apply in ${countryName.charAt(0).toUpperCase() + countryName.slice(1)}`;

    const renderCountryContent = () => {
        switch (originalCountryName) {
            case "australia":
                return <AustraliaStudy />;
            case "canada":
                return <CanadaStudy />;
            case "germany":
                return <GermanyStudy />;
            case "uk":
                return <UKStudy />;
            case "usa":
                return <USAStudy />;
            case "mba":
                return <MBAStudy />;
            case "melbourne-business-school":
                return <MelbourneBusinessSchool />;

            default:
                return <div>Content for {originalCountryName} is not available yet.</div>;
        }
    }

    return (
        <div className="invest_visa_page">
            {/* Breadcrumb Section */}
            <Breadcrumb
                title={breadcrumb?.title || "Invest Visa"}
                image={breadcrumb?.image || "/default-image.jpg"}
                path={breadcrumb?.path || "/invest-visa"}
            />

            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper border">
                        <div className="form_img">
                            <img src={FormImg || "/default-image.jpg"} className="img-fluid" alt="Form" />
                        </div>
                        <RegistrationForm formTitle={formTitle} />
                    </div>
                </div>
            </div>

            {/* Country-Specific Investment Content */}
            <div className="page_content">
                {renderCountryContent()}
            </div>
            <Locations />
        </div>
    )
}

export default StudyVisaCountry
