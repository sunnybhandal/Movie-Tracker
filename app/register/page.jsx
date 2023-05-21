"use client";
import React, { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="flex flex-col">
          <label htmlFor="name_field">Name</label>
          <input
            className="text-black rounded-sm"
            type="text"
            id="name_field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email_field">Email</label>

          <input
            className="text-black rounded-sm"
            placeholder="Email..."
            type="email"
            id="email_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password_field">Password</label>

          <input
            type="password"
            id="password_field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
