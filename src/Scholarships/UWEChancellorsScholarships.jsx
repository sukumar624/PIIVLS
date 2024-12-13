import React, { useEffect } from 'react'
import { GoDotFill } from 'react-icons/go'
import { PiLinkLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const UWEChancellorsScholarships = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='page_content'>
            <div className="container">
                <h2>UWE Chancellor’s Scholarships for International Students</h2>
                <p><strong>Amount of Scholarship Offered:</strong>&nbsp;50% tuition fees for one academic year</p>

                <p><strong>Start date:&nbsp;</strong>August 2023</p>

                <p><strong>Last date for Application:&nbsp;</strong>30<sup>th</sup>&nbsp;September 2023</p>

                <p><strong>Courses covered:&nbsp;</strong>Postgraduate courses offered at the University of West England Bristol, UK.</p>

                <h2>What are UWE Chancellor’s Scholarships for International Students?</h2>

                <p>
                    The UWE Chancellor’s Scholarship is an award offered by the University of West England, Bristol, providing financial help to international students. The scholarships are available for the January 2024 intake. This scholarship offers
                    financial assistance and provides an internship opportunity for the student with the International Development Office and other university departments. The student will engage in ambassadorial activities on behalf of the University
                    throughout their course duration.
                </p>

                <p>
                    <em>*Want to&nbsp;</em><Link to="/study-visa/uk">study in the UK</Link>
                    <em>? Y-Axis is here to help you in all steps.</em>
                </p>

                <h3>Who can apply for UWE Chancellor’s Scholarships?</h3>

                <p>The UWE Chancellor’s Scholarship is open to international students from around the world who are interested in pursuing any postgraduate course at the University of West England Bristol, UK<strong>.</strong></p>

                <p><strong>Number of Scholarships Offered:&nbsp;</strong>One scholarship is available for the January 2024 intake.</p>

                <p><strong>List of Universities Offering the Scholarship:&nbsp;</strong>The UWE Chancellor’s Scholarships is offered by the University of West England Bristol, UK.</p>

                <h3>Eligibility for UWE Chancellor’s Scholarships</h3>

                <p>To be eligible for the UWE Chancellor’s Scholarship, students must meet the following criteria:</p>

                <ul>
                    <li>
                        <GoDotFill />
                        <p>
                            Must hold an equivalent of a British 1st in an undergraduate degree.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Must meet the requirements for English language proficiency.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Be a student at UWE Bristol without prior study experience in the UK.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Be classified as an international student for fee purposes.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Student must not be a sponsored student or have applied for other scholarships.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Students must agree to submit copies of transcripts along with the application.
                        </p>
                    </li>
                </ul>

                <p><em>*Need assistance to</em>&nbsp;<Link to="/study-visa/uk">study in the UK</Link><em>? Y-Axis is here to assist you in all the ways</em></p>

                <h4>How to apply for UWE Chancellor’s Scholarships?</h4>

                <p>To apply for the scholarship program, students must follow the steps:</p>

                <p><strong>Step 1:</strong>&nbsp;make sure you meet the eligibility criteria listed above.</p>

                <p><strong>Step 2:</strong>&nbsp;If eligible, you will receive an invitation to apply for the application.</p>

                <p><strong>Step 3:</strong>&nbsp;Fill out the online application and submit the required documents for further processing.</p>

                <p><strong>Step 4:</strong>&nbsp;Submit the application form before the respective deadlines – 30<sup>th</sup>&nbsp;September 2023 for January 2024 entry.</p>

                <p><strong>Step 5:</strong>&nbsp;For further details and clarifications, refer to the official website of the University of West England Bristol.</p>

            </div>
        </div>
    )
}

export default UWEChancellorsScholarships