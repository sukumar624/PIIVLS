import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { breadcrumbData } from "../components/Breadcrumb/breadcrumbData";
import FaqAccordion from '../pages/FaqAccordion';
import ApplyContent from "../CountryContent/ApplyContent";
import BenefitContent from "../CountryContent/BenefitContent";
import Eligibility from "../CountryContent/Eligibility";
import TypeContent from "../CountryContent/TypeContent";
import TypeLists from "../CountryContent/TypeLists";
import Requirements from "../CountryContent/Requirements";
import StepApply from "../CountryContent/StepApply";
import VisaFee from "../CountryContent/VisaFee";
import VisaHelp from "../CountryContent/VisaHelp";
import ProcessTime from "../CountryContent/ProcessTime";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import FormImg from "../assets/images/study-visa-img.jpg";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Locations from "../components/Locations/Locations";
import { GoDotFill } from "react-icons/go";
import VisaTypeTable from '../CountryContent/VisaTypeTable';
import CountryListTable from '../CountryContent/CountryListTable';
// import FaqAccordion from "../components/FaqAccordion/FaqAccordion";
import { faqData } from '../CountryContent/faqData'


const VisitCountry = () => {
    const { countryName } = useParams();
    console.log(countryName);

    // Scroll to top when component loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Validate and normalize `countryName`
    if (!countryName) {
        return <div>Error: Country name not provided</div>;
    }
    const originalCountryName = countryName.toLowerCase();

    const faqContent = faqData[originalCountryName] || faqData.default;


    // Data Fetching
    const breadcrumb = breadcrumbData?.[originalCountryName] || breadcrumbData.default || {};
    // console.log('CountryListTableContent>>>>>>>>>>>>>>>>**', CountryListTableContent)
    // console.log('TypeListsContent >>>>>>>>>>>>>>>>**', TypeListsContent)


    // Content Validation


    return (
        <div className="country_visa_page">
            {/* Breadcrumb */}
            <Breadcrumb
                title={breadcrumb?.title || "Visit Visa"}
                image={breadcrumb?.image || "/default-image.jpg"}
                path={breadcrumb?.path || "/visit-visa"}
            />

            {/* Registration Form */}
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper border">
                        <div className="form_img">
                            <img src={FormImg || "/default-image.jpg"} className="img-fluid" alt="Form" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>

            {/* Country Content */}
            <div className="country_content_wrap">
               
            </div>

            {/* Locations */}
            <Locations />

            <div className="faq_accrodian">
                <div className="container">
                    <FaqAccordion faqContent={faqContent} />
                </div>
            </div>

        </div>
    );
};

export default VisitCountry;
