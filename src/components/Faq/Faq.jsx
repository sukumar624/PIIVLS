import React from 'react'
import './faq.css'
const Faq = ({ Data }) => {
    return (
        <div className="faq_page_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-7">
                        <div className="sub_heading text-center mb-5">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="faq_wrapper">
                    <div className="accordion" id="faqAccordion">
                        {Data.map((faq) => (
                            <div className="accordion-item" key={faq.id}>
                                <h2 className="accordion-header" id={`heading${faq.id}`}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${faq.id}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${faq.id}`}
                                    >
                                        {faq.title}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${faq.id}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading${faq.id}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div
                                        className="accordion-body"
                                        dangerouslySetInnerHTML={{ __html: faq.des }}
                                    >
                                    </div>
                                    {faq.list && faq.list.length > 0 && (
                                        <ul>
                                            {faq.list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Faq;