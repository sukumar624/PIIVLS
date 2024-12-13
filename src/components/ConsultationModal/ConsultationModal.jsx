import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import Linkedin from '../../assets/images/linkedin.png';
import Google from '../../assets/images/google.png';
import axios from 'axios'; // Make sure to import axios
import { toast } from 'react-toastify'; // Import toast for success notifications

const ConsultationModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    countryCode: "",
    whatsappNumber: "",
    whatsappCode: "",
    useWhatsAppNumber: false,
    termsAccepted: false,
  });

  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+33", country: "France" },
    // Add more countries and their respective codes
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      // If 'useWhatsAppNumber' is checked, set WhatsApp fields to phone fields
      if (name === "useWhatsAppNumber" && checked) {
        updatedData.whatsappNumber = updatedData.mobileNumber;
        updatedData.whatsappCode = updatedData.countryCode;
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.termsAccepted
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Prepare the data to be sent
    const data = { ...formData, useWhatsApp: formData.useWhatsAppNumber };

    const formData1 = new FormData();
    formData1.append("firstName", data.firstName);
    formData1.append("lastName", data.lastName);
    formData1.append("email", data.email);
    formData1.append("mobileNumber", data.mobileNumber);
    formData1.append("countryCode", data.countryCode);
    formData1.append("whatsappCode", data.whatsappCode || "NA");
    formData1.append("whatsappNumber", data.whatsappNumber || "NA");

    try {
      // Send the POST request
      const response = await axios.post(
        "https://piivls.com/new/api/consultation_api.php",
        formData1,
        {
          headers: {
            "Content-Type": "multipart/form-data", // FormData requires this content type
          },
        }
      );

      // Show success notification
      toast.success("Form submitted successfully!");

      // Reset form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        countryCode: "",
        whatsappNumber: "",
        whatsappCode: "",
        useWhatsAppNumber: false,
        termsAccepted: false,
      });

      handleClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="p-4">
        <Modal.Title>Get Free Consultation!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center mb-3">
            <Button variant="light" className="me-2">
              <img src={Linkedin} alt="LinkedIn" width="30" />
            </Button>
            <Button variant="light">
              <img src={Google} alt="Google" width="30" />
            </Button>
          </div>

          {/* First Name and Last Name */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={12}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            {/* Phone Number */}
            <Col sm={12}>
              <Row className="g-3">
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="select"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="me-2"
                      required
                    >
                      <option value="">Country Code</option>
                      {countryCodes.map((code) => (
                        <option key={code.code} value={code.code}>
                          {code.country} ({code.code})
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={8}>
                  <Form.Group>
                    <Form.Control
                      type="tel"
                      placeholder="Phone Number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>

            {/* WhatsApp Number */}
            <Col sm={12}>
              {!formData.useWhatsAppNumber && (
                <Row className="g-3">
                  <Col sm={4}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="select"
                        name="whatsappCode"
                        value={formData.whatsappCode}
                        onChange={handleChange}
                      >
                        <option value="">WhatsApp Code</option>
                        {countryCodes.map((code) => (
                          <option key={code.code} value={code.code}>
                            {code.country} ({code.code})
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col sm={8}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="tel"
                        placeholder="WhatsApp Number"
                        name="whatsappNumber"
                        value={formData.whatsappNumber || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>

          {/* Toggle: Use WhatsApp Number */}
          <Form.Group className="mb-3 d-flex align-items-center">
            <div className="form-switch">
              <input
                type="checkbox"
                className="form-check-input toggle-switch"
                name="useWhatsAppNumber"
                checked={formData.useWhatsAppNumber}
                onChange={handleChange}
              />
            </div>
            <span className="me-2">Use this as WhatsApp number</span>
          </Form.Group>

          {/* Terms & Conditions */}
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="I accept the Terms & Conditions"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ConsultationModal;
