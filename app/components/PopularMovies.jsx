"use client";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

export default function PopularPage({ movies }) {
  const router = useRouter();
  const [movieList, setMovieList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  console.log(movies);
  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const addMovie = (id) => {
    if (movieList.includes(id)) return;
    setMovieList((prev) => [...prev, id]);
    console.log(movieList, "add movie");
  };

  return (
    <div className="grid grid-rows-4 grid-flow-col pt-4 justify-between ">
      {movies.map((movie) => (
        <div key={movie.id} className="flex flex-col pb-4">
          <div className="relative cursor-pointer border-2 border-white w-60 rounded-md">
            <img
              className="h-72 w-72"
              src={API_IMG + movie.poster_path}
              onClick={() => handleOpenModal(movie)}
            />
            <div
              onClick={() => addMovie(movie.id)}
              className="justify-center h-8 flex items-center bg-green-500 hover:bg-green-700"
            >
              Add to List
            </div>
          </div>
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
