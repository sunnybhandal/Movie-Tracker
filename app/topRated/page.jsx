"use client";
import { useState, useEffect } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
const API_KEY = process.env.API_KEY;
import Card from "../components/Card";
import Modal from "../components/Modal";

export default function topRatedPage() {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="sm:grid grid-flow-col auto-cols-auto sm:grid-rows-5 xl:grid-rows-4 2xl:grid-rows-5 pt-4 justify-between ">
      {movies.map((movie) => (
        <div key={movie.id} className="pb-4">
          <Card
            api_img={API_IMG}
            movie={movie}
            handleOpenModal={handleOpenModal}
            // addMovie={addMovie}
          />
        </div>
      ))}
      {showModal && (
        <Modal
          api_img={API_IMG}
          movie={selectedMovie}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
