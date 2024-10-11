"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaClock, FaBus, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa"; // Importing icons

const FeaturedBus = () => {
  const seatStatuses = [
    { className: "booked", label: "Booked (M)" },
    { className: "booked-female", label: "Booked (F)" },
    { className: "blocked", label: "Blocked" },
    { className: "available", label: "Available" },
    { className: "selected", label: "Selected" },
    { className: "sold", label: "Sold (M)" },
    { className: "sold-female", label: "Sold (F)" },
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [boardingPoint, setBoardingPoint] = useState("");
  const [droppingPoint, setDroppingPoint] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSeatSelectionVisible, setIsSeatSelectionVisible] = useState(false); // Control form visibility

  // Sample seat layout (true means seat is available)
  const seatLayout = [
    ["booked", "sold", null, "booked", "booked"],
    ["sold", "sold", null, "sold", "sold"],
    ["blocked", "blocked", null, "blocked", "blocked"],
    ["booked", "booked", null, "sold", "sold"],
    ["booked", "booked", null, "sold-female", "sold-female"],
    ["sold-female", "sold-female", null, "sold", "sold"],
    ["sold", "sold", null, "sold", "sold"],
    ["sold", "available", null, "sold", "sold"],
  ];

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seatStatus = seatLayout[rowIndex][seatIndex];
    if (seatStatus === "available") {
      const seatId = `Row ${rowIndex + 1} Seat ${seatIndex + 1}`;
      setSelectedSeats((prev) =>
        prev.includes(seatId)
          ? prev.filter((seat) => seat !== seatId)
          : [...prev, seatId]
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const toggleSeatSelection = () => {
    setIsSeatSelectionVisible((prev) => !prev);
  };

  return (
    <div className="featured-bus p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="more-info-hide">
        <ul className="result-content flex flex-col md:flex-row md:items-center">
          {/* Bus Information */}
          <li className="flex-1 mb-4 md:mb-0">
            <div className="bus-name mb-2">
              <h6 className="font-semibold text-2xl text-red-600 flex items-center">
                <FaBus className="mr-2 text-3xl" />
                Desh Travels
              </h6>
              <p className="text-gray-600 text-lg">
                001-DHK-CHAP <span className="ml-2 font-semibold">Non AC</span>
              </p>
            </div>
            <div className="points text-gray-500">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-1 text-lg" />
                Starting Point: <span className="text-red-600">Kallyanpur</span>
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-1 text-lg" />
                End Point: <span className="text-red-600">Chapai</span>
              </p>
            </div>
          </li>

          {/* Departure, Arrival, and Seats Available Info */}
          <li className="flex-1 mb-4 md:mb-0">
            <div className="item-content text-center">
              <h6 className="font-semibold text-gray-700">Departure Time</h6>
              <p className="text-gray-500 flex items-center justify-center">
                <FaClock className="mr-1" />
                6:15 AM
              </p>
            </div>
          </li>
          <li className="flex-1 mb-4 md:mb-0">
            <div className="item-content text-center">
              <h6 className="font-semibold text-gray-700">Arrival Time</h6>
              <p className="text-gray-500 flex items-center justify-center">
                <FaClock className="mr-1" />
                12:35 PM
              </p>
            </div>
          </li>
          <li className="flex-1 mb-4 md:mb-0">
            <div className="item-content text-center">
              <h6 className="font-semibold text-gray-700">Seats Available</h6>
              <p className="text-gray-500 flex items-center justify-center">
                <FaCheckCircle className="text-green-500 mr-1" />1
              </p>
            </div>
          </li>

          {/* Pricing and Buttons */}
          <li className="flex gap-2 items-center justify-center flex-col md:flex-row">
            <div>
              <span className="bg-red-100 text-red-500 px-2 py-1 rounded text-sm">
                No Additional Charge
              </span>
              <h3 className="text-3xl font-bold text-purple-700 mt-1">
                ৳690.00
              </h3>
            </div>
            <div className="flex flex-col mt-2">
              <button
                onClick={toggleSeatSelection}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                {isSeatSelectionVisible ? "Hide Seats" : "View Seats"}
              </button>
              <Link
                href={"#"}
                className="text-gray-500 cursor-pointer hover:text-blue-600 transition-colors duration-300 text-sm mt-2"
              >
                Cancellation Policy
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* Conditionally Rendered Seat Selection Form */}
      {isSeatSelectionVisible && (
        <div className="seat-selection-form mt-6 transition-all duration-500 ease-in-out">
          <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-4">
            {/* Seat Legend */}
            <div className="mb-6">
              <ul className="flex flex-wrap gap-4">
                {seatStatuses.map((status, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className={`w-6 h-6 mr-2 rounded seat-${status.className}`}
                    ></span>
                    <span>{status.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seat Map */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <div className="relative bg-gray-100 p-4 rounded">
                  <div className="absolute top-2 left-2">
                    <img
                      src="/images/driver-icon.webp"
                      alt="driver"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-5 gap-2 mt-8">
                    {seatLayout.map((row, rowIndex) =>
                      row.map((seat, seatIndex) =>
                        seat ? (
                          <button
                            key={`${rowIndex}-${seatIndex}`}
                            type="button"
                            className={`w-8 h-8 rounded seat-${seat} ${
                              seat === "available"
                                ? "cursor-pointer"
                                : "cursor-not-allowed"
                            } ${
                              selectedSeats.includes(
                                `Row ${rowIndex + 1} Seat ${seatIndex + 1}`
                              )
                                ? "seat-selected"
                                : ""
                            }`}
                            onClick={() => handleSeatClick(rowIndex, seatIndex)}
                          ></button>
                        ) : (
                          <div key={`${rowIndex}-${seatIndex}`}></div>
                        )
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              {/* <div className="lg:w-2/3 lg:pl-6">
                <div className="bg-gray-50 p-4 rounded">
                  <h6 className="text-lg font-semibold mb-2 text-gray-700">
                    Select Boarding & Dropping Points
                  </h6>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <select
                      value={boardingPoint}
                      onChange={(e) => setBoardingPoint(e.target.value)}
                      className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-300"
                      required
                    >
                      <option value="" disabled>
                        Select Boarding Point
                      </option>
                      <option value="Kallyanpur">Kallyanpur</option>
                    </select>
                    <select
                      value={droppingPoint}
                      onChange={(e) => setDroppingPoint(e.target.value)}
                      className="border border-gray-300 p-2 rounded focus:ring focus:ring-blue-300"
                      required
                    >
                      <option value="" disabled>
                        Select Dropping Point
                      </option>
                      <option value="Chapai">Chapai</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="border border-gray-300 p-2 w-full rounded focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>

                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="col-span-12 sm:col-span-5 lg:col-span-8 order-1 lg:order-1">
                <div className="row bg-gray-50 p-6 rounded-lg shadow-lg">
                  {/* Boarding/Dropping Info */}
                  <div className="lg:col-span-4 md:col-span-12 pr-4">
                    <div className="seat-info pb-4 border-b border-gray-300">
                      <div className="pt-4">
                        <h6 className="text-red-600 font-semibold text-lg">
                          Boarding/Dropping
                        </h6>
                      </div>
                      <div className="row gap-4 sm:gap-6 mt-4">
                        {/* Boarding Point */}
                        <div className="col-span-6 sm:col-span-12">
                          <label
                            className="mb-2 font-medium text-gray-700"
                            htmlFor="boardingPoint"
                          >
                            Boarding Point*
                          </label>
                          <div className="ant-form-item">
                            <div className="ant-row ant-form-item-row">
                              <div className="ant-col ant-form-item-control">
                                <div className="ant-form-item-control-input">
                                  <div className="ant-form-item-control-input-content">
                                    <div
                                      className="ant-select ant-select-single ant-select-show-arrow"
                                      aria-required="true"
                                    >
                                      <div className="ant-select-selector border border-gray-300 rounded-lg hover:shadow-md transition">
                                        <span className="ant-select-selection-search">
                                          <input
                                            type="search"
                                            id="boardingPoint"
                                            autoComplete="off"
                                            className="ant-select-selection-search-input"
                                            aria-haspopup="listbox"
                                            readOnly
                                            style={{ opacity: 0 }}
                                          />
                                        </span>
                                        <span className="ant-select-selection-placeholder text-gray-500">
                                          Select boarding point
                                        </span>
                                      </div>
                                      <span className="ant-select-arrow">
                                        <span
                                          role="img"
                                          aria-label="down"
                                          className="anticon anticon-down ant-select-suffix"
                                        >
                                          <svg
                                            viewBox="64 64 896 896"
                                            className="w-5 h-5 text-gray-400"
                                            fill="currentColor"
                                          >
                                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                          </svg>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Dropping Point */}
                        <div className="col-span-6 sm:col-span-12">
                          <label
                            className="mb-2 font-medium text-gray-700"
                            htmlFor="droppingPoint"
                          >
                            Dropping Point*
                          </label>
                          <div className="ant-form-item">
                            <div className="ant-row ant-form-item-row">
                              <div className="ant-col ant-form-item-control">
                                <div className="ant-form-item-control-input">
                                  <div className="ant-form-item-control-input-content">
                                    <div
                                      className="ant-select ant-select-single ant-select-show-arrow"
                                      aria-required="true"
                                    >
                                      <div className="ant-select-selector border border-gray-300 rounded-lg hover:shadow-md transition">
                                        <span className="ant-select-selection-search">
                                          <input
                                            type="search"
                                            id="droppingPoint"
                                            autoComplete="off"
                                            className="ant-select-selection-search-input"
                                            aria-haspopup="listbox"
                                            readOnly
                                            style={{ opacity: 0 }}
                                          />
                                        </span>
                                        <span className="ant-select-selection-placeholder text-gray-500">
                                          Select dropping point
                                        </span>
                                      </div>
                                      <span className="ant-select-arrow">
                                        <span
                                          role="img"
                                          aria-label="down"
                                          className="anticon anticon-down ant-select-suffix"
                                        >
                                          <svg
                                            viewBox="64 64 896 896"
                                            className="w-5 h-5 text-gray-400"
                                            fill="currentColor"
                                          >
                                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                          </svg>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Seat Information */}
                        <div className="d-none sm:block mt-6">
                          <h6 className="text-lg font-semibold text-gray-600">
                            Seat Information
                          </h6>
                          <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex justify-between text-gray-700">
                              <p>Seat Fare:</p>
                              <p>৳ 0</p>
                            </div>
                            <div className="flex justify-between text-gray-700">
                              <p>Service Charge:</p>
                              <p>৳ 0</p>
                            </div>
                            <div className="flex justify-between text-gray-700">
                              <p>PGW Charge:</p>
                              <p>৳ 0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="lg:col-span-8 md:col-span-12 mt-6 lg:mt-0">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                      <div className="row items-center">
                        <div className="col-12">
                          <label
                            htmlFor="mobile"
                            className="text-gray-700 font-medium"
                          >
                            Mobile Number*
                          </label>
                          <input
                            name="phoneNumber"
                            type="text"
                            id="mobile"
                            required
                            className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your mobile number"
                          />
                        </div>
                        <div className="col-12">
                          <button className="bg-red-600 text-white w-full py-2 mt-6 rounded-lg shadow hover:bg-red-700 transition">
                            Submit
                          </button>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600">
                        Already verified your phone number and have a password?
                        <button
                          type="button"
                          className="text-red-600 underline ml-2"
                        >
                          Click here to login
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeaturedBus;
