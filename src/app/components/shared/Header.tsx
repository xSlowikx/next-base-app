import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image src="/logo.png" alt="Logo" width={35} height={50} />
          <span className="ml-3 text-xl">Docenza</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
