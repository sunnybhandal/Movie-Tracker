import React from "react";

export default function Modal({ api_img, movie, onClose }) {
  return (
    <div className="absolute left-1/3 w-[40rem] bg-gray-700 rounded-md">
      <div className=" ">
        <span
          className="absolute m-1 px-2 left-2 text-3xl border-4 border-green-500 hover:border-green-700 rounded-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <div className="flex">
          <img className="w-1/2 h-full" src={api_img + movie.poster_path} />
          <div className="flex flex-col p-4 space-y-4">
            <h2 className="text-center text-xl font-semibold mb-2">
              {movie.title}
            </h2>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Number of Votes: {movie.vote_count}</p>
            <p>Release Date: {movie.release_date} </p>
            <span className="bg-green-500 hover:bg-green-700 w-[6rem] text-center rounded-md font-semibold cursor-pointer">
              Add to List
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
