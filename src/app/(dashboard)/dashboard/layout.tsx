// "use client";
// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // Import usePathname
// import { FaHome, FaBoxOpen } from "react-icons/fa"; // Import icons
// import Navbar from "@/components/shared/Navbar";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname(); // Get current pathname

//   const navLinks = [
//     { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
//     // { name: "Add Package", path: "/dashboard/add-package", icon: <FaPlus /> },
//     // {
//     //   name: "Add Hotel Room",
//     //   path: "/dashboard/add-hotel-room",
//     //   icon: <FaBed />,
//     // },
//     // {
//     //   name: "Package Management",
//     //   path: "/dashboard/package-management",
//     //   icon: <FaClipboardList />,
//     // },
//     // {
//     //   name: "Room Management",
//     //   path: "/dashboard/room-management",
//     //   icon: <FaBed />,
//     // },
//     // { name: "Blog Post", path: "/dashboard/blog-post", icon: <FaNewspaper /> },
//     {
//       name: "Booking List",
//       path: "/dashboard/booking-list",
//       icon: <FaBoxOpen />,
//     },
//   ];

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       sidebarRef.current &&
//       !sidebarRef.current.contains(event.target as Node)
//     ) {
//       setIsSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex h-screen bg-gray-100 mt-[64px]">
//         {/* Sidebar */}
//         <div
//           ref={sidebarRef}
//           className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform transform lg:relative lg:translate-x-0 ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex items-center justify-between p-4 border-b">
//             <h1 className="text-2xl font-bold">Dashboard</h1>
//             <button
//               className="text-gray-600 lg:hidden"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               &times;
//             </button>
//           </div>
//           <nav className="mt-4">
//             {navLinks.map((link) => (
//               <Link className="" key={link.name} href={link.path} passHref>
//                 <button
//                   className={`flex items-center  w-full px-4 py-2 text-left text-gray-700 transition-colors duration-300 ease-in-out ${
//                     pathname === link.path
//                       ? "bg-blue-500 text-white font-bold rounded-lg shadow-md"
//                       : "hover:bg-gray-200 rounded-lg"
//                   }`}
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   <span
//                     className={`mr-2 transition-colors duration-300 ${
//                       pathname === link.path ? "text-white" : "text-gray-700"
//                     }`}
//                   >
//                     {link.icon}
//                   </span>{" "}
//                   {link.name}
//                 </button>
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           <button
//             className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full lg:hidden"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <span className="text-2xl">&#9776;</span> {/* Hamburger icon */}
//           </button>
//           <main className="flex-1 overflow-y-auto">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// "use client";
// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // Import usePathname
// import { FaHome, FaBed, FaUserEdit } from "react-icons/fa"; // Import icons
// import Navbar from "@/components/shared/Navbar";
// import Image from "next/image";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname(); // Get current pathname

//   // Example user data; replace with actual user data
//   const user = {
//     name: "Khaled Ahmed",
//     image: "https://i.ibb.co/bFMCnfT/me.png", // Corrected URL
//   };

//   const navLinks = [
//     { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
//     {
//       name: "Add Hotel Room",
//       path: "/agent-dashboard/add-hotel-room",
//       icon: <FaBed />,
//     },
//     {
//       name: "Add Bus Ticket",
//       path: "/agent-dashboard/add-bus-tickte",
//       icon: <FaBed />,
//     },
//   ];

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       sidebarRef.current &&
//       !sidebarRef.current.contains(event.target as Node)
//     ) {
//       setIsSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex h-screen bg-gray-100 mt-[64px]">
//         {/* Sidebar */}
//         <div
//           ref={sidebarRef}
//           className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform transform lg:relative lg:translate-x-0 ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col items-center pt-4 ">
//             {/* User Profile Section */}
//             <div className="flex flex-col items-center p-4 border-b">
//               {/* User Profile Section */}
//               <Image
//                 width={228}
//                 height={228}
//                 src={user.image}
//                 alt="User Profile"
//                 className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-blue-700 mb-4" // Updated class for size
//               />
//               <h2 className="text-lg font-semibold">{user.name}</h2>
//               {/* Update Profile Link with Icon */}
//               <button
//                 className="mt-2 text-blue-500 hover:underline flex items-center"
//                 // onClick={() => setIsModalOpen(true)} // Open modal on click
//               >
//                 <FaUserEdit className="mr-1" />
//                 Update Profile
//               </button>
//             </div>
//           </div>
//           <div className="mt-4">
//             <nav>
//               {navLinks.map((link) => (
//                 <Link className="" key={link.name} href={link.path} passHref>
//                   <button
//                     className={`flex items-center w-full px-4 py-2 text-left text-gray-700 transition-colors duration-300 ease-in-out ${
//                       pathname === link.path
//                         ? "bg-blue-500 text-white font-bold rounded-lg shadow-md"
//                         : "hover:bg-gray-200 rounded-lg"
//                     }`}
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     <span
//                       className={`mr-2 transition-colors duration-300 ${
//                         pathname === link.path ? "text-white" : "text-gray-700"
//                       }`}
//                     >
//                       {link.icon}
//                     </span>{" "}
//                     {link.name}
//                   </button>
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           <button
//             className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full lg:hidden"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <span className="text-2xl">&#9776;</span> {/* Hamburger icon */}
//           </button>
//           <main className="flex-1 overflow-y-auto">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FaHome, FaBoxOpen, FaUserEdit } from "react-icons/fa"; // Import icons
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: "Ocean Paradise Hotel & Restaurant",
    image: "https://i.ibb.co.com/dGCKwXr/Ocean-Paradise.jpg",
  });
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Get current pathname

  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
        // { name: "Add Package", path: "/dashboard/add-package", icon: <FaPlus /> },
        // {
        //   name: "Add Hotel Room",
        //   path: "/dashboard/add-hotel-room",
        //   icon: <FaBed />,
        // },
        // {
        //   name: "Package Management",
        //   path: "/dashboard/package-management",
        //   icon: <FaClipboardList />,
        // },
        // {
        //   name: "Room Management",
        //   path: "/dashboard/room-management",
        //   icon: <FaBed />,
        // },
        // { name: "Blog Post", path: "/dashboard/blog-post", icon: <FaNewspaper /> },
        {
          name: "Booking List",
          path: "/dashboard/booking-list",
          icon: <FaBoxOpen />,
        },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle form submission for profile update
  const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the profile update logic here (e.g., API call)
    setIsModalOpen(false); // Close the modal after update
  };

  return (
    <div>
      <Navbar />
      <div className="flex h-screen bg-gray-100 mt-[64px]">
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform transform lg:relative lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col items-center pt-4">
            {/* User Profile Section */}
            <div className="flex flex-col items-center p-4 border-b">
              <Image
                width={228}
                height={228}
                src={user.image}
                alt="User Profile"
                className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-blue-700 mb-4"
              />
              <h2 className="text-lg font-semibold">{user.name}</h2>
              {/* Update Profile Link with Icon */}
              <button
                className="mt-2 text-blue-500 hover:underline flex items-center"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              >
                <FaUserEdit className="mr-1" />
                Update Profile
              </button>
            </div>
          </div>
          <div className="mt-4">
            <nav>
              {navLinks.map((link) => (
                <Link className="" key={link.name} href={link.path} passHref>
                  <button
                    className={`flex items-center w-full px-4 py-2 text-left text-gray-700 transition-colors duration-300 ease-in-out ${
                      pathname === link.path ? "bg-blue-500 text-white font-bold rounded-lg shadow-md" : "hover:bg-gray-200 rounded-lg"
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span className={`mr-2 transition-colors duration-300 ${pathname === link.path ? "text-white" : "text-gray-700"}`}>
                      {link.icon}
                    </span>
                    {link.name}
                  </button>
                </Link>
              ))}
            </nav>
          </div>
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

      {/* Modal for Updating Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-lg font-semibold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Profile Image URL</label>
                <input
                  type="url"
                  value={user.image}
                  onChange={(e) => setUser({ ...user, image: e.target.value })}
                  className="border rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setIsModalOpen(false)} className="mr-2 text-gray-500 hover:underline">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;






