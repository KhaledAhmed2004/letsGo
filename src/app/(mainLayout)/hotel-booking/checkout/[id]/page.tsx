// "use client";
// import { useRef, useState, useEffect } from "react";
// import { TbCurrencyTaka } from "react-icons/tb";
// import { FaPlus, FaMinus, FaBed, FaStar, FaCrown } from "react-icons/fa6";
// import { Rating } from "@smastrom/react-rating";
// import Image from "next/image";

// const ProductDetailsPage = () => {
//   const [count, setCount] = useState(1);
//   const [glassPosition, setGlassPosition] = useState({
//     display: "none",
//     left: "0px",
//     top: "0px",
//     backgroundPosition: "0px 0px",
//     backgroundImage: "",
//     backgroundSize: "0px 0px",
//   });

//   const [selectedRoomType, setSelectedRoomType] = useState("");
//   const [selectedBedSized, setSelectedBedSized] = useState("");
//   const imgRef = useRef<HTMLImageElement>(null);
//   const singleProduct = {
//     name: "Awesome Car",
//     image: "https://i.ibb.co.com/c3swztG/minh-pham-Ot-XADk-Uh3-I-unsplash.jpg",
//     description:
//       "This is a great car with modern features and safety standards.",
//     price: 1500000,
//     category: "Luxury",
//     stockQuantity: 5,
//     ratings: 4.5,
//     roomTypes: [
//       {
//         value: "standard",
//         label: "Standard",
//         icon: <FaBed />,
//         bedSize: "Queen Size",
//       },
//       {
//         value: "deluxe",
//         label: "Deluxe",
//         icon: <FaStar />,
//         bedSize: "King Size",
//       },
//       {
//         value: "suite",
//         label: "Suite",
//         icon: <FaCrown />,
//         bedSize: "Super King Size",
//       },
//     ],
//   };

//   const availableQuantity = singleProduct.stockQuantity - count || 0;

//   // Magnifier logic
//   useEffect(() => {
//     const img = imgRef.current;

//     function moveMagnifier(e: MouseEvent) {
//       if (!img) return;

//       const imgRect = img.getBoundingClientRect();
//       const glassSize = 150;
//       const x = e.pageX - imgRect.left;
//       const y = e.pageY - imgRect.top;

//       if (x > 0 && y > 0 && x < imgRect.width && y < imgRect.height) {
//         const displayX = x - glassSize / 2;
//         const displayY = y - glassSize / 2;

//         setGlassPosition({
//           display: "block",
//           left: `${displayX}px`,
//           top: `${displayY}px`,
//           backgroundImage: `url(${singleProduct.image})`,
//           backgroundPosition: `-${x * 2}px -${y * 2}px`,
//           backgroundSize: `${imgRect.width * 2}px ${imgRect.height * 2}px`,
//         });
//       } else {
//         setGlassPosition({ ...glassPosition, display: "none" });
//       }
//     }

//     if (img) {
//       img.addEventListener("mousemove", moveMagnifier);
//       img.addEventListener("mouseleave", () =>
//         setGlassPosition({ ...glassPosition, display: "none" })
//       );
//     }

//     return () => {
//       if (img) {
//         img.removeEventListener("mousemove", moveMagnifier);
//         img.removeEventListener("mouseleave", () =>
//           setGlassPosition({ ...glassPosition, display: "none" })
//         );
//       }
//     };
//   }, [glassPosition]);

//   return (
//     <div className="my-20 px-4 lg:px-20 min-h-screen">
//       <style>
//         {`
//           .img-magnifier-container {
//             position: relative;
//           }
//           .img-magnifier-glass {
//             position: absolute;
//             border: 3px solid #000;
//             border-radius: 50%;
//             cursor: none;
//             width: 150px;
//             height: 150px;
//             pointer-events: none;
//             display: none;
//           }
//         `}
//       </style>
//       <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
//         {/* Product Image with Magnifier */}
//         <div className="overflow-hidden bg-center bg-contain lg:w-1/2 h-[450px] bg-gray-100 flex justify-center items-center rounded-lg shadow-lg img-magnifier-container">
//           <Image
//             width={600}
//             height={400}
//             ref={imgRef}
//             src={singleProduct.image}
//             alt="Product"
//             className="w-full h-full rounded-lg object-cover object-center transition-transform transform hover:scale-105"
//           />
//           <div
//             className="img-magnifier-glass"
//             style={{
//               display: glassPosition.display,
//               left: glassPosition.left,
//               top: glassPosition.top,
//               backgroundImage: glassPosition.backgroundImage,
//               backgroundSize: glassPosition.backgroundSize,
//               backgroundPosition: glassPosition.backgroundPosition,
//             }}
//           />
//         </div>

//         {/* Product Details */}
//         <div className="lg:w-1/2 mt-10 lg:mt-0">
//           <h4 className="mb-2 font-medium text-lg text-gray-600">
//             {singleProduct.category}
//           </h4>
//           <h4 className="mb-4 font-bold text-3xl text-gray-800">
//             {singleProduct.name}
//           </h4>
//           <p className="text-lg text-gray-700 mb-4">
//             {singleProduct.description}
//           </p>

//           {/* Room Type Selection */}
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//             Select Room Type
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {singleProduct.roomTypes.map((type) => (
//               <div
//                 key={type.value}
//                 onClick={() => setSelectedRoomType(type.value)}
//                 className={`flex items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ${
//                   selectedRoomType === type.value
//                     ? "border-blue-600 bg-blue-100 shadow-lg"
//                     : "border-gray-300 hover:border-blue-400"
//                 }`}
//               >
//                 <div className="flex-shrink-0 text-blue-600">{type.icon}</div>
//                 <span className="ml-2 text-gray-800 font-semibold">
//                   {type.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Bed Size Information */}
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 mt-6">
//             Bed Sizes
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {singleProduct.roomTypes.map((type) => (
//               <div
//                 key={type.value}
//                 onClick={() => setSelectedBedSized(type.value)}
//                 className={`flex items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ${
//                   selectedBedSized === type.value
//                     ? "border-blue-600 bg-blue-100 shadow-lg"
//                     : "border-gray-300 hover:border-blue-400"
//                 }`}
//               >
//                 <FaBed className="text-blue-600" />
//                 <span className="ml-2 text-gray-800 font-semibold">
//                   {type.label}: {type.bedSize}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Product Ratings */}
//           <div className="mb-4 flex gap-4 items-center">
//             <Rating
//               style={{ maxWidth: 110 }}
//               value={singleProduct.ratings}
//               readOnly
//             />
//             <span className="text-xl font-semibold">
//               {singleProduct.ratings} <span className="text-gray-500">/ 5</span>
//             </span>
//           </div>

//           {/* Product Price */}
//           <div className="flex items-center text-3xl mb-4">
//             <TbCurrencyTaka className="text-3xl text-gray-600" />
//             <p className="font-bold text-gray-800">{singleProduct.price}</p>
//           </div>

//           <div className="divider mb-4"></div>

//           {/* Stock Quantity */}
//           <h4 className="text-xl mt-3">
//             Stock Quantity:{" "}
//             <span
//               className={`font-semibold ${
//                 availableQuantity === 0 ? "text-red-500" : "text-gray-800"
//               }`}
//             >
//               {availableQuantity === 0 ? "Out of Stock" : availableQuantity}
//             </span>
//           </h4>

//           {/* Quantity Selector and Add to Cart Button */}
//           <div className="flex mt-8 justify-between items-center">
//             {/* Quantity Controls */}
//             <div className="flex items-center border rounded-lg h-[50px] justify-center w-[30%]">
//               <button
//                 onClick={() => count > 1 && setCount(count - 1)}
//                 disabled={count === 1}
//               >
//                 <FaMinus className="text-gray-600 hover:text-gray-800" />
//               </button>
//               <span className="text-2xl font-semibold mx-2">{count}</span>
//               <button
//                 onClick={() =>
//                   count < singleProduct.stockQuantity && setCount(count + 1)
//                 }
//                 disabled={singleProduct.stockQuantity === count}
//               >
//                 <FaPlus className="text-gray-600 hover:text-gray-800" />
//               </button>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;

"use client";
import { useRef, useState, useEffect } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaBed, FaStar, FaCrown } from "react-icons/fa6";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Modal, Button } from "antd";
import { FaCheckCircle } from "react-icons/fa";

const ProductDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [glassPosition, setGlassPosition] = useState({
    display: "none",
    left: "0px",
    top: "0px",
    backgroundPosition: "0px 0px",
    backgroundImage: "",
    backgroundSize: "0px 0px",
  });

  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedBedSized, setSelectedBedSized] = useState("");
  const imgRef = useRef<HTMLImageElement>(null);
  const singleProduct = {
    name: "Ocean Paradise Hotel & Resort",
    image: "https://i.ibb.co.com/30sRDbq/ocean-paradise-1.jpg",
    description:
      "Our customers are our top priority. Their satisfaction is our highest commitment. We strive to exceed expectations with every interaction, ensuring that their needs are met with the utmost care and dedication. Your trust is our greatest asset, and we are devoted to providing exceptional service at every step.",
    price: 15999,
    category: "Luxury",
    stockQuantity: 5,
    ratings: 4.5,
    roomTypes: [
      {
        value: "standard",
        label: "Standard",
        icon: <FaBed />,
        bedSize: "Single",
      },
      {
        value: "deluxe",
        label: "Deluxe",
        icon: <FaStar />,
        bedSize: "Double",
      },
      {
        value: "suite",
        label: "Suite",
        icon: <FaCrown />,
        bedSize: "Two Bed",
      },
    ],
  };

  const [startDate, setStartDate] = useState("");
  const [date, setDate] = useState("");

  // Function to handle date change
  const handleDateChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setStartDate(e.target.value);
  };

  const handleDateChanges = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDate(e.target.value);
  };

  // Magnifier logic
  useEffect(() => {
    const img = imgRef.current;

    function moveMagnifier(e: MouseEvent) {
      if (!img) return;

      const imgRect = img.getBoundingClientRect();
      const glassSize = 150;
      const x = e.pageX - imgRect.left;
      const y = e.pageY - imgRect.top;

      if (x > 0 && y > 0 && x < imgRect.width && y < imgRect.height) {
        const displayX = x - glassSize / 2;
        const displayY = y - glassSize / 2;

        setGlassPosition({
          display: "block",
          left: `${displayX}px`,
          top: `${displayY}px`,
          backgroundImage: `url(${singleProduct.image})`,
          backgroundPosition: `-${x * 2}px -${y * 2}px`,
          backgroundSize: `${imgRect.width * 2}px ${imgRect.height * 2}px`,
        });
      } else {
        setGlassPosition({ ...glassPosition, display: "none" });
      }
    }

    if (img) {
      img.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mouseleave", () =>
        setGlassPosition({ ...glassPosition, display: "none" })
      );
    }

    return () => {
      if (img) {
        img.removeEventListener("mousemove", moveMagnifier);
        img.removeEventListener("mouseleave", () =>
          setGlassPosition({ ...glassPosition, display: "none" })
        );
      }
    };
  }, [glassPosition]);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="my-20 px-4 lg:px-20 min-h-screen">
      <style>
        {`
          .img-magnifier-container {
            position: relative;
          }
          .img-magnifier-glass {
            position: absolute;
            border: 3px solid #000;
            border-radius: 50%;
            cursor: none;
            width: 150px;
            height: 150px;
            pointer-events: none;
            display: none;
          }
        `}
      </style>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
        {/* Product Image with Magnifier */}
        <div className="overflow-hidden bg-center bg-contain lg:w-1/2 h-[450px] bg-gray-100 flex justify-center items-center rounded-lg shadow-lg img-magnifier-container">
          <Image
            width={600}
            height={400}
            ref={imgRef}
            src={singleProduct.image}
            alt="Product"
            className="w-full h-full rounded-lg object-cover object-center transition-transform transform hover:scale-105"
          />
          <div
            className="img-magnifier-glass"
            style={{
              display: glassPosition.display,
              left: glassPosition.left,
              top: glassPosition.top,
              backgroundImage: glassPosition.backgroundImage,
              backgroundSize: glassPosition.backgroundSize,
              backgroundPosition: glassPosition.backgroundPosition,
            }}
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h4 className="mb-2 font-medium text-lg text-gray-600">
            Rating: 4.4
          </h4>
          <h4 className="mb-4 font-bold text-3xl text-gray-800">
            {singleProduct.name}
          </h4>
          <h4 className="mb-2 font-medium text-lg text-gray-600">
            28-29, Hotel Motel Zone, Road, Coxs Bazar 4700
          </h4>

          <p className="text-lg text-gray-700 mb-4">
            {singleProduct.description}
          </p>

          {/* Room Type Selection */}
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Select Room Type
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {singleProduct.roomTypes.map((type) => (
              <div
                key={type.value}
                onClick={() => setSelectedRoomType(type.value)}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ${
                  selectedRoomType === type.value
                    ? "border-blue-600 bg-blue-100 shadow-lg"
                    : "border-gray-300 hover:border-blue-400"
                }`}
              >
                <div className="flex-shrink-0 text-blue-600">{type.icon}</div>
                <span className="ml-2 text-gray-800 font-semibold">
                  {type.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bed Size Information */}
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 mt-6">
            Bed Sizes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {singleProduct.roomTypes.map((type) => (
              <div
                key={type.value}
                onClick={() => setSelectedBedSized(type.value)}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out ${
                  selectedBedSized === type.value
                    ? "border-blue-600 bg-blue-100 shadow-lg"
                    : "border-gray-300 hover:border-blue-400"
                }`}
              >
                <FaBed className="text-blue-600" />
                <span className="ml-2 text-gray-800 font-semibold">
                  {type.bedSize}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Enter Check-in Date
          </h2>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaRegCalendarAlt className="text-blue-400 text-2xl" />
            </span>
            <input
              type="date"
              value={startDate}
              onChange={handleDateChange}
              className="bg-white bg-opacity-20 text-black pl-10 pr-4 py-4 border-none focus:bg-opacity-30 text-lg transition duration-300 ease-in-out rounded-lg w-full shadow-md hover:shadow-lg focus:shadow-xl placeholder-white focus:placeholder-gray-500"
              placeholder="Select Date"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-2">
            Enter Check-out Date
          </h2>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaRegCalendarAlt className="text-blue-400 text-2xl" />
            </span>
            <input
              type="date"
              value={date}
              onChange={handleDateChanges}
              className="bg-white bg-opacity-20 text-black pl-10 pr-4 py-4 border-none focus:bg-opacity-30 text-lg transition duration-300 ease-in-out rounded-lg w-full shadow-md hover:shadow-lg focus:shadow-xl placeholder-white focus:placeholder-gray-500"
              placeholder="Select Date"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
            1 night
          </h2>

          <div className="flex items-center text-3xl mb-4">
            <TbCurrencyTaka className="text-3xl text-gray-600" />
            <p className="font-bold text-gray-800">{singleProduct.price}</p>
          </div>

          <div className="divider mb-4"></div>
        </div>
      </div>
      <div className="flex justify-end gap-10">
        <button
          // onClick={() => initialPayment()}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Book Now
        </button>
        <button
          // onClick={() => initialPayment()}
          onClick={handleAddToCart}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Add to Cart
        </button>
        <Modal
          title={
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="font-semibold">Room Added to Cart!</span>
            </div>
          }
          open={isModalOpen}
          onCancel={closeModal}
          footer={[
            <Button key="continue" type="primary" onClick={closeModal}>
              Continue
            </Button>,
          ]}
          centered
        >
          <p className="text-gray-600 text-center">
            Your selected room has been successfully added to the cart.
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
