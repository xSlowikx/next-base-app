// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faInstagram,
//   faYoutube,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const colOne = [
  { name: "UI design", link: "*" },
  { name: "UX design", link: "*" },
  { name: "Wireframing", link: "*" },
  { name: "Diagramming", link: "*" },
  { name: "Brainstorming", link: "*" },
  { name: "Online whiteboard", link: "*" },
  { name: "Team collaboration", link: "*" },
];

const colTwo = [
  { name: "Design", link: "*" },
  { name: "Prototyping", link: "*" },
  { name: "Development features", link: "*" },
  { name: "Design systems", link: "*" },
  { name: "Collaboration features", link: "*" },
  { name: "Design process", link: "*" },
  { name: "FigJam", link: "*" },
];

const colThree = [
  { name: "Blog", link: "*" },
  { name: "Best practices", link: "*" },
  { name: "Colors", link: "*" },
  { name: "Color wheel", link: "*" },
  { name: "Support", link: "*" },
  { name: "Developers", link: "*" },
  { name: "Resource library", link: "*" },
];

const Footer = () => {
  return (
    <footer className={`bg-[#4f7a44] ${inter.className}`}>
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="flex flex-wrap justify-between text-white text-sm font-normal grow">
          <div className="flex flex-wrap flex-grow justify-between max-w-screen-xl">
            <div className="flex w-full items-center justify-center lg:w-45 ">
              <div className="flex flex-col items-center justify-center w-[90%]">
                <Link
                  href={"/home"}
                  className="flex title-font font-medium items-end relative cursor-pointer"
                >
                  <Image
                    src="/docenza.png"
                    alt="Logo Docenza"
                    width={100}
                    height={100}
                    className="w-25 h-15 md:w-28 md:h-18 mb-2"
                  />
                </Link>
                <div className="flex items-center justify-evenly mb-8 w-[200px]">
                  <Link href={"https://www.linkedin.com"}>
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-lg lg:text-xl bg-white text-[#4f7a44] p-2 rounded-md curser-pointer cursor-pointer hover:bg-[#aab9a5]"
                    />
                  </Link>
                  <Link href={"https://instagram.com"}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-lg bg-white text-[#4f7a44] p-2 rounded-md curser-pointer cursor-pointer hover:bg-[#aab9a5]"
                    />
                  </Link>

                  <Link href={"https://www.youtube.com"}>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-lg bg-white text-[#4f7a44] p-2 rounded-md curser-pointer cursor-pointer hover:bg-[#aab9a5]"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-6 min-w-[140px] ">
              <h3 className="font-bold text-xs mb-2">Use cases</h3>
              <ul className="space-y-1 text-xs font-normal">
                {colOne.map((item) => (
                  <Link
                    href={item.link}
                    key={item.name}
                    className="block hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>

            <div className="mb-6 min-w-[140px]">
              <h3 className="font-bold text-xs mb-2">Explore</h3>
              <ul className="space-y-1 text-xs font-normal">
                {colTwo.map((item) => (
                  <Link
                    href={item.link}
                    key={item.name}
                    className="block hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>

            <div className="mb-6 min-w-[140px]">
              <h3 className="font-bold text-xs mb-2">Resources</h3>
              <ul className="space-y-1 text-xs font-normal">
                {colThree.map((item) => (
                  <Link
                    href={item.link}
                    key={item.name}
                    className="block hover:underline"
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
