import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import ExperienceSlider from "./ExperienceSlider";
import { FaCheckCircle } from "react-icons/fa"; // Import an icon

const Experience = () => {

    // Animation variants for container and each child
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Time delay between children
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
        visible: {
            opacity: 1,
            y: 0, // Move to original position
            transition: {
                duration: 0.5,
            },
        },
    };

    // `useInView` hook to detect when the section is in the viewport
    const [ref, inView] = useInView({
        triggerOnce: true, // Animate only once
        threshold: 0.2, // Trigger when 20% of the section is visible
    });

    return (
        <div className="max-w-auto bg-gradient-to-r from-[#F0F8FF] to-[#fefcf0] ">
            <div className=" pb-7 mt-20 mb-10 max-w-auto pt-13 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center pb-5">
                    Experience <span className="text-[#6A38C2]">&</span> Projects
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-2 w-full max-w-7xl ">
                    {/* Left column: Form with border */}
                    <div className="w-full md:w-1/2  ">
                        <div className=''>
                            <div className='flex flex-col gap-5 my-1'>
                                <h1 className='text-3xl font-bold leading-[56px] '>Professional <span className='text-[#6A38C2]'>Experience</span></h1>
                                <p className="text-justify"><span className="text-[#F16B50]"><b>W</b></span>orked as a Web Developer at Itarsia <b>India Limited for Past 2 years,</b> specializing in:</p>
                                <ul>
                                    <li className="pb-[10px] flex items-start gap-2 text-justify">
                                        <FaCheckCircle className="text-[#6CB6D5] flex-shrink-0 mt-1" />
                                        <span>
                                            Developing responsive custom and template-based interfaces using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, and Redux.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-justify">
                                        <FaCheckCircle className="text-[#6CB6D5] flex-shrink-0 mt-1" />
                                        <span>
                                            Fetching and integrating APIs for dynamic, user-friendly experiences.
                                        </span>
                                    </li>
                                </ul>
                                <p className="text-justify">Positive client feedback drives us to excel, innovate, and consistently deliver beyond expectations.</p>


                            </div>
                        </div>
                    </div>

                    {/* Right column: Image */}
                    <div className="w-full md:w-1/1  " >
                        <div className="">
                            <ExperienceSlider />
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default Experience;
