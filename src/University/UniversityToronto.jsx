import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const UniversityToronto = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="container">
            <h2>University of Toronto Masters programs</h2>
            <p>
                The University of Toronto is a public university located in Toronto, Ontario. Built on the grounds surrounding Queen’s Park, it was established originally in 1827 as King’s College.
            </p>
            <p>
                After it was separated from the church, the university got its existing name in 1850. It houses eleven colleges. Its main campus is the St. George campus, while it has two more campuses – one in Scarborough and the other in Mississauga.
            </p>
            <p>
                The University of Toronto offers over 700 undergraduate and 200 graduate programs.
            </p>
            <p>
                It offers one of the finest research facilities and teaching staff in <Link to="/study-visa/canada" target='_blank'>Canada</Link> and produces fine students in all disciplines, such as social sciences, humanities, life sciences, mathematics, physical sciences, computer science, engineering, commerce & management, architecture, and music.
            </p>
            <i>*Need assistance to <Link to="/study-visa/canada">study in Canada</Link>? PIIVLS is here to assist you in all the ways.</i>
            <br />
            <p><b>Rankings of the University of Toronto</b></p>
            <p>The University of Toronto is one of the top Canadian universities. Following are some of the rankings:</p>
            <div className="responsive-table">
                <table className='table table-bordered table-striped border-primary-subtle'>
                    <thead>
                        <tr>
                            <th scope='col'>List of Rankings</th>
                            <th scope='col'>Rank</th>
                            <th scope='col'>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>U.S. News & World Report University Rankings</td>
                            <td>#21</td>
                            <td>2024</td>
                        </tr>
                        <tr>
                            <td>Times Higher Education World University Rankings</td>
                            <td>#21</td>
                            <td>2024</td>
                        </tr>
                        <tr>
                            <td>Macleans Canada Rankings	</td>
                            <td>#2</td>
                            <td>2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <h3>Popular Masters courses at the University of Toronto</h3>
            <p>
                The University of Toronto is a modern university that focuses on research with a global focus. Its strong suits are the disciplines of sciences and management.
            </p>
            <p>The most popular masters programs at the University of Toronto are:</p>
            <div className="table-responsive">
                <table className='table table-bordered table-striped border-primary-subtle'>
                    <thead>
                        <tr>
                            <th scope='col'>Programs</th>
                            <th scope='col'>Fees (Per Annum)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MSc Computer Science</td>
                            <td>CAD19,486</td>
                        </tr>
                        <tr>
                            <td>M.Mgmt Analytics</td>
                            <td>CAD53,728</td>
                        </tr>
                        <tr>
                            <td>MBA</td>
                            <td>CAD50,990</td>
                        </tr>
                        <tr>
                            <td>Master of Nursing</td>
                            <td>CAD39,967</td>
                        </tr>
                        <tr>
                            <td>Master of Architecture</td>
                            <td>CAD38,752</td>
                        </tr>
                        <tr>
                            <td>MEng Electrical and Computer Engineering</td>
                            <td>CAD20,948</td>
                        </tr>
                        <tr>
                            <td>MEng Mechanical and Industrial Engineering</td>
                            <td>CAD47,130</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <h3>List of Masters programs at the University of Toronto</h3>
            <p>
                For international students, the University of Toronto offers master's programs to take up future opportunities and challenges. The University of Toronto offers the following dual degree programs:
            </p>
            <h3>Dual degree programs</h3>
            <ul>
                <li>
                    <GoDotFill />
                    <p>
                        MEd/MMed Dual Degree in Master of Education and Master of Medicine
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        MGA/MPA Dual Degree in Master of Global Affairs and Master of Public Administration
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        MGA/MIA Dual Degree in Master of Global Affairs and Master of International Affairs
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        MGA/MPP Master of Global Affairs and Master of Public Policy (Dual Degree)
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        LLM / JM Dual Degree in Master of Laws and Juris Master and Juris Master
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        LLB/LLM Dual Degree in Bachelor of Laws and Master of Laws
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        MBA/MBA Global Executive Master of Business Administration with a Dual Degree
                    </p>
                </li>
            </ul>
            <i>*Confused to choose which course to pursue in MBA? Avail PIIVLS <Link to="/course-recommendation" target='_blank'>course recommendation services</Link> to choose the best.</i>
            <br />
            <h3>Entry criteria for University of Toronto Masters programs</h3>
            <p>
                The admission criteria and procedures for foreign students vary for diverse courses and programs. That said, the general eligibility requirements to pursue the master’s programs at the University of Toronto are the following:
            </p>
            <ul>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>Application Mode</strong>: Online
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>Application Fee: </strong>: CAD120
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>Admission Criteria</strong>: The general admission criteria for graduate admission include:
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        completed application form
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        Payment of non-refundable application fee
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        All educational transcripts from an accredited college/university
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        A bachelor’s degree in a relevant field of study with at least 73% to 76%

                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>GRE scores</strong> for a few programs
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>GMAT score </strong>for MBA and other management programs
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>Two letters of recommendations </strong>
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>Resume</strong>
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>Statement of Purpose </strong>(SOP) to study in Canada
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong><a href="https://leverageedu.com/blog/online-interview/" target='_blank'>Interviews</a> </strong>for some programs
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        <strong>Proficiency in English language scores</strong>:International students need to provide TOEFL or IELTS test scores to demonstrate proficiency in English. Students need to get the minimum scores in the following tests:
                    </p>
                </li>
            </ul>
            <div className="table-responsive">
                <table className="table table-bordered table-striped border-primary-subtle">
                    <thead>
                        <tr>
                            <th scope='col'>Exam</th>
                            <th scope='col'>Minimum scores</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Minimum scores</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>IELTS</td>
                            <td>6.5</td>
                        </tr>
                        <tr>
                            <td>CAE</td>
                            <td>180</td>
                        </tr>
                        <tr>
                            <td>CAEL</td>
                            <td>70</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <i>*Get expert <Link to="/coaching" terget="_blank">coaching services</Link> from PIIVLS professionals to ace your scores.</i>
            <br />
            <br />
            <h3>University of Toronto’s admission procedure</h3>
            <p>
                University of Toronto’s admission procedure
            </p>
            <ul>
                <li>
                    <GoDotFill />
                    <p>Complete the admissions application form and attach all the necessary documents</p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        After receiving an acceptance letter from the university, you must apply for a study permit and an entry visa.
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        Before they arrive in Canada, students can apply for the essential documents at an embassy or consulate in Canada.
                    </p>
                </li>
                <li>
                    <GoDotFill />
                    <p>
                        The Centre for International Experience also aids those who face unexpected hurdles while in Canada.
                    </p>
                </li>
            </ul>
            <p>
                It should be mentioned here that domestic and international students have different dates of application. Students need to apply quickly in order that they can get a student visa and make travel arrangements to Canada.
            </p>
            <h3>Scholarships at the University of Toronto</h3>
            <p>
                Scholarships, fellowships, and grants are accessible to international students registered at the University of Toronto. International students can apply for the following scholarships at the University of Toronto:
            </p>
            <div className="table-responsive">
                <table className="table table-striped table-bordered border-primary-subtle">
                    <thead>
                        <tr>
                            <th scope='col'>Award/Fellowship</th>
                            <th scope='col'>Faculty/School</th>
                            <th scope='col'>Amount (in CAD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Delta Kappa Gamma World Fellowships</td>
                            <td>School of Graduate Studies (PG+PhD)</td>
                            <td>Up to 5,300</td>
                        </tr>
                        <tr>
                            <td>Scholars-at-Risk Fellowship</td>
                            <td>School of Graduate Studies (PG+PhD)</td>
                            <td>Up to 10,000 for one year</td>
                        </tr>
                        <tr>
                            <td>Adel S. Sedra Distinguished Graduate Award</td>
                            <td>School of Graduate Studies (PhD)</td>
                            <td>Up to 25,000  for 1 year;1000 for finalists</td>
                        </tr>
                        <tr>
                            <td>University of Toronto Engineering International Awards	</td>
                            <td>Engineering (UG)	</td>
                            <td>	Up to 20,000</td>
                        </tr>
                        <tr>
                            <td>Dean’s Masters of Information Scholarship</td>
                            <td>Faculty of Information (PG)</td>
                            <td>5,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <a onClick={handleScrollToTop}>APPLY NOW</a>
        </div >
    )
}

export default UniversityToronto