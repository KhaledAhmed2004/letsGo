import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
// Define a type for the params
interface DestinationParams {
  params: {
    id: string; // You can change this to number if your id is numeric
  };
}
interface Place {
  img: string; // Adjust types based on your API response
  en: {
    name: string;
  };
  destinationsId: string; // Change to number if your ID is numeric
}

interface Destination {
  name: string;
  descriptionEN: string;
  image: string;
  destinations: Place[];
}

const DestinationDetailsPage = async ({ params }: DestinationParams) => {
  const res = await fetch(
    // `http://localhost:5000/api/destinations/${params?.id}`
    `https://tour-gide-server.vercel.app/api/destinations/${params?.id}`
  );
  const destinations = await res.json();
  const destination: Destination = destinations?.data;
  // console.log(destination?.destinations);

  if (!destination) {
    return <div className="text-center p-8">Destination not found.</div>;
  }

  return (
    <section className="dark:bg-gray-800">
      <div className="destination-details bg-white text-gray-800 dark:bg-gray-900 dark:text-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-7xl">
        {/* Banner Section */}
        <div className="relative h-64 sm:h-80 lg:h-96 bg-cover bg-center">
          <Image
            src={destination?.image}
            alt="Banner Image"
            layout="fill"
            className="object-cover"
          />
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold p-8 absolute bottom-0 left-0 bg-gradient-to-r from-gray-900 via-gray-800 to-transparent">
            {destination?.name}
          </h1>
        </div>

        {/* Description Section */}
        <div className="description p-8 sm:p-10 lg:p-12">
          <h2 className="text-3xl font-semibold mb-4">
            About {destination.name}
          </h2>
          <p className="leading-relaxed text-lg mb-4">
            {destination.descriptionEN}
          </p>
        </div>

        {/* Visitable Places Section */}
        <div className="visitable-places p-8 sm:p-10 lg:p-12 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-3xl font-semibold mb-6">Visitable Places</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination?.destinations?.map((place, index: number) => {
              // const placeId = place?.id;
              console.log("img", place?.img);
              // const locationLink = place?.locationLink;

              return (
                <Link
                  key={index}
                  // href={`/destinations/${destination._id}/${index}`}
                  href={`/destinations/0001/${place.destinationsId}`}
                  passHref
                >
                  {/* Link to the dynamic route */}
                  <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 cursor-pointer">
                    <Image
                      src={place?.img}
                      alt={place.en.name}
                      width={400}
                      height={250}
                      className="w-full h-40 object-cover bg-center  rounded-t-lg"
                    />
                    <h3 className="text-xl font-bold mt-4 flex items-center">
                      {place.en.name}
                    </h3>
                    <div className="flex items-center justify-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" />
                      {/* {locationLink && (
                        <Link
                          href={locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-blue-500 hover:text-blue-700 transition-colors"
                        >
                          View on Google Maps
                        </Link>
                      )} */}
                      <Link
                        href={"map"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-blue-500 hover:text-blue-700 transition-colors flex"
                      >
                        View on Google Maps
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetailsPage;
