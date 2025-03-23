import React from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import About from '../assets/about-us.webp'
import { motion } from 'framer-motion';
import Resume from '../assets/Shubhanshu-Tiwari.pdf'

const AboutUs = () => {
    return (
        <>
            <div className="flex items-center justify-center max-w-auto pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center w-full max-w-7xl ">
                    {/* Right column: Image */}
                    <div className="w-full md:w-1/2 flex items-center justify-center " >
                        <div className="">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }} // Starts from the left
                                whileInView={{ opacity: 1, x: 0 }} // Moves to center
                                exit={{ opacity: 0, x: -100 }} // Exits to the left (optional)
                                transition={{ duration: 0.9 }}
                                viewport={{ once: false, amount: 0.2 }} // Configure the viewport behavior
                            >
                                <img src={About} alt="About Image" className="w-full rounded-md" />
                            </motion.div>
                        </div>

                    </div>

                    {/* Left column: Form with border */}
                    <div className="w-full md:w-1/2   ">
                        <div className=''>
                            <div className='flex flex-col gap-3 my-10'>
                                <span className='  px-2 py-2 rounded-full bg-[rgba(226,229,235,0.72)] text-[#F83002] text-[18px] abt font-extrabold text-center w-[25%] hurry-up'>About <span className='text-[#6A38C2]'>Us</span></span>
                                <h1 className='text-4xl font-bold leading-[56px] abt-title'>I am a dedicated <span className='text-[#6A38C2]'>Web Developer<br /></span></h1>
                                <p className='text-justify'>"With 2 years of hands-on experience in creating dynamic, responsive, and user-friendly websites and applications. My journey in web development has equipped me with expertise in cutting-edge technologies like HTML, CSS, Boostrap, Tailwind CSS, JavaScript, and frameworks like React and Redux.</p>
                                <p className='text-justify'>In addition to my frontend proficiency, I have practical experience in backend development using Node.js, Express.js, and MongoDB, enabling me to build end-to-end web solutions. Whether it's developing pixel-perfect UIs or designing scalable server-side logic, I thrive on delivering exceptional digital products."</p>
                                <div className="">
                                    <Button
                                        asChild
                                        className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-white text-lg font-medium transition-transform transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[#6A38C2] bg-[#6A38C2] h-[56px] rounded-full shadow-[0px_4px_8px_rgba(0,0,0,0.3),inset_0px_-2px_4px_rgba(255,255,255,0.3)] hover:shadow-[0px_6px_12px_rgba(0,0,0,0.4),inset_0px_-4px_6px_rgba(255,255,255,0.4)]"
                                    >
                                        <a
                                            href={Resume} // Replace with your actual resume link
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center"
                                        >
                                            <h3 className="text-[20px] p-4">Download CV</h3>
                                            <div className="post-job-arrow">
                                                <ArrowUpRight className="h-5 w-5" />
                                            </div>
                                        </a>
                                    </Button>

                                </div>


                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AboutUs