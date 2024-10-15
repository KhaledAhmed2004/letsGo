import Image from "next/image";
import banner from "../../assets/images/banner-2.jpg";

const HeroSection = () => {
  return (
    <div className="relative mt-[64px] bg-gray-800 text-white h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={banner}
        alt="Travel destination"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center p-6">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wider leading-tight drop-shadow-lg">
          Discover Your Next <span className="text-teal-400">Adventure</span>
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 tracking-wide font-light drop-shadow-lg">
          Explore new destinations and make unforgettable memories
        </p>

        {/* Enhanced Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Destination Input */}
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full sm:w-64 md:w-72 lg:w-80 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 bg-white focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-300"
          />

          {/* Date Picker */}
          <input
            type="date"
            className="w-full sm:w-48 md:w-56 lg:w-64 px-6 py-4 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-300"
          />

          {/* Tour Type Dropdown */}
          {/* <select className="w-full sm:w-48 md:w-56 lg:w-64 px-6 py-4 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-4 focus:ring-teal-500 transition duration-300">
            <option value="">Select Tour Type</option>
            <option value="couple">Couple Tour</option>
            <option value="group">Group Tour</option>
            <option value="adventure">Adventure Tour</option>
            <option value="luxury">Luxury Tour</option>
          </select> */}

          {/* Search Button */}
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-4 rounded-full font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
