"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form"; // Import getValues from useForm
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { MdEmail, MdLock } from "react-icons/md";

interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues, // Import getValues
    formState: { errors },
  } = useForm<SignUpFormInputs>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignUpFormInputs) => {
    setLoading(true);
    try {
      if (!data.terms) {
        toast.error("You must accept the terms and conditions.");
        setLoading(false);
        return;
      }
      if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match.");
        setLoading(false);
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Sign Up Successful!");
      router.push("/dashboard");
    } catch {
      toast.error("Sign Up Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 h-[600px] overflow-hidden">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Sign Up
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
                    validate: {
                      minLength: (value) =>
                        value.length >= 8 ||
                        "Password must be at least 8 characters long.",
                      hasUpperCase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must include at least one uppercase letter.",
                      hasNumber: (value) =>
                        /\d/.test(value) ||
                        "Password must include at least one number.",
                      hasSpecialChar: (value) =>
                        /[@$!%*?&#^]/.test(value) ||
                        "Password must include at least one special character.",
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

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Confirm Password
              </label>
              <div className="flex items-center border rounded-lg shadow-sm">
                <MdLock className="text-gray-500 mx-2" />
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match.",
                  })}
                  className={`w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } dark:bg-gray-700 dark:text-gray-200`}
                  placeholder="Confirm your password"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                {...register("terms", { required: true })}
                className={`h-4 w-4 border-gray-300 rounded focus:ring-blue-500 ${
                  errors.terms ? "border-red-500" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-700 dark:text-gray-300"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  terms and conditions
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">
                You must accept the terms and conditions
              </p>
            )}

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  href="/auth/signin"
                  className="text-blue-600 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 hidden md:block">
          <Image
            src="https://i.ibb.co/9GYXdZm/julentto-photography-CIuak-YIjadc-unsplash.jpg"
            height={300} // Decreased height
            width={500}
            alt="Sign In Illustration"
            className="object-cover w-full h-full shadow-md"
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
