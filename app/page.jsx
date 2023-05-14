"use client";
import Movies from "./components/Movies";
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
    <div>
      <Movies movies={movies} />
    </div>
  );
}
