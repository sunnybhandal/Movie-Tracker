import Link from "next/link";

export default function NavBar({ page }) {
  return (
    <div>
      <div className="flex space-x-2 sm:space-x-10 justify-between sm:justify-start pt-6 pb-4 text-md sm:text-lg 2xl:text-xl">
        {page === "popular" ? (
          <Link href="/" className="text-green-500 cursor-pointer">
            Popular
          </Link>
        ) : (
          <Link href="/" className="hover:text-green-500 cursor-pointer">
            Popular
          </Link>
        )}
        {page === "mostRated" ? (
          <Link href="/mostRated" className="text-green-500 cursor-pointer">
            Most Rated
          </Link>
        ) : (
          <Link
            href="/mostRated"
            className="hover:text-green-500 cursor-pointer"
          >
            Most Rated
          </Link>
        )}
        {page === "top100" ? (
          <Link href="/top100" className="text-green-500 cursor-pointer">
            Top 100
          </Link>
        ) : (
          <Link href="/top100" className="hover:text-green-500 cursor-pointer">
            Top 100
          </Link>
        )}
        {page === "az" ? (
          <Link href="/az" className="text-green-500 cursor-pointer">
            A - Z
          </Link>
        ) : (
          <Link href="/az" className="hover:text-green-500 cursor-pointer">
            A - Z
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
