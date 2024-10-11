"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import Google and Facebook icons
import Image from "next/image";
import { MdEmail, MdLock } from "react-icons/md";
import { signIn } from "next-auth/react";
// Define an interface for form data
interface SignInFormInputs {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>(); // Use the interface here
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignInFormInputs) => {
    console.log(data);
    setLoading(true);
    try {
      // Simulate an API request
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake delay
      toast.success("Sign In Successful!");
      router.push("/dashboard"); // Navigate to dashboard
    } catch {
      toast.error("Sign In Failed. Please try again."); // Remove the error variable
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = (provider: string) => {
    // Handle social sign-in logic here
    toast.success(`${provider} Sign In Successful!`);
    router.push("/dashboard"); // Navigate to dashboard
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[600px]">
        {/* Left Section for Sign In Form */}
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Welcome Back!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <div className="flex items-center border rounded-lg shadow-sm">
                <MdEmail className="text-gray-500 mx-2" />
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } dark:bg-gray-700 dark:text-gray-200`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="flex items-center border rounded-lg shadow-sm">
                <MdLock className="text-gray-500 mx-2" />
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${
                    errors.password
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } dark:bg-gray-700 dark:text-gray-200`}
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
            <h2 className="text-center font-semibold">or</h2>
            {/* Social Sign In Buttons */}
            <div className="flex justify-between mt-4 gap-2">
              <button
                type="button"
                // onClick={() => handleSocialSignIn("Google")}
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex items-center justify-center w-full border-2 border-red-600 text-red-600 bg-transparent py-2 rounded-lg hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out dark:text-red-400 dark:border-red-400 dark:hover:bg-red-500 dark:hover:text-white"
              >
                <FaGoogle className="mr-2" />
                with Google
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignIn("Facebook")}
                className="flex items-center justify-center w-full border-2 border-blue-800 text-blue-800 bg-transparent py-2 rounded-lg hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 ease-in-out dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                <FaFacebook className="mr-2" />
                with Facebook
              </button>
            </div>

            {/* Forgot Password and Sign Up Links */}
            <div className="text-center mt-4">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                Forgot Password?
              </Link>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                New here?{" "}
                <Link
                  href="/auth/signup"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Sign Up Instead
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Section for Image */}
        <div className="hidden md:flex items-center justify-center w-full bg-gray-200 dark:bg-gray-700">
          <Image
            src={
              "https://i.ibb.co/9GYXdZm/julentto-photography-CIuak-YIjadc-unsplash.jpg"
            }
            height={500}
            width={500}
            alt="Sign In Illustration"
            className="object-cover w-full h-full rounded-r-lg"
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignInPage;
