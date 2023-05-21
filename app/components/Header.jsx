"use client";
import React from "react";
import MovieSearch from "./MovieSearch";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header({ setPage }) {
  const router = useRouter();
  const { data } = useSession();

  // console.log('fun')

  const handleHome = () => {
    router.push("/");
    setPage("yourList");
  };

  const handleAccount = () => {
    router.push("/login");
    setPage("");
  };
  return (
    <div className="flex justify-between pt-4">
      <h1 onClick={handleHome} className="text-xl cursor-pointer">
        Movie Tracker
      </h1>
      {data?.user ? (
        <>
          <div className="flex space-x-4">
            <MovieSearch />
            <h1>{data?.user.name}</h1>
            <span className="cursor-pointer" href="/" onClick={() => signOut()}>
              Logout
            </span>
          </div>
        </>
      ) : (
        <div className="flex space-x-4">
          <MovieSearch />
          <Link
            href="/login"
            onClick={handleAccount}
            className="hover:text-green-500 cursor-pointer"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
