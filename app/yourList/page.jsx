"use client";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";
import { useRouter } from "next/navigation";

export default function MovieList() {
  const router = useRouter();
  const [userMovies, setUserMovies] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}`);
  //     const data = await res.json();
  //     setUserMovies(data.results);
  //     setLoading(false);
  //   };

  //   fetchMovies();
  // }, []);
  return (
    <>
      {userMovies ? (
        <div className="sm:grid grid-flow-col auto-cols-auto sm:grid-rows-5 xl:grid-rows-4 2xl:grid-rows-5 pt-4 justify-between ">
          {movies.map((movie) => (
            <div key={movie.id} className="pb-4">
              <Card
                api_img={API_IMG}
                movie={movie}
                handleOpenModal={handleOpenModal}
                addMovie={addMovie}
                removeMovie={removeMovie}
                movieList={movieList}
                loggedIn={data}
                goLoginPage={goLoginPage}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-80 flex justify-center items-center">
          <button
            onClick={() => router.push("/")}
            className="bg-green-500 hover:bg-green-700 text-white text-xl font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add some movies to your list bud
          </button>
        </div>
      )}
      {showModal && (
        <Modal
          api_img={API_IMG}
          movie={selectedMovie}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
