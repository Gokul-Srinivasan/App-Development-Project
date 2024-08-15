import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, 
        pauseOnHover: true,
        fade: true, 
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="slide">
                    <img
                        src="https://img.freepik.com/free-photo/empty-home-production-studio-with-professional-podcasting-tools-recording-sound-streaming-sites-entertainment-show-live-broadcasting-from-cozy-location-living-room-decorated-with-purple-lights_482257-68837.jpg"
                        alt="Slide 1"
                    />
                    <div className="slide-text">
                        <h2>Welcome to Starv Rental Studio</h2>
                        <p>Experience top-notch equipment and a creative environment tailored for your needs.</p>
                    </div>
                </div>
                <div className="slide">
                    <img
                        src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGlvfGVufDB8fDB8fHww"
                        alt="Slide 2"
                    />
                    <div className="slide-text">
                        <h2>Versatile Studio Spaces</h2>
                        <p>Our studio offers flexible spaces for all types of projects, from photoshoots to video production.</p>
                    </div>
                </div>
                <div className="slide">
                    <img
                        src="https://proimagestudio.biz/wp-content/uploads/2021/12/photography-studio-scaled.jpeg"
                        alt="Slide 3"
                    />
                    <div className="slide-text">
                        <h2>Fully Equipped and Ready</h2>
                        <p>With our state-of-the-art equipment, you can bring your creative vision to life.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
