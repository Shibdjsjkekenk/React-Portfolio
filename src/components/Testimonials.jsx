import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoFace from "../assets/no-face.jpg";


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    service: "Software Development",
    feedback: "Tiwari's provided excellent software development services.<br />Their expertise and dedication truly exceeded our expectations!",
  },
  {
    id: 2,
    name: "Jane Smith",
    service: "Website Development",
    feedback: "Tiwari's team delivered a fantastic website for our business.<br />Their professionalism is unmatched!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    service: "SEO",
    feedback: "Our website traffic has increased significantly thanks to Tiwari's outstanding SEO services!<br />Highly recommended!",
  },
  {
    id: 4,
    name: "Emily Davis",
    service: "Digital Marketing",
    feedback: "The digital marketing strategies implemented by Tiwari's<br />have boosted our brand visibility like never before!",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Testimonials = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="pt-5 pb-15 mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <h1 className="text-4xl font-bold text-center pb-10">
          Client <span className="text-[#6A38C2]">Testimonials</span>
        </h1>
        <Slider {...settings} className="!w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center px-4 sm:px-6 w-full flex flex-col items-center"
            >
              {/* Centering the image */}
              <div className="flex justify-center mb-4">
                <img
                  src={NoFace}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="italic text-gray-600">{testimonial.service}</p>
              <p
                className="text-lg mt-4 text-gray-800"
                dangerouslySetInnerHTML={{ __html: testimonial.feedback }}
              ></p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
