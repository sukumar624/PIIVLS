import React, { useState } from 'react'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import InvestFormImg from '../assets/images/invest-form-img.jpg'
import Process from '../components/Process/Process';
import { FaRegEnvelopeOpen, FaUsersGear } from 'react-icons/fa6';
import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuFileClock } from 'react-icons/lu';
import { GoDotFill } from 'react-icons/go';
import Locations from '../components/Locations/Locations';
import investImg from '../assets/images/invest-img-bg.jpg'
import opporImg from '../assets/images/apple-touch-icon.png';
import pathImg from '../assets/images/path.png';
import studentImg from '../assets/images/students.png';
import { Link } from 'react-router-dom';
import ConsultationModal from '../components/ConsultationModal/ConsultationModal';
const InvestVisa = () => {
    const { title, image, path } = breadcrumbData.invest;

    const [modalShow, setModalShow] = useState(false);

    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);

    return (
        <div>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={InvestFormImg} className='img-fluid' alt="" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div className="coaching_page_area">
                <div className="coaching_img">
                    <img src={investImg} className="img-fluid" alt="" />
                </div>
                <div className="coaching_info">
                    <h2>Top countries for invest overseas</h2>
                    <p>The leading countries offering residence through investment are:</p>
                    <ul>
                        <li><Link to="/invest-visa/canada">Canada</Link></li>
                        <li><Link to="/invest-visa/australia">Australia</Link></li>
                        <li><Link to="/invest-visa/uk">UK</Link></li>
                        <li><Link to="/invest-visa/denmark">Denmark</Link></li>
                        <li><Link to="/invest-visa/germany">Germany</Link></li>
                        <li><Link to="/invest-visa/ireland">Ireland</Link></li>
                        <li><Link to="/invest-visa/malta">Malta</Link></li>
                    </ul>
                </div>
            </div>
            <Process
                title="Way Forward"
                description="Learn more about our step-by-step visa process with guided support."
            />
            <section className="evaluated_area pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="sub_heading text-center">
                                <h2>Get Yourself <span>Evaluated</span></h2>
                                <p>
                                    Migration is a simple technical procedure. Our specialists assess your profile to guide you in making a knowledgeable choice. The report provides details on your eligibility evaluation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="evaluated_list mt-3">
                        <ul>
                            <li>
                                <div className="evaluated_icon">
                                    <FaRegEnvelopeOpen />
                                </div>
                                <div className="evaluated_title">
                                    <span>Score Card</span>
                                </div>
                            </li>
                            <li>
                                <div className="evaluated_icon">
                                    <IoSettingsOutline />
                                </div>
                                <div className="evaluated_title">
                                    <span>Country Profile</span>
                                </div>
                            </li>
                            <li>
                                <div className="evaluated_icon">
                                    <FaUsersGear />
                                </div>
                                <div className="evaluated_title">
                                    <span>Occupation Profile</span>
                                </div>
                            </li>
                            <li>
                                <div className="evaluated_icon">
                                    <IoDocumentTextOutline />
                                </div>
                                <div className="evaluated_title">
                                    <span>Documentation List</span>
                                </div>
                            </li>
                            <li>
                                <div className="evaluated_icon">
                                    <LuFileClock />
                                </div>
                                <div className="evaluated_title">
                                    <span>Cost & Time Estimation</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="evaluated_btn m-auto d-table mt-5">
                        <Link to="/invest-visa/evalutions">
                            <button className='custom_btn'>Get Evaluated</button>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="whychoose_page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-9">
                            <div className="sub_heading text-center">
                                <h2>Why choose PIIVLS as investment consultant</h2>
                                <p>We want to transform you to become global Indian</p>
                            </div>
                        </div>
                    </div>
                    <div className="choose_wrapper">
                        <div className="choose_item">
                            <div className="choose_img"><img src={pathImg} alt="Right course. Right path" /></div>
                            <h4>Advisory Report</h4>
                            <p>Our Entrepreneur Advisory Report that advises you on your options</p>
                        </div>
                        <div className="choose_item">
                            <div className="choose_img"><img src={opporImg} alt="One stop shop" /></div>
                            <h4>Opportunities</h4>
                            <p>PIIVLS has the know-how of intricate procedures, policies and opportunities for your visa needs.</p>
                        </div>
                        <div className="choose_item">
                            <div className="choose_img"><img src={studentImg} alt="Serve students not universities" /></div>
                            <h4>Investor Visa Expert</h4>
                            <p>An experienced PIIVLS Investor Visa expert will assist you at every step of the process</p>
                        </div>
                    </div>
                    <div className="apply_btn">
                        <a className="mt-5">
                            <button className="custom_btn" onClick={handleModalShow}>
                                <span>Apply Now</span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                    ></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="page_content py-5">
                <div className="container">
                    <div>
                        <h2>Why Invest Overseas?</h2>
                        <p>
                            The top motivations that make an individual select a country for invest overseas include – the likelihood of getting citizenship, the quality of life offered, as well as the overall business environment.
                        </p>
                        <p>
                            Permanent residency programs for investors and entrepreneurs are typically designed to offer individuals as well as businesses a wide range of benefits.
                        </p>
                    </div>
                    <div>
                        <h2>Settle Abroad with Your Family</h2>
                        <p>
                            Countries across the globe have created attractive permanent residency programs for entrepreneurs, business persons and HNWIs. With a favorable immigration climate now is a great time for you to explore your options of settling abroad with your family and setting up business operations. PIIVLS can help you identify the right residency option based on your preferences and future plans.
                        </p>
                        <p>
                            Many countries offer an Investment or Business Visa to encourage immigrants who have proven experience in running a business and are interested in establishing a business overseas or invest in another country. They could be interested in opening either a new business venture or buying an existing business located overseas.
                        </p>
                        <p>
                            Residence through investment programs are also commonly referred to as the golden visa programs. Recently, an increasing number of individuals, with the talent as well as means, have come to explore overseas options, deciding not to limit their business interests to a particular country alone.
                        </p>
                        <p>
                            Invest overseas allows High Net Worth Individuals (HNWIs) to relocate abroad, acquiring the right to work and live in their new country of residence.
                        </p>
                        <p>
                            Many also explore invest overseas options for multiple residences towards their international planning.
                        </p>
                        <p>
                            Australia and Canada have an Immigrant Investor Program which offers migrants the option of having an alternate residency status while continuing to manage already existing businesses in their home country.
                        </p>
                        <p>
                            These investor programs seek to attract potential overseas investors who have enough personal net worth and managerial experience.
                        </p>
                        <p>
                            Every country that offers an investment program has its own set of requirements and eligibility criteria.
                        </p>
                    </div>
                    <div>
                        <h2>
                            Benefits of Settling Abroad as an Entrepreneur
                        </h2>
                        <p>
                            The permanent residency programs for investors and entrepreneurs are typically designed to offer individual as well as business benefits. The best such immigration programs offer benefits like:
                        </p>
                        <ul>
                            <li>
                                <GoDotFill />
                                <p>Access to high standard of living</p>
                            </li>
                            <li>
                                <GoDotFill />
                                <p>Access to healthcare and education</p>
                            </li>
                            <li>
                                <GoDotFill />
                                <p>Settle with your dependents</p>
                            </li>
                            <li>
                                <GoDotFill />
                                <p>Access to international opportunities</p>
                            </li>
                            <li>
                                <GoDotFill />
                                <p>Favorable investment policies (varies by country)</p>
                            </li>
                            <li>
                                <GoDotFill />
                                <p>Travel benefits allowing you to conduct business globally</p>
                            </li>
                            <li>
                                <GoDotFill />
                                <p>Fast track to citizenship</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Eligibility for Entrepreneurs & Investors</h2>
                        <p>
                            Different countries have different criteria to assess applicant eligibility. Broadly, the assessment criteria are:
                        </p>
                        <ul>
                            <li>
                                <GoDotFill />
                                Availability of funds to invest overseas
                            </li>
                            <li>
                                <GoDotFill />
                                Prior business profile
                            </li>
                            <li>
                                <GoDotFill />
                                Proficiency in English or local languages
                            </li>
                            <li>
                                <GoDotFill />
                                Business credentials & banking history
                            </li>
                            <li>
                                <GoDotFill />
                                Health & conduct evaluation
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Top Countries for Invest Overseas</h2>
                        <p>Countries across the globe offer attractive permanent residency options for HNWIs, entrepreneurs, and business persons.</p>
                        <p>
                            Many countries offer investment or business visas to encourage immigrants that have proven experience in running a business and are interested in establishing a business overseas or invest in another country. Such individuals could be interested in opening either a new business venture or buying an existing business located overseas.
                        </p>
                        <p>The leading countries offering residence through investment are, among others –</p>
                        <ul>
                            <li>
                                <GoDotFill />
                                Canada
                            </li>
                            <li>
                                <GoDotFill />
                                Australia
                            </li>
                            <li>
                                <GoDotFill />
                                Ireland
                            </li>
                            <li>
                                <GoDotFill />
                                The UK
                            </li>
                            <li>
                                <GoDotFill />
                                Germany
                            </li>
                            <li>
                                <GoDotFill />
                                Denmark
                            </li>
                        </ul>
                        <p>
                            The specific requirements vary, and will be as per the country looking to settle in as well as the program applying under.
                        </p>

                    </div>
                    <div>
                        <h2>Citizenship by Investment</h2>
                        <table className="table table-bordered  table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Countries</th>
                                    <th scope="col">Highlights</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Canada</td>
                                    <td>
                                        <ul>
                                            <li><Link to="/invest-visa/canada" target='_blank'>Invest CLinkD 350,000</Link></li>
                                            <li><Link to="/invest-visa/canada" target='_blank'>CLinknLinkda PR</Link></li>
                                            <li><Link to="/invest-visa/canada" target='_blank'>After receiving PR, eventually, qualify for Citizenship</Link></li>
                                            <li><Link to="/invest-visa/canada" target='_blank'>Canadian Citizenship by Investment</Link></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Australia</td>
                                    <td>
                                        <ul>
                                            <li><Link to="/invest-visa/australia" target='_blank'>Invest AUD 1.25 million</Link></li>
                                            <li><Link to="/invest-visa/australia" target='_blank'>Australia PR</Link></li>
                                            <li><Link to="/invest-visa/australia" target='_blank'>After receiving PR, eventually, qualify for Citizenship</Link></li>
                                            <li><Link to="/invest-visa/australia" target='_blank'>Australian Citizenship by Investment</Link></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>UK</td>
                                    <td>
                                        <ul>
                                            <li><Link to="/invest-visa/uk" target='_blank'>Invest GBP 2 million</Link></li>
                                            <li><Link to="/invest-visa/uk" target='_blank'>Investor Visa</Link></li>
                                            <li><Link to="/invest-visa/uk" target='_blank'>Spend a specific amount of time in the UK</Link></li>
                                            <li><Link to="/invest-visa/uk" target='_blank'>After holding ILR for a year, you can apply for British citizenship</Link></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ireland</td>
                                    <td>
                                        <ul>
                                            <li><Link to="/invest-visa/ireland" target='_blank'>Invest €1 million</Link></li>
                                            <li><Link to="/invest-visa/ireland" target='_blank'>Ireland Residency</Link></li>
                                            <li><Link to="/invest-visa/ireland" target='_blank'>Citizenship after five years</Link></li>
                                            <li><Link to="/invest-visa/ireland" target='_blank'>Migrate along with your family</Link></li>
                                            <li><Link to="/invest-visa/ireland" target='_blank'>Ireland Citizenship by Investment</Link></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Germany</td>
                                    <td>
                                        <ul>
                                            <li><Link to="/invest-visa/germany" target='_blank'>Invest</Link></li>
                                            <li><Link to="/invest-visa/germany" target='_blank'> Germany Citizenship</Link></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Denmark</td>
                                    <td>
                                        <ul>
                                            <li><Link to="/invest-visa/denmark" target='_blank'>Invest €100,000</Link></li>
                                            <li><Link to="/invest-visa/denmark" target='_blank'>2 year residence permit</Link></li>
                                            <li><Link to="/invest-visa/denmark" target='_blank'>Danish citizenship after 9 years</Link></li>
                                            <li><Link to="/invest-visa/denmark" target='_blank'>Denmark Citizenship by Investment</Link></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Top options for investing overseas</h3>
                        <p>
                            There are many residency-by-investment options available for business persons and entrepreneurs.
                        </p>
                        <p>
                            The most sought-after investment overseas options include –
                        </p>
                    </div>
                    <div>
                        <h3>Canada’s Startup Visa Program</h3>
                        <p>
                            For entrepreneurs that have the skills and potential to build up businesses in Canada that are – (1) innovative, (2) can create jobs for Canadians, and can compete on an international scale.
                        </p>
                        <p>
                            Individuals with innovative business ideas might be able to immigrate to Canada through the Start-Up Visa Program. Provided, however, that they are able to get support for their business idea from any of the designated organizations (can be angel investor groups, business incubators, or venture capital funds).
                        </p>
                        <p>
                            Minimum investment required – $200,000 (if coming from a designate venture capital fund in Canada); $75,000 (in case of a designated angel investor group in Canada).
                        </p>
                        <p>
                            Those planning to invest in Quebec will have to go through Quebec immigration programs.
                        </p>
                        <p>
                            If the application is approved, a Canadian permanent residence visa will be issued. This will include the Confirmation of Permanent Residence (COPR), along with an entry visa.
                        </p>
                        <p>
                            Under <strong>Canada’s startup</strong> visa program, candidates can come to Canada on a work permit which is sponsored by their Canada based investor and then apply for a PR visa once their business is established in the country.
                        </p>
                        <p>
                            This program encourages immigrant entrepreneurs to develop their startups in Canada. Successful applicants can tie-up with private sector investors in Canada to receive help on funding and guidance on running their business. The three types of private sector investors they can approach are:
                        </p>
                        <ul>
                            <li>- Venture capital fund </li>
                            <li>- Business incubator</li>
                            <li>- Angel investor</li>
                        </ul>
                    </div>
                    <div>
                        <h2> Eligibility requirements for visa applicants are:</h2>
                        <ul>
                            <li>
                                <GoDotFill />
                                Have proof that the business has the required support from a designated entity in the form of a Commitment Certificate and Letter of Support
                            </li>
                            <li>
                                <GoDotFill />
                                Have a qualifying business
                            </li>
                            <li>
                                <GoDotFill />
                                Have the required proficiency in English or French
                            </li>
                            <li>
                                <GoDotFill />
                                Have completed at least one year of post-secondary education
                            </li>
                            <li>
                                <GoDotFill />
                                Have enough funds to settle in Canada and support dependent family members
                            </li>
                            <li>
                                <GoDotFill />
                                Must clear the medical tests and security requirements
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Australia Business Innovation & Investment</h2>
                        <p>
                            Many options are available for individuals that intend to either start a business or invest in Australia and live as Australian permanent residents.
                        </p>
                        <p>
                            Business innovation and investment pathways are for you if you – already own a business, want to start a business, or are planning to invest in Australia.
                        </p>
                        <h3>Invest overseas pathways for Australia include –</h3>
                        <ul>
                            <li>
                                <GoDotFill />
                                <p>
                                    <strong>Business Innovation and Investment (Permanent) visa (subclass 888), </strong>
                                    targeted at business owners, investors, and entrepreneurs that want to continue their activity in Australia.
                                </p>
                            </li>
                            <li>
                                <GoDotFill />
                                <p>
                                    <strong>Business Owner visa (subclass 890), </strong>
                                    for individuals that can own or manage a business in Australia.
                                </p>
                            </li>
                            <li>
                                <GoDotFill />
                                <p>
                                    <strong>State or Territory Sponsored Business Owner visa (subclass 892), </strong>
                                    for individuals that own and manage a business in Australia, allowing them to stay in Australia indefinitely.
                                </p>
                            </li>
                        </ul>
                        <p>
                            The Entrepreneur stream under Australia’s Business Innovation and Investment (Provisional) visa category allows you to own and manage a business in Australia or conduct a business or investment activity entrepreneurial activity in Australia.
                        </p>
                    </div>
                    <div>
                        <h2>Eligibility requirements</h2>
                        <ul>
                            <li>
                                <GoDotFill />
                                Have a proposal for entrepreneurial activity in Australia
                            </li>
                            <li>
                                <GoDotFill />
                                Have at least AUD200,000 funding agreement to undertake business in Australia
                            </li>
                            <li>
                                <GoDotFill />
                                Have a business plan for a startup
                            </li>
                            <li>
                                <GoDotFill />
                                Have competent skills in the English language
                            </li>
                        </ul>
                    </div>
                    <h3>The provisional visa program has seven categories:</h3>
                    <p>
                        <strong>1.Business Innovation Stream-</strong>
                        This provisional visa allows you to operate a new or existing business in Australia.  You must be nominated by an Australian State or Territory government agency or Austrade.
                    </p>
                    <p>
                        <strong>2.Investor stream-</strong>
                        For this you will require at least AUD 1.5 million in an Australian state or territory and maintain your business and investment activity in Australia.
                    </p>
                    <p>
                        <strong>3.Significant investor stream-</strong>
                        People willing to invest at least AUD 5 million in Australian investments can apply for this visa. They must be nominated by an Australian State or Territory government agency or Austrade.
                    </p>
                    <p>
                        <strong>4.Business innovation extension stream-</strong>
                        With this visa holders of the Business Innovation and Investment (Provisional) visa can extend their stay in Australia for 2 more years. For this extension applicants must have had Business Innovation stream visa for at least 3 years and must be nominated by an Australian State or Territory government agency or Austrade.
                    </p>
                    <p>
                        <strong>5.Significant investor extension stream-</strong>
                        With this visa holders of the Significant Investor stream can extend their stay in Australia for up to 4 more years. For this extension applicants must have had Significant Investor stream for at least 3 years and must be nominated by an Australian State or Territory government agency or Austrade.
                    </p>
                    <p>
                        <strong>6.Premium Investor stream-</strong>
                        This visa requires nomination by Austrade and an investment of at least AUD 15 million in Australian enterprises or in philanthropic contribution.
                    </p>
                    <p>
                        <strong>7.Entrepreneur stream- </strong>
                        With this visa you can carry out entrepreneurial activities in Australia.
                    </p>
                    <h3>Steps to apply for a provisional business visa</h3>
                    <p>
                        You must submit an expression of interest through the Department of home affairs
                    </p>
                    <p>
                        Wait for a nomination from a state or territory or from Austrade by waiting for an intimation from them or you can contact them directly
                    </p>
                    <p>
                        Once you receive an invitation you can apply for a visa
                    </p>
                    <h3>The business of the visa holder must do any one of the following activities</h3>
                    <p>'
                        Build business links with international markets
                    </p>
                    <p>Generate employment in Australia</p>
                    <p>Use Australian goods and services</p>
                    <p>Produce goods or provide services that would alternatively have to be imported</p>
                    <p>Create new and improved technology</p>
                    <p>The Business Innovation and Investment (Provisional) visa, also known as Subclass 188, can help you gain permanent residency. If you have been on a Subclass 188 visa for at least one year and meet the financial conditions, you can apply for your PR visa. Aside from that, you’ll have to show that you have a long-term commercial interest by making frequent investments and hiring local staff.</p>
                    <br />
                    <h3>  Advantages of the visa</h3>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>You can stay in Australia permanently</p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>You can promote your business and investment activity in Australia</p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>You can apply for Australian citizenship, if eligible</p>
                        </li>
                    </ul>
                    <hr />
                    <h3>Australia Golden Visa</h3>
                    <p>
                        This visa was introduced in 2012. With this visa High Net Worth Individuals (HNWI) can get a PR visa to Australia through investment immigration. Applicants must be willing to invest AUD 5 million in a specific structure to qualify for this visa. Although the investment is high, it is regulated and restricted.
                    </p>
                    <p>
                        Commonly called the Australia Golden Visa, the Significant Investor Visa for Australia offers a streamlined Australian immigration pathway to High Net Worth Individuals (HNWI) through investment.
                    </p>
                    <p>
                        There is no age limit for the Golden Visa for Australia.
                    </p>
                    <h3>Path to permanent residency</h3>
                    <p>
                        Residency by investment is for wealth foreign nationals that want to take up permanent residence in a country on the basis of investing a substantial amount of money or through purchasing a property therein.
                    </p>
                    <p>
                        Those successful in acquiring residency by investment will get – along with their spouse and children – residence permits for the country in which the investment is made. These residence permits can be renewed indefinitely, provided the investment is duly maintained.
                    </p>
                    <p>
                        There is often little or no requirement of actually being physically present in the country to be issued a golden visa. However, most countries require actual residency in that country for a certain period of time, to be granted permanent residence or citizenship by investment.
                    </p>
                    <div>
                        <h2>How PIIVLS Can Help You</h2>
                        <p>
                            PIIVLS guides entrepreneurs and investors, helping them take the most ideally-suited invest overseas path for themselves. We analyse your profile and suggest the best solution that meets your personal and business goals.
                        </p>
                        <p>
                            Explore your options of settling abroad with your family while setting up business operations overseas. PIIVLS can help you identify the right residency option based on your preferences and future plans.
                        </p>
                        <p>
                            With an impeccable financial and institutional credibility, PIIVLS can advise you on your overseas investments.
                        </p>
                        <p>
                            Offering qualified advice and dedicated support, PIIVLS can help you make the most of your international investment, settling overseas as an entrepreneur with your family.
                        </p>
                        <p>
                            Generally, you can get permanent residence by investment in a country part of the European Union (EU) after living in that country for five years.
                        </p>
                        <p>
                            EU countries that offer invest Golden Visas include – Germany, Spain, Italy, Switzerland, Greece, Portugal, Ireland, Bulgaria, Austria, Belgium, and Malta.
                        </p>
                    </div>
                    <p>Talk to Y-Axis today for more information.</p>
                    <table className="table table-bordered" style={{ width: '50%' }}>
                        <thead>
                            <tr>
                                <th scope="col">Sl. No</th>
                                <th scope="col">List of countries</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><Link to="/invest-visa/canada" target="_blank">Canada</Link></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><Link to="/invest-visa/australia" target="_blank">Australia</Link></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><Link to="/invest-visa/uk" target="_blank">UK</Link></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td><Link to="/invest-visa/denmark" target="_blank">Denmark</Link></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><Link to="/invest-visa/germany" target="_blank">Germany</Link></td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td><Link to="/invest-visa/ireland" target="_blank">Ireland</Link></td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td><Link to="/invest-visa/malta" target="_blank">Malta</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <section className="invest_faq">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7">
                            <div className="sub_heading text-center">
                                <h2>Frequently Asked <span>Questions</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    How much money do you need for an investor visa?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        The investment amount for an Investor Visa majorly depends on the country that you are investing in. Different countries have different eligibility criteria for an applicant’s eligibility. Some countries have different eligibility criteria as per the state you are investing in, like Canada.
                                    </p>
                                    <p>
                                        For an Investor Visa under the British Columbia Provincial Nominee Program, the minimum investment amount is CAD $200,000. You also need to have a personal net worth of at least CAD $600,000.
                                    </p>
                                    <p>
                                        For the province of Manitoba in Canada, you need to invest at least CAD $250,000 if you wish to set up your business in the Manitoba Capital Region. To set up a business elsewhere in Manitoba, you need to make a minimum investment of at least CAD $150,000. You also need to have a personal net worth of CAD $500,000.

                                        Minimum £50,000 in investment funds will be required to apply for a UK Innovator visa if an individual intends setting up a new business.
                                    </p>
                                    <p>
                                        Thus, the investment amount differs as per the country as well as the visa category
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What is Graduate Entrepreneur Visa?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        International students in the UK who have a viable business idea may apply for the Tier 1 Graduate Entrepreneur Visa. This visa allows the Visa holder to set up their own business in the UK. Thus, successful applicants are allowed to extend their stay in the UK to set up one or more than one business in the UK.
                                    </p>
                                    <b>You can apply for the Tier 1 Graduate Entrepreneur Visa if:</b>
                                    <ul>
                                        <li>You are not a citizen of any country in the EEA (European Economic Area) or Switzerland</li>
                                        <li>You are not a citizen of any country in the EEA (European Economic Area) or Switzerland</li>
                                        <li>You meet all the other eligibility requirements</li>
                                    </ul>
                                    <p>
                                        However, the UK will not accept any new applications for the Graduate Entrepreneur Visa from 6th July 2019.
                                    </p>
                                    <p>
                                        The Tier 1 Graduate Entrepreneur Visa is being replaced by the Start-up Visa.
                                    </p>
                                    <p>
                                        This visa category exclusively caters to entrepreneurs with high potential who are starting a business for the first time.
                                    </p>
                                    <p>
                                        The application for this visa can be submitted three months before your intended date of travel to the UK. Other eligibility requirements include:
                                    </p>
                                    <ul>
                                        <li>Are not a citizen of the EEA and Switzerland</li>
                                        <li>Wish to set up a business in the UK</li>
                                        <li>The business idea must be endorsed by a higher education institute in the UK or a business organization that supports UK entrepreneurs</li>
                                        <li>No requirement for an initial investment</li>
                                        <li>Applicant must be at least 18 years old</li>
                                        <li>Applicant must fulfill English language requirements</li>
                                        <li>Applicants must have enough funds to support their stay in the UK</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Can Indians get E2 Visa?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Indians are not eligible for the E2 Visa. India does not have a Trade or Commerce Treaty with the US and hence Indians cannot get the E2 Visa.</p>

                                    <p>
                                        The E2 Visa of the USA is exclusively for countries that have a Treaty of Trade and Commerce with the US. The E2 Visa is an Investor Visa that allows overseas entrepreneurs to live and work in the US.
                                    </p>
                                    <p>
                                        The validity of the E2 Visa ranges from 3 months to 5 years depending on the country of origin.
                                    </p>
                                    <p>
                                        The list of current treaty countries is as below:
                                    </p>
                                    <p>
                                        1. Yugoslavia 2. United Kingdom 3.Ukraine 4. Turkey 5. Tunisia 6. Trinidad and Tobago 7. Togo 8. Thailand 9. Switzerland 10. Sweden 11. Suriname 12. Sri Lanka 13. Spain 14. The Slovak Republic 15. Senegal 16. Romania 17. Republic of Congo 18. Poland 19. Philippines 20. Paraguay 21. Panama 22. Pakistan 23. Oman 24. Norway 25. Netherlands 26. Morocco 27. Mongolia 28. Moldova 29. Mexico 30. Luxembourg 31. Liberia 32. Kyrgyzstan 33. Korea 34. Kazakhstan 35. Japan 36. Jamaica 37. Italy 38. Ireland 39. Honduras 40. Grenada 41. Germany 42. Georgia 43. France 44. Finland 45.Ethiopia 46. Egypt 47. Ecuador 48. The Democratic Republic of the Congo 49. The Czech Republic 50. Costa Rica 51. Colombia 52. Canada 53. Cameroon 54. Bulgaria 55. Belgium 56. Bangladesh 57. Austria 58. Australia 59. Armenia 60. Argentina
                                    </p>
                                    <strong>You should be a legitimate passport holder of any one of the above countries to apply for the E2 Visa.</strong>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                                    How to apply for investor visa from India?
                                </button>
                            </h2>
                            <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>The application process for an Investor Visa differs from country to country. Every country that offers an Investor Visa has a different set of requirements that needs to be met before you apply for the Visa.</p>

                                    <p>
                                        For example, if you wish to apply for the UK Innovator Visa, you can submit your application to the UKBA. You will need to include a detailed business proposal along with the other supporting documents for the UK Innovator Visa.
                                    </p>
                                    <p>
                                        However, if you wish to apply for the Investor Visa in any province in Canada, you need to first submit an online profile. If your online profile is selected, you may then proceed to submit your business proposal and visa application.
                                    </p>
                                    <p>
                                        Since the application process differs from country to country, it is best to seek the advice of an Immigration Expert. Also, Investor Visas are expensive and hence it is highly recommended to seek the advice of an Expert to get the right guidance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                                    What are the documents required for investor visa?
                                </button>
                            </h2>
                            <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>The requirements of an Investor Visa differ from country to country. Hence the documents needed will also depend on the country that you are applying for.</p>

                                    <p>
                                        The documents required also depend on the Visa category that you apply for.
                                    </p>
                                    <p>
                                        For example, the document checklist for the UK Innovator Visa is different from the Sole Representative Visa of the UK. For the newly announced Start-Up Visa of the UK, you need an “endorsement letter” from an authorized entity in the UK. Such an endorsement letter is not needed for Innovator Visa or the Sole Representative Visa.
                                    </p>
                                    <p>
                                        Similarly, the document checklist for the various Investor Visas in different provinces of Canada is different.
                                    </p>
                                    <p>
                                        It is highly recommended to consult an Immigration Expert while applying for an Investor Visa to get the right guidance. Not only will the Expert be able to explain to you the whole process but also guide you on all the supporting documents required.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                                    What are the benefits of starting or expanding a business in another country?
                                </button>
                            </h2>
                            <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        Business owners or entrepreneurs wishing to start a business in another country are aware of the benefits.
                                    </p>

                                    <p>
                                        Expanding their business overseas helps them to explore untapped markets or sell their products and services which will be unique in the new market.
                                    </p>
                                    <p>
                                        They can make use of the attractive options such as tax cuts and loans offered by foreign countries to encourage businesses from outside to be set up in their country.
                                    </p>
                                    <p>
                                        Some countries offer a better business environment in comparison to the home country of the business owners or entrepreneurs.

                                        Expansion of the business to other countries promotes better brand visibility and improves recognition of the business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading7">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                                    What is the Graduate Entrepreneur visa?
                                </button>
                            </h2>
                            <div id="flush-collapse7" className="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        The <strong>Tier 1 Startup Visa</strong> has replaced the Tier 1 Graduate Entrepreneur visa program. This visa category exclusively caters to entrepreneurs with high potential who are starting a business for the first time.
                                    </p>

                                    <p>
                                        The application for this visa can be submitted three months before your intended date of travel to the UK. Other <strong>eligibility requirements</strong> include:
                                    </p>
                                    <ul>
                                        <li>

                                            <p>
                                                Are not a citizen of the EEA and Switzerland
                                            </p>
                                        </li>
                                        <li>

                                            <p>
                                                Wish to set up a business in the UK
                                            </p>
                                        </li>
                                        <li>

                                            <p>
                                                Business idea must be endorsed by a higher education institute in the UK or a business organization that supports UK entrepreneurs
                                            </p>
                                        </li>
                                        <li>

                                            <p>
                                                No requirement for an initial investment
                                            </p>
                                        </li>
                                        <li>

                                            <p>
                                                Applicant must be at least 18 years old
                                            </p>
                                        </li>
                                        <li>

                                            <p>
                                                Applicant must fulfil English language requirements
                                            </p>
                                        </li>
                                        <li>

                                            <p>
                                                Applicants must have enough funds to support their stay in the UK
                                            </p>
                                        </li>
                                    </ul>
                                    <h3>Staying in the UK</h3>
                                    <ul>
                                        <li>

                                            <p>
                                                You can stay for up to two years on this visa and can bring your spouse or partner and unmarried children under the age of 18 to stay with you
                                            </p>
                                        </li>
                                        <li>

                                            <p>
                                                You can do work outside your business for funding your stay
                                            </p>
                                        </li>
                                        <li>

                                            <p>
                                                You cannot extend your visa after two years, but you can apply for the innovator visa to extend your stay and develop your business.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading8">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                                    How much money do you need for an investor visa?
                                </button>
                            </h2>
                            <div id="flush-collapse8" className="accordion-collapse collapse" aria-labelledby="flush-heading8" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        The investment amount for an Investor Visa majorly depends on the country that you are investing in. Different countries have different eligibility criteria for an applicant’s eligibility. Some countries have different eligibility criteria as per the state you are investing in, like Canada.
                                    </p>

                                    <p>
                                        For an Investor Visa under the British Columbia Provincial Nominee Program, the minimum investment amount is CAD $200,000. You also need to have a personal net worth of at least CAD $600,000.
                                    </p>
                                    <p>
                                        For the province of Manitoba in Canada, you need to invest at least CAD $250,000 if you wish to set up your business in the Manitoba Capital Region. To set up a business elsewhere in Manitoba, you need to make a minimum investment of at least CAD $150,000. You also need to have a personal net worth of CAD $500,000.
                                    </p>
                                    <p>
                                        Minimum £50,000 in investment funds will be required to apply for a UK Innovator visa if an individual intends setting up a new business.

                                        Thus, the investment amount differs as per the country as well as the visa category
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading9">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
                                    What are the eligibility requirements for the investor visa?
                                </button>
                            </h2>
                            <div id="flush-collapse9" className="accordion-collapse collapse" aria-labelledby="flush-heading9" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>
                                        Eligibility requirements again are based on the country and the type of investor visa you are applying for.
                                    </p>

                                    <p>For instance, if you are applying for the Subclass 188 investor visa for Australia, you must qualify for either one of the three visa sub-categories:
                                    </p>
                                    <ul>
                                        <li>Business Innovation</li>
                                        <li>Business Investment</li>
                                    </ul>
                                    <p>
                                        Classification as a significant investor.
                                    </p>
                                    <p>
                                        The investor must be below 55 years when submitting the application. They should have a detailed plan for the business or be willing to invest in an existing business in Australia. They should have at least 65 points which are based on various factors that include age, education, previous business activities, and investment experience.
                                    </p>
                                    <p>
                                        If you are applying for the Nova Scotia Nominee Program (NSNP), you must be above 21 years, your net worth must be at least CAD 600,000. You must be willing to make a minimum investment of CAD 150,000 to establish your business in the province.

                                        You must have at least three years’ experience in running a business or 5 years of experience in a senior management role. You must have an intention to settle in Nova Scotia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Locations />

            <ConsultationModal show={modalShow} handleClose={handleModalClose} />

        </div>
    )
}

export default InvestVisa