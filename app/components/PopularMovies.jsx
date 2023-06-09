"use client";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import Card from "./Card";
import axios from "axios";
import { useSession } from "next-auth/react";
// Need to save movie list on refresh

export default function PopularPage({ movies }) {
  const router = useRouter();
  const [movieList, setMovieList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();
  const { data } = useSession();

  console.log(data, "data");

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
  };

  const removeMovie = (id) => {
    const modifiedList = movieList.filter((prev) => prev !== id);
    console.log(modifiedList, "remove");
    setMovieList(modifiedList);
  };

  const saveList = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/saveList`, { movieList });
      console.log(data, "saveList");

      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const goLoginPage = () => {
    router.push("/login");
  };

  return (
    <div className="sm:grid grid-flow-col auto-cols-auto sm:grid-rows-5 xl:grid-rows-4 2xl:grid-rows-5 pt-4 justify-between ">
      <button onClick={saveList}>Save List</button>
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
