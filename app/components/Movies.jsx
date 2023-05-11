const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function Movies({ movies }) {
  // console.log(movies);

  const limitOverview = (overview) => {
    // Remove leading and trailing whitespaces
    var str = overview.trim().split(" ").slice(0, 25);

    // Join the words back into a string
    var result = str.join(" ");

    return result;
  };

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4 pt-4">
      {movies.map((movie) => (
        <div key={movie.id} className="relative border-2 border-white h-full">
          <span className="absolute left-0 top-0">Add</span>
          <img className=" w-full" src={API_IMG + movie.poster_path} />
          <div className="p-2">
            <h2>{movie.title}</h2>
            <p className="text-sm">{limitOverview(movie.overview)}...</p>
            <span className="absolute cursor-pointer bottom-0 pb-2">
              View More -
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
