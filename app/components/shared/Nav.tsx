"use client"
import React from 'react'
import { ListIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

function Nav() {

    const router = useRouter();
  return (
    <div>
          <nav className="z-50 p-4  bg-black/90 fixed top-0  w-full text-white  flex flex-col gap-1  md:flex-row md:items-center md:justify-between">
              <div className="flex justify-between items-center md:gap-60">
                  <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* <!-- Custom L --> */} 
                      <path
                          d="M24 10V48H52"
                          stroke="#FFFFFF"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />

                      {/* <!-- Light source --> */}
                      <circle cx="24" cy="10" r="5" fill="#FBBF24" />
                      <circle cx="24" cy="10" r="10" stroke="#FBBF24" strokeOpacity="0.3" />

                      {/* <!-- Text --> */}
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
                  <ListIcon className="md:hidden" size={44} color="#ffffff" weight="bold" />

                  <div className="hidden md:flex md:gap-10">
                      <button className="font-bold hover:border-b-2 hover:border-b-white " onClick={() => router.push("/")}>Home</button>
                      <button className="font-bold hover:border-b-2 hover:border-b-white " onClick={() => router.push("/components/books")}>Categories</button>
                      <button className="font-bold hover:border-b-2 hover:border-b-white ">Contact</button>
                      <button className="font-bold hover:border-b-2 hover:border-b-white ">FAQ</button>
                      
                  </div>
              </div>

              <div className="flex justify-center gap-2.5">
                <input className="rounded-xl border-white outline-0 bg-white p-1.5" type="text" name="" id="" />
                <MagnifyingGlassIcon size={35} color="#ffffff" weight="bold" />
              </div>
              
          </nav>
    </div>
  )
}

export default Nav