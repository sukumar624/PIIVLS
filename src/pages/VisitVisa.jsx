import React, { useEffect, useRef } from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import formImg from '../assets/images/visit-img.jpg';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Process from '../components/Process/Process';
import Enquiry from '../assets/images/enquiry.png';
import expertCounselling from '../assets/images/expert-counselling.png';
import Eligibility from '../assets/images/Eligibility.png';
import document from '../assets/images/document.png';
import Processing from '../assets/images/Processing.png';
import WhyChoose from '../components/WhyChoose/LearningSolution';
import Locations from '../components/Locations/Locations';
import students from '../assets/images/graduation.png';
import consultant from '../assets/images/consultant.png';
import remarketing from '../assets/images/remarketing.png';
import deliveryTruck from '../assets/images/delivery-truck.png';
import Faq from '../components/Faq/Faq';
import VisitFaqData from '../components/Faq/VisitFaqData';
const visaLinks = {
    columnOne: [
        { href: "/visit-visa/australia", label: "Australia Tourist Visa" },
        { href: "/visit-visa/austria", label: "Austria Tourist Visa" },
        { href: "/visit-visa/bangladesh", label: "Bangladesh Tourist Visa" },
        { href: "/visit-visa/belgium", label: "Belgium Tourist Visa" },
        { href: "/visit-visa/brazil", label: "Brazil Tourist Visa" },
        { href: "/visit-visa/canada", label: "Canada Tourist Visa" },
        { href: "/visit-visa/china", label: "China Tourist Visa" },
        { href: "/visit-visa/colombia", label: "Colombia Tourist Visa" },
        { href: "/visit-visa/cyprus", label: "Cyprus Tourist Visa" },
    ],
    columnTwo: [
        { href: "/visit-visa/czech-republic", label: "Czech-Republic Tourist Visa" },
        { href: "/visit-visa/denmark", label: "Denmark Tourist Visa" },
        { href: "/visit-visa/dubai", label: "Dubai Tourist Visa" },
        { href: "/visit-visa/egypt", label: "Egypt Tourist Visa" },
        { href: "/visit-visa/estonia", label: "Estonia Tourist Visa" },
        { href: "/visit-visa/finland", label: "Finland Tourist Visa" },
        { href: "/visit-visa/france", label: "France Tourist Visa" },
        { href: "/visit-visa/georgia", label: "Georgia Tourist Visa" },
        { href: "/visit-visa/germany", label: "Germany Tourist Visa" },
        { href: "/visit-visa/greece", label: "Greece Tourist Visa" },
    ],
    columnThree: [
        { href: "/visit-visa/hong-kong", label: "Hong-Kong Tourist Visa" },
        { href: "/visit-visa/hungary", label: "Hungary Tourist Visa" },
        { href: "/visit-visa/iceland", label: "Iceland Tourist Visa" },
        { href: "/visit-visa/indonesia", label: "Indonesia Tourist Visa" },
        { href: "/visit-visa/ireland", label: "Ireland Tourist Visa" },
        { href: "/visit-visa/italy", label: "Italy Tourist Visa" },
        { href: "/visit-visa/japan", label: "Japan Tourist Visa" },
        { href: "/visit-visa/latvia", label: "Latvia Tourist Visa" },
        { href: "/visit-visa/liechtenstein", label: "Liechtenstein Tourist Visa" },
        { href: "/visit-visa/lithuania", label: "Lithuania Tourist Visa" },
    ],
    columnFour: [
        { href: "/visit-visa/luxembourg", label: "Luxembourg Tourist Visa" },
        { href: "/visit-visa/malaysia", label: "Malaysia Tourist Visa" },
        { href: "/visit-visa/malta", label: "Malta Tourist Visa" },
        { href: "/visit-visa/morocco", label: "Morocco Tourist Visa" },
        { href: "/visit-visa/netherlands", label: "Netherlands Tourist Visa" },
        { href: "/visit-visa/nigeria", label: "Nigeria Tourist Visa" },
        { href: "/visit-visa/norway", label: "Norway Tourist Visa" },
        { href: "/visit-visa/peru", label: "Peru Tourist Visa" },
    ],
    columnFive: [
        { href: "/visit-visa/philippines", label: "Philippines Tourist Visa" },
        { href: "/visit-visa/poland", label: "Poland Tourist Visa" },
        { href: "/visit-visa/portugal", label: "Portugal Tourist Visa" },
        { href: "/visit-visa/russia", label: "Russia Tourist Visa" },
        { href: "/visit-visa/singapore", label: "Singapore Tourist Visa" },
        { href: "/visit-visa/slovakia", label: "Slovakia Tourist Visa" },
        { href: "/visit-visa/slovenia", label: "Slovenia Tourist Visa" },
        { href: "/visit-visa/south-africa", label: "South-Africa Tourist Visa" },
        { href: "/visit-visa/south-korea", label: "South-Korea Tourist Visa" },
        { href: "/visit-visa/spain", label: "Spain Tourist Visa" },
    ],
    columnSix: [
        { href: "/visit-visa/sri-lanka", label: "Sri Lanka Tourist Visa" },
        { href: "/visit-visa/sweden", label: "Sweden Tourist Visa" },
        { href: "/visit-visa/switzerland", label: "Switzerland Tourist Visa" },
        { href: "/visit-visa/taiwan", label: "Taiwan Tourist Visa" },
        { href: "/visit-visa/thailand", label: "Thailand Tourist Visa" },
        { href: "/visit-visa/turkey", label: "Turkey Tourist Visa" },
        { href: "/visit-visa/uk", label: "UK Tourist Visa" },
        { href: "/visit-visa/ukraine", label: "Ukraine Tourist Visa" },
        { href: "/visit-visa/usa", label: "USA Tourist Visa" },
        { href: "/visit-visa/vietnam", label: "Vietnam Tourist Visa" },
        { href: "/visit-visa/schengen-appointments", label: "Schengen Appointments Visa" },
        { href: "/visit-visa/schengen", label: "Schengen Tourist Visa" },
    ],
};

const customProcessData = [
    {
        id: 1,
        title: 'Inquiry',
        img: Enquiry,
        info: 'your already here welcome'
    },
    {
        id: 2,
        title: 'Expert counselling',
        img: expertCounselling,
        info: 'The counsellor will talk to you and understand your requirement'
    },
    {
        id: 3,
        title: 'Eligibility',
        img: Eligibility,
        info: 'Be eligible for this process and sign up for this process'
    },
    {
        id: 4,
        title: 'Documentation',
        img: document,
        info: 'All your document will compiled to create strong application'
    },
    {
        id: 5,
        title: 'Proccesing',
        img: Processing,
        info: 'All your documents will compiled to create strong application'
    },
];

const chooseData = [
    {
        id: 1,
        title: '10+K Applicants',
        img: students,
        des: `1000s of successful visa applicant`
    },
    {
        id: 2,
        title: 'Expert profession',
        img: consultant,
        des: `Experienced and dedicated professionals for every type of visa`
    },
    {
        id: 3,
        title: 'Personalized Service',
        img: remarketing,
        des: `Personalized service with a dedicated agent appointed to you`
    },
    {
        id: 4,
        title: 'Online Services',
        img: deliveryTruck,
        des: `Personalized service with a dedicated agent appointed to you`
    },
]



const VisitVisa = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const { title, image, path } = breadcrumbData.visit;
    const formSectionRef = useRef(null);
    const formtitle = 'Visa';
    const formdes = 'visa solutions from india’s no 1 overseas consultancy'
    return (
        <>
            <div className="visit_visa_page_wrapper pb-5">
                <Breadcrumb title={title} image={image} path={path} />
                <div className="form_container" ref={formSectionRef}>
                    <div className="container">
                        <div className="form_wrapper border">
                            <div className="form_img">
                                <img src={formImg} className='img-fluid' alt="" />
                            </div>
                            <RegistrationForm formtitle={formtitle} formdes={formdes} />
                        </div>
                    </div>
                </div>
                <section className="choose_country">
                    <div className="container">
                        <div className="sub_heading text-center">
                            <h2>Chose Country</h2>
                        </div>
                        <section className="choose_country">
                            <div className="container">
                                <div className="choose_country_wrapper">
                                    {Object.entries(visaLinks).map(([key, links]) => (
                                        <div className="choose_country_item" key={key}>
                                            <ul>
                                                {links.map((link) => (
                                                    <li key={link.href}>
                                                        <Link to={link.href}>
                                                            <MdKeyboardDoubleArrowRight />
                                                            <span>{link.label}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                {/* Process component */}
                <Process
                    data={customProcessData}
                    title="Visa Process"
                    description="Learn more about our step-by-step visa process with guided support."
                />
                <WhyChoose
                    title="Why choose PIIVLS as your Visa Partner"
                    description="We want to transfer you to become a global Indian"
                    data={chooseData}
                    formSectionRef={formSectionRef}
                />
                <div className="page_content_area">
                    <div className="container">
                        <h2>Visit / Tourist visa</h2>
                        <p>
                            Visit/Tourist visas are official travel documents given to foreign visitors for vacation or sightseeing. For example, if you are from India and looking to visit the US, you need to apply for a US tourist visa. Every country has its own visa policies for tourists and corresponding embassies and consulates to help you get a visa for short-term visits.
                        </p>
                        <p>
                            These Travel visas/ Tourist visas have a limited validity period, and foreign visitors traveling with them are not allowed to do any business-related activities in another country. However, the eligibility requirements, application criteria, and other required documents can vary from country to country.
                        </p>

                        <h2>Quick & Efficient Travel guidelines of Visit/Tourist visa</h2>
                        <p>While visiting a foreign country with a Visitor visa, the following guidelines have to be followed:</p>
                        <ul>
                            <li>
                                <p>
                                    Should not work with a tourist visa.
                                </p>
                            </li>
                            <li>
                                <p>
                                    No Business activities under a tourist visa.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Not allowed to study while you have a tourist visa.
                                </p>
                            </li>
                            <li>
                                <p>
                                    You cannot become a permanent resident with a tourist visa.
                                </p>
                            </li>
                        </ul>
                        <br />
                        <h3>Most Popular Tourist Visas</h3>
                        <ul>
                            <li>
                                <Link to="/visit-visa/australia" target='_blank'>Australia Tourist Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/canada" target='_blank'>Canada Tourist Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/uk">UK Tourist Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/usa">US Tourist Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/schengen">Schengen Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/belgium">Belgium Visitor Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/austria">Austria Tourist Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/denmark">Denmark Tourist Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/finland">Finland Tourist Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/hungary">Hungary Visit Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/malta">Malta Visit Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/netherlands">Netherlands Visit Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/luxembourg">Luxembourg Visit Visa</Link>
                            </li>
                            <li>
                                <Link to="/visit-visa/italy">Italy Tourist Visa</Link>
                            </li>
                        </ul>
                        <h3>How to Apply for a Tourist Visa?</h3>
                        <p>To apply for a tourist visa, follow these steps:</p>
                        <ul>
                            <li> <strong>Step 1</strong>: Locate an embassy/consulate near you.</li>
                            <li> <strong>Step 2</strong>: Submit all the documents required.</li>
                            <li> <strong>Step 3</strong>: Pay the required tourist visa fee.</li>
                            <li> <strong>Step 4</strong>: Attend the visa interview.</li>
                        </ul>
                        <br />
                        <h3>Documents Required for a Tourist Visa</h3>
                        <p>The documents required for a Tourist visa are listed below:</p>
                        <ul>
                            <li>Tourist visa application form.</li>
                            <li>At least six months valid Passport.</li>
                            <li>Passport Photograph.</li>
                            <li>Travel insurance.</li>
                            <li>Proof of Funds</li>
                            <li>Accommodation proof</li>
                            <li>Proof of a booked return flight ticket.</li>
                            <li>Proof of paid visa fee.</li>
                            <li>Invitation letter.</li>
                            <li>Civil documents (marriage certificate, birth certificate, etc.)</li>
                            <li>Supporting documents.</li>
                        </ul>
                        <br />
                        <br />
                        <h2>Tourist Visa Fees by Country</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered mt-4 border-primary table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">Country</th>
                                        <th scope="col">Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>United States</td>
                                        <td>
                                            USD 160
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Canada</td>
                                        <td>
                                            CAD 100
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>United Kingdom</td>
                                        <td>
                                            42,799/- PKR.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Australia</td>
                                        <td>
                                            135 AUD” to “365 AUD.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Schengen visa (valid for all Schengen countries)</td>
                                        <td>
                                            80 EURO” to “90 EURO.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <h2>Tourist Visa Validity</h2>
                        <p>
                            The validity of a tourist visa is usually issued for 30 days. However, some countries may issue a tourist visa for a year with multiple entries— still, you’re allowed to stay only 30 days per entry.
                        </p>

                        <h4>How PIIVLS Can Help You?</h4>
                        <ul>
                            <li>Identifying the best strategy to get your visit visa</li>
                            <li>Advising you on finances to be shown</li>
                            <li>Advising you on papers to be presented</li>
                            <li>Help in filling in forms</li>
                            <li>Review all your papers before their submission</li>
                        </ul>
                        <br />
                        <p>
                            Applying for a visa can be intimidating. PIIVLS Shas the knowledge, experience and robust processes to help you navigate complex visa procedures more confidently. We have a high success rate and best-in-class service.
                        </p>

                    </div>
                    <Faq Data={VisitFaqData} />
                </div>
            </div>
            <Locations />
        </>
    )
}

export default VisitVisa