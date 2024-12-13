import React from "react";

const FaqAccordion = ({ faqContent }) => {
    if (!faqContent || faqContent.length === 0) {
        return <div>No FAQs available for this country.</div>;
    }

    return (
        <div className="accordion" id="faqAccordion">
            <h2>Frequently Asked Questions</h2>
            {faqContent.map((faq, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="false"
                            aria-controls={`collapse${index}`}
                        >
                            {faq.question}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;
