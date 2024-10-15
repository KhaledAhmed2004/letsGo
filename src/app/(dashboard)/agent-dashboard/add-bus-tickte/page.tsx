// "use client";
// import React, { useState } from "react";

// const AddBusTicket = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     code: "",
//     type: "",
//     startingPoint: "",
//     endPoint: "",
//     departureTime: "",
//     arrivalTime: "",
//     seatsAvailable: "",
//     additionalCharge: "",
//     price: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Bus Ticket Data:", formData);

//     // Here, you can add code to handle form submission, like sending data to a server
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
//         <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
//           Add Bus Ticket
//         </h1>
//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter bus name"
//               required
//             />
//           </div>

//           {/* Code */}
//           <div className="mb-4">
//             <label
//               htmlFor="code"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Code
//             </label>
//             <input
//               type="text"
//               name="code"
//               value={formData.code}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter bus code"
//               required
//             />
//           </div>

//           {/* Type */}
//           <div className="mb-4">
//             <label
//               htmlFor="type"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Type
//             </label>
//             <input
//               type="text"
//               name="type"
//               value={formData.type}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter bus type (e.g., Non AC)"
//               required
//             />
//           </div>

//           {/* Starting Point */}
//           <div className="mb-4">
//             <label
//               htmlFor="startingPoint"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Starting Point
//             </label>
//             <input
//               type="text"
//               name="startingPoint"
//               value={formData.startingPoint}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter starting point"
//               required
//             />
//           </div>

//           {/* End Point */}
//           <div className="mb-4">
//             <label
//               htmlFor="endPoint"
//               className="block text-sm font-medium text-gray-700"
//             >
//               End Point
//             </label>
//             <input
//               type="text"
//               name="endPoint"
//               value={formData.endPoint}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter end point"
//               required
//             />
//           </div>

//           {/* Departure Time */}
//           <div className="mb-4">
//             <label
//               htmlFor="departureTime"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Departure Time
//             </label>
//             <input
//               type="time"
//               name="departureTime"
//               value={formData.departureTime}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Arrival Time */}
//           <div className="mb-4">
//             <label
//               htmlFor="arrivalTime"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Arrival Time
//             </label>
//             <input
//               type="time"
//               name="arrivalTime"
//               value={formData.arrivalTime}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Seats Available */}
//           <div className="mb-4">
//             <label
//               htmlFor="seatsAvailable"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Seats Available
//             </label>
//             <input
//               type="number"
//               name="seatsAvailable"
//               value={formData.seatsAvailable}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter number of available seats"
//               required
//             />
//           </div>

//           {/* Additional Charge */}
//           <div className="mb-4">
//             <label
//               htmlFor="additionalCharge"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Additional Charge
//             </label>
//             <input
//               type="text"
//               name="additionalCharge"
//               value={formData.additionalCharge}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter additional charge"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div className="mb-4">
//             <label
//               htmlFor="price"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Price
//             </label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter ticket price"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="mt-6 w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Add Bus Ticket
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBusTicket;


"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddBusTicket = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    type: "",
    startingPoint: "",
    endPoint: "",
    departureTime: "",
    arrivalTime: "",
    seatsAvailable: "",
    additionalCharge: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Bus Ticket Data:", formData);

    // Here, you can add code to handle form submission, like sending data to a server

    // Show confirmation modal
    await Swal.fire({
      title: "Success!",
      text: "Bus ticket added successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Reset form fields
    setFormData({
      name: "",
      code: "",
      type: "",
      startingPoint: "",
      endPoint: "",
      departureTime: "",
      arrivalTime: "",
      seatsAvailable: "",
      additionalCharge: "",
      price: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Add Bus Ticket
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter bus name"
              required
            />
          </div>

          {/* Code */}
          <div className="mb-4">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Code
            </label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter bus code"
              required
            />
          </div>

          {/* Type */}
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter bus type (e.g., Non AC)"
              required
            />
          </div>

          {/* Starting Point */}
          <div className="mb-4">
            <label
              htmlFor="startingPoint"
              className="block text-sm font-medium text-gray-700"
            >
              Starting Point
            </label>
            <input
              type="text"
              name="startingPoint"
              value={formData.startingPoint}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter starting point"
              required
            />
          </div>

          {/* End Point */}
          <div className="mb-4">
            <label
              htmlFor="endPoint"
              className="block text-sm font-medium text-gray-700"
            >
              End Point
            </label>
            <input
              type="text"
              name="endPoint"
              value={formData.endPoint}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter end point"
              required
            />
          </div>

          {/* Departure Time */}
          <div className="mb-4">
            <label
              htmlFor="departureTime"
              className="block text-sm font-medium text-gray-700"
            >
              Departure Time
            </label>
            <input
              type="time"
              name="departureTime"
              value={formData.departureTime}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Arrival Time */}
          <div className="mb-4">
            <label
              htmlFor="arrivalTime"
              className="block text-sm font-medium text-gray-700"
            >
              Arrival Time
            </label>
            <input
              type="time"
              name="arrivalTime"
              value={formData.arrivalTime}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Seats Available */}
          <div className="mb-4">
            <label
              htmlFor="seatsAvailable"
              className="block text-sm font-medium text-gray-700"
            >
              Seats Available
            </label>
            <input
              type="number"
              name="seatsAvailable"
              value={formData.seatsAvailable}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter number of available seats"
              required
            />
          </div>

          {/* Additional Charge */}
          <div className="mb-4">
            <label
              htmlFor="additionalCharge"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Charge
            </label>
            <input
              type="text"
              name="additionalCharge"
              value={formData.additionalCharge}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter additional charge"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter ticket price"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Bus Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBusTicket;
