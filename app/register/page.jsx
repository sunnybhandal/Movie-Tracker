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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="name_field">Name</label>
        <input
          type="text"
          id="name_field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email_field">Email</label>

        <input
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
      </form>
    </div>
  );
}
