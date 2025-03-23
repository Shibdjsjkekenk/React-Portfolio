import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RelevantSlider from './RelevantSlider';

const category = [
    "Frontend Developer",
    "React JS Developer",
    "Software Developer",
    "UI Developer",
    "Full Stack Developer",
    "Web Developer"
];

const RelevantExperience = () => {
    const controls = useAnimation(); // To control the animation
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // Detect visibility

    useEffect(() => {
        if (inView) {
            controls.start("visible"); // Start animation when in view
        }
    }, [controls, inView]);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    className=" text-center"
                    initial="hidden" // Hidden state
                    animate={controls} // Controlled by `inView`
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 }, // Hidden state
                        visible: { opacity: 1, scale: 1 }   // Visible state
                    }}
                    transition={{ duration: 0.5 }} // Smooth animation
                >
                    <h1 className="text-4xl font-bold leading-[56px]">
                        Relevant<span className="text-[#6A38C2]"> Experience</span>
                    </h1>
                    <p className='pt-3'>
                        I have 1.5 years of relevant experience in Express.js, Node.js, MongoDB, and Stripe payment gateway integration,<br></br> I have contributed to several projects, including ongoing work for my current company,<br></br> delivering efficient and scalable backend solutions.
                    </p>
                </motion.div>


                <RelevantSlider />

            </div>
        </>

    );
};

export default RelevantExperience;
