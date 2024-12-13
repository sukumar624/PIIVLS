import React from 'react';
import './process.css';
import { MdContentPasteSearch } from "react-icons/md";
import Enquiry from '../../assets/images/enquiry.png';
import expertCounselling from '../../assets/images/expert-counselling.png';
import Eligibility from '../../assets/images/Eligibility.png';
import document from '../../assets/images/document.png';
import Processing from '../../assets/images/Processing.png';
import Subheading from '../Subheading/Subheading';

const processData = [
    {
        id: 1,
        title: 'Enquiry',
        img: Enquiry,
        info: `Welcome! <br /> Your journey starts here...`
    },
    {
        id: 2,
        title: 'Expert counselling',
        img: expertCounselling,
        info: `Our expert will talk to you and guide you based on your requirements.`
    },
    {
        id: 3,
        title: 'Eligibility',
        img: Eligibility,
        info: `Sign-up with us to check your eligibility`
    },
    {
        id: 4,
        title: 'Documentation',
        img: document,
        info: `Expert assistance in arranging the requirements.`
    },
    {
        id: 5,
        title: 'Processing',
        img: Processing,
        info: `Assists you in every step while filing the visa application.`
    },
];

const Process = ({ data, title, description }) => {
    return (
        <div className="process_page_area">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <Subheading title={title} description={description} />
                    </div>
                </div>
                <div className="process_wrapper">
                    {processData.map((data) => (
                        <div className="process_item" key={data.id}>
                            <div className="process_icon">
                                <img src={data.img} alt={data.title} />
                            </div>
                            <div className="process_info">
                                <h4>{data.title}</h4>
                                <p dangerouslySetInnerHTML={{ __html: data.info }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
