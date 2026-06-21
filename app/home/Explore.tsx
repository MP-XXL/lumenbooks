"use client"
import React from 'react'
import Image from "next/image"
import hero from "@/public/hero.jpg"
import { ArrowFatRightIcon } from "@phosphor-icons/react";
import { Ephesis } from "next/font/google";
import { useRouter } from "next/navigation";
const ephesis = Ephesis({
  weight:'400'
})

function Explore() {
    const router = useRouter();
  return (
      <div>
          <div className="text-white flex flex-col gap-5 py-20 px-10 md:flex-row md:items-center justify-center md:gap-40 md:py-41">
              <div className="flex flex-col gap-5">
                  {/* <h1 className={`text-7xl font-bold ${ephesis.className}`}>Welcome to <br /> Lumen Book Store</h1> */}
                  <p className="font-bold text-2xl">
                      With us you can shop online <br /> for all your favourite books!
                  </p>
              </div>

              <div className="space-y-5" >
                  <Image
                      src={hero}
                      alt="image of female sitting"
                      placeholder="blur"
                      blurDataURL="..."
                      className="-z-40 md:w-80 rounded-md" />

                  <button  onClick={() => router.push("/books")}className="text-black p-2.5 bg-white rounded-md font-bold flex items-center gap-1.5 transition active:scale-90">
                      Explore
                      <ArrowFatRightIcon size={30} color="#0a0a0a" weight="bold" className="" />
                  </button>
              </div>

          </div>
      </div>
  )
}

export default Explore