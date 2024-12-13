import React, { useEffect } from 'react'
import { GoDot, GoDotFill } from 'react-icons/go'
import { PiLinkLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const BereaCollegeScholarships = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="page_content">
            <div className="container">
                <h2>Berea College Scholarships for International Students, United States </h2>
                <p><strong>Scholarship Amount Offered</strong>: Total tuition fee for bachelor’s programs for international students enrolled in the first year, which includes accommodation and lodging costs.  </p>

                <p><strong>Start date</strong>: Fall 2024</p>

                <p><strong>Last date for Application</strong>: October 15/January 15 (Annual)</p>

                <p><strong>Courses that are covered</strong>: Full-time bachelor’s programs offered atBerea College for overseas students.</p>

                <p><strong>The university offering the scholarships</strong>: International applicants are eligible to apply for scholarships, which Berea College offers.</p>

                <p><strong>Number of Scholarships Offered</strong>: 30 international students who are enrolled each year</p>

                <h2>What are Berea College Scholarshipsfor Foreign Students?</h2>

                <p>Berea College Scholarships are granted to students hailing from outside the United States to cover their entire tuition fees and lodging costs of their bachelor’s programs.</p>

                <p></p>

                <h3>Who can apply for Berea College ScholarshipsforForeign Students?</h3>

                <p>Entitled for Berea College Scholarships are foreign students from all over the world enrolling in the bachelor’s programs at Berea College, USA.</p>

                <p></p>

                <h2>International Students’ Eligibility Criteria for Berea College Scholarships</h2>

                <p>Eligible for the scholarship are applicants fulfilling the following criteria:</p>

                <ul>
                    <li>
                        <GoDotFill />
                        <p>
                            Those who have obtained outstanding grades in higher secondary or Class XII in their native countries.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            They must have got scores of 520 on TOEFL’s paper-based exam, 68 on TOEFL’s internet-based exam, an overall 6 on IELTS, or a composite 19 on ACT, or a combined score of 980 on the SAT, or 95 on Duolingo exam.
                        </p>
                    </li>
                </ul>

                <h4>How does one apply for Berea College Scholarshipsfor Foreign Students applying at Berea College?</h4>

                <p>Eligible applicants for the scholarship must follow the steps mentioned below:</p>

                <p><strong>Step 1:</strong>You need to have been admitted to a full-time bachelor’s program at Berea College by January 15, 2024.</p>

                <p><strong>Step 2:</strong>Included in your application should be a personal essay of two to five pages describing your educational qualifications, your future academic plans, when you plan to return/or not return to your home country, and how your efforts have benefited your community, in addition to educational transcripts, a letter of recommendation (LOR) from one of their teachers, details of your financial resources from a close relative, and official English language proficiency test scores.  </p>

                <p>To know more, visit the official website.</p>
            </div>
        </div>
    )

}

export default BereaCollegeScholarships