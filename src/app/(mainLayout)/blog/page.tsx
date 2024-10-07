import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

// Define a type for a blog post
interface BlogPost {
  _id: string;
  img: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

// Define the TravelBlogPage component
const TravelBlogPage: React.FC = async () => {
  // const res = await fetch("http://localhost:5000/api/blog");
  const res = await fetch("https://tour-gide-server.vercel.app/api/blog");
  const blogPosts = await res.json();

  // Assuming blogPosts has a data field that contains an array of blog posts
  const posts: BlogPost[] = blogPosts?.data;

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 py-10 shadow-lg">
        <h1 className="text-6xl font-bold text-center text-white drop-shadow-lg">
          Travel Blog
        </h1>
        <p className="text-lg text-center text-gray-200 mt-2">
          Discover your next adventure
        </p>
      </header>

      {/* Marquee Section */}
      <Marquee className="bg-blue-600 text-white p-4 text-lg">
        Breaking News: New travel guidelines have been issued. Check out the
        latest destinations for your next adventure! 🌍✈️
      </Marquee>

      {/* Blog Section */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post._id} className="news-block-one mb-6">
              <div className="inner-box bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
                <figure className="image-box">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition duration-300 hover:scale-110"
                  />
                </figure>
                <div className="lower-content p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white line-clamp-2">
                    <a
                      href={`#`}
                      className="hover:text-blue-500 transition duration-200"
                    >
                      {post.title}
                    </a>
                  </h3>

                  {/* Author Section with Icon */}
                  <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300 text-sm">
                    <FaUser className="mr-2" /> {/* User icon */}
                    {post.author || "Unknown Author"}
                  </div>

                  {/* Date Section with Icon */}
                  <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400 text-sm">
                    <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
                    {post.date}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                    {post.description}
                  </p>
                  <div className="btn-box">
                    <a
                      href={`#`}
                      className="theme-btn-two bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
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
