import Image from "next/image";
import Link from "next/link";
import {
  FaPlaneDeparture,
  FaRegClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa"; // Import icons

const PackageCard = ({ tour }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Tour image */}
      <div className="relative h-48">
        <Image
          src={tour.img}
          alt={tour.destination}
          layout="fill" // Responsive image
          objectFit="cover" // Maintain aspect ratio
          className="transition-opacity duration-300 ease-in-out hover:opacity-90"
        />
        {/* Optional overlay for effect */}
        {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
      </div>

      <div className="p-4">
        {/* Tour title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {tour.destination}
        </h3>

        {/* Tour details with icons */}
        <div className="flex items-center space-x-2 mt-2 text-gray-600 dark:text-gray-300">
          <FaPlaneDeparture className="text-blue-500" />
          <span>Departure: {tour.departure}</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 text-gray-600 dark:text-gray-300">
          <FaRegClock className="text-yellow-500" />
          <span>Duration: {tour.duration}</span>
        </div>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-2">
          Price: ${tour.price}
        </p>

        {/* Status with icons */}
        <div className="mt-2 flex items-center space-x-2">
          {tour.status === "available" ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaTimesCircle className="text-red-500" />
          )}
          <span
            className={
              tour.status === "available" ? "text-green-500" : "text-red-500"
            }
          >
            {tour.status === "available" ? "Available" : "Sold Out"}
          </span>
        </div>

        {/* View Details button */}
        <Link href={`tour-list/${tour._id}`}>
          <button className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-transform transform hover:scale-105">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
