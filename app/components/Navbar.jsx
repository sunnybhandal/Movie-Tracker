export default function NavBar() {
  return (
    <div>
      <div className="flex space-x-10">
        <p className="hover:text-green-500 cursor-pointer">Popular</p>
        <p className="hover:text-green-500 cursor-pointer">Most Rated</p>
        <p className="hover:text-green-500 cursor-pointer">Top 100</p>
      </div>
    </div>
  );
}
