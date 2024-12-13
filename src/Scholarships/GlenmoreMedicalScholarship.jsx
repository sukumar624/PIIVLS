import React, { useEffect } from 'react'
import { GoDotFill } from 'react-icons/go'
import { PiLinkLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const GlenmoreMedicalScholarship = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='page_content'>
            <div className="container">
                <h2>
                    The Glenmore Medical Postgraduate Scholarship at the University of Edinburgh
                </h2>
                <p>by&nbsp;<Link>admin</Link>&nbsp;|&nbsp;Jul 4, 2023</p>

                <p><strong>Amount of Scholarship Offered:</strong>&nbsp;Full tuition fee is provided, which depends on the chosen program.</p>

                <p><strong>Start date:&nbsp;</strong>23 May 2023</p>

                <p><strong>Last date for Application:&nbsp;</strong>1 June 2023 (annual)</p>

                <p><strong>The courses covered are given below</strong></p>

                <ul>
                    <li>
                        <GoDotFill />
                        <p>
                            MSc in Human Anatomy
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            MSc in Science Communication and Public Engagement
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            MSc (by Research) in Biomedical Sciences (Life Sciences)
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            MSc (by Research) in Biomedical Sciences (Life Sciences)
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            MSc (by Research) in Integrative Neuroscience
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            MSc (by Research) in Reproductive Sciences
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            MSc (by Research) Regenerative Medicine and Tissue Repair
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            MMedSci (by Research) Medical Sciences
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            MPH Public Health
                        </p>
                    </li>
                </ul>

                <p><strong>Number of Scholarships Offered:&nbsp;</strong>The Scholarship is offered to three students.</p>

                <p><strong>List of Universities offering the Scholarship:&nbsp;</strong>The University of Edinburgh</p>

                <h2>What is The Glenmore Medical Postgraduate Scholarship?</h2>

                <p>The Glenmore Medical Postgraduate Scholarship is a program for applicants who applied for admission in the academic year 2023-2024 and are eligible for the Human Medical Programmes. The Glenmore Medical Postgraduate Scholarship welcomes students from other selected developing countries.</p>

                <p><em>*Need assistance to&nbsp;</em><Link to="/study-visa/uk/"><em>study in UK</em></Link><em>? PIIVLS is here to assist you in all the ways.</em></p>

                <h2>Who can apply for Glenmore Medical Postgraduate Scholarship?</h2>

                <p>The students who are a citizen of an eligible country from the DAC list of ODA recipients and graduated with first-class honors degrees.</p>

                <h2>Eligibility for Glenmore Medical Postgraduate Scholarship</h2>

                <p>To apply for the Scholarship, you must meet the following criteria:</p>

                <ul>
                    <li>
                        <GoDotFill />
                        <p>
                            Citizen of the country from the DAC list of ODA Recipients.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Must have received admission for any of the degree programs.
                        </p>
                    </li>
                    <li>
                        <GoDotFill />
                        <p>
                            Candidate must have a UK first-class honors degree or equivalent.
                        </p>
                    </li>
                </ul>

                <h2>How to apply for Glenmore Medical Postgraduate Scholarship?</h2>

                <p>In order to gain access to the scholarship application system, candidates have to apply for admission to the&nbsp;<Link to="/study-visa/university/university_of_edinburgh">University of Edinburgh</Link>&nbsp;and follow the steps:</p>

                <p><strong>Step 1:&nbsp;</strong>Visit the official website and log on to the MyEd portal.</p>

                <p><strong>Step 2:&nbsp;</strong>Click on the EUCLID option from the list.</p>

                <p><strong>Step 3:&nbsp;</strong>Select the scholarship tab for the course you are applying for.</p>

                <p><strong>Step 4:&nbsp;</strong>Upload and submit the necessary documents online.</p>

                <p><strong>Step 5:&nbsp;</strong>Fill in the details and information required in the application and submit.</p>

                <p><strong>*Note:&nbsp;</strong>The process of all system checks completion and access to be granted can take up to five working days.</p>
            </div>
        </div>
    )
}

export default GlenmoreMedicalScholarship;