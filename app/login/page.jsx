import React from "react";

export default function LoginPage() {
  const hi = "s";
  return (
    <div className="flex justify-between ">
      <div>
        <h1 className="text-center pb-4 text-xl">Register</h1>
        <form action="/api/register" method="post">
          <div className="flex flex-col space-y-1">
            <label>Email</label>
            <input
              className="text-black rounded-sm"
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
            <label>Password</label>
            <input
              className="text-black rounded-sm"
              name="password"
              type="password"
              placeholder="Enter your password..."
            />
            <button className="bg-green-500 rounded-sm">Submit</button>
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
