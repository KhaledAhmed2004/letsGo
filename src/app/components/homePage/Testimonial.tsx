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
          Top Reviews for Travio
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
            </div>
            <p className="text-gray-400 font-semibold text-center mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              eos velit ducimus modi fugiat nulla aperiam beatae ratione illum
              reprehenderit?
            </p>
            <h3 className="font-bold text-lg text-center mt-10">Amy Jonson</h3>
            <span className="font-bold text-sm mt-2 text-center block text-gray-400">
              Traveler
            </span>
            <div className="testimonial-user-img">
              <Image src={TestimonialImg1} alt="" />
            </div>
          </div>
          {/* Testimonial Single Card */}
          <div className="testimonial-single-card">
            <div className="stars flex justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-400 font-semibold text-center mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              eos velit ducimus modi fugiat nulla aperiam beatae ratione illum
              reprehenderit?
            </p>
            <h3 className="font-bold text-lg text-center mt-10">Amy Jonson</h3>
            <span className="font-bold text-sm mt-2 text-center block text-gray-400">
              Traveler
            </span>
            <div className="testimonial-user-img">
              <Image src={TestimonialImg2} alt="" />
            </div>
          </div>
          {/* Testimonial Single Card */}
          <div className="testimonial-single-card">
            <div className="stars flex justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-400 font-semibold text-center mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              eos velit ducimus modi fugiat nulla aperiam beatae ratione illum
              reprehenderit?
            </p>
            <h3 className="font-bold text-lg text-center mt-10">Amy Jonson</h3>
            <span className="font-bold text-sm mt-2 text-center block text-gray-400">
              Traveler
            </span>
            <div className="testimonial-user-img">
              <Image src={TestimonialImg3} alt="" />
            </div>
          </div>
          {/* Testimonial Single Card */}
          <div className="testimonial-single-card">
            <div className="stars flex justify-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-400 font-semibold text-center mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              eos velit ducimus modi fugiat nulla aperiam beatae ratione illum
              reprehenderit?
            </p>
            <h3 className="font-bold text-lg text-center mt-10">Amy Jonson</h3>
            <span className="font-bold text-sm mt-2 text-center block text-gray-400">
              Traveler
            </span>
            <div className="testimonial-user-img">
              <Image src={TestimonialImg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
