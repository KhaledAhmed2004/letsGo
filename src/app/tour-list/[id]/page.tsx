import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaUser,
  FaMapMarkerAlt,
  FaUserFriends,
  FaHotel,
  FaFlag,
} from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";

const Overview = () => {
  const tourDays = [
    {
      day: "01",
      time: "8:00 am to 10:00 am",
      title: "Day 1: Arrive South Africa Forest",
      description:
        "Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      list: ["Air fares", "4 Nights Hotel Accomodation", "Entrance Fees"],
    },
    {
      day: "02",
      time: "8:00 am to 10:00 am",
      title: "Day 2: Explore South Africa Forest",
      description:
        "Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      list: ["Air fares", "4 Nights Hotel Accomodation", "Entrance Fees"],
    },
    {
      day: "03",
      time: "8:00 am to 10:00 am",
      title: "Day 3: Adventure in South Africa Forest",
      description:
        "Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      list: ["Air fares", "4 Nights Hotel Accomodation", "Entrance Fees"],
    },
  ];

  const imageGallery = [
    "/images/photo1.jpg", // Replace with actual image paths
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
  ];

  return (
    <section className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-900">
        {/* Banner Section */}
        <div
          className="banner relative h-64 bg-cover bg-center rounded-lg shadow-lg mb-8 overflow-hidden"
          style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-5xl font-extrabold leading-tight text-center transition-transform duration-300 transform hover:scale-105">
              Explore the Beauty of South Africa
            </h1>
            <div className="mt-2 flex items-center">
              <span className="flex items-center">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star-half-alt text-yellow-400"></i>
              </span>
              <span className="ml-2 text-sm">(4.5 / 5 - 200 Reviews)</span>
            </div>
            <p className="text-xl mt-3 text-center max-w-md">
              Join us for an unforgettable adventure in breathtaking landscapes
              and vibrant cultures!
            </p>
            <p className="text-lg mt-1 text-center max-w-md font-semibold">
              Only $160 <span className="text-sm">(per person)</span>
            </p>
            <Link
              href={"/tour-list/1/1"}
              className="mt-6 px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="text-gray-800 dark:text-gray-300 p-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
          <p className="mb-6 text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Info List */}
          <ul className="info-list flex flex-wrap justify-center space-x-6 bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <li className="flex items-center text-blue-600 dark:text-blue-400 text-md font-semibold">
              <FaClock className="mr-2" /> 5 Days
            </li>
            <li className="flex items-center text-blue-600 dark:text-blue-400 text-md font-semibold">
              <FaUser className="mr-2" /> Age 15+
            </li>
            <li className="flex items-center text-blue-600 dark:text-blue-400 text-md font-semibold">
              <FaMapMarkerAlt className="mr-2" /> G87P, Birmingham
            </li>
          </ul>
        </div>

        {/* Table Section */}
        <section className="my-8 bg-white border border-gray-200 rounded-lg shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 dark:text-gray-300">
            Tour Details
          </h2>
          <table className="w-full text-left">
            <tbody>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <FaFlag className="inline-block mr-2" />
                  Destination:
                </td>
                <td className="py-4 dark:text-gray-400">New York City</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <GiAirplaneDeparture className="inline-block mr-2" />
                  Departure:
                </td>
                <td className="py-4 dark:text-gray-400">Yes Required</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <GiAirplaneDeparture className="inline-block mr-2" />
                  Departure Time:
                </td>
                <td className="py-4 dark:text-gray-400">8:00 AM</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <GiAirplaneDeparture className="inline-block mr-2" />
                  Return Time:
                </td>
                <td className="py-4 dark:text-gray-400">6:00 PM</td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <FaHotel className="inline-block mr-2" />
                  Included:
                </td>
                <td className="py-4 dark:text-gray-400">
                  <ul className="list-disc list-inside">
                    <li>Air fares</li>
                    <li>4 Nights Hotel Accommodation</li>
                    <li>Entrance Fees</li>
                    <li>Tour Guide</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="py-4 font-semibold dark:text-gray-300">
                  <FaUserFriends className="inline-block mr-2" />
                  Excluded:
                </td>
                <td className="py-4 dark:text-gray-400">
                  <ul className="list-disc list-inside">
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li>Personal Expenses</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Tour Plan Section */}
        <div className="tour-plan container mx-auto px-4 my-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 dark:text-gray-300">
              Tour Plan
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="content-box grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourDays.map((day, index) => (
              <div
                key={index}
                className="tour-day border rounded-lg bg-gray-100 shadow p-4 dark:bg-gray-700"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                  {day.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {day.time}
                </p>
                <p className="mt-2 mb-4 dark:text-gray-400">
                  {day.description}
                </p>
                <ul className="list-disc list-inside pl-5 dark:text-gray-400">
                  {day.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="image-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {imageGallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
