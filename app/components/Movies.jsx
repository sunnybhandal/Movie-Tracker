import React, { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function Movies({ movies }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 pt-4">
      {movies.map((movie) => (
        <div key={movie.id} className="relative border-2 border-white h-full">
          <span className="absolute left-0 top-0">Add</span>
          <img className="h-1/2 w-full" src={API_IMG + movie.poster_path} />
          <div className="p-2">
            <h2>{movie.title}</h2>
            <p className="text-sm">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
