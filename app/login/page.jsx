"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="w-full max-w-xs">
        <h1 className="text-center pb-2 text-xl font-medium">Login</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email_field"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Enter your email..."
              id="email_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password_field"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Enter your password..."
              id="password_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="block text-gray-700 text-sm font-bold mt-4 mb-2">
            Don't have an Account?{" "}
            <Link
              href="/register"
              className="text-blue-500 hover:text-blue-800 text-sm font-bold mb-2"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
