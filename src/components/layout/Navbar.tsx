import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Discover", href: "/discover" },
    { label: "Movie Release", href: "/movie-release" },
    { label: "Forum", href: "/forum" },
    { label: "About", href: "/about" },
  ];
  return (
    <header className="left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-295 items-center justify-between gap-6 px-6 py-6">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={170}
            height={75}
            className="inline-block mr-2"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-md font-bold text-white/50 bg-transparent hover:text-white transition-colors duration-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <SearchIcon className="text-white/50 hover:text-white cursor-pointer transition-colors duration-300" />
          <Button variant="ghost">Sign Up</Button>
          <Button variant="main">Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
