"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isClient, setIsClient] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [activedTheme, setActivedTheme] = useState("moon");

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => window.innerWidth < 640;
    setSmallScreen(checkScreenSize());

    const handleResize = () => {
      setSmallScreen(checkScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (theme: string) => {
    setActivedTheme(theme);
  };

  if (!isClient) {
    return <div className="w-[80px] h-[40px]"></div>;
  }

  return (
    <>
      {smallScreen ? (
        <div className="flex items-center justify-center w-10 h-10  bg-[#aab9a5] rounded-full">
          {activedTheme === "moon" ? (
            <button
              onClick={() => handleToggle("sun")}
              aria-label="Sun mode"
              className="flex items-center justify-center w-1/2 h-[20px] text-white text-xs cursor-pointer "
            >
              <div className="rounded-full transition text-white">
                <FontAwesomeIcon icon={faSun} className="text-lg" />
              </div>
            </button>
          ) : (
            <button
              onClick={() => handleToggle("moon")}
              aria-label="Sun mode"
              className="flex items-center justify-center w-1/2 h-[20px] text-white text-xs cursor-pointer"
            >
              <div className="rounded-full transition text-white">
                <FontAwesomeIcon icon={faMoon} className="text-lg" />
              </div>
            </button>
          )}
        </div>
      ) : (
        <div className="flex items-center rounded-full bg-[#aab9a5] p-1 w-[80px] h-[40px]">
          <button
            onClick={() => handleToggle("moon")}
            aria-label="Moon mode"
            className="flex items-center justify-center w-1/2 h-[20px] rounded-full text-[#4a4a4a] text-xs cursor-pointer"
          >
            <div
              className={`p-1.5 px-2 rounded-full transition ${
                activedTheme === "moon" ? "bg-[#7ea46d]" : "text-white"
              }`}
            >
              <FontAwesomeIcon icon={faMoon} className="text-lg text-white" />
            </div>
          </button>
          <button
            onClick={() => handleToggle("sun")}
            aria-label="Sun mode"
            className="flex items-center justify-center w-1/2 h-[20px] text-white text-xs cursor-pointer"
          >
            <div
              className={`p-1.5 rounded-full transition ${
                activedTheme === "sun" ? "bg-[#7ea46d]" : "text-white"
              }`}
            >
              <FontAwesomeIcon icon={faSun} className="text-lg" />
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default ThemeToggle;
