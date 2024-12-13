import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import axios from 'axios';
import { countries } from '../../data/countries';
import { visadata } from '../../data/visadata';
import { countrycode } from '../../data/countrycode';
import { whatsappCode } from '../../data/whatappcode';
const ContactForm = () => {
    const [useWhatsApp, setUseWhatsApp] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        visa: '',
        countryCode: '',
        mobileNumber: '',
        email: '',
        whatsappCode: '',
        whatsappMobile: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleWhatsAppToggle = (e) => {
        const checked = e.target.checked;
        setUseWhatsApp(checked);

        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                countryCode: prevData.countryCode,
                whatsappMobile: prevData.mobileNumber // Fix here
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                countryCode: '',
                whatsappMobile: '' // Fix here
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simple validation before submission
        if (!formData.firstName || !formData.lastName || !formData.country || !formData.email || !acceptTerms) {
            setError('Please fill in all required fields and accept the terms.');
            toast.error('Please fill in all required fields and accept the terms.'); // Show error toast
            return;
        }

        if (!useWhatsApp && !formData.mobileNumber) { // Fix here
            setError('Please enter a mobile number.');
            toast.error('Please enter a mobile number.'); // Show error toast
            return;
        }

        setError('');
        setLoading(true);

        const data = { ...formData, useWhatsApp };

        const formData1 = new FormData();
        formData1.append("firstName", data.firstName);
        formData1.append("lastName", data.lastName);
        formData1.append("country", data.country);
        formData1.append("visa", data.visa);
        formData1.append("countryCode", data.countryCode);
        formData1.append("mobileNumber", data.mobileNumber);
        formData1.append("email", data.email);
        formData1.append("whatsappCode", data.whatsappCode ? data.whatsappCode : "NA");
        formData1.append("whatsappNumber", data.whatsappNumber ? data.whatsappNumber : "NA");

        try {
            const response = await axios.post("https://piivls.com/new/api/contact_api.php", formData1, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // console.log("Mail Send successfully:", response);
            toast.success("Form submitted successfully");
            setFormData({
                firstName: '',
                lastName: '',
                country: '',
                visa: '',
                countryCode: '',
                mobileNumber: '',
                email: '',
                whatsappCode: '',
                whatsappNumber: '',
            });

        } catch (error) {
            console.error("Error adding team:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <label htmlFor="country" className="form-label">Select Country</label>
                        <select
                            className="form-select"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        >
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="visa" className="form-label">Select Visa</label>
                        <select
                            className="form-select"
                            id="visa"
                            name="visa"
                            value={formData.visa}
                            onChange={handleChange}
                            required
                        >
                            {visadata.map((visa) => (
                                <option key={visa.value} value={visa.value}>
                                    {visa.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <label htmlFor="countryCode" className="form-label">Country Code</label>
                        <select
                            className="form-select"
                            id="countryCode"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            required
                        >
                            {countrycode.map((country) => (
                                <option key={country.code} value={country.dialCode}>
                                    {`${country.name} (${country.dialCode})`}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="mobileNumber" className="form-label">Mobile No.</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="Mobile No."
                            required
                            disabled={useWhatsApp}
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <div className="form-check form-switch">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="whatsapp"
                            checked={useWhatsApp}
                            onChange={handleWhatsAppToggle}
                        />
                        <label className="form-check-label" htmlFor="whatsapp">
                            Use this as WhatsApp number
                        </label>
                    </div>
                </div>

                {useWhatsApp && (
                    <div className="row g-3 mb-3">
                        <div className="col-md-6">
                            <label htmlFor="whatsappCode" className="form-label">WhatsApp Country Code</label>
                            <select
                                className="form-select"
                                id="whatsappCode"
                                name="whatsappCode"
                                value={formData.whatsappCode}
                                onChange={handleChange}
                                required
                            >
                                {whatsappCode.map((country) => (
                                    <option key={country.code} value={country.dialCode}>
                                        {`${country.name} (${country.dialCode})`}
                                    </option>
                                ))}

                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="whatsappNumber" className="form-label">WhatsApp Mobile No.</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="whatsappNumber"
                                name="whatsappNumber"
                                value={formData.whatsappNumber}
                                onChange={handleChange}
                                placeholder="Mobile No."
                                required
                            />
                        </div>
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="terms"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            required
                        />
                        <label className="form-check-label" htmlFor="terms">
                            I accept the <a href="#" className="text-primary">Terms & Conditions</a>
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={!acceptTerms || loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {/* ToastContainer to render toasts */}
            <ToastContainer />
        </div>
    );
}
export default ContactForm;