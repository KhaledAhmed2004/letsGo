// import Image from "next/image";

// const DestinationsPage = () => {
//   const destinations = [
//     {
//       title: "New York City",
//       imgSrc:
//         "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-1.jpg",
//       link: "destinations/1",
//       alt: "New York City",
//       featured: true,
//     },
//     {
//       title: "Mont Blanc",
//       imgSrc:
//         "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-5.jpg",
//       link: "destinations/1",
//       alt: "Mont Blanc",
//     },
//     {
//       title: "African Park",
//       imgSrc:
//         "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-2.jpg",
//       link: "destinations/1",
//       alt: "African Park",
//     },
//     {
//       title: "Vietnam",
//       imgSrc:
//         "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-3.jpg",
//       link: "destinations/1",
//       alt: "Vietnam",
//       featured: true,
//     },
//     {
//       title: "Norway Lake",
//       imgSrc:
//         "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-13.jpg",
//       link: "destinations/1",
//       alt: "Norway Lake",
//     },
//     {
//       title: "Netherland",
//       imgSrc:
//         "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-14.jpg",
//       link: "destinations/1",
//       alt: "Netherland",
//     },
//     {
//       title: "Costa Rica",
//       imgSrc:
//         "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-10.jpg",
//       link: "destinations/1",
//       alt: "Costa Rica",
//     },
//   ];

//   return (
//     <section className="place-section py-16 bg-gray-100">
//       {/* Destinations Header */}
//       <div className="container mx-auto px-4 text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           Explore Our Popular Destinations
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Discover beautiful places to visit around the world.
//         </p>
//       </div>

//       {/* Destinations Grid */}
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {destinations.map(({ title, imgSrc, link, alt, featured }) => (
//             <div
//               className={`place-block transition-transform duration-300 ease-in-out hover:scale-105 ${
//                 featured ? "lg:col-span-2" : ""
//               }`}
//               key={title}
//             >
//               <div className="inner-box shadow-lg border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <figure className="image-box overflow-hidden">
//                   <Image
//                     src={imgSrc}
//                     alt={alt}
//                     width={500}
//                     height={300}
//                     className="object-cover w-full h-[320px] transition-transform duration-300 ease-in-out hover:scale-110 p-2"
//                   />
//                 </figure>
//                 <div className="text p-4 text-center bg-white rounded-b-lg">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     <a href={link} className="text-blue-600 hover:underline">
//                       {title}
//                     </a>
//                   </h3>
//                   <a
//                     href={link}
//                     className="mt-2 inline-block px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors duration-300"
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DestinationsPage;

import Image from "next/image";
import Link from "next/link";

const DestinationsPage = () => {
  const destinations = [
    {
      title: "New York City",
      imgSrc:
        "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-1.jpg",
      link: "destinations/1",
      alt: "New York City",
      featured: true,
    },
    {
      title: "Mont Blanc",
      imgSrc:
        "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-5.jpg",
      link: "destinations/1",
      alt: "Mont Blanc",
    },
    {
      title: "African Park",
      imgSrc:
        "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-2.jpg",
      link: "destinations/1",
      alt: "African Park",
    },
    {
      title: "Vietnam",
      imgSrc:
        "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-3.jpg",
      link: "destinations/1",
      alt: "Vietnam",
      featured: true,
    },
    {
      title: "Norway Lake",
      imgSrc:
        "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-13.jpg",
      link: "destinations/1",
      alt: "Norway Lake",
    },
    {
      title: "Netherland",
      imgSrc:
        "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-14.jpg",
      link: "destinations/1",
      alt: "Netherland",
    },
    {
      title: "Costa Rica",
      imgSrc:
        "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-10.jpg",
      link: "destinations/1",
      alt: "Costa Rica",
    },
  ];

  return (
    <section className="place-section py-16 bg-gray-100 dark:bg-gray-800">
      {/* Destinations Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Explore Our Popular Destinations
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Discover beautiful places to visit around the world.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(({ title, imgSrc, link, alt, featured }) => (
            <div
              className={`place-block transition-transform duration-300 ease-in-out hover:scale-105 ${
                featured ? "lg:col-span-2" : ""
              }`}
              key={title}
            >
              <div className="inner-box shadow-lg border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <figure className="image-box overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={alt}
                    width={500}
                    height={300}
                    className="object-cover w-full h-[320px] transition-transform duration-300 ease-in-out hover:scale-110 p-2"
                  />
                </figure>
                <div className="text p-4 text-center bg-white dark:bg-gray-900 rounded-b-lg">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    <a
                      href={link}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {title}
                    </a>
                  </h3>
                  <Link
                    href={link}
                    className="mt-2 inline-block px-4 py-2 text-sm text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
