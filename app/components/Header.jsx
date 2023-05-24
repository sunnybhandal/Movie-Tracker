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
    <div className="flex justify-between items-center pt-4">
      <div onClick={handleHome} className=" cursor-pointer">
        <img
          src="websiteLogo.png"
          alt=""
          className="w-60 rounded-lg object-contain"
        />
      </div>
      {data?.user ? (
        <>
          <div className="flex space-x-4">
            <MovieSearch />
            <h1>{data?.user.name}</h1>
            <span
              className="cursor-pointer hover:text-green-500 "
              href="/"
              onClick={handleSignOut}
            >
              Logout
            </span>
          </div>
        </>
      ) : (
        <div className="flex space-x-4">
          <MovieSearch />
          <Link
            href="/login"
            onClick={goLoginPage}
            className="hover:text-green-500 cursor-pointer"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
