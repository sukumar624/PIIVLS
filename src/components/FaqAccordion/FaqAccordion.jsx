import React from 'react';
import { Accordion } from 'react-bootstrap';
import './faqaccrodion.css';
const FaqAccordion = ({ data }) => {
    return (
        <div className="container my-5">
            <h2>Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0">
                {data.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default FaqAccordion;
