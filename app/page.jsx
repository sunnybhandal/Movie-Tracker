import MovieSearch from "./components/MovieSearch";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="mx-10">
      <div className="flex justify-between">
        <h1>Movie Tracker</h1>
        <MovieSearch />
      </div>
      <Navbar />
      <Movies />
    </div>
  );
}
