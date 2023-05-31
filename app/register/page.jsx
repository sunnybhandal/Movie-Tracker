"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      try {
        await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
      } catch (error) {
        console.log(error);
      }
      setPage("popular");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="w-full max-w-md">
        <h1 className="text-center pb-2 text-xl font-medium">Register</h1>
        <form
          className="bg-white shadow-md rounded px-6 sm:px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email_field"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              type="text"
              name="name"
              placeholder="Enter your name..."
              id="name_field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
          <div className="block text-gray-700 font-bold mt-6">
            Back to{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:text-blue-800 font-bold"
            >
              Login Page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
