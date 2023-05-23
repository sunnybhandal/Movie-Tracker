import React from "react";

export default function Modal({ api_img, movie, onClose }) {
  return (
    <div className="absolute bg-black w-80 h-60">
      <div className=" ">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img className="w-full h-2/3" src={api_img + movie.poster_path} />
        <h2 className="text-center mb-2">{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
