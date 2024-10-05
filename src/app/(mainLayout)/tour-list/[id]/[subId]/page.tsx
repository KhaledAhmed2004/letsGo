// "use client";
// import { useForm } from "react-hook-form";

// export default function BookingForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data: any) => {
//     console.log(data); // Handle travel booking form submission
//   };

//   return (
//     <div className="dark:bg-gray-700 py-4">
//       <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//           Book Your Tour
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Full Name */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 dark:text-gray-300 mb-2"
//               htmlFor="fullName"
//             >
//               Full Name
//             </label>
//             <input
//               id="fullName"
//               type="text"
//               {...register("fullName", { required: "Full Name is required" })}
//               className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.fullName
//                   ? "border-red-500"
//                   : "border-gray-300 dark:border-gray-600"
//               }`}
//             />
//             {errors.fullName && (
//               <span className="text-red-500 text-sm">
//                 {errors.fullName.message}
//               </span>
//             )}
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 dark:text-gray-300 mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: /^\S+@\S+$/i,
//               })}
//               className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.email
//                   ? "border-red-500"
//                   : "border-gray-300 dark:border-gray-600"
//               }`}
//             />
//             {errors.email && (
//               <span className="text-red-500 text-sm">
//                 {errors.email.message}
//               </span>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 dark:text-gray-300 mb-2"
//               htmlFor="travelDate"
//             >
//               Travel Date
//             </label>
//             <input
//               id="travelDate"
//               type="date"
//               {...register("travelDate", {
//                 required: "Travel date is required",
//               })}
//               className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.travelDate
//                   ? "border-red-500"
//                   : "border-gray-300 dark:border-gray-600"
//               }`}
//             />
//             {errors.travelDate && (
//               <span className="text-red-500 text-sm">
//                 {errors.travelDate.message}
//               </span>
//             )}
//           </div>

//           {/* Destination */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 dark:text-gray-300 mb-2"
//               htmlFor="destination"
//             >
//               Destination
//             </label>
//             <input
//               id="destination"
//               type="text"
//               {...register("destination", {
//                 required: "Destination is required",
//               })}
//               className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.destination
//                   ? "border-red-500"
//                   : "border-gray-300 dark:border-gray-600"
//               }`}
//             />
//             {errors.destination && (
//               <span className="text-red-500 text-sm">
//                 {errors.destination.message}
//               </span>
//             )}
//           </div>

//           {/* Number of Travelers */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 dark:text-gray-300 mb-2"
//               htmlFor="travelers"
//             >
//               Number of Travelers
//             </label>
//             <input
//               id="travelers"
//               type="number"
//               {...register("travelers", {
//                 required: "Number of travelers is required",
//                 min: { value: 1, message: "At least 1 traveler required" },
//               })}
//               className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.travelers
//                   ? "border-red-500"
//                   : "border-gray-300 dark:border-gray-600"
//               }`}
//             />
//             {errors.travelers && (
//               <span className="text-red-500 text-sm">
//                 {errors.travelers.message}
//               </span>
//             )}
//           </div>

//           {/* Travel Package */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 dark:text-gray-300 mb-2"
//               htmlFor="package"
//             >
//               Travel Package
//             </label>
//             <select
//               id="package"
//               {...register("package", {
//                 required: "Package selection is required",
//               })}
//               className="w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select a Package</option>
//               <option value="standard">Standard Package</option>
//               <option value="luxury">Luxury Package</option>
//               <option value="adventure">Adventure Package</option>
//             </select>
//             {errors.package && (
//               <span className="text-red-500 text-sm">
//                 {errors.package.message}
//               </span>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Book Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface BookingFormInputs {
  fullName: string;
  email: string;
  travelDate: string;
  destination: string;
  travelers: number;
  package: string;
}

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormInputs>(); // Specify the type for useForm

  const onSubmit: SubmitHandler<BookingFormInputs> = (data) => {
    console.log(data); // Handle travel booking form submission
  };

  return (
    <div className="dark:bg-gray-700 py-4">
      <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Book Your Tour
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.fullName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Travel Date */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="travelDate"
            >
              Travel Date
            </label>
            <input
              id="travelDate"
              type="date"
              {...register("travelDate", {
                required: "Travel date is required",
              })}
              className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.travelDate ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.travelDate && (
              <span className="text-red-500 text-sm">
                {errors.travelDate.message}
              </span>
            )}
          </div>

          {/* Destination */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="destination"
            >
              Destination
            </label>
            <input
              id="destination"
              type="text"
              {...register("destination", {
                required: "Destination is required",
              })}
              className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.destination ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.destination && (
              <span className="text-red-500 text-sm">
                {errors.destination.message}
              </span>
            )}
          </div>

          {/* Number of Travelers */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="travelers"
            >
              Number of Travelers
            </label>
            <input
              id="travelers"
              type="number"
              {...register("travelers", {
                required: "Number of travelers is required",
                min: { value: 1, message: "At least 1 traveler required" },
              })}
              className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.travelers ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.travelers && (
              <span className="text-red-500 text-sm">
                {errors.travelers.message}
              </span>
            )}
          </div>

          {/* Travel Package */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="package"
            >
              Travel Package
            </label>
            <select
              id="package"
              {...register("package", {
                required: "Package selection is required",
              })}
              className="w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Package</option>
              <option value="standard">Standard Package</option>
              <option value="luxury">Luxury Package</option>
              <option value="adventure">Adventure Package</option>
            </select>
            {errors.package && (
              <span className="text-red-500 text-sm">
                {errors.package.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
