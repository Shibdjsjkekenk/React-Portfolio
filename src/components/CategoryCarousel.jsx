import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const category = [
  "Frontend Developer",
  "React JS Developer",
  "Software Developer",
  "UI Developer",
  "Full Stack Developer",
  "Web Developer"
];

const CategoryCarousel = () => {
  const controls = useAnimation(); // To control the animation
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // Detect visibility

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start animation when in view
    }
  }, [controls, inView]);
  
  return (
    <>
     
      <motion.div
        ref={ref}
        className="pt-10 text-center"
        initial="hidden" // Hidden state
        animate={controls} // Controlled by `inView`
        variants={{
          hidden: { opacity: 0, scale: 0.8 }, // Hidden state
          visible: { opacity: 1, scale: 1 }   // Visible state
        }}
        transition={{ duration: 0.5 }} // Smooth animation
      >
        <h1 className="text-3xl font-bold leading-[56px]">
          Expert in Tech <span className="text-[#6A38C2]"> Domain....</span>
        </h1>
        <p>
        "Expert in the Tech Domain, crafting seamless web solutions with advanced <br></br>technical expertise, delivering innovation and excellence."
        </p>
      </motion.div>
      <div className='mx-auto max-w-5xl bg-crosol'>

        <Carousel className="w-full max-w-2xl mx-auto my-15">
          <CarouselContent>
            {category.map((cat, index) => (
              <CarouselItem key={index} className=" lg:basis-1/4">
                <Button  variant="outline" className="rounded-full btn-circle find-get">
                  {cat}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="btn-bg-p disabled:opacity-100 hover:shadow-none bg-customYellow" />
          <CarouselNext className="btn-bg-n disabled:opacity-100 hover:shadow-none bg-customYellow" />
        </Carousel>
      </div>
    </>

  );
};

export default CategoryCarousel;
