import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPen,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactUsPage = () => {
  const contactDetails = [
    {
      icon: (
        <FaPhone className="text-5xl text-blue-500 group-hover:text-blue-700 transition-all duration-300" />
      ),
      title: "Phone",
      info: "+123 456 789",
    },
    {
      icon: (
        <FaEnvelope className="text-5xl text-red-500 group-hover:text-red-700 transition-all duration-300" />
      ),
      title: "Email",
      info: "info@example.com",
    },
    {
      icon: (
        <FaMapMarkerAlt className="text-5xl text-green-500 group-hover:text-green-700 transition-all duration-300" />
      ),
      title: "Address",
      info: "123 Main Street, City, Country",
    },
  ];

  return (
    <div className="contact-us bg-white py-16 px-8 sm:px-16 lg:px-32">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Contact Us
      </h1>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {contactDetails.map((contact, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-gray-200 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{contact.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-semibold group-hover:text-blue-700 mb-2 transition-colors duration-300">
              {contact.title}
            </h3>

            {/* Info */}
            <p className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
              {contact.info}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Text & Social Section */}
        <div className="p-8 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-blue-800">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-6">
              Whether you have a question, feedback, or just want to say hello,
              feel free to reach out. We are always here to assist you and make
              your experience with us even better.
            </p>
            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                <FaTwitter className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-10 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 w-full p-4 rounded-lg focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                />
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500">
                  <FaUser />
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 w-full p-4 rounded-lg focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                />
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-500">
                  <FaEnvelope />
                </span>
              </div>
            </div>
            <div className="relative mb-6">
              <textarea
                placeholder="Your Message"
                rows={6}
                className="border border-gray-300 w-full p-4 rounded-lg focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
              ></textarea>
              <span className="absolute top-4 right-4 text-blue-500">
                <FaPen />
              </span>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 w-full transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
