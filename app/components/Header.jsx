"use client";
import React from "react";
import MovieSearch from "./MovieSearch";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header({ setPage }) {
  const router = useRouter();
  const { data } = useSession();

  const handleHome = () => {
    router.push("/");
    setPage("popular");
  };

  const handleSignOut = () => {
    signOut();
    router.push("/");
    setPage("popular");
  };

  const goLoginPage = () => {
    router.push("/login");
    setPage("");
  };
  return (
    <div className="sm:flex justify-between items-center pt-4">
      <div
        onClick={handleHome}
        className="pb-4 sm:pb-0 flex justify-center cursor-pointer"
      >
        <img
          src="websiteLogo.png"
          alt=""
          className="w-80 sm:w-60 rounded-lg object-contain"
        />
      </div>
      {data?.user ? (
        <>
          <div className="flex space-x-4 items-center justify-center">
            <MovieSearch />
            <h1
              className="hover:text-green-500 cursor-pointer"
              href="/"
              onClick={handleSignOut}
            >
              {data?.user.name}
            </h1>
          </div>
        </>
      ) : (
        <div className="flex space-x-4 items-center justify-center">
          <MovieSearch />
          <Link
            href="/login"
            onClick={goLoginPage}
            className="hover:text-green-500 cursor-pointer text-md sm:text-lg 2xl:text-xl"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
