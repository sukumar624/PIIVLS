import { useState } from 'react'
import aboutBreadcrumbImg from '../assets/images/about-breadcrumb.jpg';
import AhsanFayyaz from '../assets/images/Ahsan-Fayyaz.jpg';
import mamtazkhan from '../assets/images/mamtaz-khan.jpg';
import HameedKhan from '../assets/images/Hameed-Khan.jpg';
import KashifKhan from '../assets/images/Kashif-Khan.jpg';

import DirectorModal from '../components/DirectorModal/DirectorModal';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { breadcrumbData } from '../components/Breadcrumb/breadcrumbData';
import Locations from '../components/Locations/Locations';
const directorInfoData = [
  {
    id: 1,
    name: "Ahsan Fayyaz",
    designation: "CEO",
    imageSrc: AhsanFayyaz,
    messages: [
      "We are one of the fastest and trusted overseas Education, Immigration, Country specific residency products and Visa Consultancy firms in Pakistan. We believe in fostering globalization, through the promotion of our countrymen across borders. Studying and living overseas broadens the outlook of not just the student or the worker, but his community and country as a whole. We are committed to imparting the best possible consulting services with attention to the minutest detail and personalized care for each and every case. ",
      "We firmly believe that no dream is too big, and no case too trivial, when it comes to settling abroad or visiting. We can proudly state that many of our alumni have been placed in world class universities around the globe. We believe in promoting and working towards a border-less world, where knowledge, professionals and blue collar labor flow in efficient patterns across the world. We believe in a truly merit based world where the best talent is mapped to the best job, and the best student to the best university, irrespective of nationality and circumstance. It is this belief that drives and motivates us to constantly stretch beyond the ordinary and to keep on reinventing ourselves to provide the best consulting services.",
      "Our honest and transparent commitment to our clients / institutions with regular updates during the course of processing, will continue to be its prime driving force. We keep ourselves abreast with the developments taking place globally, to provide the most suitable products to our valued clients.",
      "We are happy and proud to have grown to this stature in such a short period, but we are in no way resting on our laurels, we have many exciting changes and innovations in the pipeline, and are planning to expand our education and immigration services to many more countries. We as a company, made a promise to ourselves and to you, to provide the best quality consulting service, and we are honoured to keep our promise to help you realize your dreams."
    ],
  },
  {
    id: 2,
    name: "Mumtaz Khan",
    imageSrc: mamtazkhan,
    designation: "International Business Operations",
    messages: [
      "We understand that moving to a new country is one of the major decisions that any of you will be making in your lives; be it in the capacity of an immigrant, student, visitor, etc. Our team will be with you throughout the process on a personal note.",
      "At Platform International Immigration & Visa Legal Solutions (PIIVLS), our focus is on client satisfaction, keeping in mind the quality and the aspects of a client. With a team of Knowledgeable Immigration Counsellors, we have continuously evolved from being what we were, to where we stand today.",
      "We at PIIVLS, with a team of expert counsellors, deeply understand the requirements of a client to whatever extent it could take; as our team analyzes the complete profile of a client, take into consideration their accolades and compare it with the criteria that are been set by authorities, thus helping them with their visa. There has never been a better option than PIIIVLS, If a client wants to IMMIGRATE or move abroad to further his/her studies.",
      "We have efficiently walked 'a distant mile', which has made us climb the ninth sky! We promise to serve you with the best solutions while assuring quality and assurance. We never make our clients visualize the false dreams, rather work on facts, staying updated with the rules and regulations of the immigration, delivering timely the appropriate solution.",
      "We have comparatively been faster than what it actually takes for an application to get assessed, with our friendly workplace environment; we never make the client feel what it actually takes for the processing. We believe to work in intense and challenging mind-sets, gaining firmness and a gigantic experience."
    ],
  },
  {
    id: 3,
    name: "Hameed Khan",
    imageSrc: HameedKhan,
    designation: "Legal Affairs ",
    messages: [
      "Welcome to Platform Intl Immigration and Visa Legal Solutions (Private) Limited, your trusted partner in immigration and visa consultancy. As the Director of Legal, I ensure that all our services are fully compliant with the highest standards of legal integrity and transparency. Whether you're seeking guidance for visit visas, student visas, or other immigration-related services, our team is committed to providing you with clear, accurate, and reliable advice.",
      "We understand that the immigration process can be complex, and we're here to simplify it, offering you personalized solutions tailored to your unique needs. Our mission is to help you achieve your goals while ensuring full compliance with the laws and regulations of your destination country. At Platform Intl Immigration and Visa Legal Solutions (Private) Limited, your legal rights and interests are our top priority. We look forward to assisting you on your journey.",
    ],
  },
  {
    id: 4,
    name: "Kashif Khan",
    imageSrc: KashifKhan,
    designation: "Director Business Development",
    messages: [
      ""
    ],
  },
];
const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState(null);

  const handleOpenModal = (director) => {
    setSelectedDirector(director);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDirector(null), 300); // Wait for fade-out animation
  };

  const { title, image, path } = breadcrumbData.about;
  return (
    <>
      <div className='about_page_area'>
        <div className="bread_crumb_area">
          <Breadcrumb title={title} image={image} path={path} />
        </div>
        <div className="about_content_area">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="about_info">
                  <p>
                    <strong>PIIVLS – Platform International Immigration Visa Legal Solutions</strong> is one of the most trusted immigration consultants having vast experience in offering high quality solutions in <strong> Visa Processing, Immigration, Residency Abroad, Student Admissions, Haj | Ummrah | Ziaraat, International and Domestic Customized tours.</strong>{/*offering high-quality solutions in visa processing. People feel comfortable talking to us – not only because we have earned a strong trust level but also because the way we take interest in aspirants in fulfilling their dreams of migrating and settling. With our services, today hundreds of individuals and families are happily settled in several countries such as UK, Turkiye, Canada, Australia, Germany, USA, UAE, Denmark, Malta, Singapore, France, Austria, Ireland, etc.*/}
                  </p>
                  <p>
                    Our dedicated and certified team of professionals has won the hearts of an array of our valued customers across the globe. Our deep insight while dealing with the technicalities of each product has fulfilled the dreams of thousands of individuals and families, now pursuing their careers in all the continents.
                  </p>
                  <p>
                    Here, at PIIVLS your personal and professional needs are kept into consideration before recommending a TAILORED SOLUTION, for you. We sift through your profile, counsel our client, while screening your documents methodically, to build your case for smoothly channelizing through the work centers and as per your future aspirations. Our consulting professionals ensure removing all queries to the minutest detail, which eventually transforms to a flight to your destination country.
                  </p>
                  <p>
                    So whether you are a student wanting to study abroad or a business man willing to start work abroad or a visitor wishing to go on a holiday abroad; PIIVLS is the gateway to abroad for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Messages from the Directors */}
        <div className="col-sm-12">
          <div className="directors_messages">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-7">
                  <div className="sub_heading text-center">
                    <h2>Messages from the <span>Directors</span></h2>
                  </div>
                </div>
              </div>
              <div className="message_wrapper mt-5">
                {
                  directorInfoData.map((director) => (
                    <div
                      key={director.id}
                      className="message_list"
                      onClick={() => handleOpenModal(director)}
                    >
                      <div className="director_img">
                        <img src={director.imageSrc || "default-image.jpg"} alt="" />
                      </div>
                      <div className="designation">
                        <h4>{director.name}</h4>
                        <span>{director.designation}</span>
                      </div>
                    </div>
                  ))
                }
                {/* Modal Component */}
                <DirectorModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  director={selectedDirector}
                />
              </div>
            </div>
          </div>
        </div>
        <Locations />
      </div>
    </>
  )
}

export default About;