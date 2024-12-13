import React, { useState } from 'react'
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import servicesData from '../components/ServiceCard/servicesData';
import AustraliaImg from '../assets/images/australia.png'
import CanadaImg from '../assets/images/canada.png';
import GermanyImg from '../assets/images/germany.png';
import TurkeyImg from '../assets/images/turkey.png';
import UAEImg from '../assets/images/united-arab-emirates.png';
import UKImg from '../assets/images/united-kingdom.png';
import USAImg from '../assets/images/united-states-of-america.png';
import NewsImg from '../assets/images/about-img-01.jpg';
import ContactForm from '../components/ContactForm/ContactForm';
import Locations from '../components/Locations/Locations';
const Home = () => {
    const [country, setCountry] = useState('');

    const handleSelectCountry = (e) => {
        setCountry(e.target.value)
    }
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        countryCode: '',
        mobileNumber: '',
        email: '',
        acceptTerms: false,
    });

    const [errors, setErrors] = useState({});
    const [isEmailBoxVisible, setIsEmailBoxVisible] = useState(false);


    // Handle changes to country code selection
    const handleCountryCodeChange = (e) => {
        setFormData({
            ...formData,
            countryCode: e.target.value,
        });
    };

    // Handle country change
    const handleCountryChange = (e) => {
        setFormData({
            ...formData,
            country: e.target.value,
        });
    };

    // Handle switch for showing email box
    const handleSwitchChange = () => {
        setIsEmailBoxVisible((prev) => !prev);
    };

    // General handle change for form inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Validate form inputs
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
        if (!formData.country) newErrors.country = 'Country is required.';
        if (!formData.countryCode) newErrors.countryCode = 'Country code is required.';

        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile number is required.';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Mobile number must be exactly 10 digits.';
        }

        // Check if email is visible and validate it
        if (isEmailBoxVisible) {
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required when email box is visible.';
            } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address.';
            }
        }

        if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const [result, setResult] = React.useState("");
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setResult("Sending....");
        const formData = new FormData(e.target);

        formData.append("access_key", "6d5087ae-1143-4b33-94b6-ada39c22dc02");

        const response = await fetch("https://piivls.com/new/api/contact_api.php", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }

        // Reset form fields
        setFormData({
            firstName: '',
            lastName: '',
            country: '',
            countryCode: '',
            mobileNumber: '',
            email: '',
            acceptTerms: false,
        });

        // Clear errors
        setErrors({});
        setIsEmailBoxVisible(false);
    };

    return (
        <>
            <Hero />
            {/* assessment area */}
            <div className="free_assessment">
                <div className="container">
                    <div className="assessment_wrapper">
                        <div className="assessment_title">
                            <h2>Free Assessment</h2>
                        </div>
                        <div className="assessment_country">
                            <select
                                className="form-select"
                                value={country}
                                onChange={handleSelectCountry}
                            >
                                <option value="" disabled="">--Select Country--</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Aland Islands">Aland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua And Barbuda">Antigua And Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'Ivoire (Ivory Coast)">Cote D'Ivoire (Ivory Coast)</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Curaçao">Curaçao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji Islands">Fiji Islands</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia The">Gambia The</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey and Alderney">Guernsey and Alderney</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Kosovo">Kosovo</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau S.A.R.">Macau S.A.R.</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Man (Isle of)">Man (Isle of)</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia">Micronesia</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="North Korea">North Korea</option>
                                <option value="North Macedonia">North Macedonia</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua new Guinea">Papua new Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn Island">Pitcairn Island</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
                                <option value="Saint-Barthelemy">Saint-Barthelemy</option>
                                <option value="Saint-Martin (French part)">Saint-Martin (French part)</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Schengen">Schengen</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia">South Georgia</option>
                                <option value="South Korea">South Korea</option>
                                <option value="South Sudan">South Sudan</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syria</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="The Bahamas">The Bahamas</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad And Tobago">Trinidad And Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="USA">USA</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                <option value="Virgin Islands (US)">Virgin Islands (US)</option>
                                <option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                        <button className="btn btn-danger">Submit</button>
                    </div>
                </div>
            </div>
            {/* assessment area */}

            {/* About Section Start */}
            <About />

            {/* About Section End */}
            <section className="our_services">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="sub_heading text-center">
                                <span>// Available Visa</span>
                                <h2>Our Available Visa</h2>
                            </div>
                        </div>
                    </div>
                    <div className="our_service_wrapper">
                        {servicesData.map((service, index) => {
                            return (
                                <ServiceCard
                                    key={index}
                                    title={service.title}
                                    image={service.image}
                                    link={service.link}
                                />
                            );
                        })}
                    </div>

                </div>
            </section>

            <section className="popular_country">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="sub_heading text-center">
                                <span>// available countries</span>
                                <h2>Popular Visa</h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus recusandae non optio
                                    suscipit architecto ea
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="country_wrapper">
                                    <div className="card">
                                        <div className="country-flag">
                                            <img src={AustraliaImg} alt="" />
                                        </div>
                                        <h4>Australia</h4>
                                        <ul>
                                            <li>
                                                <a href="https://www.y-axis.com/migrate/australia/" target='_blank'>
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>

                                                    <span>Australia Visit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>

                                                    <span>Australia Study Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>

                                                    <span>Australia Graduate Work Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>

                                                    <span>Australia Graduate Temporary Visa – SubclassName 485 </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>

                                                    <span>Australia Work Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>

                                                    <span>Australia Skilled Migration – SubclassName 476 Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>

                                                    <span>Australia Business Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>

                                                    <span>Australia Investor Visa</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <div className="country-flag">
                                            <img src={CanadaImg} alt="" />
                                        </div>
                                        <h4>Canada</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Visitor Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Express Entry Program</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>PR Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Work Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Digital Nomad Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Temporary Work Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Provincial Nominee Program</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Alberta PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>British Columbia PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Manitoba PNP </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>New Brunswick PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Newfoundland and Labrador PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Northwest Territories</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Nova Scotia PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Ontario PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Prince Edward Island PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Saskatchewan PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Yukon PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Quebec Selected Workers Program</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>ICT Program (Canada Intra Company Transfer)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>FSTP (Canada Federal Skilled Trades Program)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>FSWP (Canada Federal Skilled Worker Program)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Parent Migration</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Dependent Visa </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Family Sponsorship</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Business Visa </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Investor Program</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Start-up Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Student Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Atlantic Immigration Pilot Program</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <div className="country-flag">
                                            <img src={GermanyImg} alt="" />
                                        </div>
                                        <h4>Germany</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Visit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Business Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Student Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Work Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Opportunity Card</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Dependent Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Self-employment Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Freelance Visa</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <div className="country-flag">
                                            <img src={TurkeyImg} alt="" />
                                        </div>
                                        <h4>Turkiye</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Short Term Visit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Long Term Visit Visa (Multiple Entries)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Business Setup Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Citizenship (Permanent Residence)</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <div className="country-flag">
                                            <img src={UAEImg} alt="" />
                                        </div>
                                        <h4> United Arab Emirates</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Short Term Visit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Long-Term Visit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Multiple Entry Visit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>48-Hours Transit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>96-Hours Transit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Student Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Work Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Investor or Partner Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Retirement Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Golden Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Freelance Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Dependent Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Mission Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Residence Visa</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <div className="country-flag">
                                            <img src={UKImg} alt="" />
                                        </div>
                                        <h4>United Kingdom</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>PR Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Work Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Study Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Express Entry Programme</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>PNP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Business Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Visit Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Digital Nomad Visa</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card">
                                        <div className="country-flag">
                                            <img src={USAImg} alt="" />
                                        </div>
                                        <h4>HPI Visa United States of America</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>F-1 Visa </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Tourist Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>H-1B Work Visa </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>B-1 Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>J-1 Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>O - 1 Temporary Work Visa</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    <span>Migration</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="news_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="sub_heading text-center">
                            <span>// Latest News</span>
                            <h2>Trending News</h2>
                        </div>
                    </div>
                    <div className="row mt-5 gy-4">
                        <div className="col-lg-4 col-md-6 col-sm-4">
                            <div className="card">
                                <div className="card-img">
                                    <img src={NewsImg} className="img-fluid" alt="" />
                                </div>
                                <div className="card-body">
                                    <h4>Canada IEC pool closes on October 21. Submit now!</h4>
                                    <h3>Highlights: Last date announced for the Canada IEC 2024 pool</h3>
                                    <div className="news_footer">
                                        <span>Posted on October 17 2024</span>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-4">
                            <div className="card">
                                <div className="card-img">
                                    <img src={NewsImg} className="img-fluid" alt="" />
                                </div>
                                <div className="card-body">
                                    <h4>Canada IEC pool closes on October 21. Submit now!</h4>
                                    <h3>Highlights: Last date announced for the Canada IEC 2024 pool</h3>
                                    <div className="news_footer">
                                        <span>Posted on October 17 2024</span>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-4">
                            <div className="card">
                                <div className="card-img">
                                    <img src={NewsImg} className="img-fluid" alt="" />
                                </div>
                                <div className="card-body">
                                    <h4>Canada IEC pool closes on October 21. Submit now!</h4>
                                    <h3>Highlights: Last date announced for the Canada IEC 2024 pool</h3>
                                    <div className="news_footer">
                                        <span>Posted on October 17 2024</span>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="video_section py-5">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-sm-7">
                            <div className="sub_heading text-center">
                                <h2>Our Videos
                                </h2>
                            </div>
                        </div>
                    </div>
                    <VideoSlider />
                </div>
            </div> */}

            <section className="contact_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 col-sm-7">
                            <div className="contact_form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Locations />
        </>
    )
}

export default Home;