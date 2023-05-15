import Link from "next/link";

export default function NavBar({ page, setPage }) {
  return (
    <div>
      <div className="flex space-x-10">
        {page === "yourList" ? (
          <Link href="/" className="text-green-500 cursor-pointer">
            Your List
          </Link>
        ) : (
          <Link
            onClick={() => setPage("yourList")}
            href="/"
            className="hover:text-green-500 cursor-pointer"
          >
            Your List
          </Link>
        )}
        {page === "popular" ? (
          <Link href="/popular" className="text-green-500 cursor-pointer">
            Popular
          </Link>
        ) : (
          <Link
            onClick={() => setPage("popular")}
            href="/popular"
            className="hover:text-green-500 cursor-pointer"
          >
            Popular
          </Link>
        )}
        {page === "mostRated" ? (
          <Link href="/mostrated" className="text-green-500 cursor-pointer">
            Most Rated
          </Link>
        ) : (
          <Link
            onClick={() => setPage("mostRated")}
            href="/mostrated"
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
          <Link
            onClick={() => setPage("top100")}
            href="/top100"
            className="hover:text-green-500 cursor-pointer"
          >
            Top 100
          </Link>
        )}
        {page === "a-z" ? (
          <Link href="/az" className="text-green-500 cursor-pointer">
            A - Z
          </Link>
        ) : (
          <Link
            onClick={() => setPage("a-z")}
            href="/az"
            className="hover:text-green-500 cursor-pointer"
          >
            A - Z
          </Link>
        )}
      </div>
    </div>
  );
}
