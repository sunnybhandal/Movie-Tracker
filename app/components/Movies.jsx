const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function Movies({ movies }) {
  // console.log(movies);

  const limitOverview = (overview) => {
    return overview.trim().split(" ").slice(0, 20).join(" ");
  };

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 pt-4">
      {movies.map((movie) => (
        <div className="flex flex-col items-center text-center">
          <div
            key={movie.id}
            className="relative cursor-pointer border-2 border-white h-80 w-60 rounded-md"
          >
            <span className="absolute left-0 top-0">Add</span>
            <img className="h-full w-full" src={API_IMG + movie.poster_path} />
          </div>
          <div className="pt-2 px-6">
            <h2>{movie.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
