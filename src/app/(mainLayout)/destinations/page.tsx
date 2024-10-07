"use client";
import { useGetAllDestinationsQuery } from "@/redux/features/destinations/destinationsApi";
import Image from "next/image";
import Link from "next/link";

// Define the Destination type
interface Destination {
  _id: string;
  name: string;
  image: string;
}

const DestinationsPage = () => {
  const { data } = useGetAllDestinationsQuery({});

  return (
    <section className="place-section py-16 bg-gray-100 dark:bg-gray-800">
      {/* Destinations Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 bg-gray-800 bg-opacity-70 inline-block p-2 rounded-md shadow-lg">
          Explore Our Popular Destinations
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Discover beautiful places to visit around Bangladesh.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data?.map((destination: Destination) => (
            <div
              className="place-block transition-transform duration-300 ease-in-out hover:scale-105"
              key={destination._id}
            >
              <div className="inner-box shadow-lg border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative">
                {/* Main Destination Image */}
                <figure className="image-box overflow-hidden relative">
                  <Image
                    src={destination?.image}
                    alt={destination.name}
                    width={500}
                    height={300}
                    className="object-cover w-full h-[320px] transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  {/* Overlay Text */}
                  <Link
                    href={`destinations/${destination._id}`}
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent text-white p-4 transition-opacity duration-300 hover:bg-opacity-90 rounded-tl-lg rounded-tr-lg"
                  >
                    <h3 className="text-lg font-bold hover:underline">
                      {destination.name}
                    </h3>
                    <p className="text-sm italic">Click to explore more!</p>
                  </Link>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
