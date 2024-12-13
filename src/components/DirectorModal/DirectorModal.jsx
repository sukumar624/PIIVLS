import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modal.css';

const DirectorModal = ({ isOpen, onClose, director }) => {
    return (
        <Modal show={isOpen} onHide={onClose} centered animation>
            <Modal.Header closeButton >
                {/* <Modal.Title>{director?.name || "Modal Title"}</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                {/* Display dynamic image */}
                {director?.imageSrc && (
                    <div className="modal-image-wrapper">
                        <div className="director_img_box">
                            <img
                                src={director.imageSrc}
                                alt={director.name}
                                className="modal-image"
                            />
                        </div>
                        <div className="designation_info">
                            <h4>{director?.name || "Title"}</h4>
                            <span>{director?.designation || "Designation"}</span>
                        </div>
                    </div>
                )}
                {/* Display messages */}
                <div className="modal_body_content">
                    {director?.messages
                        ? director.messages.map((msg, index) => <p key={index}>{msg}</p>)
                        : "No content available"}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DirectorModal;
