import React, { useEffect } from 'react'
import { GoDot, GoDotFill } from 'react-icons/go'
import { PiLinkLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const FulbrightForeignScholarship = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="page_content">
            <div className="container">
                <h2>Fulbright Foreign Student Program in the USA</h2>
                <p>by<a href="#" rel="author" title="Posts by  PIIVLS"> PIIVLS</a>|Jul 10, 2023</p>

                <p><strong>Amount of Scholarship offered:</strong>$1000 to $2500 / month</p>

                <p><strong>Start date:</strong>1 April 2023</p>

                <p><strong>Last date for Application:</strong>11 October 2023</p>

                <p><strong>Courses covered:</strong>All Masters and PhD courses</p>

                <p><strong>Number of Scholarships offered:</strong>approx. 4000 international students each year</p>

                <p><strong>List of Universities offering the Scholarship:</strong>All Universities and Academic Institutions in the United States of America</p>

                <h2>What is the Fulbright Foreign Student Program in the USA?</h2>

                <p>The Fulbright Foreign Student Program in the USA provides scholarships to international students from 155 countries coming to the USA for any Postgraduation or Ph.D. courses. This scholarship is not only for graduate students but also for artists and young professionals from abroad to study or conduct any research in U.S. universities or academic institutions in the United States.</p>

                <p>The selection process steps:</p>

                <ul>
                    <li>
                        <GoDotFill />
                        <p>
                            Technical Review
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            National Screening Committee (NSC)
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Host Country Review  FFSB Approval
                        </p>
                    </li>
                </ul>

                <p><em>*Need assistance to</em> <Link to="/study-visa/usa/"><em>study in the USA</em></Link><em>?  PIIVLS is here to assist you in all the ways.</em></p>

                <h3>Who can apply for the Fulbright Foreign Student Program in the USA?</h3>

                <p>Any international student from the selected 155 countries, who is interested in pursuing a master's or Ph.D. degree in any field from any U.S. university or any academic institution, can apply for the Fulbright Foreign Student Program in USA.</p>

                <h4>Eligibility for Fulbright Foreign Student Program in the USA</h4>

                <p>The Fulbright Foreign Student Program scholarship eligibility criteria vary based on country. Therefore some universal points:</p>

                <ul>
                    <li>
                        <GoDotFill />
                        <p>
                            Candidate must not be a citizen or permanent resident of the United States
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Candidate must have a bachelor’s degree or equivalent before startingof the scholarship grant period.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Candidate must have proof of English language proficiency as per the requirement.
                        </p>
                    </li>
                </ul>

                <h4>How to apply for the Fulbright Foreign Student Program in the USA?</h4>

                <p>To apply for the scholarship program all international students are processed by bi-national Fulbright Commissions/Foundations or U.S. Embassies. Therefore follow the below steps</p>

                <p><strong>Step 1:</strong>The foreign students must apply through the Fulbright Commission/Foundation or U.S. Embassy in their home countries.</p>

                <p><strong>Step 2:</strong>Visit the official website and select the country.</p>

                <p><strong>Step 3:</strong>Fill the application with the required information and details.</p>

                <p><strong>Step 4:</strong>Attach the required documents to support your scholarship application.</p>

                <p><strong>Step 5:</strong>Review the application and submit – before the last date of submission</p>
            </div>
        </div>
    )

}

export default FulbrightForeignScholarship