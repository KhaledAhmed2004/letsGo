import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaUser,
  FaMapMarkerAlt,
  FaFlag,
  FaHotel,
  FaUserFriends,
} from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";

interface PackageDetails {
  img: string;
  destination: string;
  price: number;
  description: string;
  duration: string;
  departureDate: string;
  departureTime: string;
  return: string;
  include: string[]; // Array of strings for included items
  exclude: string[]; // Array of strings for excluded items
  day1?: string[]; // Optional, if days are present
  day2?: string[]; // Optional, if days are present
  day3?: string[]; // Optional, if days are present
  gallery?: string[]; // Array of gallery images
}
// Define the type for params
interface OverviewProps {
  params: {
    id: string; // or number, depending on how you handle IDs
  };
}
const Overview = async ({ params }: OverviewProps) => {
  // Fetch the package details
  // const res = await fetch(`http://localhost:5000/api/package/${params?.id}`);
  const res = await fetch(`https://tour-gide-server.vercel.app/api/package/${params?.id}`);
  const data = await res.json();
  const packgeDitels: PackageDetails = data?.data; // Use the fetched data

  // Combine available day arrays into tourDays
  const tourDays = [
    ...(packgeDitels?.day1
      ? [{ title: "Day 1", list: packgeDitels.day1 }]
      : []),
    ...(packgeDitels?.day2
      ? [{ title: "Day 2", list: packgeDitels.day2 }]
      : []),
    ...(packgeDitels?.day3
      ? [{ title: "Day 3", list: packgeDitels.day3 }]
      : []),
  ].filter((day) => day.list.length > 0); // Filter out any empty days

  // Image gallery data
  // const imageGallery = packgeDitels?.gallery;
  const imageGallery: string[] = packgeDitels?.gallery || []; // Default to an empty array

  return (
    <section className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-900">
        {/* Banner Section */}
        <div
          className="banner relative h-80 md:h-96 bg-cover bg-no-repeat bg-center rounded-lg shadow-lg mb-8 overflow-hidden transition-transform duration-300"
          style={{ backgroundImage: `url(${packgeDitels?.img})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-6xl font-extrabold leading-tight text-center transition-transform duration-300 transform hover:scale-105">
              Explore the Beauty of {packgeDitels?.destination}
            </h1>
            <p className="text-xl mt-3 text-center max-w-md font-semibold">
              Only ${packgeDitels?.price}{" "}
              <span className="text-sm">(per person)</span>
            </p>
            <p className="text-lg mt-3 text-center">
              {packgeDitels?.description ||
                "Discover breathtaking landscapes and unforgettable experiences!"}
            </p>
            <Link
              href={`/tour-list/${params.id}/1`}
              className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
        {/* Overview Section */}
        <div className="text-gray-800 dark:text-gray-300 p-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
          <p className="mb-6 text-center text-lg">
            Join us for an unforgettable adventure in breathtaking landscapes
            and vibrant cultures!
          </p>

          {/* Info List */}
          <ul className="info-list flex flex-wrap justify-center space-x-6 bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <li className="flex items-center text-blue-600 dark:text-blue-400 text-md font-semibold">
              <FaClock className="mr-2" /> {packgeDitels?.duration}
            </li>
            <li className="flex items-center text-blue-600 dark:text-blue-400 text-md font-semibold">
              <FaUser className="mr-2" /> Age 15+
            </li>
            <li className="flex items-center text-blue-600 dark:text-blue-400 text-md font-semibold">
              <FaMapMarkerAlt className="mr-2" /> {packgeDitels?.destination}
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
                <td className="py-4 dark:text-gray-400">
                  {packgeDitels?.destination}
                </td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <GiAirplaneDeparture className="inline-block mr-2" />
                  Departure:
                </td>
                <td className="py-4 dark:text-gray-400">
                  {packgeDitels?.departureDate}
                </td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <GiAirplaneDeparture className="inline-block mr-2" />
                  Departure Time:
                </td>
                <td className="py-4 dark:text-gray-400">
                  {packgeDitels?.departureTime}
                </td>
              </tr>

              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <GiAirplaneDeparture className="inline-block mr-2" />
                  Return Time:
                </td>

                <td className="py-4 dark:text-gray-400">
                  {packgeDitels?.return}
                </td>
              </tr>
              <tr className="border-b dark:border-gray-600">
                <td className="py-4 font-semibold dark:text-gray-300">
                  <FaHotel className="inline-block mr-2" />
                  Included:
                </td>
                <td className="py-4 dark:text-gray-400">
                  <ul className="list-disc list-inside">
                    {packgeDitels?.include.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
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
                    {packgeDitels?.exclude.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
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
            {tourDays.length > 0 ? (
              tourDays.map((day, index) => (
                <div
                  key={index}
                  className="tour-day border rounded-lg bg-gray-100 shadow p-4 dark:bg-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-2 dark:text-gray-300">
                    {day.title}
                  </h3>
                  <ul className="list-disc list-inside pl-5 dark:text-gray-400">
                    {day.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400">
                No tour days available.
              </p>
            )}
          </div>
        </div>
        {/* Image Gallery Section */}
        {imageGallery?.length > 0 && (
          <div className="image-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {imageGallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg h-56"
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 bg-center"
                  width={600} // Set this to your desired width
                  height={400} // Set this to your desired height
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Overview;
