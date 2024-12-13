import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ScholarUniversity from '../components/Breadcrumb/ScholarUniversity';
import { AAUWInternationalFellowships, BereaCollegeScholarships, BirminghamScholarships, BrokerfishInternationalScholarship, BrunelScholarship, CheveningScholarship, ChicagoScholarship, DaadScholarships, FelixScholarships, FulbrightForeignScholarship, GateCambridgeScholarship, GlasgowScholarships, GlenmoreMedicalScholarship, KnightHennessyScholarship, MicrosoftScholarships, NextGeniusScholarship, ReachOxfordScholarships, RhodesScholarships, UWEChancellorsScholarships } from './scholarshipspageLink';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Locations from '../components/Locations/Locations';
import '../Scholarships/scholarship.css'
import "../index.css"
const ScholarshipUniversity = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { scholarUniversity } = useParams();
    const normalizeUniversityName = (name) => name?.toLowerCase().replace(/-/g, '_');
    const generateTitle = (name) =>
        name
            ?.split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    const normalizedUniversityName = normalizeUniversityName(scholarUniversity);
    const breadcrumb = ScholarUniversity[scholarUniversity] || ScholarUniversity.default;

    const formTitle = `Apply in ${generateTitle(normalizedUniversityName || "Your Future")}`;
    const universityComponents = {
        gates_cambridge_scholarships_for_international_students: <GateCambridgeScholarship />,
        chevening_scholarship: <CheveningScholarship />,
        brokerfish_international_student_scholarship: <BrokerfishInternationalScholarship />,
        uwe_chancellors_scholarships_for_international_students: <UWEChancellorsScholarships />,
        reach_oxford_scholarships_for_developing_country_students: <ReachOxfordScholarships />,
        brunel_international_excellence_scholarship: <BrunelScholarship />,
        felix_scholarships: <FelixScholarships />,
        glenmore_medical_online_postgraduate_scholarship: <GlenmoreMedicalScholarship />,
        rhodes_scholarships_at_oxford_university_for_international_students: <RhodesScholarships />,
        university_of_birmingham_global_masters_scholarships: <BirminghamScholarships />,
        knight_hennessy_scholars_at_stanford_university: <KnightHennessyScholarship />,
        daad_scholarships: <DaadScholarships />,
        next_genius_scholarship: <NextGeniusScholarship />,
        the_university_of_chicago_scholarships: <ChicagoScholarship />,
        aauw_international_fellowships: <AAUWInternationalFellowships />,
        microsoft_scholarships: <MicrosoftScholarships />,
        fulbright_foreign_student_program_in_usa: <FulbrightForeignScholarship />,
        berea_college_for_international_students: <BereaCollegeScholarships />,
    }

    const renderStudyUniversity = () => {
        return (
            universityComponents[normalizedUniversityName] || (
                <div>Content for "{scholarUniversity}" is not available yet.</div>
            )
        );
    };

    if (!scholarUniversity) {
        return <div>University not found</div>;
    }


    return (
        <div>
            <Breadcrumb
                title={breadcrumb?.title || "Invest Visa"}
                image={breadcrumb?.image || "/path/to/default-image.jpg"}
                path={breadcrumb?.path || "/invest-visa"}
            />

            {/* Registration Form */}
            <div className="form_container">
                <div className="container">
                    <div className="form_wrapper border">
                        <div className="form_img">
                            <img
                                src={breadcrumb?.image || "/path/to/default-image.jpg"}
                                className="img-fluid"
                                alt="Form Banner"
                            />
                        </div>
                        <RegistrationForm formTitle={formTitle} />
                    </div>
                </div>
            </div>

            {/* University-Specific Content */}
            <div className="page_content">{renderStudyUniversity()}</div>
            <Locations />
        </div>
    )
}

export default ScholarshipUniversity