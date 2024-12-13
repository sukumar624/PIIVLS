import React, { useState } from "react";

const AccrodianCountry = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <button onClick={() => toggleAccordion(index)}>
                        {item.title}
                    </button>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccrodianCountry;
