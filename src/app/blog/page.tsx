// import React from "react";
// import { FaCalendarAlt } from "react-icons/fa"; // Importing the calendar icon

// const blogPosts = [
//   {
//     id: 1,
//     title: "Exploring the Beautiful Beaches of Thailand",
//     image: "https://example.com/images/thailand-beach.jpg",
//     description:
//       "Discover the hidden gems and stunning views of Thailand's pristine beaches. Perfect for your next vacation!",
//     link: "/blog/thailand-beaches",
//     date: "2021-02-09T09:18:41+00:00",
//     category: "Lifestyle",
//   },
//   // Other blog posts...
// ];

// const DateDisplay = ({ date }) => {
//   return (
//     <span className="flex items-center text-gray-500 text-sm">
//       <FaCalendarAlt className="mr-1 text-blue-600" />
//       <time className="entry-date published" dateTime={date}>
//         {new Date(date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })}
//       </time>
//     </span>
//   );
// };

// const TravelBlogPage = () => {
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900">
//       {/* Header Section */}
//       <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-10 shadow-lg">
//         <h1 className="text-5xl font-bold text-center text-white drop-shadow-lg">
//           Travel Blog
//         </h1>
//         <p className="text-lg text-center text-gray-200 mt-2">
//           Discover your next adventure
//         </p>
//       </header>

//       {/* Blog Section */}
//       <main className="max-w-7xl mx-auto p-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <div key={post.id} className="news-block-one mb-6">
//               <div className="inner-box bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
//                 <figure className="image-box">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-48 object-cover transition duration-300 hover:scale-110"
//                   />
//                 </figure>
//                 <div className="lower-content p-4">
//                   <div className="category mb-2">
//                     <span className="text-blue-500 text-sm font-medium">
//                       {post.category}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">
//                     <a
//                       href={post.link}
//                       className="text-gray-800 dark:text-white hover:text-blue-500 transition duration-200"
//                     >
//                       {post.title}
//                     </a>
//                   </h3>
//                   <DateDisplay date={post.date} /> {/* Displaying the date */}
//                   <p className="text-gray-700 dark:text-gray-300 mb-4">
//                     {post.description}
//                   </p>
//                   <div className="btn-box">
//                     <a
//                       href={post.link}
//                       className="theme-btn-two bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
//                     >
//                       Read More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default TravelBlogPage;
import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Importing the calendar icon

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Beautiful Beaches of Thailand",
    image: "https://example.com/images/thailand-beach.jpg",
    description:
      "Discover the hidden gems and stunning views of Thailand's pristine beaches. Perfect for your next vacation!",
    link: "/blog/thailand-beaches",
    date: "2021-02-09T09:18:41+00:00",
    category: "Lifestyle",
  },
  // Other blog posts...
];

// Define the type for the DateDisplay component props
interface DateDisplayProps {
  date: string; // Expecting date to be a string
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return (
    <span className="flex items-center text-gray-500 text-sm">
      <FaCalendarAlt className="mr-1 text-blue-600" />
      <time className="entry-date published" dateTime={date}>
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </span>
  );
};

const TravelBlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-10 shadow-lg">
        <h1 className="text-5xl font-bold text-center text-white drop-shadow-lg">
          Travel Blog
        </h1>
        <p className="text-lg text-center text-gray-200 mt-2">
          Discover your next adventure
        </p>
      </header>

      {/* Blog Section */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="news-block-one mb-6">
              <div className="inner-box bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <figure className="image-box">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition duration-300 hover:scale-110"
                  />
                </figure>
                <div className="lower-content p-4">
                  <div className="category mb-2">
                    <span className="text-blue-500 text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    <a
                      href={post.link}
                      className="text-gray-800 dark:text-white hover:text-blue-500 transition duration-200"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <DateDisplay date={post.date} /> {/* Displaying the date */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.description}
                  </p>
                  <div className="btn-box">
                    <a
                      href={post.link}
                      className="theme-btn-two bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TravelBlogPage;
