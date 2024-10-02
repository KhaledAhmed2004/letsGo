import cardImg1 from "../../assets/images/travio-specilas-cards/card-img-1.jpg";
import cardImg2 from "../../assets/images/travio-specilas-cards/card-img-2.jpg";
import cardImg3 from "../../assets/images/travio-specilas-cards/card-img-3.jpg";
import cardImg4 from "../../assets/images/travio-specilas-cards/card-img-4.jpg";
import { FaMapMarkerAlt, FaClock, FaUserTie, FaGlobe } from "react-icons/fa";
import Image from "next/image";

const TravioSpecials = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="section-title text-center mb-12">
        <span className="sub-title text-lg font-semibold text-teal-500 mb-2">
          TRAVIO SPECIALS
        </span>
        <h2 className="section-title text-4xl md:text-5xl font-bold text-gray-900">
          Why Travel with Tutive?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Single Card 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl group hover:bg-blue-400">
          <div className="card-img relative">
            <Image
              src={cardImg1}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
              alt="Worldwide Guides"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
              <div className="rounded-full bg-white p-4 shadow-md">
                <FaGlobe className="text-teal-500 text-2xl" />
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <FaUserTie className="text-teal-500 text-3xl mx-auto animate-bounce transition-colors duration-300 ease-in-out group-hover:text-white" />
            <h4 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-white">
              2000+ Worldwide Guides
            </h4>
            <p className="text-gray-600 mt-2 group-hover:text-gray-200">
              Discover the world with our expert travel guides.
            </p>
          </div>
        </div>

        {/* Single Card 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl group hover:bg-blue-400">
          <div className="card-img relative">
            <Image
              src={cardImg2}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
              alt="Years of Experience"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
              <div className="rounded-full bg-white p-4 shadow-md">
                <FaClock className="text-teal-500 text-2xl" />
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <FaClock className="text-teal-500 text-3xl mx-auto animate-bounce transition-colors duration-300 ease-in-out group-hover:text-white" />
            <h4 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-white">
              12+ Years of Travel Experience
            </h4>
            <p className="text-gray-600 mt-2 group-hover:text-gray-200">
              Benefit from our extensive experience in travel planning.
            </p>
          </div>
        </div>

        {/* Single Card 3 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl group hover:bg-blue-400">
          <div className="card-img relative">
            <Image
              src={cardImg3}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
              alt="Unique Destinations"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
              <div className="rounded-full bg-white p-4 shadow-md">
                <FaMapMarkerAlt className="text-teal-500 text-2xl" />
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <FaMapMarkerAlt className="text-teal-500 text-3xl mx-auto animate-bounce transition-colors duration-300 ease-in-out group-hover:text-white" />
            <h4 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-white">
              Explore Unique Destinations
            </h4>
            <p className="text-gray-600 mt-2 group-hover:text-gray-200">
              Travel to exotic locations with personalized plans.
            </p>
          </div>
        </div>

        {/* Single Card 4 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl group hover:bg-blue-400">
          <div className="card-img relative">
            <Image
              src={cardImg4}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
              alt="Reliable Travel Assistance"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
              <div className="rounded-full bg-white p-4 shadow-md">
                <FaUserTie className="text-teal-500 text-2xl" />
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <FaGlobe className="text-teal-500 text-3xl mx-auto animate-bounce transition-colors duration-300 ease-in-out group-hover:text-white" />
            <h4 className="text-xl font-semibold text-gray-800 mt-4 group-hover:text-white">
              Reliable Travel Assistance
            </h4>
            <p className="text-gray-600 mt-2 group-hover:text-gray-200">
              We are here to assist you at every step of your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravioSpecials;

