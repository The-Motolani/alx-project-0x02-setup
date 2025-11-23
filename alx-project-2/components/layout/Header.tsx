import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 bg-gray-200 flex gap-6">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </header>
  );
};

export default Header;
