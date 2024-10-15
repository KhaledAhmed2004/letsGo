"use client"; // Add this directive to make it a Client Component

import React from "react";

interface BookingButtonProps {
  price: number;
}

const BookingButton: React.FC<BookingButtonProps> = ({ price }) => {
  const handleBooking = async () => {
    try {
      const orderData = {
        customerName: "John Doe", // Replace with actual customer name or retrieve from user data
        quantity: 1,
        totalPrice: price,
      };

      const response = await fetch(
        "https://tour-gide-server.vercel.app/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        window.location.href = result.payment_url;
        alert("Order created successfully!");
        console.log("Order details:", result);
      } else {
        alert("Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred while creating the order.");
    }
  };

  return (
    <button
      onClick={handleBooking}
      className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      Book Now
    </button>
  );
};

export default BookingButton;
