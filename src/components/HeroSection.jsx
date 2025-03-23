import React from 'react'
import { motion } from "framer-motion";
import No1 from "../assets/no-1.webp";
import NoBg from "../assets/no-bg.webp";
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";



const HeroSection = () => {
    return (
        <>
            <div className="flex items-center justify-center max-w-full bg-[#f6f6f6de] relative z-10 mt-16">
                <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Left column: Form with border */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -100 }} // Start from the left
                        animate={{ opacity: 1, x: 0 }}    // Slide in to its original position
                        transition={{ duration: 0.8 }}    // Adjust the animation speed
                    >
                        <div className="flex flex-col gap-5 my-10">
                            <div className="bg-[rgba(226,229,235,0.72)] w-[30%] md:w-[20%] rounded-full px-4 py-1 no-1">
                                <span className="text-xl md:text-2xl font-bold gradient-background">
                                    Hello,
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold leading-[48px] md:leading-[56px]">
                                I am
                                <span className="text-[#6A38C2]"> Shubhanshu Tiwari</span>
                            </h1>
                            <h4 className=" text-[21px] font-medium">
                                "Crafting seamless web experiences with <span className='text-red-700'>2 years+ </span>of professional expertise in modern web development."
                            </h4>
                            <h1 className="text-[21px] font-bold"><i>
                                <Typewriter
                                    options={{
                                        strings: ['"Turning ideas into impactful digital solutions."'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </i>


                            </h1>

                            {/* Social Icons */}
                            <div className="mt-6 flex space-x-4">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/shubhanshu.tiwari.167"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-gray-300 p-1 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <FaFacebookF className="text-blue-600" /> 
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/phenomenalllt?igsh=MWtxM3dqMmg2bzl0cg=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-gray-300 p-1 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <FaInstagram className="text-pink-500" /> 
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/Shibdjsjkekenk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-gray-300 p-1 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <FaGithub className="text-gray-800" />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/tiwari-shubhanshu-93bb95267?trk=contact-info"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-gray-300 p-1 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <FaLinkedinIn className="text-blue-700" /> 
                                </a>

                                {/* Website */}
                                <a
                                    href="https://www.shubhanshutiwari.com" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-gray-300 p-1 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <FaGlobe className="text-green-500" /> 
                                </a>
                            </div>

                        </div>
                    </motion.div>

                    {/* Right column: Image with animation */}
                    <div
                        className="w-full md:w-1/2 flex items-center justify-center p-4"
                        style={{ backgroundImage: `url(${NoBg})` }}
                    >
                        <div className="bounce-custom">
                            <img
                                src={No1}
                                alt="logo"
                                className="w-full rounded-md md:ml-[78px] max-w-[100%] md:max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HeroSection