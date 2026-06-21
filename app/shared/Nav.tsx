"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ListIcon, MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react";

function Nav() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/90 text-white backdrop-blur-md">
      <div className="h-20 px-4 flex items-center justify-between">
        <button onClick={() => router.push("/")} className="cursor-pointer">
          <svg className="w-36 sm:w-44 md:w-52" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 10V48H52" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="24" cy="10" r="5" fill="#FBBF24" />
            <circle cx="24" cy="10" r="10" stroke="#FBBF24" strokeOpacity="0.3"/>
            <text
              x="70"
              y="40"
              fontFamily="Inter, sans-serif"
              fontSize="32"
              fontWeight="800"
              fill="#FFFFFF"
            >
              umen
            </text>
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-10">
          <button className="font-bold hover:text-amber-400 transition" onClick={() => router.push("/")}>
            Home
          </button>

          <button className="font-bold hover:text-amber-400 transition" onClick={() => router.push("/books")}>
            Categories
          </button>

          <Link href="#contact-page" className="font-bold hover:text-amber-400 transition">
            Contact
          </Link>

          <button className="font-bold hover:text-amber-400 transition">
            FAQ
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <button className="font-bold hover:text-amber-400 transition" onClick={() => router.push("/login")}>
            Login
          </button>

          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search books..."
              className=" w-48 rounded-xl bg-white text-black px-3 py-2 outline-none"
            />

            <button>
              <MagnifyingGlassIcon size={28} color="#fff" weight="bold" />
            </button>
          </form>
        </div>



        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <XIcon size={36} weight="bold" />
          ) : (
            <ListIcon size={36} weight="bold" />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="h-20 px-4 flex items-center justify-between border-b border-zinc-800">
          <span className="font-bold text-xl">Menu</span>

          <button onClick={() => setIsOpen(false)}>
            <XIcon size={32} weight="bold" />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-8">
          <button className="text-left text-xl font-semibold" onClick={() => {router.push("/");
            closeMenu();}}>
            Home
          </button>

          <button className="text-left text-xl font-semibold" onClick={() => {router.push("/books"); 
            closeMenu();}}>
            Categories
          </button>

          <Link href="#contact-page" className="text-xl font-semibold" onClick={closeMenu}>
            Contact
          </Link>

          <button className="text-left text-xl font-semibold">FAQ</button>

          <button className="text-left text-xl font-semibold" onClick={() => {router.push("/login");
            closeMenu();}}>
            Login
          </button>

          <form className="flex items-center gap-2 mt-4">
            <input type="text" placeholder="Search books..." className="flex-1 min-w-0 rounded-xl bg-white text-black px-3 py-3 outline-none"/>

            <button>
              <MagnifyingGlassIcon size={28} color="#fff" weight="bold" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;