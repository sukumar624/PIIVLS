import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { visitcountryData } from '../components/Breadcrumb/visitcountryData';
import { useParams } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
// Import country-specific components
import Locations from '../components/Locations/Locations';
import { Australia, Austria, Bangladesh } from '../VisitCountry';

const VisitCountry = () => {
    const { countryName } = useParams(); // Get "countryName" from the route

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    const normalizeCountryName = (name) => name?.toLowerCase().replace(/-/g, '_');
    const formatTitle = (name) =>
        name
            ?.split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    const normalizedCountryName = normalizeCountryName(countryName);
    const breadcrumb = visitcountryData[normalizedCountryName] || visitcountryData.default;
    const formTitle = `Apply in ${formatTitle(normalizedCountryName || 'Your Future')}`;

    const renderCountryContent = () => {
        switch (normalizedCountryName) {
            case 'australia':
                return <Australia />;
            case 'austria':
                return <Austria />;
            case 'bangladesh':
                return <Bangladesh />;
            default:
                return <div>Content for {formatTitle(normalizedCountryName)} is not available yet.</div>;
        }
    };

    return (
        <div>
            {/* Breadcrumb Component */}
            <Breadcrumb
                title={breadcrumb?.title || 'Invest Visa'}
                image={breadcrumb?.image || '/assets/default-image.jpg'}
                path={breadcrumb?.path || '/invest-visa'}
            />

            {/* Registration Form */}
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper border">
                        <div className="form_img">
                            <img
                                src={breadcrumb?.image || '/assets/default-image.jpg'}
                                className="img-fluid"
                                alt="Form Banner"
                            />
                        </div>
                        <RegistrationForm formTitle={formTitle} />
                    </div>
                </div>
            </div>

            {/* Country-Specific Content */}
            <div className="page_content">{renderCountryContent()}</div>
            <Locations />
        </div>
    );
};

export default VisitCountry;
