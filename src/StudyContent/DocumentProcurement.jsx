import React, { useEffect } from 'react'
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import FormImg from '../assets/images/career-form-img.jpg'
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
const DocumentProcurement = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title = '', image = '', path = '' } = breadcrumbData?.document_procurement || {};

    return (
        <div>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={FormImg} className='img-fluid' alt="coachinFormImg" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div className="page_content">
                <div className="container">
                    <h2>Let us manage all your documentation errands</h2>
                    <p>
                        International travel requires a wide variety of documentation. With today’s hectic lifestyles, it can be difficult to collect and collate all the documents from various institutions like colleges, universities, workplaces and more. PIIVLS simplifies your document procurement with an end-to-end document procurement service designed for convenience.
                    </p>
                    <h2>Our document procurement services include:</h2>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                Transcripts from the University/College
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Syllabus copy from the University/College
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Duplicate mark sheets from the University/College
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Convocation certificate from the University
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Translation
                            </p>
                        </li>
                    </ul>
                    <br />
                    <h3>About PIIVLS document procurement services</h3>
                    <ul style={{ display: 'grid', gap: '15px' }}>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Transcripts from the University/College:</strong>
                                PIIVLS will collect the sealed transcripts from your University/College depending on the location and the rules of the University/College. We will apply on your behalf to the institution along with the required documents. For autonomous institutions, a further attestation by the Principal / Controller of Exams of the respective institution will be obtained by us depending on the location and the rules of the college.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Syllabus Copy from the University / College:</strong>
                                PIIVLS will get the Syllabus Copy from the concerned University/College depending on the location and the rules of the University/College. An old syllabus copy may be required as proof of having undergone studies in the subjects as mentioned in the mark sheet for Immigration or higher studies or for applying to a job. We will follow up and obtain the syllabus copy from the university library or from any other source. You will need to provide us with a letter of authorization to meet up with the concerned Educational Institution and the service is subject to the acceptance of the application.

                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Duplicate Mark sheets from the University / College: </strong>
                                PIIVLS Concierge department will get the Duplicate mark sheets from the concerned University/College depending on the location and the rules of the University/College. Duplicate mark sheets can be obtained from the University/College where the applicant completed his/her graduation /post-graduation / doctorate. An application form has to be duly filled and submitted along with supporting documents at the office of the registrar of the respective University/College. An affidavit from the applicant stating about the loss of the Original marks sheet has to be submitted along with the application form. An FIR copy from the nearest police station might be required for a few University/college. An authorization letter from the applicant in favor of PIIVLS may be required to represent the applicant in this matter. A few universities stipulate that the application has to be filled and signed by the applicant. In such cases, PIIVLS will obtain the application form from the University / College and dispatch it to you.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Duplicate Convocation / Degree certificate from the University:  </strong>
                                PIIVLS Concierge department will get the Duplicate mark sheets from the concerned University/College depending on the location and the rules of the University/College. Duplicate Degree certificates can be obtained from the University/College where the applicant completed his/her graduation / post-graduation / doctorate. The following documents have to be submitted along with the application form:
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>FIR copy from the nearest police station:  </strong>
                                A complaint stating that the certificates have been lost/misplaced has to be lodged in the nearest police station and that FIR copy has to be submitted along with the application form.

                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                An affidavit swearing that applicant has lost the certificate has to be done in front of the officer of court/ oath commissioner of that jurisdiction.

                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Two local newspaper advertisements stating that the applicant has lost the degree certificate.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                An authorization letter from the applicant in favor of PIIVLS to represent the applicant. On the basis of the above, an application form has to be duly filled and submitted along with the above documents at the registrar office of the respective University/College.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                <strong>Translation:</strong>
                                PIIVLS Concierge department will get the translation from an authorized and licensed Translator. We will translate from any language to any. You need to provide a clear (readable) scanned copy of the documents which have to be translated.

                            </p>
                        </li>
                    </ul>
                    <br />
                    <h2>PIIVLS terms & conditions</h2>
                    <ul style={{ display: 'grid', gap: '20px' }}>
                        <li>
                            <GoDotFill />
                            <p>
                                The decision of issuing the transcripts and the time taken for the process will be decided by the University / Board / College alone. PIIVLS is not responsible if the University takes more time than the expected time frame.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                PIIVLS is not responsible, for any kind of delay or rejection of transcript application from the University / Board / College and any changes in the University Fee and required Documents.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                PIIVLS is not responsible If the University demands verification of original certificates/resubmission of same documents.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                If the University/ Board / College finds that the documents to be fake then the client has to face the legal action taken by the University / Board / College. PIIVLS will not be held responsible in any such case.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Client agrees and accepts to bear international courier charges if he/she requires the documents sent to their overseas address.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                PIIVLS will not be responsible for any loss or damage of the courier package with transcripts / original documents.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                For any reason, if we need to make more visits to the Universities (other than the two visits for submission & Collection) then you need to pay 50% of the service charge and complete travel expenses.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                If you spoil the University Transcripts sealed envelope, then we need to apply for the fresh set and you need to bear the complete charges.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                If the applicant fails to provide the necessary documents for collecting duplicate mark sheets / Convocation certificate, then PIIVLS will not take any responsibility of the time frame and the charges will not be refunded if that person withdraws the services.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                Once the translation is completed, we will share the soft copy of the same with you to be reviewed. Upon confirmation, we will send the hard copy to your Indian address without any courier charges. If the address is in an overseas location, then you will need to pay Extra charges.
                            </p>
                        </li>
                        <li>
                            <GoDotFill />
                            <p>
                                In any of the above cases, the service charges paid to PIIVLS will not be refunded.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DocumentProcurement