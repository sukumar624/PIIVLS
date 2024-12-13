import React from 'react';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { About, Assessment, CampusReady, CareerOpportunities, CareerReady, Careers, CoachingPage, Contact, CountrySpecificAdmission, CourseRecommendation, DocumentProcurement, EvalutionsPage, FreeCareerCounselling, Home, InvestCountry, InvestVisa, LettersRecommendation, MigrateVisa, News, PostGraduationWorkPermit, Scholarship, StatementPurpose, StudentEducationLoan, StudyCoaching, StudyUniversity, StudyVisa, StudyVisaCountry, StudyVisaCountryPage, VisitCountry, VisitVisa, WorkVisa } from './pages';
import RootsLayout from './layouts/RootsLayout';
import ScholarshipUniversity from './pages/ScholarshipUniversity';
const router = createHashRouter(createRoutesFromElements(
  <Route path="/" element={<RootsLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="assessment" element={<Assessment />} />
    <Route path="news" element={<News />} />
    <Route path="contact-us" element={<Contact />} />
    <Route path="career-opportunities" element={<CareerOpportunities />} />
    <Route path="study-visa" element={<StudyVisa />} />
    {/* <Route path="study-visa/:countryName" element={<StudyVisaCountryPage />} /> */}
    <Route path="study-visa/:countryName" element={<StudyVisaCountry />} />
    <Route path="/study-visa/:countryName" element={<StudyUniversity />} />
    <Route path="study-visa/university/:universityName" element={<StudyUniversity />} />
    <Route path="coaching/:coachingName" element={<StudyCoaching />} />
    {/* <Route path="study-visa/work/post-graduation-work-permit" element={<PostGraduationWorkPermit />} /> */}
    <Route path="work-visa" element={<WorkVisa />} />
    <Route path="invest-visa" element={<InvestVisa />} />
    <Route path="/invest-visa/:countryName" element={<InvestCountry />} />
    <Route path='invest-visa/evalutions' element={<EvalutionsPage />} />
    <Route path="visit-visa" element={<VisitVisa />} />
    <Route path="/visit-visa/:countryName" element={<VisitCountry />} />
    <Route path="migrate-visa" element={<MigrateVisa />} />
    <Route path="career-ready" element={<CareerReady />} />
    <Route path="course-recommendation" element={<CourseRecommendation />} />
    <Route path="country-specific-admission" element={<CountrySpecificAdmission />} />
    <Route path="coaching" element={<CoachingPage />} />
    <Route path="free-career-counselling" element={<FreeCareerCounselling />} />
    <Route path="campus-ready" element={<CampusReady />} />
    <Route path="statement-of-purpose" element={<StatementPurpose />} />
    <Route path="letters-of-recommendation" element={<LettersRecommendation />} />
    <Route path="student-education-loan" element={<StudentEducationLoan />} />
    <Route path="document-procurement" element={<DocumentProcurement />} />
    <Route path="careers" element={<Careers />} />
    <Route path='/scholarships' element={<Scholarship />} />
    <Route path='/scholarships/:scholarUniversity' element={<ScholarshipUniversity />} />
  </Route>
))
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;