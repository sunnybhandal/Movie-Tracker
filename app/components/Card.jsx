import React from "react";

export default function Card({ api_img, movie, handleOpenModal, addMovie }) {
  return (
    <div className="relative cursor-pointer border-2 border-white rounded-md">
      <img
        className="h-full sm:h-40 md:h-48 lg:h-72 xl:h-80 2xl:h-full w-full sm:w-32 md:w-40 lg:w-56 xl:w-58 2xl:w-80"
        src={api_img + movie.poster_path}
        onClick={() => handleOpenModal(movie)}
      />
      <div
        onClick={() => addMovie(movie.id)}
        className="justify-center h-16 sm:h-7 lg:h-8 2xl:h-14 flex items-center bg-green-500 hover:bg-green-700 text-lg sm:text-sm lg:text-base 2xl:text-lg font-semibold"
      >
        Add to List
      </div>
    </div>
  );
}
