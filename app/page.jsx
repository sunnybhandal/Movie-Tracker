"use client";
import PopularMovies from "./components/PopularMovies";
import LoadingPage from "./loading";
import { useState, useEffect } from "react";
const API_KEY = process.env.API_KEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
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
    <div>
      <PopularMovies movies={movies} />
    </div>
  );
}
