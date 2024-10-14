"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import {
  FaHome,
  FaPlus,
  FaClipboardList,
  FaBed,
  FaNewspaper,
} from "react-icons/fa"; // Import icons
import Navbar from "@/components/shared/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Get current pathname

  const navLinks = [
    { name: "Dashboard", path: "admin-dashboard/dashboard", icon: <FaHome /> },
    { name: "Add Package", path: "/admin-dashboard/add-package", icon: <FaPlus /> },

    {
      name: "Package Management",
      path: "/admin-dashboard/package-management",
      icon: <FaClipboardList />,
    },
    {
      name: "Room Management",
      path: "/admin-dashboard/room-management",
      icon: <FaBed />,
    },
    { name: "Blog Post", path: "/admin-dashboard/blog-post", icon: <FaNewspaper /> },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex h-screen bg-gray-100 mt-[64px]">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform transform lg:relative lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button
              className="text-gray-600 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="mt-4">
            {navLinks.map((link) => (
              <Link className="" key={link.name} href={link.path} passHref>
                <button
                  className={`flex items-center  w-full px-4 py-2 text-left text-gray-700 transition-colors duration-300 ease-in-out ${
                    pathname === link.path
                      ? "bg-blue-500 text-white font-bold rounded-lg shadow-md"
                      : "hover:bg-gray-200 rounded-lg"
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <span
                    className={`mr-2 transition-colors duration-300 ${
                      pathname === link.path ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {link.icon}
                  </span>{" "}
                  {link.name}
                </button>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <button
            className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className="text-2xl">&#9776;</span> {/* Hamburger icon */}
          </button>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
