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
    const applyContent = ApplyContent?.country?.[originalCountryName] || [];
    const typeContent = TypeContent?.country?.[originalCountryName] || [];
    const eligibilityContent = Eligibility?.country?.[originalCountryName] || {};
    const benefitContent = BenefitContent?.country?.[originalCountryName] || {};
    const requirementsContent = Requirements?.country?.[originalCountryName] || [];
    const stepApplyContent = StepApply?.country?.[originalCountryName] || [];
    const visaFeeContent = VisaFee?.country?.[originalCountryName]?.data || [];
    const processTimeContent = ProcessTime?.country?.[originalCountryName]?.data || [];
    const headers = VisaFee?.country?.[originalCountryName]?.headers || {};
    const visaHelpContent = VisaHelp?.country?.[originalCountryName] || {};
    // const TypeListsContent = TypeLists?.country?.[originalCountryName] || {};
    const TypeListsContent = TypeLists?.country?.[originalCountryName] || {};
    const visaTypeTableContent = VisaTypeTable?.country?.[originalCountryName] || {};
    const CountryListTableContent = CountryListTable?.country?.[originalCountryName] || {};
    // console.log('CountryListTableContent>>>>>>>>>>>>>>>>**', CountryListTableContent)
    // console.log('TypeListsContent >>>>>>>>>>>>>>>>**', TypeListsContent)


    // Content Validation
    const hasContent = {
        apply: Object.keys(applyContent).length > 0,
        type: typeContent.length > 0,
        eligibility: Object.keys(eligibilityContent).length > 0,
        steps: Object.keys(stepApplyContent).length > 0,
        visaFee: visaFeeContent.length > 0,
        processTime: processTimeContent.length > 0,
        VisaHelp: Object.keys(visaHelpContent).length > 0,
        benefits: Object.keys(benefitContent).length > 0,
        requirements: Object.keys(requirementsContent).length > 0,
        TypeListsContentData: Object.keys(TypeListsContent).length > 0,
        TypeListsData: Object.keys(TypeLists).length > 0,
        visaTypeTableData: Object.keys(visaTypeTableContent).length > 0,
        CountryListTableData: Object.keys(CountryListTable).length > 0,
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
                            <img src={FormImg || "/default-image.jpg"} className="img-fluid" alt="Form" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>

            {/* Country Content */}
            <div className="country_content_wrap">
                <div className="container">
                    {/* Visa Content */}
                    {hasContent.apply && (
                        <>
                            <h2>{applyContent.title || `Eligibility for ${countryName}`}</h2>
                            <ul>
                                {
                                    applyContent.list.map((item) => (
                                        <li key={item}>
                                            <GoDotFill />
                                            <p dangerouslySetInnerHTML={{ __html: item }}></p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p dangerouslySetInnerHTML={{ __html: applyContent.description }}></p>
                        </>
                    )}

                    {/* Visa Types */}
                    {hasContent.type && (
                        <>

                            {typeContent.map((title, index) => (
                                <div key={index}>
                                    <h3>{title.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: title.des }}></p>

                                </div>
                            ))}
                        </>
                    )}

                    {/* Benefits */}
                    {hasContent.benefits && (
                        <>
                            <h2>{benefitContent.title}</h2>
                            <ul>
                                {benefitContent.list.map((item, index) => (
                                    <>
                                        <li key={index}>
                                            <GoDotFill />
                                            {item}
                                        </li>
                                    </>

                                ))}
                            </ul>

                            <p dangerouslySetInnerHTML={{ __html: benefitContent.link }}></p>
                        </>
                    )}

                    {/* Type Lists */}
                    {/* {
                        hasContent.TypeListsData && (
                            <>
                                <h2>{TypeListsContent.title}</h2>

                                <ul>
                                    {
                                        TypeListsContent.list.map((data, index) => (
                                            <li key={index}>{data}</li>
                                        ))

                                    }
                                </ul>
                            </>
                        )
                    } */}



                    {/* Eligibility */}
                    {hasContent.eligibility && (
                        <>
                            <h2>{eligibilityContent.title || `Eligibility for ${countryName}`}</h2>
                            <ul>
                                {
                                    eligibilityContent.list.map((item, index) => (
                                        <li key={index}> <GoDotFill /> {item}</li>
                                    ))}
                            </ul>
                        </>
                    )}


                    {/* Requirements */}
                    {hasContent.requirements && (
                        <>
                            <h2>{requirementsContent.title}</h2>
                            <ul>
                                {
                                    requirementsContent.list.map((data) => (
                                        <li key={data}><GoDotFill /> {data}</li>
                                    ))
                                }
                            </ul>
                        </>
                    )}
                    {/* {hasContent.visaTypeTableData && (
                        <>
                            
                            <div className="table-responsive">
                                <table className="table table-bordered table-light table-striped">
                                    <thead>
                                        <tr>
                                            {Object.keys(headers).map((key, index) => (
                                                <th key={index}>{headers[key]}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                </table>
                            </div>
                        </>
                    )} */}
                    {/* Steps to Apply */}
                    {hasContent.steps && (
                        <>
                            <h2>{stepApplyContent.title}</h2>
                            <ul>
                                {
                                    stepApplyContent.list.map((data) => (
                                        <li key={data.id}><GoDotFill /> {data}</li>
                                    ))
                                }
                            </ul>
                        </>
                    )}
                    {hasContent.processTime && (
                        <>
                            <h2><span>{countryName}</span> Tourist Visa Processing time</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered table-primary table-striped">
                                    <thead>
                                        <tr>
                                            {Object.keys(headers).map((key, index) => (
                                                <th key={index}>{headers[key]}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {processTimeContent.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {Object.keys(headers).map((key, index) => (
                                                    <td key={index}>{row[key]}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                    {/* {
                        hasContent.CountryListTableData && (
                            <div>
                                <h2>{CountryListTable.country.schengen.title}</h2>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-primary table-striped">
                                        <thead>
                                        </thead>
                                        <tbody>
                                            {CountryListTable.country.schengen.tableData[0].column1.map((country1, index) => (
                                                <tr key={`row-${index}`}>
                                                    <td>{country1}</td>
                                                    <td>{CountryListTable.country.schengen.tableData[0].column2[index] || ''}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    } */}

                    {/* Visa Fee */}
                    {hasContent.visaFee && (
                        <>
                            <h2> <span>{countryName}</span> Visit Visa Fee</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered table-primary table-striped">
                                    <thead>
                                        <tr>
                                            {Object.keys(headers).map((key, index) => (
                                                <th key={index}>{headers[key]}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {visaFeeContent.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {Object.keys(headers).map((key, index) => (
                                                    <td key={index}>{row[key]}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                            {visaFeeContent.des && <p>{visaFeeContent.des}</p>}
                        </>
                    )}

                    {/* Visa Help */}
                    {hasContent.VisaHelp && (
                        <>
                            <h2>{visaHelpContent.title}</h2>
                            <h6>{visaHelpContent.des}</h6>
                            <ul>
                                {visaHelpContent.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p dangerouslySetInnerHTML={{ __html: visaHelpContent.link }}></p>
                        </>
                    )}
                </div>
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
