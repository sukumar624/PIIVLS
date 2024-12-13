import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './workopportunity.css';
const WorkOpportunity = () => {
    return (
        <div className="work_opportunity_area py-5">
            <Container>
                <h2 className="text-center mb-4">Work Opportunity</h2>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Form className="d-flex gap-2">
                            <Form.Control
                                type="text"
                                placeholder="Search Careers"
                                className="me-2"
                                style={{ height: '50px' }}
                            />
                            <Form.Select
                                aria-label="Select Country"
                                className="me-2"
                                style={{ height: '50px' }}
                            >
                                <option>Select Country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="GB">United Kingdom</option>
                                <option value="AU">Australia</option>
                                {/* Add more countries as needed */}
                            </Form.Select>
                            <Button
                                variant="danger"
                                style={{ height: '50px', padding: '0 30px' }}
                            >
                                Search
                            </Button>
                        </Form>
                        <p className="text-center mt-3">
                            Post your Resume - <strong>Your overseas job search starts here.</strong>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WorkOpportunity;
