import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UniversityToronto from '../University/UniversityToronto';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import UniversityBreadcrumb from '../components/Breadcrumb/UniversityBreadcrumb';
import Locations from '../components/Locations/Locations';
import UniversityWaterloo from '../University/UniversityWaterloo';
import UniversityMelbourne from '../University/UniversityMelbourne';
import UniversityWollongong from '../University/UniversityWollongong';
import UniversityMcGill from '../University/UniversityMcGill';
import UniversityColumbia from '../University/UniversityColumbia';
import UniversityCalgary from '../University/UniversityCalgary';
import PostGraduateWorkPermit from '../University/PostGraduateWorkPermit';
import UniversityMunich from '../University/UniversityMunich';
import UniversityStandford from '../University/UniversityStandford';
import CaliforniaInstituteOfTechnology from '../University/CaliforniaInstituteOfTechnology';
import UniversityOfOxford from '../University/UniversityOfOxford';
import UniversityOfBern from '../University/UniversityOfBern';
import UniversityOfCambridge from '../University/UniversityOfCambridge';
import AudenciaBusinessSchool from '../University/AudenciaBusinessSchool';
import MonashUniversityMasters from '../University/MonashUniversityMasters'
import { AustralianNationalUniversity, DaadScholarships, KarlsruheInstituteOfTechnology, MBAUniversityMasters, MonashUniversity, UniversityCollegeDublin, UniversityKyoto, UniversityOfAbuDhabi, UniversityOfAdelaide, UniversityOfAmsterdam, UniversityOfCalifornia, UniversityOfEdinburgh, UniversityOfLuxembourg, UniversityOfMichigan, UniversityOfNewSouthWales, UniversityofOslo, UniversityOfOtago, UniversityOfQueensland, UniversityOfSydney, UniversityOfTechnologySydney, UniversityOfWarsaw, UniversityOfWesternAustralia, YaleUniversity } from './universitypagelink';
import UniversityOfMelbourne from '../University/UniversityOfMelbourne';
import Masters from '../University/Masters';
const StudyUniversity = () => {
    const { universityName } = useParams(); // Use "universityName" from the route

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    // Utility for normalizing and capitalizing university names
    const normalizeUniversityName = (name) => name?.toLowerCase().replace(/-/g, '_');
    const generateTitle = (name) =>
        name
            ?.split('_')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    const normalizedUniversityName = normalizeUniversityName(universityName);
    const breadcrumb = UniversityBreadcrumb[universityName] || UniversityBreadcrumb.default;

    const formTitle = `Apply in ${generateTitle(normalizedUniversityName || "Your Future")}`;

    // Map of universities to their components
    const universityComponents = {
        university_of_toronto: <UniversityToronto />,
        university_of_waterloo: <UniversityWaterloo />, // Replace with actual component
        melbourne_business_school: <UniversityMelbourne />,
        university_of_wollongong: <UniversityWollongong />,
        mcgill_university: <UniversityMcGill />,
        university_of_british_columbia: <UniversityColumbia />,
        university_of_calgary: <UniversityCalgary />,
        post_graduation_work_permit: <PostGraduateWorkPermit />,
        university_of_munich: <UniversityMunich />,
        stanford_university: <UniversityStandford />,
        california_institute_of_technology: <CaliforniaInstituteOfTechnology />,
        university_of_oxford: <UniversityOfOxford />,
        university_of_bern: <UniversityOfBern />,
        university_of_cambridge: <UniversityOfCambridge />,
        audencia_business_school: <AudenciaBusinessSchool />,
        karlsruhe_institute_of_technology: <KarlsruheInstituteOfTechnology />,
        daad_scholarships: <DaadScholarships />,
        university_of_luxembourg: <UniversityOfLuxembourg />,
        abu_dhabi_university: <UniversityOfAbuDhabi />,
        university_of_warsaw: <UniversityOfWarsaw />,
        university_of_oslo: <UniversityofOslo />,
        kyoto_university: <UniversityKyoto />,
        university_college_dublin: <UniversityCollegeDublin />,
        university_of_otago: <UniversityOfOtago />,
        university_of_amsterdam: <UniversityOfAmsterdam />,
        australian_national_university: <AustralianNationalUniversity />,
        university_of_sydney: <UniversityOfSydney />,
        university_of_melbourne: <UniversityOfMelbourne />,
        university_of_new_south_wales: <UniversityOfNewSouthWales />,
        the_university_of_queensland: <UniversityOfQueensland />,
        monash_university: <MonashUniversity />,
        university_of_western_australia: <UniversityOfWesternAustralia />,
        university_of_adelaide: <UniversityOfAdelaide />,
        university_of_technology_sydney: <UniversityOfTechnologySydney />,
        master_monash_university: <MonashUniversityMasters />,
        mba_monash_university: <MBAUniversityMasters />,
        masters: <Masters />,
        yale_university: <YaleUniversity />,
        university_of_michigan: <UniversityOfMichigan />,
        university_of_california: <UniversityOfCalifornia />,
        university_of_edinburgh: <UniversityOfEdinburgh />,
        // gates_cambridge_scholarships_for_international_students: <GatesCambridgeScholarships />,
        // Add more universities here
    };

    const renderStudyUniversity = () => {
        return (
            universityComponents[normalizedUniversityName] || (
                <div>Content for "{universityName}" is not available yet.</div>
            )
        );
    };

    if (!universityName) {
        return <div>University not found</div>;
    }

    return (
        <div>
            {/* Breadcrumb Component */}
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
    );
};

export default StudyUniversity;
