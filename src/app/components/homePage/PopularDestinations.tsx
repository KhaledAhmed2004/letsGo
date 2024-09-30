import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../assets/images/Destinations/place-1.jpg";
import img2 from "../../assets/images/Destinations/place-2.jpg";
import img3 from "../../assets/images/Destinations/place-3.jpg";
import img4 from "../../assets/images/Destinations/place-4.jpg";
import img5 from "../../assets/images/Destinations/place-5.jpg";

const destinations = [
  {
    name: "New York City",
    imgSrc: img1,
    width: 500,
    height: 300,
    link: "",
  },
  {
    name: "Norway Lake",
    imgSrc: img2,
    width: 500,
    height: 300,
    link: "",
  },
  {
    name: "Norway Lake",
    imgSrc: img3,
    width: 500,
    height: 300,
    link: "",
  },
  {
    name: "African Park",
    imgSrc: img4,
    width: 500,
    height: 300,
    link: "",
  },
  {
    name: "African Park",
    imgSrc: img5,
    width: 500,
    height: 300,
    link: "",
  },
];

const PopularDestinations = () => {
  return (
    <section className="bg-gray-100 py-16 relative">
      {/* Section Title */}
      <div className="container mx-auto px-4 z-10 relative text-center mb-12">
        <p className="text-teal-500 font-semibold tracking-wider uppercase">
          Choose Your Place
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          Popular Destinations
        </h2>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 z-10 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <figure className="relative h-56 overflow-hidden">
              <Image
                src={destination.imgSrc}
                alt={destination.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
                width={destination.width}
                height={destination.height}
              />
            </figure>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-500 transition-colors duration-300">
                <a
                  href={destination.link}
                  target="_blank"
                  rel="nofollow"
                  className="hover:text-teal-500"
                >
                  {destination.name}
                </a>
              </h3>
              <Link
                href={destination.link}
                className="text-teal-500 font-semibold group-hover:text-teal-600"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
        {/* All Destination Link */}
        <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6 hover:shadow-xl transition-all duration-300">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Find All Destinations
            </h3>
            <Link
              href="goNext"
              className="bg-teal-500 text-white py-3 px-6 rounded-full hover:bg-teal-600 transition"
            >
              Find Now
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
    </section>
  );
};

export default PopularDestinations;
