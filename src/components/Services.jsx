import React from "react";
import { motion } from "framer-motion";
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import { FaCheckCircle } from "react-icons/fa"; 
import Website from '../assets/website.png';
import Software from '../assets/software.png';
import Ai from '../assets/ai.png';
import Seo from '../assets/seo.png';
import Digital from '../assets/digital.png';

const Services = () => {

    return (
        <div className="max-w-auto bg-gradient-to-r from-[#F0F8FF] to-[#fefcf0] " id="services">
            <div className=" pb-10 mt-20 mb-10 max-w-auto pt-17 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center pb-5">
                    Our <span className="text-[#6A38C2]">Services</span>
                </h1>
                <div className="flex justify-center ">
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-6xl ">
                        {/* Left column: Form with border */}
                        <div className="w-full md:w-1/2  ">
                            <div className="flex  items-center bg-white p-4 rounded-lg shadow-lg mb-6">
                                {/* Column for Image (3/12) */}
                                <div className=" md:w-3/12 p-2">
                                    <img
                                        src={Website}
                                        alt="Project"
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>

                                {/* Vertical Line and Column for Paragraph (9/12) */}
                                <div className="w-full md:w-9/12 p-2 md:pl-4 md:border-l md:border-gray-300">
                                    <p className="text-gray-700 text-[19px] font-semibold">
                                        Website Development
                                    </p>
                                </div>
                            </div>

                            <div className="flex  items-center bg-white p-4 rounded-lg shadow-lg mb-6">
                                {/* Column for Image (3/12) */}
                                <div className=" md:w-3/12 p-2">
                                    <img
                                        src={Software}
                                        alt="Project"
                                        className="h-auto object-cover rounded-lg"
                                    />
                                </div>

                                {/* Vertical Line and Column for Paragraph (9/12) */}
                                <div className="w-full md:w-9/12 p-2 md:pl-4 md:border-l md:border-gray-300">
                                    <p className="text-gray-700 text-[19px] font-semibold">
                                        Software Development
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2  ">
                            <div className="flex overflow-hidden flex-wrap items-center bg-white p-5 rounded-lg shadow-lg mb-6 relative">
                                {/* Diagonal Ribbon */}
                                <div className="popular-label absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 transform rotate-[-45deg] origin-top-left">
                                    New
                                </div>
                                <div className=" md:w-3/12 p-2 flex  items-center">
                                    <img
                                        src={Ai}
                                        alt="Project"
                                        className="w-16 h-16 object-contain rounded-lg"
                                    />
                                </div>

                                {/* Column for Text (9/12) */}
                                <div className="w-full md:w-9/12 p-2 md:pl-4 md:border-l md:border-gray-300">
                                    <p className="text-gray-700 text-[19px] font-semibold">
                                    AI Integration
                                    </p>
                                </div>

                                <p className="text-gray-700 pt-4 pb-4 text-[16px] text-justify">
                                    Enhance your product with AI integration to deliver unparalleled user
                                    experience. Our AI solutions will make your product smarter, more
                                    efficient, and highly user-friendly, elevating it to a whole new level of
                                    innovation and effectiveness.
                                </p>

                                <p className="text-gray-700 pt-2 pb-3 text-[21px] text-center font-semibold">
                                  Coming Soon!
                                </p>

                            </div>
                        </div>

                        <div className="w-full md:w-1/2  ">
                            <div className="flex flex-wrap items-center bg-white p-4 rounded-lg shadow-lg mb-6">
                                {/* Column for Image (3/12) */}
                                <div className=" md:w-3/12 p-2">
                                    <img
                                        src={Seo}
                                        alt="Project"
                                        className="h-auto object-cover rounded-lg w-20"
                                    />
                                </div>

                                {/* Vertical Line and Column for Paragraph (9/12) */}
                                <div className=" md:w-9/12 p-2 md:pl-4 md:border-l md:border-gray-300">
                                    <p className="text-gray-700 text-[19px] font-semibold">
                                        SEO
                                    </p>
                                </div>
                            </div>

                            <div className="flex  items-center bg-white p-4 rounded-lg shadow-lg mb-6">
                                {/* Column for Image (3/12) */}
                                <div className=" md:w-3/12 p-2">
                                    <img
                                        src={Digital}
                                        alt="Project"
                                        className="h-auto object-cover rounded-lg"
                                    />
                                </div>

                                {/* Vertical Line and Column for Paragraph (9/12) */}
                                <div className="w-full md:w-9/12 p-2 md:pl-4 md:border-l md:border-gray-300">
                                    <p className="text-gray-700 text-[19px] font-semibold">
                                        Digital Marketing
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
