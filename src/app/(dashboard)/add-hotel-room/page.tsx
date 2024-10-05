"use client";
import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddHotelRoom = () => {
  const [formData, setFormData] = useState({
    roomNumber: "",
    pricePerNight: "",
    roomType: "",
    amenities: "",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create image preview URL
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Hotel Room Data:", formData);
    if (selectedImage) {
      console.log("Selected Image:", selectedImage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Add Hotel Room
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Room Number */}
          <div className="mb-4">
            <label
              htmlFor="roomNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Room Number
            </label>
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter room number"
              required
            />
          </div>

          {/* Price Per Night */}
          <div className="mb-4">
            <label
              htmlFor="pricePerNight"
              className="block text-sm font-medium text-gray-700"
            >
              Price Per Night
            </label>
            <input
              type="number"
              name="pricePerNight"
              value={formData.pricePerNight}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter price per night"
              required
            />
          </div>

          {/* Room Type */}
          <div className="mb-4">
            <label
              htmlFor="roomType"
              className="block text-sm font-medium text-gray-700"
            >
              Room Type
            </label>
            <input
              type="text"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter room type"
              required
            />
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <label
              htmlFor="amenities"
              className="block text-sm font-medium text-gray-700"
            >
              Amenities
            </label>
            <input
              type="text"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter amenities (comma separated)"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Room Image
            </label>
            <div className="flex items-center mt-2">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="upload"
              />
              <label
                htmlFor="upload"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-200 hover:text-gray-700"
              >
                <AiOutlineCamera className="w-6 h-6 mr-2" />
                Choose Image
              </label>
            </div>
          </div>

          {/* Image Preview and Remove Option */}
          {imagePreview && (
            <div className="relative mt-4">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="object-cover w-full h-48 rounded-lg shadow-md"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 p-1 text-red-600 bg-white rounded-full shadow-lg hover:text-red-700"
              >
                <RiDeleteBin6Line className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHotelRoom;
