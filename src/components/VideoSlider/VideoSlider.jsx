import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from 'swiper/modules';
import VideoModal from "./VideoModal";
import Subheading from "../Subheading/Subheading";
const videoData = [
    {
        id: 1,
        title: "Video 1",
        thumbnail: "https://via.placeholder.com/150",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 2,
        title: "Video 2",
        thumbnail: "https://via.placeholder.com/150",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        id: 3,
        title: "Video 3",
        thumbnail: "https://via.placeholder.com/150",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 4,
        title: "Video 3",
        thumbnail: "https://via.placeholder.com/150",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 5,
        title: "Video 3",
        thumbnail: "https://via.placeholder.com/150",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
];

const VideoSlider = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const openModal = (video) => {
        setSelectedVideo(video);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setModalOpen(false);
    };

    return (
        <div>
            <div className="container">
                <Subheading />
                <Swiper
                    modules={[Navigation, Autoplay]} // Correct module import
                    navigation
                    autoplay={{ delay: 3000 }}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    style={{ width: "100%", padding: "20px 0" }}
                >
                    {videoData.map((video) => (
                        <SwiperSlide key={video.id}>
                            <div
                                onClick={() => openModal(video)} // Pass the whole video object
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                                />
                                <p style={{ textAlign: "center", marginTop: "10px" }}>{video.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={selectedVideo?.videoUrl} />
        </div>
    );
};

export default VideoSlider;
