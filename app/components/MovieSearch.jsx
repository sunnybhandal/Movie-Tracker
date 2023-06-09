export default function MovieSearch() {
  return (
    <div>
      <input
        className="border rounded w-[16rem] sm:w-[14rem] md:w-[16rem] lg:w-[20rem] py-1 px-3 text-gray-700 leading-tight focus:outline-none"
        type="search"
        name="search"
        placeholder="Search for a movie..."
        id="movieSearch_field"
      />
    </div>
  );
}
