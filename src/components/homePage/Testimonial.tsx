"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Swal from "sweetalert2"; // Import sweetalert2
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
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = () => {
    onSubmit(rating, feedback);
    onClose();
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

const Testimonial: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [testimonials, setTestimonials] = useState([
    {
      rating: 3,
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user: "Amy Johnson",
      img: TestimonialImg1,
    },
    {
      rating: 4,
      feedback: "Eveniet, eos velit ducimus modi fugiat nulla aperiam.",
      user: "John Doe",
      img: TestimonialImg2,
    },
    {
      rating: 5,
      feedback: "Beatae ratione illum reprehenderit?",
      user: "Jane Smith",
      img: TestimonialImg3,
    },
    {
      rating: 3,
      feedback: "Lorem ipsum dolor sit amet, consectetur.",
      user: "Emily Davis",
      img: TestimonialImg4,
    },
  ]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSubmitFeedback = (rating: number, feedback: string) => {
    setTestimonials([
      ...testimonials,
      { rating, feedback, user: "New User", img: TestimonialImg1 },
    ]);
    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "Your feedback has been submitted successfully.",
      confirmButtonColor: "#3b82f6",
    });
  };

  return (
    <div className="container mx-auto py-24">
      <div className="section-title text-center">
        <span className="sub-title text-lg font-semibold text-gray-500 mb-2">
          REVIEW & TESTIMONIALS
        </span>
        <h2 className="section-title text-5xl font-bold text-blue-600">
          Top Reviews for Travio
        </h2>
      </div>
      <div className="testimonial-cards-wrappers mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="testimonial-single-card border p-4 rounded-lg shadow-md transition-transform duration-150 hover:shadow-lg transform hover:scale-105"
            >
              <div className="stars flex justify-center text-yellow-500">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-400 font-semibold text-center mt-7">
                {item.feedback}
              </p>
              <h3 className="font-bold text-lg text-center mt-10">
                {item.user}
              </h3>
              <span className="font-bold text-sm mt-2 text-center block text-gray-400">
                Traveler
              </span>
              <div className="testimonial-user-img flex justify-center items-center mt-2">
                <Image
                  src={item.img}
                  alt={item.user}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
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
