import React, { useState } from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



    return (
        <nav className="bg-gradient-to-b from-white to-[#e6e6f3] fixed top-0 left-0 w-full z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="/" className=" ">
                            <img src={logo} alt="logo" className="w-36 h-12" />
                        </a>
                    </div>

                    <div className="hidden md:flex space-x-6 gap-5">
                        <a href="/" className=" font-bold text-[17px] hover:text-red-600">
                            Home
                        </a>
                        <div className="relative">
                            <a href="#services" className="font-bold text-[17px] hover:text-red-600">
                                Our Services
                            </a>
                            <span className="absolute -top-3 -right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0 rounded-full">
                                New
                            </span>
                        </div>
                        <a href="/" className=" font-bold text-[17px] hover:text-red-600">
                            Contact Us
                        </a>
                    </div>

                    <div className="flex">
                        <div className="md:block w-full max-w-md mx-4 flex justify-end">
                            <div>
                                <a
                                    href="tel:+918779597022"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-transform transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[#6A38C2] disabled:pointer-events-none disabled:opacity-50 text-white px-4 py-2 rounded-full bg-[#6A38C2] shadow-[0px_4px_8px_rgba(0,0,0,0.3),inset_0px_-2px_4px_rgba(255,255,255,0.3)] hover:shadow-[0px_6px_12px_rgba(0,0,0,0.4),inset_0px_-4px_6px_rgba(255,255,255,0.4)] h-[40px]"
                                >
                                    <h3 className="text-[15px] p-2">Enquiry Now</h3>
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-black hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <a href="/" className="block px-4 py-2 text-black font-bold hover:bg-gray-200">
                        Home
                    </a>
                    <a href="#services" className="block px-4 py-2 text-black font-bold hover:bg-gray-200">
                        Services
                    </a>
                    <a href="/" className="block px-4 py-2 text-black font-bold hover:bg-gray-200">
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
