import { Link } from "react-router-dom";

const ServiceCard = ({ image, title, link }) => {
    return (
        <div className="category_service">
            <div className="service_img_area">
                <div className="service_img">
                    <img src={image} className="img-fluid" alt={title} />
                </div>
                <div className="service_icon"></div>
            </div>
            <div className="service_info">
                <h4>{title}</h4>
                <Link to={link}>
                    <button className="custom_btn">
                        <span>Apply Now</span>
                        <div className="icon">
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;