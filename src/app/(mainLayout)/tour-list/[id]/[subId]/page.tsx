"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface BookingFormInputs {
  fullName: string;
  email: string;
  travelers: number;
  paymentMethod: string;
  mobileBankingProvider?: string;
  mobileNumber?: string;
  cardNumber?: string;
  bankAccountNumber?: string;
}

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormInputs>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<BookingFormInputs | null>(null);
  const paymentMethod = watch("paymentMethod");
  const mobileBankingProvider = watch("mobileBankingProvider");
  const [mobileNumberPlaceholder, setMobileNumberPlaceholder] = useState("");

  const onSubmit: SubmitHandler<BookingFormInputs> = (data) => {
    setFormData(data); // Store form data for confirmation
    setIsModalOpen(true); // Open confirmation modal
  };

  const handleProviderChange = (provider: string) => {
    setValue("mobileBankingProvider", provider);
    if (provider === "bkash") {
      setMobileNumberPlaceholder("Enter bKash Number");
    } else if (provider === "nagad") {
      setMobileNumberPlaceholder("Enter Nagad Number");
    } else if (provider === "rocket") {
      setMobileNumberPlaceholder("Enter Rocket Number");
    } else {
      setMobileNumberPlaceholder("");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData(null); // Clear form data on modal close
  };

  const handleConfirm = () => {
    console.log(formData); // Here you can process the booking
    toast.success("Booking confirmed successfully!"); // Show success toast
    setIsModalOpen(false); // Close modal after confirmation
    // Reset the form after booking if needed
  };

  return (
    <div className="dark:bg-gray-700 py-4">
      <Toaster /> {/* Toast container for notifications */}
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
                errors.fullName
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
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
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
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
                errors.travelers
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.travelers && (
              <span className="text-red-500 text-sm">
                {errors.travelers.message}
              </span>
            )}
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="paymentMethod"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              {...register("paymentMethod", {
                required: "Payment method is required",
              })}
              className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.paymentMethod
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="bankTransfer">Bank Transfer</option>
              <option value="mobileBanking">Mobile Banking</option>
            </select>
            {errors.paymentMethod && (
              <span className="text-red-500 text-sm">
                {errors.paymentMethod.message}
              </span>
            )}
          </div>

          {/* Additional Payment Fields */}
          {paymentMethod && (
            <>
              {/* For Credit Card */}
              {paymentMethod === "creditCard" && (
                <div className="mb-4">
                  <label
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="cardNumber"
                  >
                    Credit Card Number
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    {...register("cardNumber", {
                      required: "Credit Card Number is required",
                    })}
                    className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.cardNumber
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {errors.cardNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.cardNumber.message}
                    </span>
                  )}
                </div>
              )}

              {/* For Bank Transfer */}
              {paymentMethod === "bankTransfer" && (
                <div className="mb-4">
                  <label
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="bankAccountNumber"
                  >
                    Bank Account Number
                  </label>
                  <input
                    id="bankAccountNumber"
                    type="text"
                    {...register("bankAccountNumber", {
                      required: "Bank Account Number is required",
                    })}
                    className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.bankAccountNumber
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {errors.bankAccountNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.bankAccountNumber.message}
                    </span>
                  )}
                </div>
              )}

              {/* For Mobile Banking */}
              {paymentMethod === "mobileBanking" && (
                <>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 dark:text-gray-300 mb-2"
                      htmlFor="mobileBankingProvider"
                    >
                      Mobile Banking Provider
                    </label>
                    <select
                      id="mobileBankingProvider"
                      {...register("mobileBankingProvider", {
                        required: "Select a provider",
                      })}
                      onChange={(e) => handleProviderChange(e.target.value)}
                      className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.mobileBankingProvider
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    >
                      <option value="">Select Provider</option>
                      <option value="bkash">bKash</option>
                      <option value="nagad">Nagad</option>
                      <option value="rocket">Rocket</option>
                    </select>
                    {errors.mobileBankingProvider && (
                      <span className="text-red-500 text-sm">
                        {errors.mobileBankingProvider.message}
                      </span>
                    )}
                  </div>
                  {mobileBankingProvider && (
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="mobileNumber"
                      >
                        {mobileNumberPlaceholder}
                      </label>
                      <input
                        id="mobileNumber"
                        type="text"
                        placeholder={mobileNumberPlaceholder} // Dynamic placeholder
                        {...register("mobileNumber", {
                          required: "Mobile Number is required",
                        })}
                        className={`w-full px-4 py-2 border dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.mobileNumber
                            ? "border-red-500"
                            : "border-gray-300 dark:border-gray-600"
                        }`}
                      />
                      {errors.mobileNumber && (
                        <span className="text-red-500 text-sm">
                          {errors.mobileNumber.message}
                        </span>
                      )}
                    </div>
                  )}
                </>
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Book Now
          </button>
        </form>

        {isModalOpen && formData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Confirm Your Booking</h2>
              <div className="mt-4">
                <p>
                  <strong>Full Name:</strong> {formData.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Number of Travelers:</strong> {formData.travelers}
                </p>
                <p>
                  <strong>Payment Method:</strong> {formData.paymentMethod}
                </p>
                {/* Additional information can be displayed here */}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
