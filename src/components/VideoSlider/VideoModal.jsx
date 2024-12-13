import React, { useEffect, useState } from "react";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowAnimation(true);
        } else {
            setTimeout(() => setShowAnimation(false), 500); // Match the animation duration
        }
    }, [isOpen]);

    if (!showAnimation) return null;

    return (
        <div style={modalStyles.overlay}>
            <div
                style={{
                    ...modalStyles.modal,
                    animation: isOpen ? "slideFromTop 0.5s ease-out" : "slideToTop 0.5s ease-in",
                }}
            >
                <button style={modalStyles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <video controls autoPlay style={{ width: "100%" }}>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        overflow: "hidden",
    },
    modal: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "80%",
        maxWidth: "600px",
        position: "relative",
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "transparent",
        border: "none",
        fontSize: "24px",
        cursor: "pointer",
    },
};

export default VideoModal;
