import React, { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import FreeCounsellingFormImg from '../assets/images/free-counselling-form-img.jpg';
import { GoDotFill } from 'react-icons/go';
const FreeCareerCounselling = () => {
    const { title, image, path } = breadcrumbData.FreeCareerCounselling;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Breadcrumb title={title} image={image} path={path} />
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper">
                        <div className="form_img">
                            <img src={FreeCounsellingFormImg} className='img-fluid' alt="" />
                        </div>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div className="page_content">
                <div className="container">
                    <h2>Free Counselling to Study Abroad</h2>
                    <h3>Don’t know what to pursue as a Career?</h3>
                    <p>Have questions about the various options available in the job market?</p>
                    <p>
                        We at PIIVLS have the answers that you are looking for. We offer Career Counselling for all students who have these questions arising in their minds! We help you with career guidance and career counselling and help you select from the best opportunities that are available abroad. From subject selection to stream selection we are with you throughout your journey.
                    </p>
                    <p>
                        We understand how important making a career choice is and we want to be there every step of the way. We help you understand yourself, organise information and make an informed decision, while holding your hand along the way. Our professional career counsellors will be there to guide you at every step. Since we have been in the field of helping students / individuals immigrate to other countries we also have an upper hand to help you shift your base as well.
                    </p>
                    <p>
                        This is a completely online program. We will not be having face to face meetings unless necessary. We believe that with this program will not get hampered and the major advantage would be that you can get your counselling done from the comfort of your home!
                    </p>
                    <br />
                    <h2>Career path analysis</h2>
                    <p>
                        Not everyone knows or understands the opportunities that are available with certain subjects. It is extremely essential to know what are the branches and options available with the choices that one makes. If one wants to get into medicine it is essential to have pure science, similarly for engineering mathematics is essential.
                    </p>
                    <p>
                        We help you analyse what is the best pathway for you to get to your desired program. The advantages and disadvantages of these paths will be discussed in detail. Sometimes it is not easy to know or make a path and plan for oneself. Our Career Counsellor will not only help you with subject and course selection but also help you make a path and plan for you to study abroad.
                    </p>
                    <h2>Abroad study profile</h2>
                    <p>
                        There are a couple of things students must keep in mind while applying for colleges or universities. With the increasing number of applications, one must stand out to be accepted and we are here to help you with that aspect.
                    </p>
                    <p>
                        We help you understand your profile and work towards making your application stronger with discussions on how you can do so. We help you with suggestions that you can pursue to strengthen your profile and your applications.
                    </p>
                    <h2>What we do</h2>
                    <p>
                        The objective of Career Ready as the name suggests is to get the student ready for their career by narrowing down options and helping them make the best decision for their career. We believe in exploring the top choices and gaining more and more knowledge before making the decision.
                    </p>
                    <p>
                        The aim of this program is to make sure that the student by the end of it has the knowledge to make an informed decision about their career. The Counsellors will be there to make the student understand their personality, interests and aptitudes. Together they will arrive at the top industry options for the student. That is the final outcome of this program.
                    </p>
                    <h3>What our students say</h3>
                    <p><b>Some of the feedback that we have gotten from clients:</b></p>
                    <ul>
                        <li>
                            <GoDotFill />
                            <p>
                                The report will definitely help me assess my abilities better than before. However, honourable mentions to my counsellor. She is just amazing and her aura is very attractive. We spoke about our many shared experiences which honestly felt so good. <strong>(Samra Shereen)</strong>
                            </p>

                        </li>
                        <br />
                        <li>
                            <GoDotFill />
                            <p>
                                The CR report discussion was good infact very helpful. I come to know about where I need to improve and where I am good. So thanks a lot for this useful, helpful and valuable discussion.<strong> (Suchit Patel)</strong>
                            </p>

                        </li>
                        <br />
                        <li>
                            <GoDotFill />
                            <p>
                                I am very impressed with my consultant’s approach. She was very clear and precise while she explained me the report. I’m glad I took part in the psychometric test. I hope to work on few things which I learnt about myself from this report.
                                <strong>(Kanmani Sampath)</strong>
                            </p>
                        </li>
                        <br />
                        <li>
                            <GoDotFill />
                            <p>
                                I am sure it will be a great addition to advancing my career. Since I now have a clear insight into my capabilities and how I make use of them, pros and cons. I can now clearly work towards harnessing them.
                                <strong>(Ravi Kiran Gouni)</strong>
                            </p>

                        </li>
                        <br />
                        <li>
                            <GoDotFill />
                            <p>
                                I am really very privileged and honoured to go with PIIVLS. The way each and everything is explained on the report was covering every aspect of related points as of myself. Thank you for sharing and having conversation on the topic which are required to be covered. Really appreciate your hardwork. Good keeping going like this.

                                <strong>(Mohammed Manzoor)</strong>
                            </p>
                        </li>
                    </ul>
                    <div className="faq_area pt-5">
                        <div className="row justify-content-center">
                            <div className="col-sm-8">
                                <div className="sub_heading text-center pb-4">
                                    <h2>Frequently Asked <span>Questions</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="accordion accordion-flush" id="invest_accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                                        How long will the assessment be?
                                    </button>
                                </h2>
                                <div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="flush-heading1" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Since we have a couple of assessments, some are timed and some aren’t timed. You can take the assessments with breaks. But 1 assessment has to be completed in one sitting. You cannot split the assessment into parts, as that will hamper the report and eventually the outcome.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                        What can I do to improve?
                                    </button>
                                </h2>
                                <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            With the help of the assessments, the counsellor will be able to give the student an idea on which areas to focus on to improve; how to do so and which are the students peak attributes / abilities. With the help of these tests, the counsellor doesn’t only help the student make a career decision but also helps the student grow personally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                                        Who will be counselling me?
                                    </button>
                                </h2>
                                <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            You will be counselled by a trained career counsellor. You will also get a copy of the report that you can keep for your reference. The career counsellor will be there to help you understand, to guide you as well as to answer all the questions you have regarding your career and future.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading4">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                                        Is it limited to only 4 counselling sessions in a year?
                                    </button>
                                </h2>
                                <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            No, the number of sessions that you will have will not be limited to 4 sessions only. You can increase the number of counselling sessions needed. There will be 4 sessions that will be included in the package and will be delivered from our end. If you want more, they will be provided to you, but you will have to pay a charge and inform us in advance so we can schedule them accordingly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading5">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                                        Will the parents be involved in the process too?
                                    </button>
                                </h2>
                                <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Yes, the parents will be involved in the process as although its eventually the child’s decision, the parents must be involved in it too. Along with the counsellor, the parent will also be a part of the complete process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading6">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                                        Will I be able to switch streams after 12th?
                                    </button>
                                </h2>
                                <div id="flush-collapse6" class="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Depends on the stream that is decided! It is a common misconception that you cannot switch streams after 12th grade. There are certain switches you can make. Like shifting to the arts field can be done. But it is impossible to shift from commerce / arts to the science fields of Engineering / Medicine / Architecture etc as they require specific background knowledge of certain subjects, without which things would get really difficult.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading7">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                                        What are the options available after 10th / 12th?
                                    </button>
                                </h2>
                                <div id="flush-collapse7" class="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            There are 3 major divisions available after 10th – Science. Commerce and Arts. When it comes to your under graduation, there are plenty options available such as BA (Bachelor of Arts), B.Sc. (Bachelor of Science), BCom (Bachelor of Commerce), BBA (Bachelor of Business Administration), BMS (Bachelor of Management Studies), B.Tech (Bachelor of Technology), BE (Bachelor of Engineering), B.Arch. (Bachelor of Architecture), B.Voc (Bachelor of Vocational Training) and MBBS (Bachelor of Medicine and Bachelor of Surgery) amongst others.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading8">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                                        What is career counselling? Is it important?
                                    </button>
                                </h2>
                                <div id="flush-collapse8" class="accordion-collapse collapse" aria-labelledby="flush-heading8" data-bs-parent="#invest_accordion">
                                    <div class="accordion-body">
                                        <p>
                                            Career Counselling is the process wherein a career counsellor helps a student to make an informed career decision. It is an essential task as with the advancement of technology, and the rate at which industries are growing, it gets difficult to keep a track of all the upcoming careers and with the help of career counselling, it will be easier to choose a specific career to pursue after the counselling as the counsellor will help you narrow down your options based on various factors. The end decision will be yours, but after career counselling it will be an informed decision from your end.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FreeCareerCounselling;