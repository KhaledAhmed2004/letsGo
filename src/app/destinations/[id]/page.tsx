import Image from "next/image";
import React from "react";
import mohamayaImg from "../../assets/images/Destinations/Mohamaya.jpg";
import VisitablePlaces2 from "../../assets/images/Destinations/OIP.jpeg";

const DestinationDetailsPage = () => {
  const destination = {
    name: "Beautiful Beach",
    description:
      "A stunning beach with golden sands and crystal clear waters. Perfect for relaxing and enjoying the sun.",
    visitablePlaces: [
      {
        name: "Sunny Resort",
        description:
          "A luxurious resort offering stunning views and great amenities.",
        image: {
          src: mohamayaImg,
          width: 600,
          height: 400,
        },
        locationLink: "https://www.google.com/maps",
      },
      {
        name: "Ocean View Park",
        description:
          "A beautiful park with ocean views, perfect for picnics and outdoor activities.",
        image: {
          src: VisitablePlaces2,
          width: 600,
          height: 400,
        },
        locationLink: "https://www.google.com/maps",
      },
    ],
    weather: {
      temperature: "27°C",
      condition: "Sunny",
    },
    reviews: [
      {
        name: "Alice",
        comment: "Absolutely stunning! The perfect getaway.",
      },
      {
        name: "John",
        comment: "Great place for relaxation and fun activities.",
      },
    ],
    relatedDestinations: [
      {
        name: "Tropical Island",
        link: "/destinations/sunny-coast",
        image: VisitablePlaces2,
      },
      {
        name: "Sunny Coast",
        link: "/destinations/sunny-coast",
        image: VisitablePlaces2,
      },
    ],
  };

  return (
    <div className="destination-details bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-7xl">
      {/* Banner Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 bg-cover bg-center">
        <Image
          src="https://travio.smartdemowp.com/wp-content/uploads/2021/03/page-title-2.jpg"
          alt="Banner Image"
          layout="fill"
          className="object-cover"
        />
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold p-8 absolute bottom-0 left-0 bg-gradient-to-r from-gray-900 via-gray-800 to-transparent">
          {destination.name}
        </h1>
      </div>

      {/* Description Section */}
      <div className="description p-8 sm:p-10 lg:p-12">
        <h2 className="text-3xl font-semibold mb-4">
          About {destination.name}
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          {destination.description}
        </p>

        {/* Weather Information */}
        <div className="weather-info my-4 p-4 bg-blue-100 rounded-lg">
          <h3 className="text-xl font-semibold">Current Weather</h3>
          <p className="text-gray-800">
            {destination.weather.temperature} - {destination.weather.condition}
          </p>
        </div>
      </div>

      {/* Visitable Places Section */}
      <div className="visitable-places p-8 sm:p-10 lg:p-12 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6">Visitable Places</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
          {destination.visitablePlaces.map((place, index) => (
            // <div
            //   key={index}
            //   className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            // >
            //   <Image
            //     src={place.image.src}
            //     alt={place.name}
            //     width={place.image.width}
            //     height={place.image.height}
            //     className="w-full sm:w-1/2 h-40 sm:h-auto object-cover"
            //   />
            //   <div className="p-6 flex-1">
            //     <h3 className="text-2xl font-bold">{place.name}</h3>
            //     <p className="text-gray-700 mt-2">{place.description}</p>
            //     <a
            //       href={place.locationLink}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //       className="flex items-center mt-4 text-blue-500 hover:text-blue-700 transition-colors"
            //     >
            //       <svg
            //         xmlns="http://www.w3.org/2000/svg"
            //         className="h-5 w-5 mr-2"
            //         fill="none"
            //         viewBox="0 0 24 24"
            //         stroke="currentColor"
            //       >
            //         <path
            //           strokeLinecap="round"
            //           strokeLinejoin="round"
            //           strokeWidth={2}
            //           d="M15 17h5l-1.5 4.5L12 12l3-3 3-3 4.5 1.5-3 3-3 3"
            //         />
            //       </svg>
            //       View on Google Maps
            //     </a>
            //   </div>
            // </div>
            <div
              key={index}
              className="flex flex-col md:flex-row mb-6 p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={place.image.src}
                alt={place.name}
                width={place.image.width}
                height={place.image.height}
                className="w-full md:w-1/3 h-auto rounded"
              />
              <div className="ml-0 md:ml-4 flex-1 mt-4 md:mt-0">
                <h3 className="text-xl font-bold">{place.name}</h3>
                <p className="text-gray-700">{place.description}</p>
                <a
                  href={place.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-2 text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.5 4.5L12 12l3-3 3-3 4.5 1.5-3 3-3 3"
                    />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews p-8 sm:p-10 lg:p-12 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6">Reviews</h2>
        {destination.reviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 border-b border-gray-300">
            <p className="font-semibold text-lg">{review.name}</p>
            <p className="text-gray-600">"{review.comment}"</p>
          </div>
        ))}
      </div>

      {/* Related Destinations Section */}
      <div className="related-destinations p-8 sm:p-10 lg:p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-6">Related Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.relatedDestinations.map((dest, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                width={400}
                height={250}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{dest.name}</h3>
              <a
                href={dest.link}
                className="mt-2 text-blue-500 hover:text-blue-700 transition-colors"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
