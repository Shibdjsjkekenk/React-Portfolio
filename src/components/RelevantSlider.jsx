import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MangoLoop from '../assets/mango.webp';
import Ecommerce from '../assets/ecommerce.webp';
import JobPortal from '../assets/job-portal.webp';


const projects = [

    {
        image: Ecommerce,
        description: "Dynamic e-commerce site built with MERN stack technology (MongoDB, Express.js, React, Node.js), offering a responsive, seamless, and interactive shopping experience. Includes an admin panel for managing and updating the platform efficiently, with Stripe payment gateway integration for secure transactions.",
        link: "https://tiwari-e-cart-29kg.vercel.app/"
    },
    {
        image: JobPortal,
        description: "Dynamic Job Portal Application built with MERN stack technology (MongoDB, Express.js, React, Node.js), offering a responsive, seamless, and interactive job search experience. Features an advanced admin panel where admins can view, manage, and track user job applications efficiently.",
        link: "https://t-job-portal-mern-stack-1.onrender.com/"
    },
    {
        image: MangoLoop,
        description: "Travel booking Application developed using MERN stack technology (MongoDB, Express.js, React, Node.js). This ongoing project features dynamic functionalities, including a responsive design and seamless user experience. It also includes an admin panel for managing bookings, user data, and travel packages efficiently.",
        link: "https://mangoloops.com/beta/"
    }

];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const RelevantSlider = () => {
    return (
        <div className="max-w-5xl mx-auto my-10">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 0.5s"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="px-4" // Correct spacing syntax
            >
                {projects.map((project, index) => (
                    <div key={index} className="bg-gradient-to-r from-[#F0F8FF] to-[#fefcf0] shadow-md rounded-lg overflow-hidden">
                        <img
                            src={project.image}
                            alt={`Carousel ${index + 1}`}
                            className="rounded-t-lg w-full h-40 object-cover"
                        />
                        <div className="px-4 py-4">
                            <p className="text-sm font-medium text-gray-800 mb-4 text-justify">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 inline-block text-red-600 text-sm font-medium transition-colors underline hover:text-red-800"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default RelevantSlider;