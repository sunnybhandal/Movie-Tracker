import Link from "next/link";
export default function NavBar() {
  return (
    <div>
      <div className="flex space-x-10">
        <Link href="/" className="hover:text-green-500 cursor-pointer">
          Your List
        </Link>
        <Link href="/popular" className="hover:text-green-500 cursor-pointer">
          Popular
        </Link>
        <Link href="/mostrated" className="hover:text-green-500 cursor-pointer">
          Most Rated
        </Link>
        <Link href="/top100" className="hover:text-green-500 cursor-pointer">
          Top 100
        </Link>
        <Link href="/az" className="hover:text-green-500 cursor-pointer">
          A - Z
        </Link>
      </div>
    </div>
  );
}
