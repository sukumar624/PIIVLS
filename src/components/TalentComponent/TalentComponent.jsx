import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React from "react";
import { Card } from "react-bootstrap";
import talentImg from '../../assets/images/talent-img.jpg';

const TalentComponent = () => {
    const strategies = [
        "Hiring from new talent pools",
        "Increasing pay for key roles",
        "Sponsoring candidate visas",
        "Offering more perks to new hires",
        "Providing international opportunities",
        "Providing flexible work options"
    ];

    return (
        <div className="container my-4">
            <Card className="w-100 mx-auto border-0">
                <Card.Body className="">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="display-6 fw-bold">Needs Talent</h2>
                            <p className="text-muted fs-5">
                                81% of employers across the world report that they struggle to find the skilled talent they need.*
                            </p>
                            <div className="my-3">
                                <p className="fs-5">
                                    To attract the right employees, companies are trying a million new things such as:
                                </p>
                                <ul className="list-unstyled">
                                    {strategies.map((strategy, index) => (
                                        <li key={index} className="d-flex align-items-center mb-2">
                                            <IoMdCheckmarkCircleOutline className="me-2 text-success" size={20} />
                                            <span>{strategy}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="fs-5 fw-semibold">All of this is good news for you.</p>
                        </div>
                        <div className="col-md-6">
                            <div className="position-relative">
                                <img src={talentImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TalentComponent;