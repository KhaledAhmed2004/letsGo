// "use client";

// import React, { useEffect, useState } from "react";
// import { HiPencil, HiTrash, HiPlus } from "react-icons/hi";
// import toast from "react-hot-toast"; // Importing react-hot-toast for notifications
// import { useRouter } from "next/navigation";

// // Interface for Package
// interface Package {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
// }

// // Custom Modal Component
// const CustomModal: React.FC<{
//   isOpen: boolean;
//   onClose: () => void;
//   onUpdate: () => void; // Add onUpdate prop
//   title: string;
//   children: React.ReactNode;
// }> = ({ isOpen, onClose, onUpdate, title, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
//       <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
//         <h2 className="text-3xl font-bold mb-6 text-blue-700">{title}</h2>
//         {children}
//         <div className="flex justify-between mt-6">
//           <button
//             className="w-full mr-2 p-2 bg-gray-300 text-black rounded-lg shadow hover:bg-gray-400 transition duration-200"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             className="w-full ml-2 p-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
//             onClick={onUpdate} // Use onUpdate prop here
//           >
//             Update
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Package Management Page Component
// const PackageManagementPage = () => {
//   const router = useRouter();
//   const [packages, setPackages] = useState<Package[]>([]);
//   const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
//   const [formData, setFormData] = useState<Package>({
//     id: "",
//     name: "",
//     description: "",
//     price: 0,
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Mock package data
//   const mockPackages: Package[] = [
//     {
//       id: "1",
//       name: "Basic Package",
//       description: "A basic package with essential features.",
//       price: 99.99,
//     },
//     {
//       id: "2",
//       name: "Premium Package",
//       description: "A premium package with additional benefits.",
//       price: 199.99,
//     },
//     {
//       id: "3",
//       name: "Family Package",
//       description: "A family package for larger groups.",
//       price: 299.99,
//     },
//     {
//       id: "4",
//       name: "Luxury Package",
//       description: "A luxury package with exclusive services.",
//       price: 499.99,
//     },
//   ];

//   useEffect(() => {
//     setPackages(mockPackages);
//   }, []);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.price < 0) {
//       toast.error("Price cannot be negative");
//       return;
//     }

//     if (selectedPackage) {
//       setPackages(
//         packages.map((pkg) =>
//           pkg.id === selectedPackage.id ? { ...formData } : pkg
//         )
//       );
//       toast.success("Package updated successfully!");
//     }

//     setFormData({ id: "", name: "", description: "", price: 0 });
//     setSelectedPackage(null);
//     setIsModalOpen(false);
//   };

//   const handleEdit = (pkg: Package) => {
//     setSelectedPackage(pkg);
//     setFormData(pkg);
//     setIsModalOpen(true);
//   };

//   const handleDelete = (id: string) => {
//     setPackages(packages.filter((pkg) => pkg.id !== id));
//     toast.success("Package deleted successfully!");
//   };

//   return (
//     <div className="mx-auto p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
//         Package Management
//       </h1>
//       <div className="mb-4 text-center">
//         <button
//           className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
//           onClick={() => router.push("/dashboard/add-package")}
//         >
//           <HiPlus className="mr-2" /> Add New Package
//         </button>
//       </div>
//       <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
//         <thead>
//           <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
//             <th className="py-3 px-6 text-left">Package Name</th>
//             <th className="py-3 px-6 text-left">Description</th>
//             <th className="py-3 px-6 text-left">Price</th>
//             <th className="py-3 px-6 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {packages.map((pkg, index) => (
//             <tr
//               key={pkg.id}
//               className={`border-b ${
//                 index % 2 === 0 ? "bg-gray-50" : "bg-white"
//               } hover:bg-gray-100`}
//             >
//               <td className="py-4 px-6">
//                 <span className="text-gray-700">{pkg.name}</span>
//               </td>
//               <td className="py-4 px-6">{pkg.description}</td>
//               <td className="py-4 px-6">${pkg.price.toFixed(2)}</td>
//               <td className="py-4 px-6 flex justify-center space-x-4">
//                 <button
//                   className="text-blue-500 hover:bg-blue-100 p-2 rounded-full transition duration-200 ease-in-out flex items-center"
//                   onClick={() => handleEdit(pkg)}
//                   title="Edit Package"
//                 >
//                   <HiPencil className="mr-1" />
//                   <span>Edit</span>
//                 </button>
//                 <button
//                   className="text-red-500 hover:bg-red-100 p-2 rounded-full transition duration-200 ease-in-out flex items-center"
//                   onClick={() => handleDelete(pkg.id)}
//                   title="Delete Package"
//                 >
//                   <HiTrash className="mr-1" />
//                   <span>Delete</span>
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Editing Package */}
//       <CustomModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onUpdate={handleSubmit} // Pass handleSubmit as onUpdate
//         title="Edit Package"
//       >
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSubmit(e);
//           }}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Package Name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="block w-full p-2 mb-4 border rounded"
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className="block w-full p-2 mb-4 border rounded"
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleInputChange}
//             className="block w-full p-2 mb-4 border rounded"
//           />
//         </form>
//       </CustomModal>
//     </div>
//   );
// };

// export default PackageManagementPage;
"use client";

import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash, HiPlus } from "react-icons/hi";
import toast from "react-hot-toast"; // Importing react-hot-toast for notifications
import { useRouter } from "next/navigation";

// Interface for Package
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
  onUpdate: () => void; // onUpdate prop doesn't need to accept any parameters
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, onUpdate, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">{title}</h2>
        {children}
        <div className="flex justify-between mt-6">
          <button
            className="w-full mr-2 p-2 bg-gray-300 text-black rounded-lg shadow hover:bg-gray-400 transition duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full ml-2 p-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
            onClick={onUpdate} // Call onUpdate without parameters
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
  const router = useRouter();
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [formData, setFormData] = useState<Package>({
    id: "",
    name: "",
    description: "",
    price: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock package data
  const mockPackages: Package[] = [
    {
      id: "1",
      name: "Premium Package",
      description: "A basic package with essential features.",
      price: 10000,
    },
    {
      id: "2",
      name: "Premium Package",
      description: "A premium package with additional benefits.",
      price: 7999,
    },
    {
      id: "3",
      name: "Family Package",
      description: "A family package for larger groups.",
      price: 8999,
    },
    {
      id: "4",
      name: "Single Package",
      description: "A luxury package with exclusive services.",
      price: 7000,
    },
  ];

  useEffect(() => {
    setPackages(mockPackages);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Remove e parameter as it's no longer needed
    if (formData.price < 0) {
      toast.error("Price cannot be negative");
      return;
    }

    if (selectedPackage) {
      setPackages(
        packages.map((pkg) =>
          pkg.id === selectedPackage.id ? { ...formData } : pkg
        )
      );
      toast.success("Package updated successfully!");
    }

    setFormData({ id: "", name: "", description: "", price: 0 });
    setSelectedPackage(null);
    setIsModalOpen(false);
  };

  const handleEdit = (pkg: Package) => {
    setSelectedPackage(pkg);
    setFormData(pkg);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
    toast.success("Package deleted successfully!");
  };

  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Package Management
      </h1>
      <div className="mb-4 text-center">
        <button
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
          onClick={() => router.push("/dashboard/add-package")}
        >
          <HiPlus className="mr-2" /> Add New Package
        </button>
      </div>
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
            <th className="py-3 px-6 text-left">Package Name</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, index) => (
            <tr
              key={pkg.id}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="py-4 px-6">
                <span className="text-gray-700">{pkg.name}</span>
              </td>
              <td className="py-4 px-6">{pkg.description}</td>
              <td className="py-4 px-6"> ৳ {pkg.price.toFixed(2)}</td>
              <td className="py-4 px-6 flex justify-center space-x-4">
                <button
                  className="text-blue-500 hover:bg-blue-100 p-2 rounded-full transition duration-200 ease-in-out flex items-center"
                  onClick={() => handleEdit(pkg)}
                  title="Edit Package"
                >
                  <HiPencil className="mr-1" />
                  <span>Edit</span>
                </button>
                <button
                  className="text-red-500 hover:bg-red-100 p-2 rounded-full transition duration-200 ease-in-out flex items-center"
                  onClick={() => handleDelete(pkg.id)}
                  title="Delete Package"
                >
                  <HiTrash className="mr-1" />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Editing Package */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleSubmit} // Pass handleSubmit as onUpdate
        title="Edit Package"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleSubmit(); // Call handleSubmit without passing an event
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Package Name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full p-2 mb-4 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            className="block w-full p-2 mb-4 border rounded"
          />
        </form>
      </CustomModal>
    </div>
  );
};

export default PackageManagementPage;
