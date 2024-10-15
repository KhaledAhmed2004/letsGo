import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaHiking,
  FaLandmark,
  FaMapMarkerAlt,
  FaMountain,
  FaStar,
  FaStarHalfAlt,
  FaTree,
  FaUtensils,
} from "react-icons/fa";

// Define the types for the params
interface Params {
  id: string;
  slagId: string;
}

// Define the component props type
interface DestinationDetailsPageProps {
  params: Params;
}
const DestinationDetailsPage: React.FC<DestinationDetailsPageProps> = async ({
  params,
}) => {
  const res = await fetch(
    `https://tour-gide-server.vercel.app/api/destinations/${params?.id}/${params?.slagId}`
  );
  const destination = await res.json();
  console.log(destination);
  return (
    <div className="font-sans">
      {/* Destination Overview with Image on the Right */}
      <section className="p-6 flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-lg mb-8">
        {/* Left Side: Text Details */}

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-2 text-blue-600">
            Beautiful Mohamaya lake
          </h2>

          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl flex items-center mr-2">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
            </span>
            <p className="text-gray-700">(4.5 out of 5 stars)</p>
            <p className="text-blue-500 ml-4">(20 Reviews)</p>
          </div>

          <p className="text-gray-700 mb-4">
          Mohamaya Lake, located in Mirsarai, Chittagong, is a stunning man-made lake surrounded by hills and lush greenery. It offers a serene and peaceful escape for nature lovers, with activities such as boating, kayaking, and hiking. The crystal-clear water and scenic beauty make it a perfect spot for relaxation and adventure. Mohamaya Lake is becoming an increasingly popular destination for tourists seeking tranquility amidst nature.
          </p>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Contact Information
            </h3>
            <p className="text-gray-800">
              <strong>Phone:</strong> +8801735807444
            </p>
            <p className="text-gray-800">
              <strong>Email:</strong> info@touristExpress.com
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mt-6 md:mt-0 md:w-1/2 md:ml-6">
          <Image
            src={"https://i.ibb.co/MMbcXqL/Mohamaya-lake.jpg"}
            alt="Destination"
            width={500} // Set the width of the image
            height={400} // Set the height of the image
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Details Section */}
      <section className="p-6 bg-white rounded-lg mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <FaMountain className="text-blue-500 mr-2" /> Discover More Details
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Best Time to Visit</h3>
          <p className="text-gray-700">
            <FaCalendarAlt className="inline-block text-blue-500 mr-2" />
            <strong>November to February:</strong> The best time to visit Mohamaya Lake when the weather is cooler and more comfortable for outdoor activities and enjoying the lake’s scenic beauty.
          </p>

          <h3 className="text-xl font-semibold">Activities</h3>
          <p className="text-gray-700 flex items-center">
            <FaHiking className="text-green-500 mr-2" />
            <strong>Hiking:</strong> Enjoy scenic trails and immerse yourself in
            nature&apos;s beauty.
          </p>
          <p className="text-gray-700 flex items-center">
            <FaUtensils className="text-yellow-500 mr-2" />
            <strong>Local Cuisine:</strong> Savor regional dishes that reflect
            the rich flavors of the culture.
          </p>
        </div>
      </section>

      {/* Map Location */}
      <section className="p-6 flex flex-col md:flex-row items-start justify-between bg-white rounded-lg mb-8">
        {/* Left Side: Location Details */}
        <div className="md:w-1/2 pr-4">
          <h2 className="text-2xl font-bold mb-4">
            <FaMapMarkerAlt className="inline-block text-red-500 mr-2" />
            Location
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Destination Lane, City, Country
          </p>
          <p className="text-gray-700 mb-4">
            This beautiful destination is located in the heart of the city,
            making it easily accessible. It is surrounded by stunning natural
            landscapes and rich cultural sites.
          </p>
          <h3 className="text-xl font-semibold mb-2">Nearby Attractions:</h3>
          <ul className="list-disc ml-5 text-gray-600">
            <li>
              <FaLandmark className="inline-block text-gray-500 mr-2" />
              Famous Museum (1.5 miles)
            </li>
            <li>
              <FaTree className="inline-block text-green-500 mr-2" />
              City Park (2 miles)
            </li>
            <li>
              <FaLandmark className="inline-block text-gray-500 mr-2" />
              Historical Landmark (3 miles)
            </li>
          </ul>
        </div>

        {/* Right Side: Map */}
        <div className="mt-6 md:mt-0 md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            className="w-full h-64 rounded-lg shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="p-6 bg-white rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="border p-4 rounded-lg mb-4">
          <p className="text-gray-700">
            &quot;This was the best vacation ever! The scenery was breathtaking
            and the tour was well-organized.&quot; - Jane Doe
          </p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500 mr-1" />
            ))}
          </div>
        </div>
        <div className="border p-4 rounded-lg">
          <p className="text-gray-700">
            &quot;An unforgettable experience. The local cuisine was delightful,
            and the guides were knowledgeable.&quot; - John Smith
          </p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500 mr-1" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailsPage;
