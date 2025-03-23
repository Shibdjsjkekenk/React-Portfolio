import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Arna from '../assets/arna.webp';
import Ecommerce from '../assets/ecommerce.webp';
import Besopke from '../assets/bespoke.webp';
import Portfolio from '../assets/portfolio.webp';
import Netflix from '../assets/netflix.webp';
import JobPortal from '../assets/job-portal.webp';


const projects = [
    {
        image: Arna,
        description: "Arnalube is a responsive website for machinery spray products, built using HTML, CSS, JavaScript, and Bootstrap to deliver a clean and user-friendly experience.",
        link: "https://aarnalube.com/"
    },
    {
        image: Ecommerce,
        description: "Dynamic e-commerce site built with HTML, CSS, JavaScript, Tailwind CSS, React, and Redux, offering a responsive, seamless, and interactive shopping experience.",
        link: "https://tiwari-e-cart-29kg.vercel.app/"
    },
    {
        image: Besopke,
        description: "Arnalube is a responsive website for Garments Tailoring Services, built using HTML, CSS, JavaScript, and Bootstrap to deliver a clean and user-friendly experience.",
        link: "https://s-bespoke.com/"
    },
    {
        image: Portfolio,
        description: " Portfolio website built with HTML, CSS, JavaScript, Tailwind CSS, React, and Shadcn UI, offering a responsive, seamless, and interactive user experience.",
        link: "https://shubhanshutiwari.com/"
    },
    {
        image: Netflix,
        description: "Dynamic Movie Application site built with Tailwind CSS, React, Redux, and MovieDB API offering a responsive, seamless, and interactive viewing experience.",
        link: "https://lively-frangollo-1f9535.netlify.app/"
    },
    {
        image: JobPortal,
        description: "Dynamic Job Portal Application built with HTML, CSS, JavaScript, Tailwind CSS, React, and Redux, offering a responsive, seamless, and interactive job search.",
        link: "https://t-job-portal-mern-stack-1.onrender.com/"
    },
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

const ExperienceSlider = () => {
    return (
        <div className="max-w-3xl mx-auto my-10">
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
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={project.image}
                            alt={`Carousel ${index + 1}`}
                            className="rounded-t-lg w-full h-30 object-cover"
                        />
                        <div className="px-3 py-4">
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

export default ExperienceSlider;