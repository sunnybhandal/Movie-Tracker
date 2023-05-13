"use client";
import React from "react";
import MovieSearch from "./MovieSearch";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex justify-between pt-4">
      <h1 className="text-xl cursor-pointer">Movie Tracker</h1>
      <div className="flex space-x-4">
        <MovieSearch />
        <p
          onClick={() => router.push("/login")}
          className="hover:text-green-500 cursor-pointer"
        >
          Account
        </p>
      </div>
    </div>
  );
}
