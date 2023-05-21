"use client";
import React from "react";
import MovieSearch from "./MovieSearch";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

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
      <h1>Hi, {data?.user.name}</h1>
      {data?.user ? (
        <>
          <Link href="/login">Login</Link>
          <span className="cursor-pointer" href="/" onClick={() => signOut()}>
            Logout
          </span>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
      <h1 onClick={handleHome} className="text-xl cursor-pointer">
        Movie Tracker
      </h1>
      <div className="flex space-x-4">
        <MovieSearch />
        <p
          onClick={handleAccount}
          className="hover:text-green-500 cursor-pointer"
        >
          Account
        </p>
      </div>
    </div>
  );
}
