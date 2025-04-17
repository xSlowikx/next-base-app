"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Botón del avatar */}
      <button
        id="avatarButton"
        type="button"
        className="flex items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="userDropdown"
      >
        <Image
          className="w-10 h-10 rounded-full cursor-pointer "
          src="/docenza.png"
          alt="User dropdown"
          width={40}
          height={40}
        />
      </button>

      {/* Menú dropdown */}
      <div
        id="userDropdown"
        className={`absolute right-0 z-10 mt-2 w-44 bg-white rounded-lg shadow-sm divide-y divide-gray-100 ${
          isOpen ? "block" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="avatarButton"
      >
        {/* Información del usuario */}
        <div className="px-4 py-3 text-sm text-gray-900">
          <div>Eliana Navarro</div>
          <div className="font-medium truncate">eliana@gmail.com</div>
        </div>

        {/* Items del menú */}
        <ul className="py-2 text-sm text-gray-700">
          <li role="none">
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-[#aab9a5] hover:text-white"
              role="menuitem"
            >
              Mi perfil
            </Link>
          </li>
          <li role="none">
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-[#aab9a5] hover:text-white"
              role="menuitem"
            >
              Chats
            </Link>
          </li>
        </ul>

        {/* Cerrar sesión */}
        <div role="none">
          <Link
            href="/login"
            className="block px-4 py-2 text-sm text-white bg-red-500 rounded-b-lg hover:bg-red-400"
            role="menuitem"
          >
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
