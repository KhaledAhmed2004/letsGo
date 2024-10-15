import { FaStar } from "react-icons/fa6";
import TestimonialImg1 from "../../assets/images/testimonial/user-img-1.png";
import TestimonialImg2 from "../../assets/images/testimonial/user-img-2.png";
import TestimonialImg3 from "../../assets/images/testimonial/user-img-3.png";
import TestimonialImg4 from "../../assets/images/testimonial/user-img-4.png";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="section-title text-center">
        <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
          REVIEW & TESTIMONIALS
        </span>
        <h2 className="section-title text-5xl font-bold">
          Top Reviews for Tourist Express
        </h2>
      </div>
      <div className="testimonial-cards-wrappers mt-24">
        <div className="grid grid-cols-4 gap-5">
          {/* Testimonial Single Card */}
          <div className="testimonial-single-card">
            <div className="stars flex justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-400 font-semibold text-center mt-7">
            "Tourist Express made my dream vacation a reality! From seamless booking to personalized 
  recommendations, everything was perfectly organized. The customer service was exceptional, 
  and I felt supported every step of the way. Highly recommend this service for anyone looking 
  to travel hassle-free!"
            </p>
            <h3 className="font-bold text-lg text-center mt-10">Amy Jonson</h3>
            <span className="font-bold text-sm mt-2 text-center block text-gray-400">
              Traveler
            </span>
            <div className="testimonial-user-img flex justify-center items-center mt-2">
              <Image src={TestimonialImg1} alt="" />
            </div>
          </div>
          {/* Testimonial Single Card */}
          <div className="testimonial-single-card">
            <div className="stars flex justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-400 font-semibold text-center mt-7">
            "I had the best time on my recent trip thanks to Tourist Express. The team ensured every detail was 
  covered, from the best local tours to accommodations. Their professionalism and quick responses made 
  the entire experience stress-free and enjoyable."
            </p>
            <h3 className="font-bold text-lg text-center mt-10">Amy Jonson</h3>
            <span className="font-bold text-sm mt-2 text-center block text-gray-400">
              Traveler
            </span>
            <div className="testimonial-user-img flex justify-center items-center mt-2">
              <Image src={TestimonialImg2} alt="" />
            </div>
          </div>
          {/* Testimonial Single Card */}
          <div className="testimonial-single-card">
            <div className="stars flex justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-400 font-semibold text-center mt-7">
            "Tourist Express exceeded my expectations! Their attention to detail and ability to tailor the trip 
  to my preferences were fantastic. I truly felt like I got the best value for my money, and I'll 
  definitely be using them for future travels."
            </p>
            <h3 className="font-bold text-lg text-center mt-10">Amy Jonson</h3>
            <span className="font-bold text-sm mt-2 text-center block text-gray-400">
              Traveler
            </span>
            <div className="testimonial-user-img flex justify-center items-center mt-2">
              <Image src={TestimonialImg3} alt="" />
            </div>
          </div>
          {/* Testimonial Single Card */}
          <div className="testimonial-single-card">
            <div className="stars flex justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-400 font-semibold text-center mt-7">
            "Amazing experience from start to finish! Tourist Express provided excellent service, and their 
  staff went above and beyond to ensure everything was perfect. I was impressed with how well they 
  handled last-minute changes and made sure our trip was unforgettable."
            </p>
            <h3 className="font-bold text-lg text-center mt-10">Amy Jonson</h3>
            <span className="font-bold text-sm mt-2 text-center block text-gray-400">
              Traveler
            </span>
            <div className="testimonial-user-img flex justify-center items-center mt-2">
              <Image src={TestimonialImg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
