// // "use client";
// // import { Button, Drawer, Select, Slider } from "antd";
// // import Image from "next/image";
// // import React, { useState } from "react";
// // import { BiSearch } from "react-icons/bi";
// // import { FaBed, FaHome, FaSuitcase } from "react-icons/fa";
// // import { LuFilter } from "react-icons/lu";
// // import { MdFamilyRestroom } from "react-icons/md";
// // import { RxCross2 } from "react-icons/rx";

// // const months = [
// //   { value: "", label: "All" },
// //   { value: "January", label: "January" },
// //   { value: "February", label: "February" },
// //   { value: "March", label: "March" },
// //   { value: "April", label: "April" },
// //   { value: "May", label: "May" },
// //   { value: "June", label: "June" },
// //   { value: "July", label: "July" },
// //   { value: "August", label: "August" },
// //   { value: "September", label: "September" },
// //   { value: "October", label: "October" },
// //   { value: "November", label: "November" },
// //   { value: "December", label: "December" },
// // ];

// // const roomTypes = [
// //   { value: "", label: "All Rooms", icon: <FaHome className="mr-2" /> },
// //   { value: "Deluxe", label: "Deluxe Rooms", icon: <FaBed className="mr-2" /> },
// //   {
// //     value: "Standard",
// //     label: "Standard Rooms",
// //     icon: <FaBed className="mr-2" />,
// //   },
// //   { value: "Suite", label: "Suites", icon: <FaSuitcase className="mr-2" /> },
// //   {
// //     value: "Family",
// //     label: "Family Rooms",
// //     icon: <MdFamilyRestroom className="mr-2" />,
// //   },
// // ];

// // const App = () => {
// //   const rooms = [
// //     {
// //       id: 1,
// //       name: "Deluxe Room",
// //       description:
// //         "A spacious room with stunning views and luxurious amenities.",
// //       price: 120,
// //       image:
// //         "https://i.ibb.co.com/g9pqZkw/rahul-chakraborty-dv9-Ao-OYeg-Rc-unsplash.jpg",
// //       type: "Deluxe",
// //       hotelName: "Hilton Garden Inn", // Real hotel name
// //     },
// //     {
// //       id: 2,
// //       name: "Standard Room",
// //       description: "A cozy room perfect for a short stay.",
// //       price: 80,
// //       image:
// //         "https://i.ibb.co.com/c3swztG/minh-pham-Ot-XADk-Uh3-I-unsplash.jpg",
// //       type: "Standard",
// //       hotelName: "Holiday Inn Express", // Real hotel name
// //     },
// //     {
// //       id: 3,
// //       name: "Suite",
// //       description: "An elegant suite with a separate living area.",
// //       price: 200,
// //       image:
// //         "https://i.ibb.co.com/wYQYWVT/maria-orlova-6vi-JObrmn-Bw-unsplash.jpg",
// //       type: "Suite",
// //       hotelName: "Marriott Marquis", // Real hotel name
// //     },
// //     {
// //       id: 4,
// //       name: "Family Room",
// //       description: "A large room suitable for families with children.",
// //       price: 150,
// //       image:
// //         "https://i.ibb.co.com/X360KCz/christopher-jolly-Gqb-U78bd-JFM-unsplash.jpg",
// //       type: "Family",
// //       hotelName: "Best Western Plus",
// //     },
// //   ];

// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [minPrice, setMinPrice] = useState<number>(0);
// //   const [maxPrice, setMaxPrice] = useState<number>(10000);
// //   const [sortByOrder, setSortByOrder] = useState<"asc" | "desc">("asc");
// //   const [drawerVisible, setDrawerVisible] = useState(false);
// //   const [selectedMonth, setSelectedMonth] = useState<string>("");
// //   const [selectedRoomType, setSelectedRoomType] = useState("");

// //   // Function to clear all filters
// //   const handleForClear = () => {
// //     setSearchQuery("");
// //     setMinPrice(0);
// //     setMaxPrice(10000);
// //     setSortByOrder("asc");
// //     setSelectedMonth("");
// //     setSelectedRoomType("");
// //   };

// //   // Function to close the drawer
// //   const closeDrawer = () => {
// //     setDrawerVisible(false);
// //   };

// //   // Function to show the drawer
// //   const showDrawer = () => {
// //     setDrawerVisible(true);
// //   };

// //   return (
// //     <div className="mt-6 mb-28 px-4 lg:px-20 min-h-screen dark:bg-gray-900 dark:text-white">
// //       <div className="divider font-semibold dark:bg-gray-700"></div>

// //       {/* Filter and Search Section */}
// //       <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
// //         {/* Filter Drawer Button for small devices */}
// //         <div className="lg:hidden my-2">
// //           <Button
// //             type="primary"
// //             onClick={showDrawer}
// //             className="dark:bg-blue-700"
// //           >
// //             <LuFilter className="mr-2" />
// //             Open Filters
// //           </Button>
// //         </div>
// //         {/* Drawer for Small Devices */}
// //         <Drawer
// //           title="Filter"
// //           placement="left"
// //           onClose={() => setDrawerVisible(false)}
// //           open={drawerVisible}
// //           className="lg:hidden dark:bg-gray-800 dark:text-white"
// //         >
// //           {/* Filter Content */}
// //           <div className="p-6 dark:bg-gray-800">
// //             <div className="flex justify-between mb-4">
// //               <p className="font-semibold text-lg dark:text-white">
// //                 Filter Products
// //               </p>
// //               <div className="flex items-center gap-1 text-blue-600 font-medium dark:text-blue-400">
// //                 <button onClick={handleForClear}>Reset All</button>
// //                 <RxCross2
// //                   className="cursor-pointer"
// //                   onClick={() => setDrawerVisible(false)}
// //                 />
// //               </div>
// //             </div>

// //             {/* Search Input */}
// //             <div className="relative flex items-center mt-4">
// //               <input
// //                 className="p-3 rounded-lg w-full bg-gray-50 dark:bg-gray-700 border border-blue-500 dark:border-blue-400 outline-none dark:text-white"
// //                 type="text"
// //                 placeholder="Search products..."
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //               />
// //               <button className="absolute right-2">
// //                 <BiSearch className="text-xl text-blue-500 dark:text-blue-400" />
// //               </button>
// //             </div>

// //             {/* Price Range Slider */}
// //             <div className="mt-4">
// //               <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
// //                 Price Range
// //               </p>
// //               <Slider
// //                 range
// //                 value={[minPrice, maxPrice]}
// //                 onChange={(value) => {
// //                   setMinPrice(value[0]);
// //                   setMaxPrice(value[1]);
// //                 }}
// //                 className="w-full"
// //               />
// //             </div>

// //             {/* Sorting Dropdown */}
// //             <div className="mt-6">
// //               <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-3">
// //                 Sort By
// //               </p>
// //               <Select
// //                 defaultValue={sortByOrder}
// //                 onChange={(value) => setSortByOrder(value)}
// //                 className="w-full dark:bg-gray-700 dark:text-white"
// //               >
// //                 <Select.Option value="asc">Price: Low to High</Select.Option>
// //                 <Select.Option value="desc">Price: High to Low</Select.Option>
// //               </Select>
// //             </div>
// //           </div>
// //         </Drawer>
// //         {/* Filter Section for larger devices */}
// //         <div className="hidden lg:block bg-gray-100 dark:bg-gray-800 h-fit rounded-lg w-full lg:w-[28%] p-6 shadow-lg dark:text-white">
// //           <div className="flex justify-between mb-4">
// //             <p className="font-semibold text-lg">Filter Products</p>
// //             <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
// //               <button onClick={handleForClear}>Reset All</button>
// //               <RxCross2 className="cursor-pointer" onClick={closeDrawer} />
// //             </div>
// //           </div>

// //           {/* Search Input */}
// //           <div className="relative flex items-center mt-4">
// //             <input
// //               className="p-3 rounded-lg w-full bg-gray-50 dark:bg-gray-700 border-[1px] border-blue-500 dark:border-blue-400 outline-none dark:text-white"
// //               type="text"
// //               placeholder="Search products..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //             <button className="absolute right-2">
// //               <BiSearch className="text-xl text-blue-500 dark:text-blue-400" />
// //             </button>
// //           </div>

// //           {/* Price Range Slider */}
// //           <div className="mt-4">
// //             <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
// //               Price Range:{" "}
// //               <span className="font-bold">
// //                 ${minPrice} - ${maxPrice}
// //               </span>
// //             </p>
// //             <Slider
// //               range
// //               value={[minPrice, maxPrice]}
// //               onChange={(value) => {
// //                 setMinPrice(value[0]);
// //                 setMaxPrice(value[1]);
// //               }}
// //               className="w-full"
// //               min={0}
// //               max={10000}
// //             />
// //           </div>

// //           {/* Month Filter */}
// //           <div className="mt-4">
// //             <h3 className="text-sm font-medium mb-2">Month</h3>
// //             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
// //               {months.map((month) => (
// //                 <button
// //                   key={month.value}
// //                   onClick={() => setSelectedMonth(month.value)}
// //                   className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-300
// //                     ${
// //                       selectedMonth === month.value
// //                         ? "bg-blue-500 text-white dark:bg-blue-700"
// //                         : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600"
// //                     }`}
// //                 >
// //                   {month.label}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
// //             Select Room Type
// //           </h2>

// //           <div className="grid grid-cols-2 gap-4 mb-4">
// //             {roomTypes.map((type) => (
// //               <div
// //                 key={type.value}
// //                 onClick={() => setSelectedRoomType(type.value)} // Change from onChange to onClick for better interaction
// //                 className={`flex bg-gray-200 items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ${
// //                   selectedRoomType === type.value
// //                     ? "border-blue-600 bg-blue-100 shadow-lg"
// //                     : "border-gray-300 hover:border-blue-400" // Change border color on hover
// //                 }`}
// //               >
// //                 <div className="flex-shrink-0">{type.icon}</div>
// //                 <span className="ml-2 text-gray-800 font-semibold">
// //                   {type.label}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Sorting Dropdown */}
// //           <div className="mt-6">
// //             <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-3">
// //               Sort By
// //             </p>
// //             <Select
// //               defaultValue={sortByOrder}
// //               onChange={(value) => setSortByOrder(value)}
// //               className="w-full dark:bg-gray-700 dark:text-white"
// //             >
// //               <Select.Option value="asc">Price: Low to High</Select.Option>
// //               <Select.Option value="desc">Price: High to Low</Select.Option>
// //             </Select>
// //           </div>
// //         </div>
// //         {/* Product Listing Section */}
// //         <div className="w-full md:w-3/4 p-4">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //             {rooms.map((room) => (
// //               <div
// //                 key={room.id}
// //                 className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-700"
// //               >
// //                 <Image
// //                   className="w-full h-48 object-cover"
// //                   width={600} // Specify a fixed width
// //                   height={400} // Specify a fixed height
// //                   src={room.image}
// //                   alt={room.name}
// //                 />
// //                 <div className="p-6">
// //                   <h2 className="font-bold text-2xl text-gray-800 mb-2 dark:text-white">
// //                     {room.hotelName}
// //                   </h2>
// //                   <p className="text-gray-600 text-base mb-4 dark:text-gray-400">
// //                     {room.description}
// //                   </p>
// //                   <p className="text-gray-800 font-bold text-lg dark:text-white">
// //                     ${room.price} / night
// //                   </p>
// //                   <div className="mt-4">
// //                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out">
// //                       Book Now
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// "use client";
// import { Button, Drawer, Select, Slider, Modal, Input, Form } from "antd";
// import Image from "next/image";
// import React, { useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import { FaBed, FaHome, FaSuitcase } from "react-icons/fa";
// import { LuFilter } from "react-icons/lu";
// import { MdFamilyRestroom } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import toast from "react-hot-toast";

// const months = [
//   { value: "", label: "All" },
//   { value: "January", label: "January" },
//   { value: "February", label: "February" },
//   { value: "March", label: "March" },
//   { value: "April", label: "April" },
//   { value: "May", label: "May" },
//   { value: "June", label: "June" },
//   { value: "July", label: "July" },
//   { value: "August", label: "August" },
//   { value: "September", label: "September" },
//   { value: "October", label: "October" },
//   { value: "November", label: "November" },
//   { value: "December", label: "December" },
// ];

// const roomTypes = [
//   { value: "", label: "All Rooms", icon: <FaHome className="mr-2" /> },
//   { value: "Deluxe", label: "Deluxe Rooms", icon: <FaBed className="mr-2" /> },
//   {
//     value: "Standard",
//     label: "Standard Rooms",
//     icon: <FaBed className="mr-2" />,
//   },
//   { value: "Suite", label: "Suites", icon: <FaSuitcase className="mr-2" /> },
//   {
//     value: "Family",
//     label: "Family Rooms",
//     icon: <MdFamilyRestroom className="mr-2" />,
//   },
// ];

// interface PaymentFormValues {
//   name: string;
//   cardNumber: string;
//   expiryDate: string;
//   cvv: string;
// }

// // Define an interface for Room
// interface Room {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string; // Add other properties as needed
// }
// const App = () => {
//   const rooms = [
//     {
//       id: 1,
//       name: "Deluxe Room",
//       description:
//         "A spacious room with stunning views and luxurious amenities.",
//       price: 120,
//       image:
//         "https://i.ibb.co.com/g9pqZkw/rahul-chakraborty-dv9-Ao-OYeg-Rc-unsplash.jpg",
//       type: "Deluxe",
//       hotelName: "Hilton Garden Inn", // Real hotel name
//     },
//     {
//       id: 2,
//       name: "Standard Room",
//       description: "A cozy room perfect for a short stay.",
//       price: 80,
//       image:
//         "https://i.ibb.co.com/c3swztG/minh-pham-Ot-XADk-Uh3-I-unsplash.jpg",
//       type: "Standard",
//       hotelName: "Holiday Inn Express", // Real hotel name
//     },
//     {
//       id: 3,
//       name: "Suite",
//       description: "An elegant suite with a separate living area.",
//       price: 200,
//       image:
//         "https://i.ibb.co.com/wYQYWVT/maria-orlova-6vi-JObrmn-Bw-unsplash.jpg",
//       type: "Suite",
//       hotelName: "Marriott Marquis", // Real hotel name
//     },
//     {
//       id: 4,
//       name: "Family Room",
//       description: "A large room suitable for families with children.",
//       price: 150,
//       image:
//         "https://i.ibb.co.com/X360KCz/christopher-jolly-Gqb-U78bd-JFM-unsplash.jpg",
//       type: "Family",
//       hotelName: "Best Western Plus",
//     },
//   ];

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [loading, setLoading] = useState(false); // For loading state
//   const [selectedRoom, setSelectedRoom] = useState<Room | null>(null); // Correctly typed state for selectedRoom

//   const onFinish = (values: PaymentFormValues) => {
//     setLoading(true); // Set loading state

//     // Simulate a payment processing delay
//     setTimeout(() => {
//       // Here you would normally handle the payment logic
//       console.log("Payment Details:", values);
//       toast.success("Payment Successful!"); // Show success toast
//       setLoading(false); // Reset loading state
//       setIsModalVisible(false); // Close modal after payment
//     }, 2000);
//   };
//   const showModal = (room: Room) => {
//     setSelectedRoom(room); // Store the selected room details
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const [searchQuery, setSearchQuery] = useState("");
//   const [minPrice, setMinPrice] = useState<number>(0);
//   const [maxPrice, setMaxPrice] = useState<number>(10000);
//   const [sortByOrder, setSortByOrder] = useState<"asc" | "desc">("asc");
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState<string>("");
//   const [selectedRoomType, setSelectedRoomType] = useState("");

//   // Function to clear all filters
//   const handleForClear = () => {
//     setSearchQuery("");
//     setMinPrice(0);
//     setMaxPrice(10000);
//     setSortByOrder("asc");
//     setSelectedMonth("");
//     setSelectedRoomType("");
//   };

//   // Function to close the drawer
//   const closeDrawer = () => {
//     setDrawerVisible(false);
//   };

//   // Function to show the drawer
//   const showDrawer = () => {
//     setDrawerVisible(true);
//   };

//   return (
//     <div className="mt-6 mb-28 px-4 lg:px-20 min-h-screen dark:bg-gray-900 dark:text-white">
//       <div className="divider font-semibold dark:bg-gray-700"></div>

//       {/* Filter and Search Section */}
//       <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
//         {/* Filter Drawer Button for small devices */}
//         <div className="lg:hidden my-2">
//           <Button
//             type="primary"
//             onClick={showDrawer}
//             className="dark:bg-blue-700"
//           >
//             <LuFilter className="mr-2" />
//             Open Filters
//           </Button>
//         </div>
//         {/* Drawer for Small Devices */}
//         <Drawer
//           title="Filter"
//           placement="left"
//           onClose={() => setDrawerVisible(false)}
//           open={drawerVisible}
//           className="lg:hidden dark:bg-gray-800 dark:text-white"
//         >
//           {/* Filter Content */}
//           <div className="p-6 dark:bg-gray-800">
//             <div className="flex justify-between mb-4">
//               <p className="font-semibold text-lg dark:text-white">
//                 Filter Products
//               </p>
//               <div className="flex items-center gap-1 text-blue-600 font-medium dark:text-blue-400">
//                 <button onClick={handleForClear}>Reset All</button>
//                 <RxCross2
//                   className="cursor-pointer"
//                   onClick={() => setDrawerVisible(false)}
//                 />
//               </div>
//             </div>

//             {/* Search Input */}
//             <div className="relative flex items-center mt-4">
//               <input
//                 className="p-3 rounded-lg w-full bg-gray-50 dark:bg-gray-700 border border-blue-500 dark:border-blue-400 outline-none dark:text-white"
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button className="absolute right-2">
//                 <BiSearch className="text-xl text-blue-500 dark:text-blue-400" />
//               </button>
//             </div>

//             {/* Price Range Slider */}
//             <div className="mt-4">
//               <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
//                 Price Range
//               </p>
//               <Slider
//                 range
//                 value={[minPrice, maxPrice]}
//                 onChange={(value) => {
//                   setMinPrice(value[0]);
//                   setMaxPrice(value[1]);
//                 }}
//                 className="w-full"
//               />
//             </div>

//             {/* Sorting Dropdown */}
//             <div className="mt-6">
//               <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-3">
//                 Sort By
//               </p>
//               <Select
//                 defaultValue={sortByOrder}
//                 onChange={(value) => setSortByOrder(value)}
//                 className="w-full dark:bg-gray-700 dark:text-white"
//               >
//                 <Select.Option value="asc">Price: Low to High</Select.Option>
//                 <Select.Option value="desc">Price: High to Low</Select.Option>
//               </Select>
//             </div>
//           </div>
//         </Drawer>
//         {/* Filter Section for larger devices */}
//         <div className="hidden lg:block bg-gray-100 dark:bg-gray-800 h-fit rounded-lg w-full lg:w-[28%] p-6 shadow-lg dark:text-white">
//           <div className="flex justify-between mb-4">
//             <p className="font-semibold text-lg">Filter Products</p>
//             <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
//               <button onClick={handleForClear}>Reset All</button>
//               <RxCross2 className="cursor-pointer" onClick={closeDrawer} />
//             </div>
//           </div>

//           {/* Search Input */}
//           <div className="relative flex items-center mt-4">
//             <input
//               className="p-3 rounded-lg w-full bg-gray-50 dark:bg-gray-700 border-[1px] border-blue-500 dark:border-blue-400 outline-none dark:text-white"
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="absolute right-2">
//               <BiSearch className="text-xl text-blue-500 dark:text-blue-400" />
//             </button>
//           </div>

//           {/* Price Range Slider */}
//           <div className="mt-4">
//             <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
//               Price Range:{" "}
//               <span className="font-bold">
//                 ${minPrice} - ${maxPrice}
//               </span>
//             </p>
//             <Slider
//               range
//               value={[minPrice, maxPrice]}
//               onChange={(value) => {
//                 setMinPrice(value[0]);
//                 setMaxPrice(value[1]);
//               }}
//               className="w-full"
//               min={0}
//               max={10000}
//             />
//           </div>

//           {/* Month Filter */}
//           <div className="mt-4">
//             <h3 className="text-sm font-medium mb-2">Month</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {months.map((month) => (
//                 <button
//                   key={month.value}
//                   onClick={() => setSelectedMonth(month.value)}
//                   className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-300
//                     ${
//                       selectedMonth === month.value
//                         ? "bg-blue-500 text-white dark:bg-blue-700"
//                         : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600"
//                     }`}
//                 >
//                   {month.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//             Select Room Type
//           </h2>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             {roomTypes.map((type) => (
//               <div
//                 key={type.value}
//                 onClick={() => setSelectedRoomType(type.value)} // Change from onChange to onClick for better interaction
//                 className={`flex bg-gray-200 items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ${
//                   selectedRoomType === type.value
//                     ? "border-blue-600 bg-blue-100 shadow-lg"
//                     : "border-gray-300 hover:border-blue-400" // Change border color on hover
//                 }`}
//               >
//                 <div className="flex-shrink-0">{type.icon}</div>
//                 <span className="ml-2 text-gray-800 font-semibold">
//                   {type.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Sorting Dropdown */}
//           <div className="mt-6">
//             <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-3">
//               Sort By
//             </p>
//             <Select
//               defaultValue={sortByOrder}
//               onChange={(value) => setSortByOrder(value)}
//               className="w-full dark:bg-gray-700 dark:text-white"
//             >
//               <Select.Option value="asc">Price: Low to High</Select.Option>
//               <Select.Option value="desc">Price: High to Low</Select.Option>
//             </Select>
//           </div>
//         </div>
//         {/* Product Listing Section */}
//         <div className="w-full md:w-3/4 p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {rooms.map((room) => (
//               <div
//                 key={room.id}
//                 className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-700"
//               >
//                 <Image
//                   className="w-full h-48 object-cover"
//                   width={600} // Specify a fixed width
//                   height={400} // Specify a fixed height
//                   src={room.image}
//                   alt={room.name}
//                 />
//                 <div className="p-6">
//                   <h2 className="font-bold text-2xl text-gray-800 mb-2 dark:text-white">
//                     {room.hotelName}
//                   </h2>
//                   <p className="text-gray-600 text-base mb-4 dark:text-gray-400">
//                     {room.description}
//                   </p>

//                   <div className="mt-4">
//                     <Button
//                       type="primary"
//                       onClick={() => showModal(room)} // Open modal on button click
//                       className="mt-2"
//                     >
//                       Book Now
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Modal for Booking */}
//         {/* Modal for Booking */}
//         <Modal
//           title="Booking Details"
//           open={isModalVisible}
//           onCancel={handleCancel}
//           footer={null} // You can customize the footer if needed
//         >
//           {selectedRoom && (
//             <div>
//               <h3>{selectedRoom.name}</h3>
//               <p>{selectedRoom.description}</p>
//               <p>Price: ${selectedRoom.price}</p>
//               <Form onFinish={onFinish} layout="vertical">
//                 <Form.Item
//                   label="Name"
//                   name="name"
//                   rules={[
//                     { required: true, message: "Please input your name!" },
//                   ]}
//                 >
//                   <Input placeholder="Your Name" />
//                 </Form.Item>
//                 <Form.Item
//                   label="Card Number"
//                   name="cardNumber"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please input your card number!",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="XXXX-XXXX-XXXX-XXXX" />
//                 </Form.Item>
//                 <Form.Item
//                   label="Expiry Date"
//                   name="expiryDate"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Please input the expiry date!",
//                     },
//                   ]}
//                 >
//                   <Input placeholder="MM/YY" />
//                 </Form.Item>
//                 <Form.Item
//                   label="CVV"
//                   name="cvv"
//                   rules={[
//                     { required: true, message: "Please input your CVV!" },
//                   ]}
//                 >
//                   <Input placeholder="CVV" />
//                 </Form.Item>
//                 <Button type="primary" htmlType="submit" loading={loading}>
//                   Pay Now
//                 </Button>
//               </Form>
//             </div>
//           )}
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default App;

// "use client";
// import { Button, Drawer, Select, Slider } from "antd";
// import Image from "next/image";
// import React, { useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import { FaBed, FaHome, FaSuitcase } from "react-icons/fa";
// import { LuFilter } from "react-icons/lu";
// import { MdFamilyRestroom } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";

// const months = [
//   { value: "", label: "All" },
//   { value: "January", label: "January" },
//   { value: "February", label: "February" },
//   { value: "March", label: "March" },
//   { value: "April", label: "April" },
//   { value: "May", label: "May" },
//   { value: "June", label: "June" },
//   { value: "July", label: "July" },
//   { value: "August", label: "August" },
//   { value: "September", label: "September" },
//   { value: "October", label: "October" },
//   { value: "November", label: "November" },
//   { value: "December", label: "December" },
// ];

// const roomTypes = [
//   { value: "", label: "All Rooms", icon: <FaHome className="mr-2" /> },
//   { value: "Deluxe", label: "Deluxe Rooms", icon: <FaBed className="mr-2" /> },
//   {
//     value: "Standard",
//     label: "Standard Rooms",
//     icon: <FaBed className="mr-2" />,
//   },
//   { value: "Suite", label: "Suites", icon: <FaSuitcase className="mr-2" /> },
//   {
//     value: "Family",
//     label: "Family Rooms",
//     icon: <MdFamilyRestroom className="mr-2" />,
//   },
// ];

// const App = () => {
//   const rooms = [
//     {
//       id: 1,
//       name: "Deluxe Room",
//       description:
//         "A spacious room with stunning views and luxurious amenities.",
//       price: 120,
//       image:
//         "https://i.ibb.co.com/g9pqZkw/rahul-chakraborty-dv9-Ao-OYeg-Rc-unsplash.jpg",
//       type: "Deluxe",
//       hotelName: "Hilton Garden Inn", // Real hotel name
//     },
//     {
//       id: 2,
//       name: "Standard Room",
//       description: "A cozy room perfect for a short stay.",
//       price: 80,
//       image:
//         "https://i.ibb.co.com/c3swztG/minh-pham-Ot-XADk-Uh3-I-unsplash.jpg",
//       type: "Standard",
//       hotelName: "Holiday Inn Express", // Real hotel name
//     },
//     {
//       id: 3,
//       name: "Suite",
//       description: "An elegant suite with a separate living area.",
//       price: 200,
//       image:
//         "https://i.ibb.co.com/wYQYWVT/maria-orlova-6vi-JObrmn-Bw-unsplash.jpg",
//       type: "Suite",
//       hotelName: "Marriott Marquis", // Real hotel name
//     },
//     {
//       id: 4,
//       name: "Family Room",
//       description: "A large room suitable for families with children.",
//       price: 150,
//       image:
//         "https://i.ibb.co.com/X360KCz/christopher-jolly-Gqb-U78bd-JFM-unsplash.jpg",
//       type: "Family",
//       hotelName: "Best Western Plus",
//     },
//   ];

//   const [searchQuery, setSearchQuery] = useState("");
//   const [minPrice, setMinPrice] = useState<number>(0);
//   const [maxPrice, setMaxPrice] = useState<number>(10000);
//   const [sortByOrder, setSortByOrder] = useState<"asc" | "desc">("asc");
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState<string>("");
//   const [selectedRoomType, setSelectedRoomType] = useState("");

//   // Function to clear all filters
//   const handleForClear = () => {
//     setSearchQuery("");
//     setMinPrice(0);
//     setMaxPrice(10000);
//     setSortByOrder("asc");
//     setSelectedMonth("");
//     setSelectedRoomType("");
//   };

//   // Function to close the drawer
//   const closeDrawer = () => {
//     setDrawerVisible(false);
//   };

//   // Function to show the drawer
//   const showDrawer = () => {
//     setDrawerVisible(true);
//   };

//   return (
//     <div className="mt-6 mb-28 px-4 lg:px-20 min-h-screen dark:bg-gray-900 dark:text-white">
//       <div className="divider font-semibold dark:bg-gray-700"></div>

//       {/* Filter and Search Section */}
//       <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
//         {/* Filter Drawer Button for small devices */}
//         <div className="lg:hidden my-2">
//           <Button
//             type="primary"
//             onClick={showDrawer}
//             className="dark:bg-blue-700"
//           >
//             <LuFilter className="mr-2" />
//             Open Filters
//           </Button>
//         </div>
//         {/* Drawer for Small Devices */}
//         <Drawer
//           title="Filter"
//           placement="left"
//           onClose={() => setDrawerVisible(false)}
//           open={drawerVisible}
//           className="lg:hidden dark:bg-gray-800 dark:text-white"
//         >
//           {/* Filter Content */}
//           <div className="p-6 dark:bg-gray-800">
//             <div className="flex justify-between mb-4">
//               <p className="font-semibold text-lg dark:text-white">
//                 Filter Products
//               </p>
//               <div className="flex items-center gap-1 text-blue-600 font-medium dark:text-blue-400">
//                 <button onClick={handleForClear}>Reset All</button>
//                 <RxCross2
//                   className="cursor-pointer"
//                   onClick={() => setDrawerVisible(false)}
//                 />
//               </div>
//             </div>

//             {/* Search Input */}
//             <div className="relative flex items-center mt-4">
//               <input
//                 className="p-3 rounded-lg w-full bg-gray-50 dark:bg-gray-700 border border-blue-500 dark:border-blue-400 outline-none dark:text-white"
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button className="absolute right-2">
//                 <BiSearch className="text-xl text-blue-500 dark:text-blue-400" />
//               </button>
//             </div>

//             {/* Price Range Slider */}
//             <div className="mt-4">
//               <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
//                 Price Range
//               </p>
//               <Slider
//                 range
//                 value={[minPrice, maxPrice]}
//                 onChange={(value) => {
//                   setMinPrice(value[0]);
//                   setMaxPrice(value[1]);
//                 }}
//                 className="w-full"
//               />
//             </div>

//             {/* Sorting Dropdown */}
//             <div className="mt-6">
//               <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-3">
//                 Sort By
//               </p>
//               <Select
//                 defaultValue={sortByOrder}
//                 onChange={(value) => setSortByOrder(value)}
//                 className="w-full dark:bg-gray-700 dark:text-white"
//               >
//                 <Select.Option value="asc">Price: Low to High</Select.Option>
//                 <Select.Option value="desc">Price: High to Low</Select.Option>
//               </Select>
//             </div>
//           </div>
//         </Drawer>
//         {/* Filter Section for larger devices */}
//         <div className="hidden lg:block bg-gray-100 dark:bg-gray-800 h-fit rounded-lg w-full lg:w-[28%] p-6 shadow-lg dark:text-white">
//           <div className="flex justify-between mb-4">
//             <p className="font-semibold text-lg">Filter Products</p>
//             <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
//               <button onClick={handleForClear}>Reset All</button>
//               <RxCross2 className="cursor-pointer" onClick={closeDrawer} />
//             </div>
//           </div>

//           {/* Search Input */}
//           <div className="relative flex items-center mt-4">
//             <input
//               className="p-3 rounded-lg w-full bg-gray-50 dark:bg-gray-700 border-[1px] border-blue-500 dark:border-blue-400 outline-none dark:text-white"
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="absolute right-2">
//               <BiSearch className="text-xl text-blue-500 dark:text-blue-400" />
//             </button>
//           </div>

//           {/* Price Range Slider */}
//           <div className="mt-4">
//             <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
//               Price Range:{" "}
//               <span className="font-bold">
//                 ${minPrice} - ${maxPrice}
//               </span>
//             </p>
//             <Slider
//               range
//               value={[minPrice, maxPrice]}
//               onChange={(value) => {
//                 setMinPrice(value[0]);
//                 setMaxPrice(value[1]);
//               }}
//               className="w-full"
//               min={0}
//               max={10000}
//             />
//           </div>

//           {/* Month Filter */}
//           <div className="mt-4">
//             <h3 className="text-sm font-medium mb-2">Month</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {months.map((month) => (
//                 <button
//                   key={month.value}
//                   onClick={() => setSelectedMonth(month.value)}
//                   className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-300
//                     ${
//                       selectedMonth === month.value
//                         ? "bg-blue-500 text-white dark:bg-blue-700"
//                         : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600"
//                     }`}
//                 >
//                   {month.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//             Select Room Type
//           </h2>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             {roomTypes.map((type) => (
//               <div
//                 key={type.value}
//                 onClick={() => setSelectedRoomType(type.value)} // Change from onChange to onClick for better interaction
//                 className={`flex bg-gray-200 items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ${
//                   selectedRoomType === type.value
//                     ? "border-blue-600 bg-blue-100 shadow-lg"
//                     : "border-gray-300 hover:border-blue-400" // Change border color on hover
//                 }`}
//               >
//                 <div className="flex-shrink-0">{type.icon}</div>
//                 <span className="ml-2 text-gray-800 font-semibold">
//                   {type.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Sorting Dropdown */}
//           <div className="mt-6">
//             <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-3">
//               Sort By
//             </p>
//             <Select
//               defaultValue={sortByOrder}
//               onChange={(value) => setSortByOrder(value)}
//               className="w-full dark:bg-gray-700 dark:text-white"
//             >
//               <Select.Option value="asc">Price: Low to High</Select.Option>
//               <Select.Option value="desc">Price: High to Low</Select.Option>
//             </Select>
//           </div>
//         </div>
//         {/* Product Listing Section */}
//         <div className="w-full md:w-3/4 p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {rooms.map((room) => (
//               <div
//                 key={room.id}
//                 className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-700"
//               >
//                 <Image
//                   className="w-full h-48 object-cover"
//                   width={600} // Specify a fixed width
//                   height={400} // Specify a fixed height
//                   src={room.image}
//                   alt={room.name}
//                 />
//                 <div className="p-6">
//                   <h2 className="font-bold text-2xl text-gray-800 mb-2 dark:text-white">
//                     {room.hotelName}
//                   </h2>
//                   <p className="text-gray-600 text-base mb-4 dark:text-gray-400">
//                     {room.description}
//                   </p>
//                   <p className="text-gray-800 font-bold text-lg dark:text-white">
//                     ${room.price} / night
//                   </p>
//                   <div className="mt-4">
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 ease-in-out">
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

"use client";
import { Button, Drawer, Select, Slider } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBed, FaHome, FaSuitcase } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import { MdFamilyRestroom } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const months = [
  { value: "", label: "All" },
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const roomTypes = [
  { value: "", label: "All Rooms", icon: <FaHome className="mr-2" /> },
  { value: "Deluxe", label: "Deluxe Rooms", icon: <FaBed className="mr-2" /> },
  {
    value: "Standard",
    label: "Standard Rooms",
    icon: <FaBed className="mr-2" />,
  },
  { value: "Suite", label: "Suites", icon: <FaSuitcase className="mr-2" /> },
  {
    value: "Family",
    label: "Family Rooms",
    icon: <MdFamilyRestroom className="mr-2" />,
  },
];

const App = () => {
  const rooms = [
    // {
    //   id: 1,
    //   name: "Deluxe Room",
    //   description: "Experience luxury at the Hilton Garden Inn, offering a spacious Deluxe Room with breathtaking views and top-notch amenities.",
    //   price: 120,
    //   image: "https://i.ibb.co.com/g9pqZkw/rahul-chakraborty-dv9-Ao-OYeg-Rc-unsplash.jpg",
    //   type: "Deluxe",
    //   hotelName: "Hilton Garden Inn",
    // },
    {
      id: 2,
      name: "Standard Room",
      description: "Enjoy a comfortable stay at Hotel The Cox's Today, featuring a cozy Standard Room perfect for short trips.",
      price: 80,
      image: "https://i.ibb.co.com/3cpgxnM/hotel-the-cox-today.jpg",
      type: "Standard",
      hotelName: "Hotel The Cox's Today",
    },
    {
      id: 3,
      name: "Suite",
      description: "Discover elegance at Ocean Paradise Hotel & Restaurant, where you can relax in an elegant Suite with a separate living area.",
      price: 200,
      image: "https://i.ibb.co.com/dGCKwXr/Ocean-Paradise.jpg",
      type: "Suite",
      hotelName: "Ocean Paradise Hotel & Restaurant",
    },
    // {
    //   id: 4,
    //   name: "Family Room",
    //   description: "Enjoy a family-friendly experience at Dhaka International Hotel, featuring a spacious Family Room designed for comfort.",
    //   price: 150,
    //   image: "https://i.ibb.co.com/X360KCz/christopher-jolly-Gqb-U78bd-JFM-unsplash.jpg",
    //   type: "Family",
    //   hotelName: "Dhaka International Hotel",
    // },
    // {
    //   id: 5,
    //   name: "Family Room",
    //   description: "Best Western Plus offers a welcoming Family Room, ideal for a memorable family vacation.",
    //   price: 150,
    //   image: "https://i.ibb.co.com/X360KCz/christopher-jolly-Gqb-U78bd-JFM-unsplash.jpg",
    //   type: "Family",
    //   hotelName: "Best Western Plus",
    // },
    {
      id: 6,
      name: "Family Room",
      description: "At Seagull Hotel, enjoy a comfortable Family Room for a relaxing family stay near the coast.",
      price: 150,
      image: "https://i.ibb.co.com/fDXt7vx/seagull-hotel.jpg",
      type: "Family",
      hotelName: "Seagull Hotel",
    },
  ];
  

  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [sortByOrder, setSortByOrder] = useState<"asc" | "desc">("asc");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedRoomType, setSelectedRoomType] = useState("");

  // Function to clear all filters
  const handleForClear = () => {
    setSearchQuery("");
    setMinPrice(0);
    setMaxPrice(10000);
    setSortByOrder("asc");
    setSelectedMonth("");
    setSelectedRoomType("");
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Function to show the drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <div className="mt-6  px-4 lg:px-20 min-h-screen dark:bg-gray-900 dark:text-white">
      <div className="divider font-semibold dark:bg-gray-700"></div>

      {/* Filter and Search Section */}
      <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
        {/* Filter Drawer Button for small devices */}
        <div className="lg:hidden my-2">
          <Button
            type="primary"
            onClick={showDrawer}
            className="dark:bg-blue-700"
          >
            <LuFilter className="mr-2" />
            Open Filters
          </Button>
        </div>
        {/* Drawer for Small Devices */}
        <Drawer
          title="Filter"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className="lg:hidden dark:bg-gray-800 dark:text-white"
        >
          {/* Filter Content */}
          <div className="p-6 dark:bg-gray-800">
            <div className="flex justify-between mb-4">
              <p className="font-semibold text-lg dark:text-white">
                Filter Products
              </p>
              <div className="flex items-center gap-1 text-blue-600 font-medium dark:text-blue-400">
                <button onClick={handleForClear}>Reset All</button>
                <RxCross2
                  className="cursor-pointer"
                  onClick={() => setDrawerVisible(false)}
                />
              </div>
            </div>

            {/* Search Input */}
            <div className="relative flex items-center mt-4">
              <input
                className="p-3 rounded-lg w-full bg-gray-50 dark:bg-gray-700 border border-blue-500 dark:border-blue-400 outline-none dark:text-white"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2">
                <BiSearch className="text-xl text-blue-500 dark:text-blue-400" />
              </button>
            </div>

            {/* Price Range Slider */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
                Price Range
              </p>
              <Slider
                range
                value={[minPrice, maxPrice]}
                onChange={(value) => {
                  setMinPrice(value[0]);
                  setMaxPrice(value[1]);
                }}
                className="w-full"
              />
            </div>

            {/* Sorting Dropdown */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-3">
                Sort By
              </p>
              <Select
                defaultValue={sortByOrder}
                onChange={(value) => setSortByOrder(value)}
                className="w-full dark:bg-gray-700 dark:text-white"
              >
                <Select.Option value="asc">Price: Low to High</Select.Option>
                <Select.Option value="desc">Price: High to Low</Select.Option>
              </Select>
            </div>
          </div>
        </Drawer>
        {/* Filter Section for larger devices */}
        <div className="hidden lg:block bg-gray-100 dark:bg-gray-800 h-fit rounded-lg w-full lg:w-[28%] p-6 shadow-lg dark:text-white">
          <div className="flex justify-between mb-4">
            <p className="font-semibold text-lg">Search Hotel Name or Location</p>
            {/* <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
              <button onClick={handleForClear}>Reset All</button>
              <RxCross2 className="cursor-pointer" onClick={closeDrawer} />
            </div> */}
          </div>

          {/* Search Input */}
          <div className="relative flex items-center mt-4">
            <input
              className="p-3 rounded-lg w-full bg-gray-50 dark:bg-gray-700 border-[1px] border-blue-500 dark:border-blue-400 outline-none dark:text-white"
              type="text"
              placeholder="Search hotel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2">
              <BiSearch className="text-xl text-blue-500 dark:text-blue-400" />
            </button>
          </div>

          {/* Price Range Slider */}
          {/* <div className="mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-2">
              Price Range:{" "}
              <span className="font-bold">
              ৳{minPrice} - ৳{maxPrice}
              </span>
            </p>
            <Slider
              range
              value={[minPrice, maxPrice]}
              onChange={(value) => {
                setMinPrice(value[0]);
                setMaxPrice(value[1]);
              }}
              className="w-full"
              min={0}
              max={10000}
            />
          </div> */}

          {/* Month Filter */}
          {/* <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Month</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {months.map((month) => (
                <button
                  key={month.value}
                  onClick={() => setSelectedMonth(month.value)}
                  className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-300
                    ${
                      selectedMonth === month.value
                        ? "bg-blue-500 text-white dark:bg-blue-700"
                        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600"
                    }`}
                >
                  {month.label}
                </button>
              ))}
            </div>
          </div> */}
{/* 
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Select Room Type
          </h2> */}

          {/* <div className="grid grid-cols-2 gap-4 mb-4">
            {roomTypes.map((type) => (
              <div
                key={type.value}
                onClick={() => setSelectedRoomType(type.value)} // Change from onChange to onClick for better interaction
                className={`flex bg-gray-200 items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ${
                  selectedRoomType === type.value
                    ? "border-blue-600 bg-blue-100 shadow-lg"
                    : "border-gray-300 hover:border-blue-400" // Change border color on hover
                }`}
              >
                <div className="flex-shrink-0">{type.icon}</div>
                <span className="ml-2 text-gray-800 font-semibold">
                  {type.label}
                </span>
              </div>
            ))}
          </div> */}

          {/* Sorting Dropdown */}
          {/* <div className="mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold mb-3">
              Sort By
            </p>
            <Select
              defaultValue={sortByOrder}
              onChange={(value) => setSortByOrder(value)}
              className="w-full dark:bg-gray-700 dark:text-white"
            >
              <Select.Option value="asc">Price: Low to High</Select.Option>
              <Select.Option value="desc">Price: High to Low</Select.Option>
            </Select>
          </div> */}
        </div>
        {/* Product Listing Section */}
        <div className="w-full md:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-700"
              >
                <Image
                  className="w-full h-48 object-cover"
                  width={600} // Specify a fixed width
                  height={400} // Specify a fixed height
                  src={room.image}
                  alt={room.name}
                />
                <div className="p-6">
                  <h2 className="font-bold text-2xl text-gray-800 mb-2 dark:text-white">
                    {room.hotelName}
                  </h2>
                  <p className="text-gray-600 text-base mb-4 dark:text-gray-400">
                    {room.description}
                  </p>

                  <div className="mt-4">
                    <Link
                      href={"hotel-booking/checkout/1"}
                      className="mt-2 bg-blue-500 text-white p-2 rounded-lg font-medium"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Modal for Booking */}
        {/* <Modal
          title="Booking Details"
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null} // You can customize the footer if needed
        >
          {selectedRoom && (
            <div>
              <h3>{selectedRoom.name}</h3>
              <p>{selectedRoom.description}</p>
              <p>Price: ${selectedRoom.price}</p>
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  label="Card Number"
                  name="cardNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your card number!",
                    },
                  ]}
                >
                  <Input placeholder="XXXX-XXXX-XXXX-XXXX" />
                </Form.Item>
                <Form.Item
                  label="Expiry Date"
                  name="expiryDate"
                  rules={[
                    {
                      required: true,
                      message: "Please input the expiry date!",
                    },
                  ]}
                >
                  <Input placeholder="MM/YY" />
                </Form.Item>
                <Form.Item
                  label="CVV"
                  name="cvv"
                  rules={[
                    { required: true, message: "Please input your CVV!" },
                  ]}
                >
                  <Input placeholder="CVV" />
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Pay Now
                </Button>
              </Form>
            </div>
          )}
        </Modal> */}
      </div>
    </div>
  );
};

export default App;
