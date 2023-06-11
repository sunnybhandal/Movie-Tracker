import React from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { AiFillPlusSquare } from "react-icons/ai";

export default function Card({
  api_img,
  movie,
  handleOpenModal,
  addMovie,
  removeMovie,
}) {
  return (
    <div className="relative cursor-pointer border-white">
      <img
        className="h-full rounded-md sm:h-40 md:h-48 lg:h-72 xl:h-80 2xl:h-full w-full sm:w-32 md:w-40 lg:w-56 xl:w-58 2xl:w-80"
        src={api_img + movie.poster_path}
        onClick={() => handleOpenModal(movie)}
      />
      <ImCheckboxChecked
        onClick={() => removeMovie(movie.id)}
        className="absolute top-14 sm:top-4 left-0 text-5xl sm:text-2xl md:text-3xl lg:text-5xl bg-white text-green-500 rounded-md"
      />
      <AiFillPlusSquare
        onClick={() => addMovie(movie.id)}
        className="absolute top-14 sm:top-4 left-0 text-5xl sm:text-2xl md:text-3xl lg:text-5xl bg-gray-500 text-gray-300 "
      />
    </div>
  );
}
