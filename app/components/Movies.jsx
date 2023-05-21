const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function Movies({ movies }) {
  return (
    <div className="grid grid-rows-4 grid-flow-col pt-4 justify-between ">
      {movies.map((movie) => (
        <div id={movie.id} className="flex flex-col pb-4">
          <div
            key={movie.id}
            className="relative cursor-pointer border-2 border-white h-80 w-60 rounded-md"
          >
            <span className="absolute left-0 top-0">Add</span>
            <img className="h-full w-full" src={API_IMG + movie.poster_path} />
          </div>
        </div>
      ))}
    </div>
  );
}
