import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import careerImg from '../assets/images/career-img.jpg'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';
const Scholarship = () => {
    const { title = '', image = '', path = '' } = breadcrumbData?.scholarship || {};
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={careerImg} className='img-fluid' alt="" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div className='page_container'>
                <div className="container">
                    <h2>Scholarships to Study Abroad</h2>
                    <p>
                        <Link to="/study-visa/university/scholarships/">International scholarships</Link> help students reduce the financial burden on their studies. Many countries encourage students with huge scholarships to pursue various courses like diplomas, degrees, master's, and
                        doctoral degrees. Deserving students can avail of fully funded scholarships to study their entire program for free. Some universities may also offer need-based scholarships to encourage bright students who are financially weak.<br />
                    </p>

                    <p>
                        Students can receive scholarships, grants, fellowships, or other financial help to treasure their overseas educational experience. Many overseas universities, government organizations, and private or public funding organizations support
                        students to boost global education.<br />
                        &nbsp;
                    </p>

                    <p>
                        If eligible, students can apply for many prestigious scholarships, such as the Fullbright Scholarship (UK), the Chevening Scholarship (USA), the Australia Awards Scholarships (Australia), the <Link to="/scholarships/gates-cambridge-scholarships-for-international-students"> Gates Cambridge Scholarships</Link> (UK), the <Link to="/scholarships/knight-hennessy-scholars-at-stanford-university"> Knight-Hennesy Scholars program</Link> at Stanford University (USA), the Eiffel Excellence Scholarships (France), and many others.<br />
                        &nbsp;
                    </p>

                    <h2>Types of international scholarships</h2>

                    <p>
                        International study abroad scholarships are classified into various types. These scholarships are mostly given based on the merit or need of the student, or they may be subject-specific. Check the types of international scholarships
                        awarded based on the student category.<br />
                        &nbsp;
                    </p>

                    <p>
                        <strong>Merit-based Scholarships</strong>: These scholarships are awarded based on academic merit, achievements in sports, extracurricular activities, etc.<br />
                        &nbsp;
                    </p>

                    <p>
                        <strong>Need-Based Scholarships</strong>: Overseas students with high GPAs and all other eligibility requirements who cannot afford education costs will be supported with financial backing and fully funded scholarships. Many countries
                        and universities grant need-based scholarships for international students. Students may be asked for family income documents, tax payment documents, employment proof, or other supporting documents to prove their financial condition.
                        <br />
                        &nbsp;
                    </p>

                    <p>
                        <strong>Student-specific scholarships</strong>: These scholarships are awarded based on various factors, such as the student’s gender, religion, race, medical needs, or other factors.<br />
                        &nbsp;
                    </p>

                    <p>
                        <strong>Destination specific</strong>: Students from particular countries are offered destination-specific scholarships by the government, public authorities, or universities. For example, international students from commonwealth
                        countries can use the Chevening scholarship.<br />
                        &nbsp;
                    </p>

                    <p><strong>Athletic scholarships</strong>: Sportspersons attending any training-based program overseas can avail of these scholarships.&nbsp;</p>

                    <p>
                        <br />
                        Subject-specific Scholarships: These scholarships are granted based on your field of study, such as medicine, dentistry, or any other specialization.<br />
                        &nbsp;
                    </p>

                    <h2>Scholarships to Study Abroad</h2>

                    <p>
                        Many international universities in the USA, UK, Australia, Germany, and other countries offer many scholarships for overseas students. Benefit from scholarships and fee waiver programs to reduce the cost of study. Scholarship programs
                        can help overseas students redeem tuition fees, living expenses, books, traveling charges, and other expenses. Based on the scholarship type (fully-funded/partially-funded), type of program (diploma, degree, PG, and master’s), etc, the
                        amount is granted to the eligible students. The following section includes country-wise scholarship information, amount, and other details.
                    </p>

                    <h3>
                        <br />
                        Scholarships to Study in the USA
                    </h3>

                    <p>
                        The United States of America is highly spending $46 billion per year on scholarship funding. The universities of the United States offer over 1.7 million scholarship programs every year.&nbsp;&nbsp; On average, overseas students can
                        avail a scholarship of $5,000 to $10,000 annually. The American universities highly encourage research programs. Research scholars can get up to $10,000 to $20,000 on full-time programs. American universities operate many scholarship
                        programs for international students. One of the most prestigious scholarships in the USA is the Next Genius Scholarship, with an award of $100,000 per year. American Universities and the Government also offer many top scholarships such
                        as the Fulbright Foreign Student Program, <Link>AAUW Fellowship</Link>, BrokerFish International student scholarship, etc. Check USA international scholarships from the following:
                    </p>

                    <p>&nbsp;</p>

                    <div className="table-responsive">
                        <table className='table table-striped table-bordered border-primary-subtle'>
                            <tbody>
                                <tr>
                                    <td width="71%">
                                        <p><strong>Name of the Scholarship</strong></p>
                                    </td>
                                    <td width="28%">
                                        <p><strong>Amount (Per Year)&nbsp; in USD</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>BrokerFish International student scholarship</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>USD 12,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>Next Genius Scholarship</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>USD 100,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>The University of Chicago Scholarships</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>USD 20,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>Knight-Hennessy Scholars at Stanford University</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>USD 90,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>AAUW International Fellowships</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>USD 18,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>Microsoft Scholarships</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>USD 12,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>Fulbright Foreign Student Program in the USA</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>USD 12000 to USD 30000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>Berea College Scholarships</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>100% Scholarship</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="71%">
                                        <p><Link>Hubert Humphrey Fellowships</Link></p>
                                    </td>
                                    <td width="28%">
                                        <p>USD 50,000</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>&nbsp;</p>

                    <p><strong>UK Scholarships for international students </strong></p>

                    <p>
                        The United Kingdom is one of the most popular study destinations globally, with 90 QS-ranking universities. International students can avail of a scholarship of £ 1,000 up to £ 6,000 per year based on their program, university, and
                        other factors. The US is the place for top-notch universities like Cambridge University, Oxford University, ICL, and other universities that offer fully-funded scholarships with up to 100% fee waivers. International students can get
                        prestigious scholarships like the Rhodes Scholarship, Chevening Scholarship, Gates Cambridge Scholarship, and many other prestigious scholarships in the UK. Check UK international scholarships from the following.<br />
                        &nbsp;
                    </p>

                    <div className="table-responsive">
                        <table className='table table-striped table-bordered border-primary-subtle'>
                            <tbody>
                                <tr>
                                    <td width="81%">
                                        <p><strong>Name of the Scholarship</strong></p>
                                    </td>
                                    <td width="18%">
                                        <p><strong>Amount (Per Year) in £</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p>The Commonwealth Scholarships for PhD and Master's</p>
                                    </td>
                                    <td width="18%">
                                        <p>£12,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>The Chevening Scholarships for Master's</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£18,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>BrokerFish International student scholarship</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£822</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>Gates Cambridge Scholarships for International Students</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£45,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>UWE Chancellor's Scholarships for International Students</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£15,750</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>Reach Oxford Scholarships for Developing Country Students</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£19,092</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>Brunel International Excellence Scholarship</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£6,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>Felix Scholarships</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£16,164</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>The Glenmore Medical Postgraduate Scholarship at the University of Edinburgh</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£15000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>Glasgow International Leadership Scholarships</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£10,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>Rhodes Scholarships at Oxford University for International Students</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£18,180</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="81%">
                                        <p><Link>University of Birmingham Global Masters Scholarships</Link></p>
                                    </td>
                                    <td width="18%">
                                        <p>£2,000</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>
                        <br />
                        Scholarships to study in Canada
                    </h3>

                    <p>
                        Canada is a welcoming country for international students. The nation offers overseas students many scholarship programs, research grants, and fellowships. Lester B. Pearson International Scholarship Program is one of the top
                        scholarships in the world. Along with this scholarship, Canada offers many other scholarships to international students. Canada offers over 93,000 unique scholarship programs and spends over CAD 250 million on scholarships. Students
                        from overseas can get up to CAD 20,000 annually to support their education in Canada. Check the Canada scholarships for international students from the following table.<br />
                        &nbsp;
                    </p>

                    <table className='table table-striped table-bordered border-primary-subtle'>
                        <tbody>
                            <tr>
                                <td width="76%">
                                    <p><strong>Scholarship Name</strong></p>
                                </td>
                                <td width="23%">
                                    <p><strong>Amount (per year) in CAD</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="76%">
                                    <p><Link>BrokerFish International student scholarship</Link></p>
                                </td>
                                <td width="23%">
                                    <p>1000 CAD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="76%">
                                    <p><Link>Vanier Canada Graduate Scholarships</Link></p>
                                </td>
                                <td width="23%">
                                    <p>50,000 CAD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="76%">
                                    <p><Link>Lester B. Pearson International Scholarship Program</Link></p>
                                </td>
                                <td width="23%">
                                    <p>82,392 CAD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="76%">
                                    <p><Link>Microsoft Scholarships</Link></p>
                                </td>
                                <td width="23%">
                                    <p>12,000 CAD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="76%">
                                    <p><Link>The University of Calgary International Entrance Scholarship</Link></p>
                                </td>
                                <td width="23%">
                                    <p>20,000 CAD</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>
                        <br />
                        Scholarships to study in Australia
                    </h3>

                    <p>
                        The Australian Government is renowned for many international scholarships. Every year, Australia spends over AUD 770 million on scholarships. Australian scholarships and grants are awarded to graduate, postgraduate, and master’s degree
                        programs. Students from overseas can benefit from Australia’s fully-funded and partially-funded scholarship programs. Along with scholarships, the country provides healthcare facilities and benefits for international students. If you
                        want to study in Australia, check the best Australian scholarships for international students from the following.<br />
                        &nbsp;
                    </p>

                    <table className='table table-striped table-bordered border-primary-subtle'>
                        <tbody>
                            <tr>
                                <td width="78%">
                                    <p><strong>Scholarship Name</strong></p>
                                </td>
                                <td width="21%">
                                    <p><strong>Amount (per year)</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="78%">
                                    <p><Link>Australian Government Research Training Program Scholarship</Link></p>
                                </td>
                                <td width="21%">
                                    <p>40,109 AUD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="78%">
                                    <p><Link>BrokerFish International student scholarship</Link></p>
                                </td>
                                <td width="21%">
                                    <p>1,000 AUD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="78%">
                                    <p><Link>The University of Sydney International Scholarship</Link></p>
                                </td>
                                <td width="21%">
                                    <p>40,000 AUD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="78%">
                                    <p><Link>CQU International Student Scholarship</Link></p>
                                </td>
                                <td width="21%">
                                    <p>15,000 AUD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="78%">
                                    <p><Link>CDU Vice-Chancellor’s International High Achievers Scholarships</Link></p>
                                </td>
                                <td width="21%">
                                    <p>15,000 AUD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="78%">
                                    <p><Link>Macquarie Vice-Chancellor’s International Scholarships</Link></p>
                                </td>
                                <td width="21%">
                                    <p>10,000 AUD</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="78%">
                                    <p><Link>Griffith Remarkable Scholarship</Link></p>
                                </td>
                                <td width="21%">
                                    <p>22,750 AUD</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>
                        <br />
                        Scholarships to Study in Germany
                    </h3>

                    <p>
                        Germany is one of the top-selected countries in the world for education. International students can receive scholarships worth EUR 1200 to EUR 9960 per year on graduate, postgraduate, and master’s degree courses. Germany is a famous
                        country for 100% scholarships like DAAD scholarships. Overseas students can gain huge scholarships for their studies. German universities are more affordable to study compared to other European universities as the universities support
                        students with many scholarships. Check out the scholarships for international students in Germany.<br />
                        &nbsp;
                    </p>

                    <table className='table table-striped table-bordered border-primary-subtle'>
                        <tbody>
                            <tr>
                                <td width="73%">
                                    <p><strong>Name of the Scholarship</strong></p>
                                </td>
                                <td width="26%">
                                    <p><strong>Amount (Per Year) in EUR</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p><Link>The Deutschlandstipendium at German Universities</Link></p>
                                </td>
                                <td width="26%">
                                    <p>€3,600</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p>DAAD WISE (Working Internships in Science and Engineering) Scholarship</p>
                                </td>
                                <td width="26%">
                                    <p>€10,332</p>

                                    <p>&amp; €12,600 travel subsidy</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p><Link>DAAD Scholarships in Germany for Development-Related Postgraduate Courses</Link></p>
                                </td>
                                <td width="26%">
                                    <p>€14,400</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p><Link>DAAD Helmut-Schmidt Masters Scholarships for Public Policy and Good Governance</Link></p>
                                </td>
                                <td width="26%">
                                    <p>€11,208</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p>Konrad-Adenauer-Stiftung (KAS)</p>
                                </td>
                                <td width="26%">
                                    <p>€10,332 for graduate students; €14,400 for Ph.D</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p><Link>Friedrich Naumann Foundation Scholarship for International Students</Link></p>
                                </td>
                                <td width="26%">
                                    <p>€10,332</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p>ESMT Women's Academic Scholarship</p>
                                </td>
                                <td width="26%">
                                    <p>€32,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p>Goethe Goes Global</p>
                                </td>
                                <td width="26%">
                                    <p>€6,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p>WHU-Otto Beisheim School of Management</p>
                                </td>
                                <td width="26%">
                                    <p>€3,600</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p>DLD Executive MBA</p>
                                </td>
                                <td width="26%">
                                    <p>€53,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p>University of Stuttgart Master Scholarship</p>
                                </td>
                                <td width="26%">
                                    <p>€14,400</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p><Link>Eric Bleumink Scholarship</Link></p>
                                </td>
                                <td width="26%">
                                    <p>€10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="73%">
                                    <p><Link>Rotary Foundation Global</Link></p>
                                </td>
                                <td width="26%">
                                    <p>€3,600</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p>&nbsp;</p>

                    <h3>Scholarships to study in Europe</h3>

                    <p>
                        European universities are popular for many scholarships. International students can get a scholarship of up to 1,515 EUR to 10,000 EUR per year on all courses. Students can pursue stress-free education with the financial aid offered by
                        European universities and the government. For this reason, many international students opt to study at European universities. Europe is a welcoming country with more than 688 QS-ranking universities. Overseas students can find the best
                        European university for their desired study program. According to the reports of the European Commission, the country offers over 100,000 various scholarship programs, and it is estimated that the universities provide €15.6 billion in
                        scholarship funds every year. Check Europe scholarships for international students from the following.<br />
                        &nbsp;
                    </p>

                    <table className='table table-striped table-bordered border-primary-subtle'>
                        <tbody>
                            <tr>
                                <td width="63%">
                                    <p><strong>Name of the Scholarship</strong></p>
                                </td>
                                <td width="36%">
                                    <p><strong>Amount (Per Year)</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>DAAD Scholarship Programs</p>
                                </td>
                                <td width="36%">
                                    <p>14,400€</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>EMS Undergraduate Scholarship</p>
                                </td>
                                <td width="36%">
                                    <p>50% waivers on tuition costs</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p><Link>EMS Scholarship for Master’s and doctoral courses</Link></p>
                                </td>
                                <td width="36%">
                                    <p>18,000€</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Konrad-Adenauer-Stiftung (KAS)</p>
                                </td>
                                <td width="36%">
                                    <p>14,400€</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Heinrich Boll Foundation Scholarship</p>
                                </td>
                                <td width="36%">
                                    <p>Tuition fees, monthly allowances</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Deutschland Stipendium National Scholarship Programme</p>
                                </td>
                                <td width="36%">
                                    <p>3,600€</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Padua International Excellence Scholarship Programme</p>
                                </td>
                                <td width="36%">
                                    <p>8,000€</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Bocconi Merit and International Awards</p>
                                </td>
                                <td width="36%">
                                    <p>12,000€</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Latvian Government Study Scholarships</p>
                                </td>
                                <td width="36%">
                                    <p>8040€</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Liepaja University Scholarships</p>
                                </td>
                                <td width="36%">
                                    <p>6,000€</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>
                        <br />
                        Scholarships to study in New Zealand
                    </h3>

                    <p>
                        New Zealand contributes over 650 special scholarship programs for international students, including master’s, PhD, graduate degree, and other programs. Eligible students can get a yearly scholarship of up to NZD 10,000 to NZD 20,000.
                        New Zealand is among the ideal places to study abroad, so international students can choose New Zealand universities to gain huge scholarships and save money on education. Check New Zealand’s popular scholarships from the following.
                        <br />
                        &nbsp;
                    </p>

                    <table className='table table-striped table-bordered border-primary-subtle'>
                        <tbody>
                            <tr>
                                <td width="72%">
                                    <p><strong>Name of Scholarship</strong></p>
                                </td>
                                <td width="27%">
                                    <p><strong>Amount in NZD (Per Year)</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>AUT International Scholarship - Southeast Asia</p>
                                </td>
                                <td width="27%">
                                    <p>$5,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>AUT International Scholarship - Faculty of Culture and Society</p>
                                </td>
                                <td width="27%">
                                    <p>$7,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>Lincoln University International Pathway Merit Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$2,500</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>Lincoln University International Undergraduate Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$3,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>Lincoln University Undergraduate Vice-Chancellor's Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$5,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>Lincoln University International School Leavers Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>The University of Auckland ASEAN High Achievers Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>University of Auckland International Student Excellence Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>The University of Auckland ELA High Achiever Award</p>
                                </td>
                                <td width="27%">
                                    <p>$5000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>International Master's Research Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$17,172</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>University of Otago Coursework Master's Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>University of Otago Doctoral Scholarships</p>
                                </td>
                                <td width="27%">
                                    <p>$30,696</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>Vice Chancellor's International Excellence Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$15,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>Michael Baldwin Memorial Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>Vice Chancellor's International Excellence Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p><Link>Tongarewa Scholarship - for Excellence</Link></p>
                                </td>
                                <td width="27%">
                                    <p>$5,000 or $10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p>Victoria University of Wellington Study Abroad Scholarship</p>
                                </td>
                                <td width="27%">
                                    <p>$1,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="72%">
                                    <p><Link>Guardian Trust Masters Scholarship in Commerce</Link></p>
                                </td>
                                <td width="27%">
                                    <p>$16,500</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>
                        <br />
                        Dubai International Scholarships
                    </h3>

                    <p>
                        Overseas students choose Dubai as an ideal choice for their education as the nation has many top-ranking universities. To attract international students, Dubai universities follow exceptional educational standards. Not only do
                        universities maintain quality standards, but they also offer substantial scholarship amounts of up to 55000 AED per year. Dubai universities and schools provide 1628 various scholarship programs for international students. Here is the
                        list of top scholarships in Dubai.<br />
                        &nbsp;
                    </p>

                    <table className='table table-striped table-bordered border-primary-subtle'>
                        <tbody>
                            <tr>
                                <td width="60%">
                                    <p><strong>Name of Scholarship</strong></p>
                                </td>
                                <td width="39%">
                                    <p><strong>Amount (Per Year) in AED</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60%">
                                    <p>Khalifa University Combined Master/Doctoral Research Teaching Scholarship</p>
                                </td>
                                <td width="39%">
                                    <p>8,000 to 12,000 AED</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60%">
                                    <p>Khalifa University Master Research Teaching Scholarship</p>
                                </td>
                                <td width="39%">
                                    <p>3,000 - &nbsp;4,000 AED</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60%">
                                    <p>Mohamed Bin Zayed University Scholarship for AI</p>
                                </td>
                                <td width="39%">
                                    <p>8,000 - 10,000 AED</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60%">
                                    <p>Forté INSEAD Fellowship</p>
                                </td>
                                <td width="39%">
                                    <p>43,197 - 86,395 AED</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60%">
                                    <p>INSEAD Deepak &amp; Sunita Gupta Endowed Scholarships</p>
                                </td>
                                <td width="39%">
                                    <p>107,993 AED</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60%">
                                    <p>INSEAD Indian Alumni Scholarship</p>
                                </td>
                                <td width="39%">
                                    <p>107,993 AED</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>
                        <br />
                        Study in Sweden with Scholarships
                    </h3>

                    <p>
                        Sweden universities invite international students with over 500 scholarship programs. Overseas students are supported with financial aid of EUR 4,000 – EUR 20,000 per year. Some universities offer fee waivers up to 75%. Education in
                        Sweden is quite affordable compared with other European countries. Check Sweden's scholarships for international students from the following table.<br />
                        &nbsp;
                    </p>

                    <table className='table table-striped table-bordered border-primary-subtle' >
                        <tbody>
                            <tr>
                                <td width="71%">
                                    <p><strong>Name of the Scholarship</strong></p>
                                </td>
                                <td width="28%">
                                    <p><strong>Amount (Per Year) in EUR</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="71%">
                                    <p>Halmstad University Scholarship</p>
                                </td>
                                <td width="28%">
                                    <p>EUR 12,461</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="71%">
                                    <p>Study a Master's in Europe Scholarship</p>
                                </td>
                                <td width="28%">
                                    <p>Up to EUR 5,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="71%">
                                    <p>Produktexperter Scholarship</p>
                                </td>
                                <td width="28%">
                                    <p>Up to EUR 866</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="71%">
                                    <p>The Visby Programme Scholarships</p>
                                </td>
                                <td width="28%">
                                    <p>Up to EUR 432</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="71%">
                                    <p><Link>Swedish Institute Scholarships for Global Professionals</Link></p>
                                </td>
                                <td width="28%">
                                    <p>Up to EUR&nbsp;12,635</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="71%">
                                    <p><Link>Chalmers IPOET Scholarships</Link></p>
                                </td>
                                <td width="28%">
                                    <p>75% tuition fee Waiver</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>
                        <br />
                        Scholarships to Study in Ireland
                    </h3>

                    <p>
                        Ireland is a welcoming country for international students, with an over 94% visa success rate. The nation pays much attention to higher studies from students from various countries. Due to affordable studies, huge scholarship options,
                        and financial aid offered by Irish universities, many international students are showcasing interest. The Irish government awards over 60 scholarship programs. Overseas students enrolled in Irish universities can get scholarships worth
                        2000 - 4000 EUR per year. Check detailed information about Ireland's international scholarships from the following table.<br />
                        &nbsp;
                    </p>

                    <table className='table table-striped table-bordered border-primary-subtle'>
                        <tbody>
                            <tr>
                                <td width="63%">
                                    <p><strong>Name of the Scholarship</strong></p>
                                </td>
                                <td width="36%">
                                    <p><strong>Amount (Per Year)</strong></p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Centenary Scholarship Program</p>
                                </td>
                                <td width="36%">
                                    <p>€4000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Central Bank of Ireland Undergraduate Scholarships for International Students</p>
                                </td>
                                <td width="36%">
                                    <p>€29,500</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>NUI Galway International Students Scholarships</p>
                                </td>
                                <td width="36%">
                                    <p>€10,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>India Undergraduate Scholarships- Trinity College Dublin</p>
                                </td>
                                <td width="36%">
                                    <p>€36,000</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="63%">
                                    <p>Dublin Institute of Technology (TU Dublin)</p>
                                </td>
                                <td width="36%">
                                    <p>€2,000 - €5,000</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Scholarship