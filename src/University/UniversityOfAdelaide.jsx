import React, { useEffect } from 'react'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const UniversityOfAdelaide = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="page_content">
            <div className="container">
                <h2>Bachelor of Engineering at the University of Adelaide | Courses & Admission</h2>
                <p>
                    The University of Adelaide, also known as Adelaide University, is a public university located in Adelaide, South Australia. Established in 1874, its main campus is on North Terrace, part of the city center.
                </p>
                <p>
                    The University has four campuses: North Terrace in Adelaide, Roseworthy Campus, Waite Campus at Urrbrae, and Melbourne. It also has satellite campuses in Thebarton, the National Wine Centre in Adelaide, and Singapore’s Ngee Ann-Adelaide Education Centre.
                </p>
                <p>
                    The University of Adelaide has five faculties, of which the Faculty of Sciences, Engineering, and Technology (SET) is one. It offers more than 400 courses for bachelor’s and master’s programs.
                </p>
                <p>
                    The University of Adelaide has two million books and journals in its libraries. Its more than 22,000 students, about 35% of them foreign nationals, are enrolled.
                </p>
                <p>
                    <i>
                        *Need assistance to <Link to="/study-visa/australia">study in Australia</Link>? PIIVLS is here to assist you in all the ways.
                    </i>
                </p>
                <p>
                    The average cost of studying at Adelaide University is AUD 60,000 per year, including tuition fees and living expenses.
                </p>
                <p>
                    Students are provided scholarships by the University to exempt 15% to 50% of their tuition fees. Furthermore, foreign students avail themselves of work-study opportunities that allow them to work up to 20 hours a week.
                </p>
                <h2>Popular B.Eng Programs </h2>
                <div className="table-responsive">
                    <table className='table table-striped table-bordered border-primary-subtle'>
                        <thead>
                            <tr>
                                <th><strong>Program</strong></th>
                                <th><strong>Fees Per Annum</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>B.Eng, Mechanical Engineering</td>
                                <td>AUD 49,019</td>
                            </tr>
                            <tr>
                                <td>B.Eng, Electrical and Electronic Engineering</td>
                                <td>AUD 49,019</td>
                            </tr>
                            <tr>
                                <td>B.Eng, Civil Engineering</td>
                                <td>AUD 49,019</td>
                            </tr>
                            <tr>
                                <td>B.Eng, Chemical Engineering</td>
                                <td>AUD 49,019</td>
                            </tr>
                            <tr>
                                <td>B.Eng, Electrical and Electronic Engineering</td>
                                <td>AUD 49,019</td>
                            </tr>
                            <tr>
                                <td>Bachelor of Information Technology [B.I.T]</td>
                                <td>AUD 47,401.35</td>
                            </tr>
                            <tr>
                                <td>B.Eng, Software</td>
                                <td>AUD 49,019</td>
                            </tr>
                            <tr>
                                <td>B.Eng, Mechatronic</td>
                                <td>AUD 49,019</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <i>
                        *Confused to choose which course to pursue? Avail of PIIVLS <Link to="/course-recommendation">course recommendation services</Link> to choose the best.
                    </i>
                </p>
                <h2>Acceptance Rates and Intakes for Indian Students</h2>
                <p>
                    This section outlines the key intake periods, application deadlines, and acceptance rates for Indian students at the University of Adelaide, along with English proficiency requirements to guide the admission process.
                </p>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered border-primary-subtle">
                        <thead>
                            <tr>
                                <th><strong>Intake Period</strong></th>
                                <th><strong>Application Deadline</strong></th>
                                <th><strong>Start Date</strong></th>
                                <th><strong>Acceptance Rate (for Indian Applicants)</strong></th>
                                <th><strong>Program Availability</strong></th>
                                <th><strong>English Proficiency Requirements</strong></th>
                                <th><strong>Additional Notes</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Semester 1 (Feb)</td>
                                <td>December (previous year)</td>
                                <td>February</td>
                                <td>25-30% (Approx.)</td>
                                <td>Most undergraduate and postgraduate programs</td>
                                <td>IELTS: 6.0 (Overall), TOEFL: 70, PTE: 50</td>
                                <td>Main intake for most programs. Popular programs may have higher competition.</td>
                            </tr>
                            <tr>
                                <td>Semester 2 (Jul)</td>
                                <td>May</td>
                                <td>July</td>
                                <td>20-25% (Approx.)</td>
                                <td>Limited undergraduate and postgraduate programs</td>
                                <td>IELTS: 6.0 (Overall), TOEFL: 70, PTE: 50</td>
                                <td>Suitable for programs with rolling admissions.</td>
                            </tr>
                            <tr>
                                <td>Trimester 1 (Mar)</td>
                                <td>November (previous year)</td>
                                <td>March</td>
                                <td>20-30% (Approx.)</td>
                                <td>Selected postgraduate programs</td>
                                <td>IELTS: 6.5 (Overall), TOEFL: 80, PTE: 58</td>
                                <td>Some specialized master's programs available.</td>
                            </tr>
                            <tr>
                                <td>Trimester 2 (Jun)</td>
                                <td>April</td>
                                <td>June</td>
                                <td>15-20% (Approx.)</td>
                                <td>Selected postgraduate programs</td>
                                <td>IELTS: 6.5 (Overall), TOEFL: 80, PTE: 58</td>
                                <td>Limited availability for certain programs.</td>
                            </tr>
                            <tr>
                                <td>Trimester 3 (Sep)</td>
                                <td>July</td>
                                <td>September</td>
                                <td>10-15% (Approx.)</td>
                                <td>Selected postgraduate programs</td>
                                <td>IELTS: 6.5 (Overall), TOEFL: 80, PTE: 58</td>
                                <td>Limited options available for some programs.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2>The University of Adelaide World Ranking</h2>
                <p>
                    QS World University Ranking 2022 rates it #108, and Times Higher Education (THE) World University Ranking 2022 is ranked #111.
                </p>
                <h2>Why the University of Adelaide?</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered border-primary-subtle">
                        <tbody>
                            <tr>
                                <td><strong>Financial aid</strong></td>
                                <td><strong>Scholarship and Bursaries</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Academic Programs</strong></td>
                                <td><strong>Undergraduate and Postgraduate.</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Mode of Programs</strong></td>
                                <td><strong>Full-time, Part-time</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2>The Campuses of the University of Adelaide</h2>
                <p>All four campuses of the University of Adelaide are located in Australia.</p>
                <ul>
                    <li>
                        <GoDotFill />
                        <p>North Terrace Campus is a primary location for undergraduate programs.</p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>Waite Campus houses Waite Research Institute.</p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>Roseworthy Campus holds classes for animal and veterinary sciences, agriculture, and animal production.</p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>A bachelor’s program in Information Technology is offered in the Melbourne Campus.</p>
                    </li>
                </ul>
                <p>
                    The university also offers undergraduate courses at its Singapore facility.
                </p>
                <h3>University of Adelaide Accommodation</h3>
                <p>
                    The University offers on-campus accommodation only on the Roseworthy campus. It has a team of accommodation specialists that operates round-the-clock to offer accommodation information and tenancy support. It helps students choose university-managed student accommodations for first-year students.
                </p>
                <p>
                    The accommodation fees of various on-campus housing options are mentioned in the following table:
                </p>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered border-primary-subtle">
                        <thead>
                            <tr>
                                <th><strong>Name of Residences</strong></th>
                                <th><strong>Type of Accommodation</strong></th>
                                <th><strong>Cost (in AUD)</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={2}>The University of Adelaide Village</td>
                                <td>Apartment</td>
                                <td>Townhouse</td>
                            </tr>
                            <tr>
                                <td>Shared Bathroom: 13,550</td>
                                <td>Shared Bathroom: 13,550</td>
                            </tr>
                            <tr>
                                <td>Student Residences</td>
                                <td>Shared House</td>
                                <td>Shared Bathroom: 12, 500</td>
                            </tr>
                            <tr>
                                <td>Residential College</td>
                                <td>Conventional</td>
                                <td>Housing: 7,700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2>The University of Adelaide’s Application Process</h2>
                <p>The process for admission to B.Eng programs is as follows.</p>
                <p><strong>Application Portal: </strong>Online</p>
                <p><strong>Application Fees: </strong>AUD 110</p>
                <h3>Admission Requirements: </h3>
                <ul>
                    <li>
                        <GoDotFill />

                        <p>Proof of English language proficiency</p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>At least 85% in higher secondary exams</p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>Academic transcripts (original language and certified English translations)
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>Letter of recommendation (LORs)
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Foreign students must get a minimum score of 7.0 in IELTS or 600 in TOEFL-iBT (600) in their English language proficiency exams.
                        </p>
                    </li>
                </ul>
                <p>
                    <i>
                        *Get expert <Link to="/coaching services">coaching services</Link> from PIIVLS professionals to ace your scores.
                    </i>
                </p>
                <h2>Turion Fees At University of Adelaide</h2>
                <p>
                    Tuition fees, health insurance, living expenses, and other expenses are included in the cost of attendance for foreign students.
                </p>
                <p>
                    The approximate costs for different types of expenses are as follows:
                </p>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped border-primary-subtle">
                        <thead>
                            <tr>
                                <th><strong>Type of Expense</strong></th>
                                <th><strong>Cost per Year (in AUD)</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tuition fee</td>
                                <td>Ranging from 40,000 to 43,000</td>
                            </tr>
                            <tr>
                                <td>Health Insurance</td>
                                <td>1,500</td>
                            </tr>
                            <tr>
                                <td>Room</td>
                                <td>Ranging from 14,500 to 20,000</td>
                            </tr>
                            <tr>
                                <td>Stationery</td>
                                <td>800</td>
                            </tr>
                            <tr>
                                <td>Personal expenses</td>
                                <td>1,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Scholarships Provided by the University of Adelaide</h3>
                <p>
                    The scholarships provided for foreign undergraduate students are Global Academic Excellence Scholarships (International), University of Adelaide Global Scholarship, Alumni Scholarship, and Higher Education Scholarship, among others, which waive a portion of the tuition fee ranging from 15% to 50%
                </p>
                <h2>Work-Study Program</h2>
                <p>
                    The University of Adelaide offers part-time job options to foreign students. Before they can apply, there are some requirements they need to meet.
                </p>
                <p>They are as follows.</p>
                <ul>
                    <li>
                        <GoDotFill />
                        <p>While working, their academic performance must not be disturbed.</p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>Students must pay attention to the conditions mentioned on their visas. </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>Students can work only up to 20 hours per week during semesters. </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>Payment and working conditions would follow the state and federal government rules.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>Students who intend to work must get a tax file number to provide to their employers.
                        </p>
                    </li>
                </ul>
                <h2>Alumni of the University of Adelaide</h2>
                <p>
                    The university's alumni network keeps in touch with the institution and helps to promote it. Alumni members also contribute money to pay for need-based scholarships.
                </p>
                <p>
                    They also publish ‘lumen’ magazines and conduct seminars, reunions, and live sessions to benefit students.
                </p>
                <h2>Placements at the University of Adelaide</h2>
                <p>
                    The university's career center helps students improve their skills and connect them with prospective employers. This center also strives to improve employability by conducting resume writing, career coaching, and mock interviews.
                </p>
                <p>
                    Students are also provided with online and other employment resources to furnish information about themselves, enabling employers to connect with them.
                </p>
                <br />
                <h2>Other Services</h2>
                <div className="table-responsive">
                    <table className='table table-bordered table-striped border-primary-subtle'>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="/statement-of-purpose">STATEMENT OF PURPOSE</Link>
                                </td>
                                <td>
                                    <Link to="/letters-of-recommendation">LETTERS OF RECOMMENDATION</Link>
                                </td>
                                <td>
                                    <Link to="/student-education-loan">OVERSEAS EDUCATION LOAN</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="/country-specific-admission">COUNTRY SPECIFIC ADMISSION</Link>
                                </td>
                                <td>
                                    <Link to="/course-recommendation"> COURSE RECOMMENDATION</Link>
                                </td>
                                <td>
                                    <Link to="/document-procurement">DOCUMENT PROCUREMENT</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default UniversityOfAdelaide