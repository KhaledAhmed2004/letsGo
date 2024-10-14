import dotenv from "dotenv";
import axios from "axios";

// Load environment variables from .env file
dotenv.config();

export const initialPayment = async () => {
  // Log environment variables to check if they're defined
  // console.log("PAYMENT_URL:", process.env.PAYMENT_URL);
  // console.log("STORE_ID:", process.env.STORE_ID);
  // console.log("SIGNATURE_KEY:", process.env.SIGNATURE_KEY);

  // // Check if PAYMENT_URL is defined
  // if (!process.env.PAYMENT_URL) {
  //   console.error("Error: PAYMENT_URL is not defined in .env");
  //   return;
  // }

  try {
    const response = await axios.post(
      "https://sandbox.aamarpay.com/jsonpost.php",
      {
        store_id: "aamarpaytest",
        signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
        tran_id: "123123173",
        success_url: "http://www.merchantdomain.com/successpage.html",
        fail_url: "http://www.merchantdomain.com/failedpage.html",
        cancel_url: "http://www.merchantdomain.com/cancelpage.html",
        amount: "10.0",
        currency: "BDT",
        desc: "Merchant Registration Payment",
        cus_name: "Name",
        cus_email: "payer@merchantcustomer.com",
        cus_add1: "House B-158 Road 22",
        cus_add2: "Mohakhali DOHS",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1206",
        cus_country: "Bangladesh",
        cus_phone: "+8801704",
        type: "json",
      }
    );

    // Log the response from the payment request
    console.log("Payment Response:", response.data);
  } catch (error) {
    // Handle error
    console.error("Error making payment:", error);
  }
};
