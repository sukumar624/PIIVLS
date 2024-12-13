import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudyCoachingBreadcrumb from '../components/Breadcrumb/StudyCoachingBreadcrumb';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Locations from '../components/Locations/Locations';
import Ielts from '../components/CoachingPageComponents/Ielts';
import IeltsSprint from '../components/CoachingPageComponents/IeltsSprint';

const StudyCoaching = () => {
    const { coachingName } = useParams(); // Use "coachingName" to match the route parameter

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

    const normalizedCoachingName = normalizeUniversityName(coachingName);
    const breadcrumb = StudyCoachingBreadcrumb[coachingName] || StudyCoachingBreadcrumb.default;

    const formTitle = `Apply in ${generateTitle(normalizedCoachingName || "Your Future")}`;

    // Map of coaching/universities to their components
    const coachingComponent = {
        ielts: <Ielts />,
        ielts_sprint: <IeltsSprint />,
    };

    const renderCoaching = () => {
        return (
            coachingComponent[normalizedCoachingName] || (
                <div>Content for "{coachingName}" is not available yet.</div>
            )
        );
    };

    if (!coachingName) {
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
            <div className="page_content">{renderCoaching()}</div>
            <Locations />
        </div>
    );
};

export default StudyCoaching;
