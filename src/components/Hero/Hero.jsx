import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StudyImg from '../../assets/images/hero-study-img.jpg';
import MigrateImg from '../../assets/images/hero-migrate-img.jpg';
import WorkImg from '../../assets/images/hero-work-img.jpg';
import VisitImg from '../../assets/images/hero-visit-img.jpg';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Sample hero data
const heroData = [
    {
        title: 'Study Visa',
        img: StudyImg,
        para: ` <strong>PIIVLS - Platform International Immigration Visa Legal Solutions</strong> is one of the trusted immigration consultants having vast experience in offering high-quality solutions in visa processing. We are one of the most reputed Visa Specialist and are assisting aspirants in fulfilling their dreams of migrating and settling. With our services, today hundreds of individuals and families are happily settled in several countries such as UK, Turkiye, Canada, Australia, Germany, USA, UAE, Denmark, Malta, Singapore, France, Austria, Ireland, etc.`,
        link: 'study-visa'
    },
    {
        title: 'Migrate Visa',
        img: MigrateImg,
        para: ` <strong>PIIVLS - Platform International Immigration Visa Legal Solutions</strong> is one of the trusted immigration consultants having vast experience in offering high-quality solutions in visa processing. We are one of the most reputed Visa Specialist and are assisting aspirants in fulfilling their dreams of migrating and settling. With our services, today hundreds of individuals and families are happily settled in several countries such as UK, Turkiye, Canada, Australia, Germany, USA, UAE, Denmark, Malta, Singapore, France, Austria, Ireland, etc.`,
        link: 'migrate-visa'
    },
    {
        title: 'Work Visa',
        img: WorkImg,
        para: ` <strong>PIIVLS - Platform International Immigration Visa Legal Solutions</strong> is one of the trusted immigration consultants having vast experience in offering high-quality solutions in visa processing. We are one of the most reputed Visa Specialist and are assisting aspirants in fulfilling their dreams of migrating and settling. With our services, today hundreds of individuals and families are happily settled in several countries such as UK, Turkiye, Canada, Australia, Germany, USA, UAE, Denmark, Malta, Singapore, France, Austria, Ireland, etc.`,
        link: 'work-visa'
    },
    {
        title: 'Visit Visa',
        img: VisitImg,
        para: ` <strong>PIIVLS - Platform International Immigration Visa Legal Solutions</strong> is one of the trusted immigration consultants having vast experience in offering high-quality solutions in visa processing. We are one of the most reputed Visa Specialist and are assisting aspirants in fulfilling their dreams of migrating and settling. With our services, today hundreds of individuals and families are happily settled in several countries such as UK, Turkiye, Canada, Australia, Germany, USA, UAE, Denmark, Malta, Singapore, France, Austria, Ireland, etc.`,
        link: 'visit-visa'
    },
];

const Hero = () => {
    return (
        <section className="hero">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
            >
                {heroData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="single_hero_slider"
                            style={{
                                backgroundImage: `url(${slide.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="hero_overlay">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="hero_content">
                                                <h1>{slide.title}</h1>
                                                <p dangerouslySetInnerHTML={{ __html: slide.para }}></p>
                                                <Link to={slide.link}>
                                                    <button>
                                                        <span>Read More</span>
                                                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
