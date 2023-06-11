import React from "react";
import "./globals.css";

export default function LoadingPage() {
  return (
    <div className="relative h-100vh w-full flex justify-center items-center">
      <div className="loader absolute top-36 sm:top-56"></div>
    </div>
  );
}
