import { useEffect, useState } from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import './registrationform.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConsultationModal from '../ConsultationModal/ConsultationModal';
import ConsultationIcon from '../../assets/images/consultation-icon.png';
function RegistrationForm({ userType, selectCountry, schoolLabel, formTitle, formDes }) {
    const [modalShow, setModalShow] = useState(false);

    const handleModalShow = () => setModalShow(true);
    const handleModalClose = () => setModalShow(false);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        visa: '',
        countryCode: '',
        mobileNumber: '',
        whatsappEnabled: false,
        whatsappCode: '',
        whatsappNumber: '',
        acceptTerms: false,
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        // Synchronize mobile number and WhatsApp number if toggle is enabled
        if (formValues.whatsappEnabled && (name === 'countryCode' || name === 'mobileNumber')) {
            setFormValues((prevValues) => ({
                ...prevValues,
                whatsappCode: prevValues.countryCode,
                whatsappNumber: prevValues.mobileNumber,
            }));
        }
    };

    const handleWhatsappToggle = () => {
        setFormValues((prevValues) => ({
            ...prevValues,
            whatsappEnabled: !prevValues.whatsappEnabled,
        }));

        if (!formValues.whatsappEnabled) {
            setFormValues((prevValues) => ({
                ...prevValues,
                whatsappCode: prevValues.countryCode,
                whatsappNumber: prevValues.mobileNumber,
            }));
        } else {
            setFormValues((prevValues) => ({
                ...prevValues,
                whatsappCode: '',
                whatsappNumber: '',
            }));
        }
    };

    const validate = () => {
        const validationErrors = {};
        if (!formValues.firstName) validationErrors.firstName = 'First Name is required';
        if (!formValues.lastName) validationErrors.lastName = 'Last Name is required';
        if (!formValues.email) validationErrors.email = 'Email is required';
        if (!formValues.countryCode) validationErrors.countryCode = 'Country Code is required';
        if (!formValues.mobileNumber) validationErrors.mobileNumber = 'Mobile Number is required';
        if (!formValues.acceptTerms) validationErrors.acceptTerms = 'You must accept the Terms & Conditions';

        // Additional validation can be added here (e.g., email format, mobile number length)

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            // Reset the form or handle successful submission
        } else {
            setSubmitted(false);
        }

        // console.log('formValues >>>>>>>>>>>', formValues);

        const formData1 = new FormData();
        formData1.append("firstName", formValues.firstName);
        formData1.append("lastName", formValues.lastName);
        formData1.append("country", formValues.country ? formValues.country : "NA");
        formData1.append("visa", 'Study Visa');
        formData1.append("countryCode", formValues.countryCode);
        formData1.append("mobileNumber", formValues.mobileNumber);
        formData1.append("email", formValues.email);
        formData1.append("whatsappCode", formValues.whatsappCode);
        formData1.append("whatsappNumber", formValues.whatsappNumber);
        formData1.append("you_are", userType);
        formData1.append("b_country", selectCountry);
        formData1.append("schoolLabel", schoolLabel ? schoolLabel : "NA");

        try {
            const response = await axios.post("https://piivls.com/new/api/student_api.php", formData1, {

                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success(response.data.message);
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                country: '',
                countryCode: '',
                mobileNumber: '',
                whatsappEnabled: false,
                whatsappCode: '',
                whatsappNumber: '',
                acceptTerms: false,
            });

        } catch (error) {
            console.error("Error adding team:", error);
        } finally {
            // setLoading(false);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2 className="form_title">{formTitle}</h2>
                <p>{formDes}</p>
                {/* {submitted && toast.success()} */}

                <Row className="mb-2">
                    <Col>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="email" className="mb-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-2">
                    <Col md={5}>
                        <Form.Group controlId="countrySelect">
                            <Form.Label>Country Code</Form.Label>
                            <Form.Select
                                name="countryCode"
                                value={formValues.countryCode}
                                onChange={handleChange}
                                isInvalid={!!errors.countryCode}
                            >
                                <option value="">Select Country Code</option>
                                <option value="">ALB +355</option>
                                <option value="AFG +93">Afghanistan (+93)</option>
                                <option value="ALA +35818">Aland Islands (+35818)</option>
                                <option value="ALB +355">Albania (+355)</option>
                                <option value="DZA +213">Algeria (+213)</option>
                                <option value="ASM +1684">American Samoa (+1684)</option>
                                <option value="AND +376">Andorra (+376)</option>
                                <option value="AGO +244">Angola (+244)</option>
                                <option value="AIA +1264">Anguilla (+1264)</option>
                                <option value="ATA +672">Antarctica (+672)</option>
                                <option value="ATG +1268">Antigua And Barbuda (+1268)</option>
                                <option value="ARG +54">Argentina (+54)</option>
                                <option value="ARM +374">Armenia (+374)</option>
                                <option value="ABW +297">Aruba (+297)</option>
                                <option value="AUS +61">Australia (+61)</option>
                                <option value="AUT +43">Austria (+43)</option>
                                <option value="AZE +994">Azerbaijan (+994)</option>
                                <option value="BHR +973">Bahrain (+973)</option>
                                <option value="BGD +880">Bangladesh (+880)</option>
                                <option value="BRB +1246">Barbados (+1246)</option>
                                <option value="BLR +375">Belarus (+375)</option>
                                <option value="BEL +32">Belgium (+32)</option>
                                <option value="BLZ +501">Belize (+501)</option>
                                <option value="BEN +229">Benin (+229)</option>
                                <option value="BMU +1441">Bermuda (+1441)</option>
                                <option value="BTN +975">Bhutan (+975)</option>
                                <option value="BOL +591">Bolivia (+591)</option>
                                <option value="BES +599">Bonaire, Sint Eustatius and Saba (+599)</option>
                                <option value="BIH +387">Bosnia and Herzegovina (+387)</option>
                                <option value="BWA +267">Botswana (+267)</option>
                                <option value="BVT +0055">Bouvet Island (+0055)</option>
                                <option value="BRA +55">Brazil (+55)</option>
                                <option value="IOT +246">British Indian Ocean Territory (+246)</option>
                                <option value="BRN +673">Brunei (+673)</option>
                                <option value="BGR +359">Bulgaria (+359)</option>
                                <option value="BFA +226">Burkina Faso (+226)</option>
                                <option value="BDI +257">Burundi (+257)</option>
                                <option value="KHM +855">Cambodia (+855)</option>
                                <option value="CMR +237">Cameroon (+237)</option>
                                <option value="CAN +1">Canada (+1)</option>
                                <option value="CPV +238">Cape Verde (+238)</option>
                                <option value="CYM +1345">Cayman Islands (+1345)</option>
                                <option value="CAF +236">Central African Republic (+236)</option>
                                <option value="TCD +235">Chad (+235)</option>
                                <option value="CHL +56">Chile (+56)</option>
                                <option value="CHN +86">China (+86)</option>
                                <option value="CXR +61">Christmas Island (+61)</option>
                                <option value="CCK +61">Cocos (Keeling) Islands (+61)</option>
                                <option value="COL +57">Colombia (+57)</option>
                                <option value="COM +269">Comoros (+269)</option>
                                <option value="COG +242">Congo (+242)</option>
                                <option value="COK +682">Cook Islands (+682)</option>
                                <option value="CRI +506">Costa Rica (+506)</option>
                                <option value="CIV +225">Cote D'Ivoire (Ivory Coast) (+225)</option>
                                <option value="HRV +385">Croatia (+385)</option>
                                <option value="CUB +53">Cuba (+53)</option>
                                <option value="CUW +599">Curaçao (+599)</option>
                                <option value="CYP +357">Cyprus (+357)</option>
                                <option value="CZE +420">Czech Republic (+420)</option>
                                <option value="COD +243">Democratic Republic of the Congo (+243)</option>
                                <option value="DNK +45">Denmark (+45)</option>
                                <option value="DJI +253">Djibouti (+253)</option>
                                <option value="DMA +1767">Dominica (+1767)</option>
                                <option value="DOM +1809">Dominican Republic (+1809)</option>
                                <option value="TLS +670">East Timor (+670)</option>
                                <option value="ECU +593">Ecuador (+593)</option>
                                <option value="EGY +20">Egypt (+20)</option>
                                <option value="SLV +503">El Salvador (+503)</option>
                                <option value="GNQ +240">Equatorial Guinea (+240)</option>
                                <option value="ERI +291">Eritrea (+291)</option>
                                <option value="EST +372">Estonia (+372)</option>
                                <option value="ETH +251">Ethiopia (+251)</option>
                                <option value="FLK +500">Falkland Islands (+500)</option>
                                <option value="FRO +298">Faroe Islands (+298)</option>
                                <option value="FJI +679">Fiji Islands (+679)</option>
                                <option value="FIN +358">Finland (+358)</option>
                                <option value="FRA +33">France (+33)</option>
                                <option value="GUF +594">French Guiana (+594)</option>
                                <option value="PYF +689">French Polynesia (+689)</option>
                                <option value="ATF +262">French Southern Territories (+262)</option>
                                <option value="GAB +241">Gabon (+241)</option>
                                <option value="GMB +220">Gambia The (+220)</option>
                                <option value="GEO +995">Georgia (+995)</option>
                                <option value="DEU +49">Germany (+49)</option>
                                <option value="GHA +233">Ghana (+233)</option>
                                <option value="GIB +350">Gibraltar (+350)</option>
                                <option value="GRC +30">Greece (+30)</option>
                                <option value="GRL +299">Greenland (+299)</option>
                                <option value="GRD +1473">Grenada (+1473)</option>
                                <option value="GLP +590">Guadeloupe (+590)</option>
                                <option value="GUM +1671">Guam (+1671)</option>
                                <option value="GTM +502">Guatemala (+502)</option>
                                <option value="GGY +441481">Guernsey and Alderney (+441481)</option>
                                <option value="GIN +224">Guinea (+224)</option>
                                <option value="GNB +245">Guinea-Bissau (+245)</option>
                                <option value="GUY +592">Guyana (+592)</option>
                                <option value="HTI +509">Haiti (+509)</option>
                                <option value="HMD +672">Heard Island and McDonald Islands (+672)</option>
                                <option value="HND +504">Honduras (+504)</option>
                                <option value="HKG +852">Hong Kong S.A.R. (+852)</option>
                                <option value="HUN +36">Hungary (+36)</option>
                                <option value="ISL +354">Iceland (+354)</option>
                                <option value="IND +91">India (+91)</option>
                                <option value="IDN +62">Indonesia (+62)</option>
                                <option value="IRN +98">Iran (+98)</option>
                                <option value="IRQ +964">Iraq (+964)</option>
                                <option value="IRL +353">Ireland (+353)</option>
                                <option value="ISR +972">Israel (+972)</option>
                                <option value="ITA +39">Italy (+39)</option>
                                <option value="JAM +1876">Jamaica (+1876)</option>
                                <option value="JPN +81">Japan (+81)</option>
                                <option value="JEY +441534">Jersey (+441534)</option>
                                <option value="JOR +962">Jordan (+962)</option>
                                <option value="KAZ +7">Kazakhstan (+7)</option>
                                <option value="KEN +254">Kenya (+254)</option>
                                <option value="KIR +686">Kiribati (+686)</option>
                                <option value="XKX +383">Kosovo (+383)</option>
                                <option value="KWT +965">Kuwait (+965)</option>
                                <option value="KGZ +996">Kyrgyzstan (+996)</option>
                                <option value="LAO +856">Laos (+856)</option>
                                <option value="LVA +371">Latvia (+371)</option>
                                <option value="LBN +961">Lebanon (+961)</option>
                                <option value="LSO +266">Lesotho (+266)</option>
                                <option value="LBR +231">Liberia (+231)</option>
                                <option value="LBY +218">Libya (+218)</option>
                                <option value="LIE +423">Liechtenstein (+423)</option>
                                <option value="LTU +370">Lithuania (+370)</option>
                                <option value="LUX +352">Luxembourg (+352)</option>
                                <option value="MAC +853">Macau S.A.R. (+853)</option>
                                <option value="MDG +261">Madagascar (+261)</option>
                                <option value="MWI +265">Malawi (+265)</option>
                                <option value="MYS +60">Malaysia (+60)</option>
                                <option value="MDV +960">Maldives (+960)</option>
                                <option value="MLI +223">Mali (+223)</option>
                                <option value="MLT +356">Malta (+356)</option>
                                <option value="IMN +441624">Man (Isle of) (+441624)</option>
                                <option value="MHL +692">Marshall Islands (+692)</option>
                                <option value="MTQ +596">Martinique (+596)</option>
                                <option value="MRT +222">Mauritania (+222)</option>
                                <option value="MUS +230">Mauritius (+230)</option>
                                <option value="MYT +262">Mayotte (+262)</option>
                                <option value="MEX +52">Mexico (+52)</option>
                                <option value="FSM +691">Micronesia (+691)</option>
                                <option value="MDA +373">Moldova (+373)</option>
                                <option value="MCO +377">Monaco (+377)</option>
                                <option value="MNG +976">Mongolia (+976)</option>
                                <option value="MNE +382">Montenegro (+382)</option>
                                <option value="MSR +1664">Montserrat (+1664)</option>
                                <option value="MAR +212">Morocco (+212)</option>
                                <option value="MOZ +258">Mozambique (+258)</option>
                                <option value="MMR +95">Myanmar (+95)</option>
                                <option value="NAM +264">Namibia (+264)</option>
                                <option value="NRU +674">Nauru (+674)</option>
                                <option value="NPL +977">Nepal (+977)</option>
                                <option value="NLD +31">Netherlands (+31)</option>
                                <option value="NCL +687">New Caledonia (+687)</option>
                                <option value="NZL +64">New Zealand (+64)</option>
                                <option value="NIC +505">Nicaragua (+505)</option>
                                <option value="NER +227">Niger (+227)</option>
                                <option value="NGA +234">Nigeria (+234)</option>
                                <option value="NIU +683">Niue (+683)</option>
                                <option value="NFK +672">Norfolk Island (+672)</option>
                                <option value="PRK +850">North Korea (+850)</option>
                                <option value="MKD +389">North Macedonia (+389)</option>
                                <option value="MNP +1670">Northern Mariana Islands (+1670)</option>
                                <option value="NOR +47">Norway (+47)</option>
                                <option value="OMN +968">Oman (+968)</option>
                                <option value="PAK +92">Pakistan (+92)</option>
                                <option value="PLW +680">Palau (+680)</option>
                                <option value="PSE +970">Palestinian Territory Occupied (+970)</option>
                                <option value="PAN +507">Panama (+507)</option>
                                <option value="PNG +675">Papua new Guinea (+675)</option>
                                <option value="PRY +595">Paraguay (+595)</option>
                                <option value="PER +51">Peru (+51)</option>
                                <option value="PHL +63">Philippines (+63)</option>
                                <option value="PCN +870">Pitcairn Island (+870)</option>
                                <option value="POL +48">Poland (+48)</option>
                                <option value="PRT +351">Portugal (+351)</option>
                                <option value="PRI +1787">Puerto Rico (+1787)</option>
                                <option value="QAT +974">Qatar (+974)</option>
                                <option value="REU +262">Reunion (+262)</option>
                                <option value="ROU +40">Romania (+40)</option>
                                <option value="RUS +7">Russia (+7)</option>
                                <option value="RWA +250">Rwanda (+250)</option>
                                <option value="SHN +290">Saint Helena (+290)</option>
                                <option value="KNA +1869">Saint Kitts And Nevis (+1869)</option>
                                <option value="LCA +1758">Saint Lucia (+1758)</option>
                                <option value="SPM +508">Saint Pierre and Miquelon (+508)</option>
                                <option value="VCT +1784">Saint Vincent And The Grenadines (+1784)</option>
                                <option value="BLM +590">Saint-Barthelemy (+590)</option>
                                <option value="MAF +590">Saint-Martin (French part) (+590)</option>
                                <option value="WSM +685">Samoa (+685)</option>
                                <option value="SMR +378">San Marino (+378)</option>
                                <option value="STP +239">Sao Tome and Principe (+239)</option>
                                <option value="SAU +966">Saudi Arabia (+966)</option>
                                <option value="SCH +null">Schengen (+null)</option>
                                <option value="SEN +221">Senegal (+221)</option>
                                <option value="SRB +381">Serbia (+381)</option>
                                <option value="SYC +248">Seychelles (+248)</option>
                                <option value="SLE +232">Sierra Leone (+232)</option>
                                <option value="SGP +65">Singapore (+65)</option>
                                <option value="SXM +1721">Sint Maarten (Dutch part) (+1721)</option>
                                <option value="SVK +421">Slovakia (+421)</option>
                                <option value="SVN +386">Slovenia (+386)</option>
                                <option value="SLB +677">Solomon Islands (+677)</option>
                                <option value="SOM +252">Somalia (+252)</option>
                                <option value="ZAF +27">South Africa (+27)</option>
                                <option value="SGS +500">South Georgia (+500)</option>
                                <option value="KOR +82">South Korea (+82)</option>
                                <option value="SSD +211">South Sudan (+211)</option>
                                <option value="ESP +34">Spain (+34)</option>
                                <option value="LKA +94">Sri Lanka (+94)</option>
                                <option value="SDN +249">Sudan (+249)</option>
                                <option value="SUR +597">Suriname (+597)</option>
                                <option value="SJM +47">Svalbard And Jan Mayen Islands (+47)</option>
                                <option value="SWZ +268">Swaziland (+268)</option>
                                <option value="SWE +46">Sweden (+46)</option>
                                <option value="CHE +41">Switzerland (+41)</option>
                                <option value="SYR +963">Syria (+963)</option>
                                <option value="TWN +886">Taiwan (+886)</option>
                                <option value="TJK +992">Tajikistan (+992)</option>
                                <option value="TZA +255">Tanzania (+255)</option>
                                <option value="THA +66">Thailand (+66)</option>
                                <option value="BHS +1242">The Bahamas (+1242)</option>
                                <option value="TGO +228">Togo (+228)</option>
                                <option value="TKL +690">Tokelau (+690)</option>
                                <option value="TON +676">Tonga (+676)</option>
                                <option value="TTO +1868">Trinidad And Tobago (+1868)</option>
                                <option value="TUN +216">Tunisia (+216)</option>
                                <option value="TUR +90">Turkey (+90)</option>
                                <option value="TKM +993">Turkmenistan (+993)</option>
                                <option value="TCA +1649">Turks And Caicos Islands (+1649)</option>
                                <option value="TUV +688">Tuvalu (+688)</option>
                                <option value="UGA +256">Uganda (+256)</option>
                                <option value="UKR +380">Ukraine (+380)</option>
                                <option value="ARE +971">United Arab Emirates (+971)</option>
                                <option value="GBR +44">United Kingdom (+44)</option>
                                <option value="USA +1">USA (+1)</option>
                                <option value="UMI +1">United States Minor Outlying Islands (+1)</option>
                                <option value="URY +598">Uruguay (+598)</option>
                                <option value="UZB +998">Uzbekistan (+998)</option>
                                <option value="VUT +678">Vanuatu (+678)</option>
                                <option value="VAT +379">Vatican City State (Holy See) (+379)</option>
                                <option value="VEN +58">Venezuela (+58)</option>
                                <option value="VNM +84">Vietnam (+84)</option>
                                <option value="VGB +1284">Virgin Islands (British) (+1284)</option>
                                <option value="VIR +1340">Virgin Islands (US) (+1340)</option>
                                <option value="WLF +681">Wallis And Futuna Islands (+681)</option>
                                <option value="ESH +212">Western Sahara (+212)</option>
                                <option value="YEM +967">Yemen (+967)</option>
                                <option value="ZMB +260">Zambia (+260)</option>
                                <option value="ZWE +263">Zimbabwe (+263)</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.countryCode}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="mobileNumber">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Mobile No."
                                name="mobileNumber"
                                value={formValues.mobileNumber}
                                onChange={handleChange}
                                isInvalid={!!errors.mobileNumber}
                                maxLength="10"
                            />
                            <Form.Control.Feedback type="invalid">{errors.mobileNumber}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group controlId="whatsappToggle" className="mb-2">
                    <Form.Check
                        type="switch"
                        label="Use this as WhatsApp number"
                        checked={formValues.whatsappEnabled}
                        onChange={handleWhatsappToggle}
                    />
                </Form.Group>

                {!formValues.whatsappEnabled && (
                    <Row className="mb-2">
                        <Col md={5}>
                            <Form.Group controlId="whatsappCode">
                                <Form.Select
                                    name="whatsappCode"
                                    value={formValues.whatsappCode}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Country Code</option>
                                    <option value="">ALB +355</option>
                                    <option value="AFG +93">Afghanistan (+93)</option>
                                    <option value="ALA +35818">Aland Islands (+35818)</option>
                                    <option value="ALB +355">Albania (+355)</option>
                                    <option value="DZA +213">Algeria (+213)</option>
                                    <option value="ASM +1684">American Samoa (+1684)</option>
                                    <option value="AND +376">Andorra (+376)</option>
                                    <option value="AGO +244">Angola (+244)</option>
                                    <option value="AIA +1264">Anguilla (+1264)</option>
                                    <option value="ATA +672">Antarctica (+672)</option>
                                    <option value="ATG +1268">Antigua And Barbuda (+1268)</option>
                                    <option value="ARG +54">Argentina (+54)</option>
                                    <option value="ARM +374">Armenia (+374)</option>
                                    <option value="ABW +297">Aruba (+297)</option>
                                    <option value="AUS +61">Australia (+61)</option>
                                    <option value="AUT +43">Austria (+43)</option>
                                    <option value="AZE +994">Azerbaijan (+994)</option>
                                    <option value="BHR +973">Bahrain (+973)</option>
                                    <option value="BGD +880">Bangladesh (+880)</option>
                                    <option value="BRB +1246">Barbados (+1246)</option>
                                    <option value="BLR +375">Belarus (+375)</option>
                                    <option value="BEL +32">Belgium (+32)</option>
                                    <option value="BLZ +501">Belize (+501)</option>
                                    <option value="BEN +229">Benin (+229)</option>
                                    <option value="BMU +1441">Bermuda (+1441)</option>
                                    <option value="BTN +975">Bhutan (+975)</option>
                                    <option value="BOL +591">Bolivia (+591)</option>
                                    <option value="BES +599">Bonaire, Sint Eustatius and Saba (+599)</option>
                                    <option value="BIH +387">Bosnia and Herzegovina (+387)</option>
                                    <option value="BWA +267">Botswana (+267)</option>
                                    <option value="BVT +0055">Bouvet Island (+0055)</option>
                                    <option value="BRA +55">Brazil (+55)</option>
                                    <option value="IOT +246">British Indian Ocean Territory (+246)</option>
                                    <option value="BRN +673">Brunei (+673)</option>
                                    <option value="BGR +359">Bulgaria (+359)</option>
                                    <option value="BFA +226">Burkina Faso (+226)</option>
                                    <option value="BDI +257">Burundi (+257)</option>
                                    <option value="KHM +855">Cambodia (+855)</option>
                                    <option value="CMR +237">Cameroon (+237)</option>
                                    <option value="CAN +1">Canada (+1)</option>
                                    <option value="CPV +238">Cape Verde (+238)</option>
                                    <option value="CYM +1345">Cayman Islands (+1345)</option>
                                    <option value="CAF +236">Central African Republic (+236)</option>
                                    <option value="TCD +235">Chad (+235)</option>
                                    <option value="CHL +56">Chile (+56)</option>
                                    <option value="CHN +86">China (+86)</option>
                                    <option value="CXR +61">Christmas Island (+61)</option>
                                    <option value="CCK +61">Cocos (Keeling) Islands (+61)</option>
                                    <option value="COL +57">Colombia (+57)</option>
                                    <option value="COM +269">Comoros (+269)</option>
                                    <option value="COG +242">Congo (+242)</option>
                                    <option value="COK +682">Cook Islands (+682)</option>
                                    <option value="CRI +506">Costa Rica (+506)</option>
                                    <option value="CIV +225">Cote D'Ivoire (Ivory Coast) (+225)</option>
                                    <option value="HRV +385">Croatia (+385)</option>
                                    <option value="CUB +53">Cuba (+53)</option>
                                    <option value="CUW +599">Curaçao (+599)</option>
                                    <option value="CYP +357">Cyprus (+357)</option>
                                    <option value="CZE +420">Czech Republic (+420)</option>
                                    <option value="COD +243">Democratic Republic of the Congo (+243)</option>
                                    <option value="DNK +45">Denmark (+45)</option>
                                    <option value="DJI +253">Djibouti (+253)</option>
                                    <option value="DMA +1767">Dominica (+1767)</option>
                                    <option value="DOM +1809">Dominican Republic (+1809)</option>
                                    <option value="TLS +670">East Timor (+670)</option>
                                    <option value="ECU +593">Ecuador (+593)</option>
                                    <option value="EGY +20">Egypt (+20)</option>
                                    <option value="SLV +503">El Salvador (+503)</option>
                                    <option value="GNQ +240">Equatorial Guinea (+240)</option>
                                    <option value="ERI +291">Eritrea (+291)</option>
                                    <option value="EST +372">Estonia (+372)</option>
                                    <option value="ETH +251">Ethiopia (+251)</option>
                                    <option value="FLK +500">Falkland Islands (+500)</option>
                                    <option value="FRO +298">Faroe Islands (+298)</option>
                                    <option value="FJI +679">Fiji Islands (+679)</option>
                                    <option value="FIN +358">Finland (+358)</option>
                                    <option value="FRA +33">France (+33)</option>
                                    <option value="GUF +594">French Guiana (+594)</option>
                                    <option value="PYF +689">French Polynesia (+689)</option>
                                    <option value="ATF +262">French Southern Territories (+262)</option>
                                    <option value="GAB +241">Gabon (+241)</option>
                                    <option value="GMB +220">Gambia The (+220)</option>
                                    <option value="GEO +995">Georgia (+995)</option>
                                    <option value="DEU +49">Germany (+49)</option>
                                    <option value="GHA +233">Ghana (+233)</option>
                                    <option value="GIB +350">Gibraltar (+350)</option>
                                    <option value="GRC +30">Greece (+30)</option>
                                    <option value="GRL +299">Greenland (+299)</option>
                                    <option value="GRD +1473">Grenada (+1473)</option>
                                    <option value="GLP +590">Guadeloupe (+590)</option>
                                    <option value="GUM +1671">Guam (+1671)</option>
                                    <option value="GTM +502">Guatemala (+502)</option>
                                    <option value="GGY +441481">Guernsey and Alderney (+441481)</option>
                                    <option value="GIN +224">Guinea (+224)</option>
                                    <option value="GNB +245">Guinea-Bissau (+245)</option>
                                    <option value="GUY +592">Guyana (+592)</option>
                                    <option value="HTI +509">Haiti (+509)</option>
                                    <option value="HMD +672">Heard Island and McDonald Islands (+672)</option>
                                    <option value="HND +504">Honduras (+504)</option>
                                    <option value="HKG +852">Hong Kong S.A.R. (+852)</option>
                                    <option value="HUN +36">Hungary (+36)</option>
                                    <option value="ISL +354">Iceland (+354)</option>
                                    <option value="IND +91">India (+91)</option>
                                    <option value="IDN +62">Indonesia (+62)</option>
                                    <option value="IRN +98">Iran (+98)</option>
                                    <option value="IRQ +964">Iraq (+964)</option>
                                    <option value="IRL +353">Ireland (+353)</option>
                                    <option value="ISR +972">Israel (+972)</option>
                                    <option value="ITA +39">Italy (+39)</option>
                                    <option value="JAM +1876">Jamaica (+1876)</option>
                                    <option value="JPN +81">Japan (+81)</option>
                                    <option value="JEY +441534">Jersey (+441534)</option>
                                    <option value="JOR +962">Jordan (+962)</option>
                                    <option value="KAZ +7">Kazakhstan (+7)</option>
                                    <option value="KEN +254">Kenya (+254)</option>
                                    <option value="KIR +686">Kiribati (+686)</option>
                                    <option value="XKX +383">Kosovo (+383)</option>
                                    <option value="KWT +965">Kuwait (+965)</option>
                                    <option value="KGZ +996">Kyrgyzstan (+996)</option>
                                    <option value="LAO +856">Laos (+856)</option>
                                    <option value="LVA +371">Latvia (+371)</option>
                                    <option value="LBN +961">Lebanon (+961)</option>
                                    <option value="LSO +266">Lesotho (+266)</option>
                                    <option value="LBR +231">Liberia (+231)</option>
                                    <option value="LBY +218">Libya (+218)</option>
                                    <option value="LIE +423">Liechtenstein (+423)</option>
                                    <option value="LTU +370">Lithuania (+370)</option>
                                    <option value="LUX +352">Luxembourg (+352)</option>
                                    <option value="MAC +853">Macau S.A.R. (+853)</option>
                                    <option value="MDG +261">Madagascar (+261)</option>
                                    <option value="MWI +265">Malawi (+265)</option>
                                    <option value="MYS +60">Malaysia (+60)</option>
                                    <option value="MDV +960">Maldives (+960)</option>
                                    <option value="MLI +223">Mali (+223)</option>
                                    <option value="MLT +356">Malta (+356)</option>
                                    <option value="IMN +441624">Man (Isle of) (+441624)</option>
                                    <option value="MHL +692">Marshall Islands (+692)</option>
                                    <option value="MTQ +596">Martinique (+596)</option>
                                    <option value="MRT +222">Mauritania (+222)</option>
                                    <option value="MUS +230">Mauritius (+230)</option>
                                    <option value="MYT +262">Mayotte (+262)</option>
                                    <option value="MEX +52">Mexico (+52)</option>
                                    <option value="FSM +691">Micronesia (+691)</option>
                                    <option value="MDA +373">Moldova (+373)</option>
                                    <option value="MCO +377">Monaco (+377)</option>
                                    <option value="MNG +976">Mongolia (+976)</option>
                                    <option value="MNE +382">Montenegro (+382)</option>
                                    <option value="MSR +1664">Montserrat (+1664)</option>
                                    <option value="MAR +212">Morocco (+212)</option>
                                    <option value="MOZ +258">Mozambique (+258)</option>
                                    <option value="MMR +95">Myanmar (+95)</option>
                                    <option value="NAM +264">Namibia (+264)</option>
                                    <option value="NRU +674">Nauru (+674)</option>
                                    <option value="NPL +977">Nepal (+977)</option>
                                    <option value="NLD +31">Netherlands (+31)</option>
                                    <option value="NCL +687">New Caledonia (+687)</option>
                                    <option value="NZL +64">New Zealand (+64)</option>
                                    <option value="NIC +505">Nicaragua (+505)</option>
                                    <option value="NER +227">Niger (+227)</option>
                                    <option value="NGA +234">Nigeria (+234)</option>
                                    <option value="NIU +683">Niue (+683)</option>
                                    <option value="NFK +672">Norfolk Island (+672)</option>
                                    <option value="PRK +850">North Korea (+850)</option>
                                    <option value="MKD +389">North Macedonia (+389)</option>
                                    <option value="MNP +1670">Northern Mariana Islands (+1670)</option>
                                    <option value="NOR +47">Norway (+47)</option>
                                    <option value="OMN +968">Oman (+968)</option>
                                    <option value="PAK +92">Pakistan (+92)</option>
                                    <option value="PLW +680">Palau (+680)</option>
                                    <option value="PSE +970">Palestinian Territory Occupied (+970)</option>
                                    <option value="PAN +507">Panama (+507)</option>
                                    <option value="PNG +675">Papua new Guinea (+675)</option>
                                    <option value="PRY +595">Paraguay (+595)</option>
                                    <option value="PER +51">Peru (+51)</option>
                                    <option value="PHL +63">Philippines (+63)</option>
                                    <option value="PCN +870">Pitcairn Island (+870)</option>
                                    <option value="POL +48">Poland (+48)</option>
                                    <option value="PRT +351">Portugal (+351)</option>
                                    <option value="PRI +1787">Puerto Rico (+1787)</option>
                                    <option value="QAT +974">Qatar (+974)</option>
                                    <option value="REU +262">Reunion (+262)</option>
                                    <option value="ROU +40">Romania (+40)</option>
                                    <option value="RUS +7">Russia (+7)</option>
                                    <option value="RWA +250">Rwanda (+250)</option>
                                    <option value="SHN +290">Saint Helena (+290)</option>
                                    <option value="KNA +1869">Saint Kitts And Nevis (+1869)</option>
                                    <option value="LCA +1758">Saint Lucia (+1758)</option>
                                    <option value="SPM +508">Saint Pierre and Miquelon (+508)</option>
                                    <option value="VCT +1784">Saint Vincent And The Grenadines (+1784)</option>
                                    <option value="BLM +590">Saint-Barthelemy (+590)</option>
                                    <option value="MAF +590">Saint-Martin (French part) (+590)</option>
                                    <option value="WSM +685">Samoa (+685)</option>
                                    <option value="SMR +378">San Marino (+378)</option>
                                    <option value="STP +239">Sao Tome and Principe (+239)</option>
                                    <option value="SAU +966">Saudi Arabia (+966)</option>
                                    <option value="SCH +null">Schengen (+null)</option>
                                    <option value="SEN +221">Senegal (+221)</option>
                                    <option value="SRB +381">Serbia (+381)</option>
                                    <option value="SYC +248">Seychelles (+248)</option>
                                    <option value="SLE +232">Sierra Leone (+232)</option>
                                    <option value="SGP +65">Singapore (+65)</option>
                                    <option value="SXM +1721">Sint Maarten (Dutch part) (+1721)</option>
                                    <option value="SVK +421">Slovakia (+421)</option>
                                    <option value="SVN +386">Slovenia (+386)</option>
                                    <option value="SLB +677">Solomon Islands (+677)</option>
                                    <option value="SOM +252">Somalia (+252)</option>
                                    <option value="ZAF +27">South Africa (+27)</option>
                                    <option value="SGS +500">South Georgia (+500)</option>
                                    <option value="KOR +82">South Korea (+82)</option>
                                    <option value="SSD +211">South Sudan (+211)</option>
                                    <option value="ESP +34">Spain (+34)</option>
                                    <option value="LKA +94">Sri Lanka (+94)</option>
                                    <option value="SDN +249">Sudan (+249)</option>
                                    <option value="SUR +597">Suriname (+597)</option>
                                    <option value="SJM +47">Svalbard And Jan Mayen Islands (+47)</option>
                                    <option value="SWZ +268">Swaziland (+268)</option>
                                    <option value="SWE +46">Sweden (+46)</option>
                                    <option value="CHE +41">Switzerland (+41)</option>
                                    <option value="SYR +963">Syria (+963)</option>
                                    <option value="TWN +886">Taiwan (+886)</option>
                                    <option value="TJK +992">Tajikistan (+992)</option>
                                    <option value="TZA +255">Tanzania (+255)</option>
                                    <option value="THA +66">Thailand (+66)</option>
                                    <option value="BHS +1242">The Bahamas (+1242)</option>
                                    <option value="TGO +228">Togo (+228)</option>
                                    <option value="TKL +690">Tokelau (+690)</option>
                                    <option value="TON +676">Tonga (+676)</option>
                                    <option value="TTO +1868">Trinidad And Tobago (+1868)</option>
                                    <option value="TUN +216">Tunisia (+216)</option>
                                    <option value="TUR +90">Turkey (+90)</option>
                                    <option value="TKM +993">Turkmenistan (+993)</option>
                                    <option value="TCA +1649">Turks And Caicos Islands (+1649)</option>
                                    <option value="TUV +688">Tuvalu (+688)</option>
                                    <option value="UGA +256">Uganda (+256)</option>
                                    <option value="UKR +380">Ukraine (+380)</option>
                                    <option value="ARE +971">United Arab Emirates (+971)</option>
                                    <option value="GBR +44">United Kingdom (+44)</option>
                                    <option value="USA +1">USA (+1)</option>
                                    <option value="UMI +1">United States Minor Outlying Islands (+1)</option>
                                    <option value="URY +598">Uruguay (+598)</option>
                                    <option value="UZB +998">Uzbekistan (+998)</option>
                                    <option value="VUT +678">Vanuatu (+678)</option>
                                    <option value="VAT +379">Vatican City State (Holy See) (+379)</option>
                                    <option value="VEN +58">Venezuela (+58)</option>
                                    <option value="VNM +84">Vietnam (+84)</option>
                                    <option value="VGB +1284">Virgin Islands (British) (+1284)</option>
                                    <option value="VIR +1340">Virgin Islands (US) (+1340)</option>
                                    <option value="WLF +681">Wallis And Futuna Islands (+681)</option>
                                    <option value="ESH +212">Western Sahara (+212)</option>
                                    <option value="YEM +967">Yemen (+967)</option>
                                    <option value="ZMB +260">Zambia (+260)</option>
                                    <option value="ZWE +263">Zimbabwe (+263)</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="whatsappNumber">
                                <Form.Control
                                    type="text"
                                    placeholder="Mobile No."
                                    name="whatsappNumber"
                                    value={formValues.whatsappNumber}
                                    onChange={handleChange}
                                    isInvalid={!!errors.whatsappNumber}
                                    maxLength="10"
                                />
                                <Form.Control.Feedback type="invalid">{errors.whatsappNumber}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                )}

                <Form.Group controlId="terms" className="mb-2">
                    <Form.Check
                        type="checkbox"
                        label="I accept the Terms & Conditions"
                        name="acceptTerms"
                        checked={formValues.acceptTerms}
                        onChange={handleChange}
                        isInvalid={!!errors.acceptTerms}
                    />
                    <Form.Control.Feedback type="invalid">{errors.acceptTerms}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Submit
                </Button>
                <div className="free_consultation" style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px', alignItems: 'center' }}>
                    <img src={ConsultationIcon} alt="ConsultationIcon" style={{ width: '40px' }} />
                    <h4 style={{ color: 'tomato', fontSize: '15px', cursor: 'pointer', marginTop: '10px', textAlign: 'center' }} onClick={handleModalShow} >Get Free Consultation</h4>
                </div>

            </Form>
            <ToastContainer />
            <ConsultationModal show={modalShow} handleClose={handleModalClose} />

        </>
    );
}
export default RegistrationForm;
