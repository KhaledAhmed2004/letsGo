"use client";

import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash, HiPlus } from "react-icons/hi"; // Import icons from react-icons
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
}

// Custom Modal Component
const CustomModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode; // Allows for any JSX content
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">{title}</h2>
        {children} {/* Render any children passed to the modal */}
        {/* Buttons Container with Flexbox */}
        <div className="flex justify-between mt-6">
          <button
            className="w-full mr-2 p-2 bg-gray-300 text-black rounded-lg shadow hover:bg-gray-400 transition duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full ml-2 p-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
            onClick={onClose}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

// Package Management Page Component
const PackageManagementPage = () => {
  const router = useRouter(); // Initialize router for navigation
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [formData, setFormData] = useState<Package>({
    id: "",
    name: "",
    description: "",
    price: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Sample package data
  const mockPackages: Package[] = [
    {
      id: "1",
      name: "Basic Package",
      description: "A basic package with essential features.",
      price: 99.99,
    },
    {
      id: "2",
      name: "Premium Package",
      description: "A premium package with additional benefits.",
      price: 199.99,
    },
    {
      id: "3",
      name: "Family Package",
      description: "A family package for larger groups.",
      price: 299.99,
    },
    {
      id: "4",
      name: "Luxury Package",
      description: "A luxury package with exclusive services.",
      price: 499.99,
    },
  ];

  useEffect(() => {
    // Set packages to mock data on component mount
    setPackages(mockPackages);
  }, [mockPackages]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPackage) {
      // Update existing package
      setPackages(
        packages.map((pkg) => (pkg.id === selectedPackage.id ? formData : pkg))
      );
    } else {
      // Add new package
      const newPackage = { ...formData, id: (packages.length + 1).toString() }; // Generate new ID
      setPackages([...packages, newPackage]);
    }
    // Reset form
    setFormData({ id: "", name: "", description: "", price: 0 });
    setSelectedPackage(null);
    setIsModalOpen(false); // Close modal after submission
  };

  const handleEdit = (pkg: Package) => {
    setSelectedPackage(pkg);
    setFormData(pkg);
    setIsModalOpen(true); // Open modal for editing
  };

  const handleDelete = (id: string) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Package Management
        </h1>

        {/* Button to Navigate to Add Package Page */}
        <div className="mb-4 text-center">
          <button
            className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
            onClick={() => router.push("/add-package")}
          >
            <HiPlus className="mr-2" /> Add New Package
          </button>
        </div>

        {/* Packages Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="py-3 px-4 text-left">Package Name</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr
                  key={pkg.id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-2 px-4">{pkg.name}</td>
                  <td className="py-2 px-4">{pkg.description}</td>
                  <td className="py-2 px-4">${pkg.price.toFixed(2)}</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <button
                      className="text-blue-600 hover:underline transition duration-200"
                      onClick={() => handleEdit(pkg)}
                    >
                      <HiPencil className="inline mr-1" /> Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline transition duration-200"
                      onClick={() => handleDelete(pkg.id)}
                    >
                      <HiTrash className="inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Custom Modal for Editing Package */}
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Edit Package"
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Package Name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            {/* <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Update Package
            </button> */}
          </form>
        </CustomModal>
      </div>
    </div>
  );
};

export default PackageManagementPage;
