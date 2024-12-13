import React from 'react'
import './whychoose.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Subheading from '../Subheading/Subheading';
const Whychoose = ({ title, description, data, formSectionRef }) => {
    const handleFormShow = () => {
        if (formSectionRef && formSectionRef.current) {
            formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='whychoose_page'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-9">
                        <Subheading title={title} description={description} />
                    </div>
                </div>
                <div className="choose_wrapper">
                    {data.map((item) => (
                        <div className="choose_item" key={item.id}>
                            <div className="choose_img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.des}</p>
                        </div>
                    ))}

                </div>
                <div className="apply_btn">
                    <a className='mt-5' >
                        <button className='custom_btn' onClick={handleFormShow}><span>Apply Now</span> <FaArrowRightLong /> </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Whychoose;