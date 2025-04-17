import Image from "next/image";
import ThemeToggle from "../header/ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F6EFE5] body-font">
      <nav className="container flex flex-wrap p-4 flex-row justify-between items-center mx-auto">
        <Link
          href={"/home"}
          className="flex title-font font-medium items-end relative "
        >
          <Image
            src="/docenza.png"
            alt="Logo Docenza"
            width={100}
            height={100}
            className="w-25 h-15 md:w-28 md:h-18"
          />
        </Link>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
