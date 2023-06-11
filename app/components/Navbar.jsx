import Link from "next/link";

export default function NavBar({ page }) {
  // Change to icons on small screens
  return (
    <div>
      <div className="flex space-x-2 sm:space-x-10 justify-between sm:justify-start pt-6 pb-4 text-sm sm:text-lg 2xl:text-xl">
        {page === "popular" ? (
          <Link href="/" className="text-green-500 cursor-pointer">
            Popular
          </Link>
        ) : (
          <Link href="/" className="hover:text-green-500 cursor-pointer">
            Popular
          </Link>
        )}
        {page === "topRated" ? (
          <Link href="/topRated" className="text-green-500 cursor-pointer">
            Top Rated
          </Link>
        ) : (
          <Link
            href="/topRated"
            className="hover:text-green-500 cursor-pointer"
          >
            Top Rated
          </Link>
        )}
        {page === "upcoming" ? (
          <Link href="/upcoming" className="text-green-500 cursor-pointer">
            Upcoming
          </Link>
        ) : (
          <Link
            href="/upcoming"
            className="hover:text-green-500 cursor-pointer"
          >
            Upcoming
          </Link>
        )}
        {page === "nowPlaying" ? (
          <Link href="/nowPlaying" className="text-green-500 cursor-pointer">
            Now Playing
          </Link>
        ) : (
          <Link
            href="/nowPlaying"
            className="hover:text-green-500 cursor-pointer"
          >
            Now Playing
          </Link>
        )}
        {page === "yourList" ? (
          <Link href="/yourList" className="text-green-500 cursor-pointer">
            Your List
          </Link>
        ) : (
          <Link
            href="/yourList"
            className="hover:text-green-500 cursor-pointer"
          >
            Your List
          </Link>
        )}
      </div>
    </div>
  );
}
