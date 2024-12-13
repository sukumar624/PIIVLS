import React, { useState } from 'react';
import './worth.css';
function Worth() {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');

    const handleJobTitleChange = (event) => {
        setJobTitle(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = () => {
        // Handle form submission here, e.g., send data to an API
        console.log('Job Title:', jobTitle);
        console.log('Location:', location);
    };

    return (
        <div className="worth_area">
            <div className="container">
                <div className="sub_heading text-center mb-5">
                    <h2>What Are <span>You Worth</span></h2>
                    <p className="text-center mb-4">
                        Choose desired profession and find average salary range in different countries.
                    </p>
                </div>

                <form>
                    <div className="row justify-content-center">
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="input_group">
                                        <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                        <select
                                            className="form-select"
                                            id="jobTitle"
                                            value={jobTitle}
                                            onChange={handleJobTitleChange}
                                        >
                                            <option value="">Select Job Title</option>
                                            <option value="developer">Software Developer</option>
                                            <option value="designer">UI/UX Designer</option>
                                            <option value="manager">Project Manager</option>
                                            <option value="analyst">Business Analyst</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="input_group">
                                        <label htmlFor="location" className="form-label">Location</label>
                                        <select
                                            className="form-select"
                                            id="location"
                                            value={location}
                                            onChange={handleLocationChange}
                                        >
                                            <option value="">Select Location</option>
                                            <option value="us">United States</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="ca">Canada</option>
                                            <option value="au">Australia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-2" style={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>
                                        Find Salary
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
}

export default Worth;