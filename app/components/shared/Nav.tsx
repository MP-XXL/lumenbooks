"use client"
import React from 'react'
import { ListIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";

function Nav() {
  return (
    <div>
          <nav className="abosolute top-0 w-full text-white p-2.5 border-b-0.5 border-b-white flex flex-col gap-2.5  md:flex-row md:items-center md:justify-between">
              <div className="flex justify-between md:gap-60">
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
                      <button className="font-bold">Home</button>
                      <button className="font-bold">Featured</button>
                      <button className="font-bold">Contact</button>
                      <button className="font-bold">FAQ</button>
                      
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