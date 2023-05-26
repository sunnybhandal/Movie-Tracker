import React from "react";

export default function Card({ api_img, movie, handleOpenModal, addMovie }) {
  return (
    <div className="relative cursor-pointer border-2 border-white rounded-md">
      <img
        className="h-full sm:h-40 md:h-48 lg:h-72 xl:h-60 w-full sm:w-32 md:w-40 lg:w-56 xl:w-58"
        src={api_img + movie.poster_path}
        onClick={() => handleOpenModal(movie)}
      />
      <div
        onClick={() => addMovie(movie.id)}
        className="justify-center h-20 sm:h-7 flex items-center bg-green-500 hover:bg-green-700 text-2xl sm:text-md font-semibold"
      >
        Add to List
      </div>
    </div>
  );
}
