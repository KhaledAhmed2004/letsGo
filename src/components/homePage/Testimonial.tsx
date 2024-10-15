"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import TestimonialImg1 from "../../assets/images/testimonial/user-img-1.png";
import TestimonialImg2 from "../../assets/images/testimonial/user-img-2.png";
import TestimonialImg3 from "../../assets/images/testimonial/user-img-3.png";
import TestimonialImg4 from "../../assets/images/testimonial/user-img-4.png";

// Define types for the modal props
interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, feedback: string) => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [rating, setRating] = useState<number>(0); // State to manage selected rating
  const [feedback, setFeedback] = useState<string>(""); // State to manage feedback input

  const handleSubmit = () => {
    onSubmit(rating, feedback); // Call the submit function passed from the parent
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 transform transition-all duration-300 scale-100 hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Thanks for staying with us
        </h2>
        <h3 className="text-xl font-semibold text-center mb-2">
          Submit Your Feedback
        </h3>
        <h4 className="text-lg font-medium text-center mb-4">Rate Us:</h4>
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer text-${
                rating >= star ? "yellow-500" : "gray-300"
              } transition-colors duration-200`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
          rows={4}
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// Define the type for testimonials
interface Testimonial {
  rating: number;
  feedback: string;
}

const Testimonial: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false); // State for modal visibility
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]); // State for storing testimonials

  const handleOpenModal = () => {
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  const handleSubmitFeedback = (rating: number, feedback: string) => {
    setTestimonials([...testimonials, { rating, feedback }]);
    console.log("Feedback submitted:", { rating, feedback });
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial-single-card border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl transform hover:scale-105"
            >
              <div className="stars flex justify-center text-yellow-500 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-500 font-semibold text-center mb-2">
                {item.feedback}
              </p>
              <h3 className="font-bold text-lg text-center mt-2">
                User {index + 1}
              </h3>
              <span className="font-bold text-sm mt-1 text-center block text-gray-400">
                Traveler
              </span>
              <div className="testimonial-user-img flex justify-center items-center mt-2">
                <Image
                  src={TestimonialImg1}
                  alt="User Image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
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
      <button
        onClick={handleOpenModal}
        className="mt-10 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Add Feedback
      </button>
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitFeedback}
      />
    </div>
  );
};

export default Testimonial;
