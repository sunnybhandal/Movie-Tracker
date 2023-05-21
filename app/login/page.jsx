"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="flex justify-between ">
      <div>
        <h1 className="text-center pb-4 text-xl">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email_field">Email</label>
            <input
              className="text-black rounded-sm"
              type="email"
              name="email"
              placeholder="Enter your email..."
              id="email_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password_field">Password</label>
            <input
              className="text-black rounded-sm"
              name="password"
              type="password"
              placeholder="Enter your password..."
              id="password_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-green-500 rounded-sm">Submit</button>
            <Link href="/register">Register </Link>
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-center">Login</h1>
        <form>
          <label>Email</label>
          <input
            className="text-black"
            name="email"
            type="email"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="text-black"
            name="password"
            type="password"
            placeholder="Enter your password..."
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
