"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai"; // Camera Icon
import { RiDeleteBin6Line } from "react-icons/ri"; // Trash Icon

const AddPackage = () => {
  const [formData, setFormData] = useState({
    packageName: "",
    price: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle text input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission and file upload (e.g., send data to an API)
    console.log("Package Data:", formData);
    if (selectedImage) {
      console.log("Selected Image:", selectedImage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Add Package
        </h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Package Name */}
          <div>
            <label
              htmlFor="packageName"
              className="block text-sm font-medium text-gray-700"
            >
              Package Name
            </label>
            <input
              type="text"
              name="packageName"
              value={formData.packageName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              placeholder="Enter package name"
              required
            />
          </div>

          {/* Price */}
          <div>
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
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              placeholder="Enter package description"
              rows={4}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Package Image
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
                className="flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-300 ease-in-out border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:text-gray-700"
              >
                <AiOutlineCamera className="w-6 h-6 mr-2" />
                Choose Image
              </label>
            </div>
          </div>

          {/* Image Preview and Remove Option */}
          {imagePreview && (
            <div className="relative mt-4">
              <Image
                width={600} // Specify a fixed width
                height={400} // Specify a fixed height
                src={imagePreview}
                alt="Image Preview"
                className="object-cover w-full h-48 rounded-lg"
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
            className="w-full px-4 py-2 text-sm font-bold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
