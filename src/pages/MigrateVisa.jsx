import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData'
import studyFormImg from '../assets/images/about-img-01.jpg'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import eligibilityImg from '../assets/images/check-eligibility-img.jpg'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import Process from '../components/Process/Process';
import { FaRegEnvelopeOpen, FaUsersGear } from 'react-icons/fa6';
import { IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5';
import { LuFileClock } from 'react-icons/lu';
import immigrationUpdates from '../assets/images/immigration-updates-img.jpg'
import { GoDotFill } from 'react-icons/go';
import Faq from '../components/Faq/Faq';
import MigreateFaqData from '../components/Faq/MigreateFaqData'
import Locations from '../components/Locations/Locations';
const MigrateVisa = () => {
    const { title, image, path } = breadcrumbData.migrate;
    const visaLinks = {
        columnOne: {
            title: "Country",
            links: [
                { href: "/visit-visa/australia", label: "Migrate to Australia" },
                { href: "/visit-visa/bangladesh", label: "Migrate to Canada" },
                { href: "/visit-visa/belgium", label: "Migrate to Germany" },
                { href: "/visit-visa/brazil", label: "Migrate to UK" },
                { href: "/visit-visa/canada", label: "Migrate to USA" },
                { href: "/visit-visa/canada", label: "Migrate to UAE" },
                { href: "/visit-visa/canada", label: "Migrate to Sweden" },
                { href: "/visit-visa/canada", label: "Migrate to Portugal" },
                { href: "/visit-visa/canada", label: "Migrate to Quebec" },
            ],
        },
        columnTwo: {
            title: "PR Visas",
            links: [
                { href: "/visit-visa/#", label: "Canada Permanent Resident" },
                { href: "/visit-visa/#", label: "Canada PNP" },
                { href: "/visit-visa/#", label: "Canada Express Entry" },
                { href: "/visit-visa/#", label: "Australia Permanent Resident" },
                { href: "/visit-visa/#", label: "Canada Trade Professionals (FSTP)" }
            ],
        },
        columnThree: {
            title: "Work Visas",
            links: [
                { href: "/visit-visa/", label: "Germany Work Visa" },
                { href: "/visit-visa/", label: "Germany Opportunity Card" },
                { href: "/visit-visa/", label: "UK Work Visa" },
                { href: "/visit-visa/", label: "UK Skilled Worker Visa" },
                { href: "/visit-visa/", label: "Australia Work Visa" },
                { href: "/visit-visa/", label: "Australia Graduate Work Visa" },
                { href: "/visit-visa/", label: "Australia Subclass 189 Visa" },
                { href: "/visit-visa/", label: "Australia TSS Visa" },
                { href: "/visit-visa/", label: "Canada Work Visa" },
                { href: "/visit-visa/", label: "UAE Work Visa" },
                { href: "/visit-visa/", label: "Singapore Work Visa" },
                { href: "/visit-visa/", label: "Luxembourg Work Visa" },
                { href: "/visit-visa/", label: "Ireland Work visa" },
                { href: "/visit-visa/", label: "USA Work Visa" },
                { href: "/visit-visa/", label: "USA H-1B Visa" },
                { href: "/visit-visa/", label: "Netherlands Work Visa" },
            ],
        },
    };

    return (
        <div className='migrate_visa_page'>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={studyFormImg} className='img-fluid' alt="" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <section className="choose_country">
                <div className="container">
                    <div className="sub_heading text-center">
                        <h2>Migration Opportunities</h2>
                    </div>
                    <section className="choose_country">
                        <div className="container">
                            <div className="choose_country_wrapper">
                                {Object.entries(visaLinks).map(([columnKey, column, index]) => (
                                    <>

                                        <div className="choose_country_item" key={index}>
                                            <h4>{column.title}</h4>
                                            <ul>
                                                {column.links.map(link => (
                                                    <li key={link.uuidv4}>
                                                        <Link to={link.href}>
                                                            <MdKeyboardDoubleArrowRight />
                                                            <span>{link.label}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div >
                                    </>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>
            </section >
            <section className="check_eligibility">
                <div className="check_eligibility_wrapper">
                    <div className="check_eligibility_img">
                        <img src={eligibilityImg} alt="" />
                    </div>
                    <div className="check_eligibility_info">
                        <div className="visa_content">
                            <h2>Check your eligibility instantly</h2>
                            <p>Evaluate your eligibility instantly for free!</p>
                            <Link to="">
                                <button className='custom_btn'>Check Eligibility</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Process
                title="Way Forward"
                description="Learn more about our step-by-step visa process with guided support."
            />
            {/* Get Yourself Evaluated */}
            <section className="evaluated_area">
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
                        <a href="#">
                            <button className='custom_btn'>Get Evaluated</button>
                        </a>
                    </div>
                </div>
            </section>
            <section className="immigration_update py-5">
                <div className="updates_content">
                    <div className="visa_content">
                        <h2>Did you know?</h2>
                        <p>The number of international migrants has grown by 49% since 2000, currently there are 281 million international migrants around the world.</p>
                        <ul>
                            <li>
                                <Link to="">
                                    <button className='custom_btn'>Canada Immigration Updates</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <button className='custom_btn'>Australia Immigration Updates</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <button className='custom_btn'>USA Immigration Updates</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <button className='custom_btn'>UK Immigration Updates</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <button className='custom_btn'>Schengen Immigration Updates</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="updates_img">
                    <img src={immigrationUpdates} className='img-fluid' alt="" />
                </div>
            </section>
            <div className="page_content">
                <div className="container">
                    <div>
                        <h2>Why do people immigrate?</h2>
                        <ul>
                            <li><GoDotFill /> High standards of living</li>
                            <li><GoDotFill /> Excellent work-life balance</li>
                            <li><GoDotFill /> Earn 5x more income than your current salary</li>
                            <li><GoDotFill /> Millions of job opportunities in various sectors</li>
                            <li><GoDotFill /> Better career prospects</li>
                            <li><GoDotFill /> FREE education for your children</li>
                            <li><GoDotFill /> Healthcare & social benefits</li>
                            <li><GoDotFill /> Retirement benefits</li>
                            <li><GoDotFill /> Apply for citizenship based on your eligibility</li>
                        </ul>
                    </div>
                    <div>
                        <h2>What is immigration? </h2>
                        <p>
                            Migration has become a common phenomenon recently, with more people willing to move away from their country and settle in another country. Today's People are willing to move abroad for work, study, or a better quality of life.
                        </p>
                        <p>
                            The reasons for moving abroad differ from person to person. Still, the primary motive to migrate can be either for employment, studies, a better quality of life, or just to expand one’s horizons.
                        </p>
                        <p>
                            The benefits of migrating to another country are many. It gives opportunities to live in a new environment, meet new people, and experience a different culture. It provides opportunities to learn a new language. Besides this, migration gives an opportunity for professional development and personal growth.
                        </p>
                    </div>
                    <div>
                        <h2>Best countries to immigrate from India</h2>
                        <p>
                            "Indians hold the distinction of being the world's largest diaspora, with a community exceeding 18 million abroad."
                        </p>
                        <p>
                            The World Population Review, an independent organization, reveals that the United States—with 52 million—had the highest number of foreign-born residents, also known as 'immigrants'.
                        </p>
                        <ul>
                            <li><a href="#">Australia Immigration</a></li>
                            <li><a href="#">Canada Immigration</a></li>
                            <li><a href="#">Germany Immigration</a></li>
                            <li><a href="#">USA Immigration</a></li>
                            <li><a href="#">UK Immigration</a></li>
                            <li><a href="#">UAE Immigration</a></li>
                            <li><a href="#">Singapore Immigration</a></li>
                            <li><a href="#">Quebec Immigration</a></li>
                            <li><a href="#">Portugal Immigration</a></li>
                        </ul>
                        <p>
                            The US, Canada, the UK, Germany, and Australia are the leading countries for migrating overseas.
                        </p>
                    </div>
                    <div>
                        <h2>Migrate to Australia for better career prospects</h2>
                        <p>
                            A multicultural society and a thriving economy, Australia has much to offer a newcomer. <a href="#"> Australian permanent residence visas</a> are issued with a validity of five years, allowing you to move to the country and settle in Australia with your family.
                        </p>
                        <h6>List of visas for Australia Immigration</h6>
                        <ul>
                            <li><GoDotFill /> Migrate for Work through an <a href="#">Australia Work Visa</a></li>
                            <li><GoDotFill /> Migrate for study through an <a href="#">Australia Student Visa</a></li>
                            <li><GoDotFill /> Migrate through an <a href="#"> Australia Dependent Visa</a></li>
                            <li><GoDotFill /> Migrate through an <a href="#">Australia Business and Invest Visa</a></li>
                            <li><GoDotFill /> Migrate through an <a href="#">Australia Permanent Residence Visa</a></li>
                        </ul>
                        <p>You can apply for citizenship after living in Australia for 4 years on a <a href="#">PR visa</a>, provided you fulfill the other eligibility requirements.</p>
                    </div>
                    <div>
                        <h2>Migrate to Canada to start a 'New Life'</h2>
                        <p>
                            Found to be the most welcoming country for a migrant, Canada has streamlined immigration policies, making it easier to apply. Canada plans to invite <a href="#">1.5 million immigrants by 2025</a>. A majority of these will be through economic immigration.
                        </p>
                        <p>
                            Express Entry has a standard processing time of six months (from the date of receipt of the completed application).
                        </p>
                        <p>
                            <a href="#">Canada PR visa</a> is issued for five years and can be renewed. After living in Canada as a permanent resident for a minimum of three years out of five years – that is, 1095 days – you can apply to take up Canadian citizenship. Provided, however, that you meet the other eligibility requirements.
                        </p>
                        <h6>List of visas for Canada Immigration</h6>
                        <ul>
                            <li><GoDotFill /> Migrate for Work through  <a href="#">Canada Work Visa</a></li>
                            <li><GoDotFill /> Migrate for study through <a href="#">Canada Student Visa</a></li>
                            <li><GoDotFill />Migrate through <a href="#">Canada Investment Visa</a></li>
                            <li><GoDotFill />Migrate through <a href="#">Canada Dependent Visa</a></li>
                            <li><GoDotFill />Migrate through <a href="#">Canada Business Visa</a></li>
                            <li><GoDotFill />Migrate through <a href="#">Canada Permanent Residence Visa</a></li>
                        </ul>
                        <p>You can apply for citizenship after living in Australia for 4 years on a <a href="#">PR visa</a>, provided you fulfill the other eligibility requirements.</p>
                    </div>
                    <div>
                        <h2>Benefits of overseas immigration</h2>
                        <p>
                            Settling abroad in one of the world’s leading countries is one of the most life-changing things you can do. Some of the biggest reasons people settle abroad are:
                        </p>
                        <ul>
                            <li><GoDotFill /> Better salary and job prospects</li>
                            <li><GoDotFill /> An enhanced standard of living</li>
                            <li><GoDotFill /> The more stable political environment</li>
                            <li><GoDotFill /> Vibrant multicultural cities</li>
                            <li><GoDotFill /> Better healthcare and education</li>
                            <li><GoDotFill /> Opportunity to bring more members of the family abroad</li>
                            <li><GoDotFill /> Better life for children</li>
                            <li><GoDotFill /> Opportunity to bring more members of the family abroad</li>
                        </ul>
                        <p>
                            Migration is all about relocating from one place to another. Usually, there might be diverse push and pull factors at work, either working on their own or together.
                        </p>
                        <p>
                            Pull factors – factors that draw a newcomer to a specific country – are primarily social and economic. Economic migration is when an individual moves abroad to find work or follow a carefully laid career path.
                        </p>
                        <p>
                            On the other hand, social migration is when an individual relocates overseas for a better quality of life or to be closer to family.
                        </p>
                        <p>
                            Generally, the top three reasons believed to be the motivating factors for migrating overseas are –
                        </p>
                        <ul>
                            <li><GoDotFill /> Increased earning potential,</li>
                            <li><GoDotFill /> More job opportunities, and </li>
                            <li><GoDotFill /> Better healthcare and education.</li>
                        </ul>
                        <p>
                            According to the United Nations Department of Economic and Social Affairs (UNDESA), there were an estimated 232 million international migrants globally.
                        </p>
                        <p>
                            An international migrant is a person living outside the country that they were born in. Crossing borders in search of work, education, and new horizons, a migrant is primarily driven by the search for new opportunities and better livelihood.
                        </p>
                    </div>
                    <div>
                        <h2>Immigration and visa process</h2>
                        <p>Permanent residency might be gained through different routes. The most common ways of becoming a permanent resident are through–</p>
                        <ul>
                            <li><GoDotFill />the <a href="#">work stream,</a></li>
                            <li><GoDotFill />the <a href="#"> family stream,</a></li>
                            <li><GoDotFill />the <a href="#"> study stream </a>or</li>
                            <li><GoDotFill />an <a href="#"> investor stream</a>or</li>
                        </ul>
                        <p>
                            If eligible, you might be able to acquire permanent residence straightaway, provided immigration routes suitable for your individual circumstances are available, open, and accepting applications.
                        </p>
                        <p>
                            Conversely, you might opt to go to a foreign country to study abroad or work overseas first and apply for permanent residence later on. Working or studying abroad might make you eligible for different immigration streams of the country that you study/work in. For example, previous and recent Canadian work experience makes you eligible for the Canadian Experience Class (CEC) under <a href="#">Canada’s Express Entry</a>.
                        </p>
                        <p>
                            Moreover, many countries allow you to stay back in the country after you have completed your study abroad. Countries such as the UK, Germany, the US, Australia, and Canada offer post-study work options.
                        </p>
                        <p>
                            Generally, a country’s family stream permanent residency is available for partners, children, parents, or other dependent relatives of an individual who is either a permanent resident or citizen of that country.
                        </p>
                        <p>
                            Under the workstream immigration pathway, you can gain permanent residence based on your having the skills in demand or being sponsored by an employer in that country for a work-based visa. Other pathways for permanent residence are also available. These vary from country to country.
                        </p>
                    </div>
                    <div>
                        <h2>Eligibility for overseas immigration</h2>
                        <p>Generally, the eligibility criteria for migrating overseas include meeting the –</p>
                        <ul>
                            <li><GoDotFill /> Basic eligibility (such as for the Express Entry of Canada or SkillSelect of Australia)
                            </li>
                            <li><GoDotFill /> Language requirements
                            </li>
                            <li><GoDotFill /> Health requirements (to be verified through a Medical Examination by a panel doctor)
                            </li>
                            <li><GoDotFill /> Police Clearance Certificate (PCC), and
                            </li>
                            <li><GoDotFill /> Proof of funds, if required.
                            </li>
                        </ul>
                        <p>The specific requirements will vary from program to program and country to country.</p>
                        <table class="table table-info table-bordered  table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Country</th>
                                    <th scope="col">Minimum points required</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="#">Canada immigration points</a></td>
                                    <td>67</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Australia immigration points</a></td>
                                    <td>65</td>
                                </tr>
                                <tr>
                                    <td><a href="#">UK immigration points</a></td>
                                    <td>70</td>
                                </tr>
                                <tr>
                                    <td><a href="#">Germany immigration points</a></td>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <section className="migrate_faq">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-7">
                                    <div className="sub_heading text-center">
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Who can migrate?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        Generally, most of the countries look for applicants, who are skilled in their occupation with at least 3+ years of experience, possessing a bachelor’s degree or higher qualification,  who can also prove their proficiency in the English language through various internationally recognized tests.  Further for a few countries where applicants have blood relatives already residing or applicants having an offer of employment from an employer in the migrating country will be preferred.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Which country gives easy PR for Indian?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        It is easy to get a PR visa for any country for Indians, provided the applicant is a skilled worker and he meets the necessary eligibility requirements. If he meets the eligibility requirements and submits all the required documents, then it is easy to get a PR visa.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Which is the best country to migrate from India?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>The best nations to immigrate to from India are:</p>
                                        <ul>
                                            <li>Australia</li>
                                            <li>Canada</li>
                                            <li>Finland</li>
                                            <li>Norway</li>
                                            <li>Germany</li>
                                        </ul>
                                        <p>
                                            Let us look at the reasons why each of these countries are popular destinations for migrants.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Which is the easiest country to immigrate to?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p>The nations that are easiest to immigrate to are:</p>
                                        <ul>
                                            <li>Canada</li>
                                            <li>Australia</li>
                                            <li>Singapore</li>
                                            <li>Germany</li>
                                            <li>United Arab Emirates</li>
                                        </ul>
                                        <p>
                                            Let us look at each country’s immigration aspects:
                                        </p>
                                        <strong>Canada</strong>
                                        <p>
                                            There is no doubt that the Canadian PR visa process is easy, and the response time is a maximum of six months. But you can help in the process by taking care to fill your details with care, take a self-assessment to check your qualifications under the points-based system and submit all the required documents on time.
                                        </p>
                                        <p>
                                            Canada is an attractive option for students not only for its courses but also for the post-study work options which can pave the way to a PR visa.
                                        </p>
                                        <p>
                                            Canada offers various immigration programs through which you can apply for a PR visa, but each program has its individual eligibility requirements and application procedure. Some popular programs for getting the PR visa are
                                        </p>
                                        <ul>
                                            <li>Express Entry Program</li>
                                            <li>Provincial Nominee Program (PNP)</li>
                                            <li>Quebec Skilled Worker Program (QSWP)</li>
                                        </ul>
                                        <p>The Express Entry System is the fastest way to get your PR visa.</p>
                                        <strong>Australia</strong>
                                        <p>Australia promises a better quality of life and a multicultural society where there is peace and harmony.</p>
                                        <p>
                                            Australia offers a Permanent Residency (PR) visa for those willing to settle here. The PR visa is valid for five years and lets you work and live anywhere in the country. With the PR visa, you can settle anywhere in the country with your family. You can apply for citizenship after three years of living under the PR visa.
                                        </p>
                                        <p>
                                            PR visa applications are usually done through the General Skilled Migration (GSM) program. Australia uses a points-based system to assess the PR visa applications. Three visa categories come under the points-based system:
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Locations />
                </div>
            </div>
        </div>
    )
}

export default MigrateVisa