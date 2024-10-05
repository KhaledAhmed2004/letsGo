"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Add Package", path: "add-package" },
    { name: "Add Hotel Room", path: "add-hotel-room" },
    { name: "Package Management", path: "/package-management" },
    { name: "Room Management", path: "/room-management" },
    { name: "Blog Post", path: "/blog-post" },
    { name: "ParcelList", path: "/parcelList" },
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
      <div className="flex h-screen bg-gray-100">
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
              <Link key={link.name} href={link.path} passHref>
                <button
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                  onClick={() => setIsSidebarOpen(false)}
                >
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
            &#9776;
          </button>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
