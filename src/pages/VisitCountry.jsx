import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { visitcountryData } from '../components/Breadcrumb/visitcountryData';
import { useParams } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
// Import country-specific components
import Locations from '../components/Locations/Locations';
import { Australia, Austria, Bangladesh, Belgium, Canada, CanadaTransitVisa, China, Colombia, Cyprus, CzechRepublicTouristVisa, DenmarkTouristVisa, DubaiTouristVisa, EgyptTouristVisa, EstoniaTouristVisa, FinlandTouristVisa, FranceTouristVisa, GeorgiaTouristVisa, GermanyTouristVisa, GreeceTouristVisa, HongKongTouristVisa } from '../VisitCountry';
import Brazil from '../VisitCountry/Brazil';
import forImg from '../assets/images/travel-img.jpg';
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
            case 'belgium':
                return <Belgium />;
            case 'brazil':
                return <Brazil />;
            case 'canada':
                return <Canada />;
            case 'canada_transit':
                return < CanadaTransitVisa />;
            case 'china':
                return < China />;
            case 'colombia':
                return < Colombia />;
            case 'cyprus':
                return < Cyprus />;
            case 'czech_republic':
                return < CzechRepublicTouristVisa />;
            case 'denmark':
                return < DenmarkTouristVisa />;
            case 'dubai':
                return < DubaiTouristVisa />;
            case 'egypt':
                return < EgyptTouristVisa />;
            case 'estonia':
                return < EstoniaTouristVisa />;
            case 'finland':
                return < FinlandTouristVisa />;
            case 'france':
                return < FranceTouristVisa />;
            case 'georgia':
                return < GeorgiaTouristVisa />;
            case 'germany':
                return < GermanyTouristVisa />;
            case 'greece':
                return < GreeceTouristVisa />;
            case 'hong_kong':
                return < HongKongTouristVisa />;
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
                                src={forImg}
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
