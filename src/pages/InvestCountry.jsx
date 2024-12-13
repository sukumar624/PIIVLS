import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import investBreadcrumbData from "../components/Breadcrumb/investBreadcrumbData";
import CanadaInvest from "../InvestContent/CandaInvest";
import AustraliaInvest from "../InvestContent/AustraliaInvest";
import UkInvest from "../InvestContent/UkInvest";
import DenmarkInvest from '../InvestContent/DenmarkInvest';
import FormImg from "../assets/images/invest-form-img.jpg"
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Locations from '../components/Locations/Locations';
import GermanyInvest from '../InvestContent/GermanyInvest';
import IrelandInvest from '../InvestContent/IrelandInvest';
import MaltaInvest from '../InvestContent/MaltaInvest';
const InvestCountry = () => {
    const { countryName } = useParams(); // Get the country name from the URL
    console.log("Country Name:", countryName);

    // Scroll to top when the component loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Validate and normalize country name
    if (!countryName) {
        return <div>Error: Country name not provided</div>;
    }

    const originalCountryName = countryName.toLowerCase(); // Normalize to lowercase

    // Get country-specific breadcrumb data and FAQ content
    const breadcrumb = investBreadcrumbData?.[originalCountryName] || investBreadcrumbData.default || {};
    const formTitle = `Invest in ${countryName.charAt(0).toUpperCase() + countryName.slice(1)}`;
    // Dynamic content rendering based on countryName
    const renderCountryContent = () => {
        switch (originalCountryName) {
            case 'canada':
                return <CanadaInvest />; // Render Canada Investment content
            case 'australia':
                return <AustraliaInvest />; // Render Australia Investment content
            case 'uk':
                return <UkInvest />; // Render Australia Investment content
            case 'denmark':
                return <DenmarkInvest />; // Render Denmark Investment content
            case 'germany':
                return <GermanyInvest />;
            case 'ireland':
                return <IrelandInvest />;
            case 'malta':
                return <MaltaInvest />;
            default:
                return <div>Content for {originalCountryName} is not available yet.</div>;
        }
    };

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
    );
};

export default InvestCountry;
