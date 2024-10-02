import Link from "next/link";
import {
  FaFacebook,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">LetsGo</h3>
            <p className="text-gray-400 mb-4">
              Discover new destinations with ease. Book affordable flights,
              hotels, and tours all in one place. Let’s make your next adventure
              unforgettable!
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-teal-500 transition"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-teal-500 transition">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-teal-500 transition">
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-500 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-teal-500 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>

            {/* Phone Section */}
            <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
              <FaPhoneAlt size={16} className="text-teal-500" />
              <p className="text-gray-400">+987 654 3210</p>
            </div>

            {/* Email Section */}
            <div className="flex justify-center md:justify-start items-center gap-2">
              <MdEmail size={16} className="text-teal-500" />
              <p className="text-gray-400">support@letsGo.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} LetsGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
