export default function Movies({ movies }) {
  console.log(movies);
  return (
    <div className="grid grid-rows-6 grid-flow-col">
      {movies.map((movie) => (
        <div key={movie.id} className="">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}
