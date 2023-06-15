"use client";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
const API_KEY = process.env.API_KEY;
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";

export default function MovieList() {
  const router = useRouter();
  const [userMovies, setUserMovies] = useState([]);
  const [movies, setMovies] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();
  const [loading, setLoading] = useState(true);
  const testData = [713704, 879444, 667538, 758323];
  // get the users list of movie ids from the backend

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const dataArr = [];
        for (const id of testData) {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
          );
          const data = await res.json();
          dataArr.push(data);
        }
        setUserMovies(dataArr);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    getMovieDetails();
  }, []);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="sm:grid grid-flow-col auto-cols-auto sm:grid-rows-5 xl:grid-rows-4 2xl:grid-rows-5 pt-4 justify-between ">
      {userMovies ? (
        <>
          {userMovies.map((movie) => (
            <div key={movie.id} className="pb-4">
              <Card
                api_img={API_IMG}
                movie={movie}
                handleOpenModal={handleOpenModal}
              />
            </div>
          ))}
        </>
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
    </div>
  );
}
