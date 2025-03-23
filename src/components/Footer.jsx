import React from 'react'
import Footerbg from '../assets/footer-bg.jpeg'
import WhatsApp from '../assets/whatsapp-icon.png'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <a
                href="https://wa.me/918779597022"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-10 right-4 z-50"
            >
                <img
                    src={WhatsApp}
                    alt="WhatsApp"
                    className="w-12 h-12 hover:shadow-xl transition-shadow duration-300"
                />
            </a>
            <div
                className="flex flex-col lg:flex-row items-start justify-between gap-6 px-4 lg:px-10 py-10 bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${Footerbg})` }}
            >
                {/* First Column (Larger) */}
                <div className="lg:w-1/2 bg-opacity-80 p-6 lg:p-10 rounded-lg shadow-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-left text-white">
                        {/* Newsletter */}
                        <div className="mb-6">
                            <h2 className="text-lg font-bold">Sign up to our newsletter</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                            <div className="flex mt-4 border rounded-full overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Enter Email Address"
                                    className="flex-grow px-4 py-2 outline-none bg-transparent text-white"
                                />
                                <button className="bg-[#0060AF] text-sm px-4 py-2 text-white rounded-r-full">
                                    Enquire Now
                                </button>
                            </div>
                        </div>


                        <p className="text-sm mt-4">
                            I am Shubhanshu Tiwari
                            "Crafting seamless web experiences with 2 years+ of professional expertise in modern web development."
                        </p>

                    </div>
                </div>

                {/* Other Three Columns */}
                <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-bold text-[#EEDCB2]">Quick Links</h2>
                        <ul className="mt-4 space-y-2 text-sm text-white">
                            <li>Home</li>
                            <li>Our Services</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className='pt-3'>
                        <h2 className="text-lg font-bold text-[#EEDCB2]">Our Services</h2>
                        <ul className="mt-4 space-y-2 text-sm text-white">
                            <li>Website Development</li>
                            <li>Software Development</li>
                            <li>AI Integration</li>
                            <li>SEO</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className='pt-3'>
                        <h2 className="text-lg font-bold text-[#EEDCB2]">Address</h2>
                        <ul className="mt-4 space-y-2 text-sm text-white">
                            <li>Mahada, Ram mandir - (west), Mumbai</li>
                            <li>+91–8779597022</li>
                            <li>tiwarishubhanshu7@gmail.com</li>
                        </ul>

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
                </div>
            </div>


            <div className='bg-[#0060AF]  px-8'>
                <div className='flex items-center justify-center text-white pt-3 pb-3'>
                    <p class="text-center font-bold" >Copyright © 2025, Tiwari's, All Rights Reserved. </p>
                </div>
            </div>
        </>

    )
}

export default Footer