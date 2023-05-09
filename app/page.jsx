"use client";
import MovieSearch from "./components/MovieSearch";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import LoadingPage from "./loading";
import { useState, useEffect } from "react";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=7aea79b68f5f012f3ce9164418062533";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="mx-10 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-xl cursor-pointer">Movie Tracker</h1>
        <div className="flex space-x-4">
          <MovieSearch />
          <p className="hover:text-green-500 cursor-pointer">Account</p>
        </div>
      </div>
      <Navbar />
      <Movies movies={movies} />
    </div>
  );
}
