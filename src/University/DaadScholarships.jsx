import React from 'react'
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

const DaadScholarships = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page_container">
            <div className="container">
                <h2>DAAD Scholarships</h2>
                <p><strong>Amount of Scholarship offered:</strong>  €850 – €1,200 per month</p>
                <p><strong>Last Date for Application: </strong>  August-October 2023</p>
                <p><strong>Courses covered: </strong>  Masters and Ph.D. courses at German universities</p>
                <p><strong>Number of Scholarships Offered:  </strong>  The scholarships are limited in number.</p>
                <br />
                <h2>What is the DAAD Scholarship?</h2>
                <p>
                    The DAAD (German Academic Exchange Service) scholarships are an opportunity for graduates from developed and newly industrialized countries. This opportunity is for graduates willing to complete post-graduation or Master’s degrees at state / state-recognized German universities. In some cases, doctoral degrees may also be available. The scholarships aim to support students in obtaining a degree (Master’s/Ph.D.) in Germany.
                </p>
                <br />
                <p>
                    <i>
                        *Need assistance to <Link>study in Germany</Link>? PIIVLS is here to assist you in all the ways.
                    </i>
                </p>
                <br />
                <h2>Eligibility for Applying for the DAAD Scholarship</h2>
                <p>The students from countries who meet the following criteria are eligible:</p>
                <ul>
                    <li>
                        <GoDotFill />
                        <p>
                            Student must have a minimum of 2 years of experience in his field of work.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Students must have to pass the language-related test to meet the requirements.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Students must hold a bachelor’s degree with a course of a minimum of 4 years.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Academic degrees should be less than six years old.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            For a German course, applicants must have successfully passed the language exam DSH 2 / TestDaF 4 before the start of the course.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            At least a B1 in German language at the time of application is required, which needs to be clarified by presenting a certificate.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            For courses taught in English, applicants must provide proof of required language skills according to respective courses.
                        </p>
                    </li>
                </ul>
                <h3>List of Universities offering the DAAD Scholarship:</h3>
                <div className="table-responsive">
                    <table className="table  table-bordered border-primary-subtle">
                        <thead>
                            <tr>
                                <th scope='col'><strong>DAAD Programs</strong></th>
                                <th scope='col'><strong>Universities</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={3} style={{ verticalAlign: 'middle' }} >Economics/Business Administration/ Political Economics</td>
                                <td>Georg-August-Universität Göttingen</td>
                            </tr>
                            <tr>
                                <td>HTW Berlin</td>
                            </tr>
                            <tr>
                                <td>Universität Leipzig</td>
                            </tr>
                            <tr>
                                <td rowSpan={3} style={{ verticalAlign: 'middle' }}>Development Cooperation</td>
                                <td>Ruhr-Universität Bochum</td>
                            </tr>
                            <tr>

                                <td>Universität Bonn</td>
                            </tr>
                            <tr>
                                <td>Hochschule Rhein-Waal</td>
                            </tr>
                            <tr>
                                <td rowSpan={5} style={{ verticalAlign: 'middle' }}>Engineering and related sciences</td>
                                <td>Technische Universität Dresden</td>
                            </tr>
                            <tr>
                                <td>Europa-Universität Flensburg</td>
                            </tr>
                            <tr>
                                <td>Universität Stuttgart</td>
                            </tr>
                            <tr>
                                <td>Universität Oldenburg</td>
                            </tr>
                            <tr>
                                <td>Hochschule für Technik Stuttgart</td>
                            </tr>
                            <tr>
                                <td>Mathematics</td>
                                <td>Technische Universität Kaiserslautern</td>
                            </tr>
                            <tr>
                                <td rowSpan={3} style={{ verticalAlign: 'middle' }}>Regional and Urban Planning</td>
                                <td>Technische Universität Berlin</td>
                            </tr>
                            <tr>
                                <td>Technische Universität Dortmund</td>
                            </tr>
                            <tr>
                                <td>Universität Stuttgart</td>
                            </tr>
                            <tr>
                                <td rowSpan={4} style={{ verticalAlign: 'middle' }}>Agricultural and Forest Sciences</td>
                                <td>Rheinische Friedrich-Wilhelms-Universität Bonn</td>
                            </tr>
                            <tr>
                                <td>Technische Universität Dresden</td>
                            </tr>
                            <tr>
                                <td>Georg-August-Universität Göttingen</td>
                            </tr>
                            <tr>
                                <td>Universität Hohenheim</td>
                            </tr>
                            <tr>
                                <td rowSpan={5} style={{ verticalAlign: 'middle' }}>Natural and Environmental Sciences</td>
                                <td>Universität Bremen</td>
                            </tr>
                            <tr>
                                <td>Albert-Ludwigs-Universität Freiburg</td>
                            </tr>
                            <tr>
                                <td>Universität Greifswald</td>
                            </tr>
                            <tr>
                                <td>Technische Hochschule Köln</td>
                            </tr>
                            <tr>
                                <td>Institute for Technology and Resources Management in the Tropics and Subtropics (ITT)</td>
                            </tr>
                            <tr>
                                <td rowSpan={5} style={{ verticalAlign: 'middle' }}>Medicine/Public Health</td>
                                <td>Ruprecht-Karls-Universität Heidelberg</td>
                            </tr>
                            <tr>
                                <td>Albert-Ludwigs-Universität Freiburg</td>
                            </tr>
                            <tr>
                                <td>Freie Universität Berlin</td>
                            </tr>
                            <tr>
                                <td>Humboldt-Universität zu Berlin</td>
                            </tr>
                            <tr>
                                <td>Charité – Universitätsmedizin Berlin</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Social Science, Education, and Law</td>
                                <td>Technische Universität Dresden</td>
                            </tr>
                            <tr>
                                <td>Munich Intellectual Property Law Center (MIPLC)</td>
                            </tr>
                            <tr>
                                <td rowSpan={3} style={{ verticalAlign: 'middle' }}>Media Studies</td>
                                <td>Deutsche Welle Akademie</td>
                            </tr>
                            <tr>
                                <td>Rheinische Friedrich-Wilhelms-Universität Bon</td>
                            </tr>
                            <tr>
                                <td>Hochschule Bonn Rhein-Sieg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <h3>Requirements for DAAD Scholarship:</h3>
                <p>
                    To be eligible for the DAAD scholarship, applicants must meet the criteria,
                </p>
                <ul>
                    <li>
                        <GoDotFill />
                        <p>
                            Must have a minimum of 2 years of professional experience.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Must have passed the required academic achievements and language requirements.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Students who have a strong interest in pursuing studies related to development and are committed to making a positive impact in their home countries.
                        </p>
                    </li>
                </ul>
                <br />
                <h3>How to apply DAAD Scholarship?</h3>
                <p>To apply for the scholarship, follow the steps below:</p>
                <p>
                    <strong>Step 1:</strong>
                    Research and identify the postgraduate or Master’s degree program you wish to pursue at a state or state-recognized German university.
                </p>
                <p>
                    <strong>Step 2:</strong>
                    Visit the official website of the respective course to access the application procedure, application deadline, and required documents.
                </p>
                <p>
                    <strong>Step 3: </strong>
                    Prepare the necessary documents, which may include proof of professional experience, language proficiency certificates, letters of recommendation, and a statement of purpose.
                </p>
                <p>
                    <strong>Step 4: </strong>
                    Complete the application form following the instructions provided by the respective course. Pay attention to any specific requirements or additional documents requested.
                </p>
                <p>
                    <strong>Step 5: </strong>
                    Submit your application directly to the course you are applying for, before the last date. Ensure all required documents are included and correctly filled.
                </p>
            </div>
        </div>
    )
}

export default DaadScholarships;