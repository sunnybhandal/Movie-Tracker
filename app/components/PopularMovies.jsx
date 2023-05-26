"use client";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import Card from "./Card";

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
    <div className="sm:grid grid-flow-col auto-cols-auto sm:grid-rows-5 xl:grid-rows-4 pt-4 justify-between ">
      {movies.map((movie) => (
        <div key={movie.id} className="flex flex-col pb-4">
          <Card
            api_img={API_IMG}
            movie={movie}
            handleOpenModal={handleOpenModal}
            addMovie={addMovie}
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
