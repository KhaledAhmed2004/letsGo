// // import { useGetAllDestinationsQuery } from "@/redux/features/destinations/destinationsApi";
// import nexiosInstance from "@/config/nexios.config";
// import Image from "next/image";
// import Link from "next/link";

// const DestinationsPage = async () => {
//   // const { data: destinations } = useGetAllDestinationsQuery();
//   // const destinations = [
//   //   {
//   //     title: "New York City",
//   //     imgSrc:
//   //       "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-1.jpg",
//   //     link: "destinations/1",
//   //     alt: "New York City",
//   //     featured: true,
//   //   },
//   //   {
//   //     title: "Mont Blanc",
//   //     imgSrc:
//   //       "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-5.jpg",
//   //     link: "destinations/1",
//   //     alt: "Mont Blanc",
//   //   },
//   //   {
//   //     title: "African Park",
//   //     imgSrc:
//   //       "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-2.jpg",
//   //     link: "destinations/1",
//   //     alt: "African Park",
//   //   },
//   //   {
//   //     title: "Vietnam",
//   //     imgSrc:
//   //       "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-3.jpg",
//   //     link: "destinations/1",
//   //     alt: "Vietnam",
//   //     featured: true,
//   //   },
//   //   {
//   //     title: "Norway Lake",
//   //     imgSrc:
//   //       "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-13.jpg",
//   //     link: "destinations/1",
//   //     alt: "Norway Lake",
//   //   },
//   //   {
//   //     title: "Netherland",
//   //     imgSrc:
//   //       "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-14.jpg",
//   //     link: "destinations/1",
//   //     alt: "Netherland",
//   //   },
//   //   {
//   //     title: "Costa Rica",
//   //     imgSrc:
//   //       "https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-10.jpg",
//   //     link: "destinations/1",
//   //     alt: "Costa Rica",
//   //   },
//   // ];
//   const destinations = await nexiosInstance.get("/destinations", {
//     cache: "no-store",
//   });
//   console.log(destinations?.data);
//   return (
//     <section className="place-section py-16 bg-gray-100 dark:bg-gray-800">
//       {/* Destinations Header */}
//       <div className="container mx-auto px-4 text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
//           Explore Our Popular Destinations
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 text-lg">
//           Discover beautiful places to visit around Bangladesh.
//         </p>
//       </div>

//       {/* Destinations Grid */}
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {destinations?.data?.map(({ name, image, link, featured }) => (
//             <div
//               className={`place-block transition-transform duration-300 ease-in-out hover:scale-105 ${
//                 featured ? "lg:col-span-2" : ""
//               }`}
//               key={name}
//             >
//               <div className="inner-box shadow-lg border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <figure className="image-box overflow-hidden">
//                   <Image
//                     src={image}
//                     alt={name}
//                     width={500}
//                     height={300}
//                     className="object-cover w-full h-[320px] transition-transform duration-300 ease-in-out hover:scale-110 p-2"
//                   />
//                 </figure>
//                 <div className="text p-4 text-center bg-white dark:bg-gray-900 rounded-b-lg">
//                   <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                     <a
//                       href={link}
//                       className="text-blue-600 dark:text-blue-400 hover:underline"
//                     >
//                       {name}
//                     </a>
//                   </h3>
//                   <Link
//                     href={link}
//                     className="mt-2 inline-block px-4 py-2 text-sm text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded transition-colors duration-300"
//                   >
//                     Learn More
//                   </Link>
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

// import nexiosInstance from "@/config/nexios.config";
// import Image from "next/image";
// import Link from "next/link";

// const DestinationsPage = async () => {
//   const { data } = await nexiosInstance.get("/destinations", {
//     cache: "no-store",
//   });
//   console.log(data?.data);
//   return (
//     <section className="place-section py-16 bg-gray-100 dark:bg-gray-800">
//       {/* Destinations Header */}
//       <div className="container mx-auto px-4 text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
//           Explore Our Popular Destinations
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 text-lg">
//           Discover beautiful places to visit around Bangladesh.
//         </p>
//       </div>

//       {/* Destinations Grid */}
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {data?.data.map(
//             ({
//               _id,
//               name,
//               image,
//               descriptionEN,
//               descriptionBN,
//               attractions,
//             }) => (
//               <div
//                 className="place-block transition-transform duration-300 ease-in-out hover:scale-105"
//                 key={_id}
//               >
//                 <div className="inner-box shadow-lg border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                   {/* Main Destination Image */}
//                   <figure className="image-box overflow-hidden">
//                     <Image
//                       src={image}
//                       alt={name}
//                       width={500}
//                       height={300}
//                       className="object-cover w-full h-[320px] transition-transform duration-300 ease-in-out hover:scale-110 p-2"
//                     />
//                   </figure>
//                   <div className="text p-4 text-center bg-white dark:bg-gray-900 rounded-b-lg">
//                     <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                       {name}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DestinationsPage;
import nexiosInstance from "@/config/nexios.config";
import Image from "next/image";
import Link from "next/link";

const DestinationsPage = async () => {
  const { data } = await nexiosInstance.get("/destinations", {
    cache: "no-store",
  });
  console.log(data?.data);
  
  return (
    <section className="place-section py-16 bg-gray-100 dark:bg-gray-800">
      {/* Destinations Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Explore Our Popular Destinations
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Discover beautiful places to visit around Bangladesh.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data.map(
            ({
              _id,
              name,
              image,
              descriptionEN,
              descriptionBN,
              attractions,
            }) => (
              <div
                className="place-block transition-transform duration-300 ease-in-out hover:scale-105"
                key={_id}
              >
                <div className="inner-box shadow-lg border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-900 relative">
                  {/* Main Destination Image */}
                  <figure className="image-box overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      width={500}
                      height={300}
                      className="object-cover w-full h-[320px] transition-transform duration-300 ease-in-out hover:scale-110 p-2"
                    />
                  </figure>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </div>

                  <div className="text p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {descriptionEN.length > 100
                        ? `${descriptionEN.substring(0, 100)}...`
                        : descriptionEN}
                    </p>
                    <Link href={`/destinations/${_id}`}>
                      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
