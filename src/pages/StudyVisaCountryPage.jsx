import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import ApplyContent from '../CountryContent/ApplyContent';
import BenefitContent from '../CountryContent/BenefitContent';
import Eligibility from '../CountryContent/Eligibility';
import TypeContent from '../CountryContent/TypeContent';
import Requirements from '../CountryContent/Requirements';
import StepApply from '../CountryContent/StepApply';
import VisaFee from '../CountryContent/VisaFee';
import ProcessTime from '../CountryContent/ProcessTime';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import FormImg from '../assets/images/study-visa-img.jpg';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Locations from '../components/Locations/Locations';

const VisitCountry = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { countryName } = useParams();

    // Validate and normalize countryName
    if (!countryName) {
        return <div>Error: Country name not provided</div>;
    }
    const originalCountryName = countryName.toLowerCase();

    // Fallback for missing country data
    const breadcrumb = breadcrumbData?.[originalCountryName] || breadcrumbData.default || {};
    const applyContent = ApplyContent?.country?.[originalCountryName] || [];
    const benefitContent = BenefitContent?.country?.[originalCountryName] || [];
    const eligibilityContent = Eligibility?.country?.[originalCountryName] || [];
    const requirementsContent = Requirements?.country?.[originalCountryName] || [];
    const stepApplyContent = StepApply?.country?.[originalCountryName] || [];
    const visaFeeContent = VisaFee?.country?.[originalCountryName]?.data || [];
    const processTimeContent = ProcessTime?.country?.[originalCountryName]?.data || [];
    const headers = VisaFee?.country?.[originalCountryName]?.headers || {};
    const typeContent = TypeContent?.country?.[originalCountryName]?.headers || {};
    // const typeContent = TypeContent.find(item => item?.country?.[originalCountryName])?.country?.[originalCountryName]?.[0]?.visaTypes || [];

    // Conditional checks for content availability
    const hasContent = {
        visa: applyContent.length > 0,
        benefit: benefitContent.length > 0,
        type: typeContent.length > 0,
        eligibility: eligibilityContent.length > 0,
        requirements: requirementsContent.length > 0,
        steps: stepApplyContent.length > 0,
        visaFee: visaFeeContent.length > 0,
        processTime: processTimeContent.length > 0,
    };

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
                            <img src={FormImg || '/default-image.jpg'} className='img-fluid' alt="Form" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>

            {/* Country content */}
            <div className="country_content_wrap">
                <div className="container">
                    {/* Visa Content */}
                    {hasContent.visa && (
                        <>
                            <h2 style={{ textTransform: 'capitalize' }}>
                                Why apply for the {countryName} Tourist Visa?
                            </h2>
                            <ul>
                                {applyContent.map((data) => (
                                    <li key={data.id}>
                                        <IoArrowForwardCircleOutline />
                                        <span>{data.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Visa Types */}
                    {hasContent.type && (
                        <>
                            {typeContent.map((data, index) => (
                                <div key={index}>
                                    <h3>{data.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                                </div>
                            ))}
                        </>
                    )}

                    {/* Benefits */}
                    {hasContent.benefit && (
                        <>
                            <h2>Benefits of a <span style={{ textTransform: 'uppercase' }}>{countryName}</span> Tourist Visa</h2>
                            <ul>
                                {benefitContent.map((data) => (
                                    <li key={data.id}>
                                        <IoArrowForwardCircleOutline />
                                        <span>{data.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Eligibility */}
                    {hasContent.eligibility && (
                        <>
                            <h2>Eligibility for {countryName} Visit Visa</h2>
                            <ul>
                                {eligibilityContent.map((data) => (
                                    <li key={data.id}>
                                        <IoArrowForwardCircleOutline />
                                        <span>{data.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Requirements */}
                    {hasContent.requirements && (
                        <>
                            <h2>Requirements for {countryName} Visit Visa</h2>
                            <p>The requirements for {countryName} visit visa are listed below:</p>
                            <ul>
                                {requirementsContent.map((data) => (
                                    <li key={data.id}>
                                        <IoArrowForwardCircleOutline />
                                        <span>{data.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Steps to Apply */}
                    {hasContent.steps && (
                        <>
                            <h2>Steps to apply for a {countryName} Tourist Visa</h2>
                            <ul>
                                {stepApplyContent.map((data) => (
                                    <li key={data.id}>
                                        <strong>Step {data.id} :</strong>
                                        <IoArrowForwardCircleOutline />
                                        <span>{data.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Visa Fee */}
                    {hasContent.visaFee && (
                        <>
                            <h2>{countryName} Visit Visa Fee</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            {Object.keys(headers).map((headerKey, index) => (
                                                <th key={index}>{headers[headerKey]}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {visaFeeContent.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {Object.keys(headers).map((headerKey, index) => (
                                                    <td key={index}>{row[headerKey]}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {/* Processing Time */}
                    {hasContent.processTime && (
                        <>
                            <h2>{countryName} Tourist Visa Processing Time</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            {Object.keys(headers).map((headerKey, index) => (
                                                <th key={index}>{headers[headerKey]}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {processTimeContent.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {Object.keys(headers).map((headerKey, index) => (
                                                    <td key={index}>{row[headerKey]}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Locations */}
            <Locations />
        </div>
    );
};

export default VisitCountry;
