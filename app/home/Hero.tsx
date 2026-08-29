"use client"
import React from 'react'
import Image from "next/image"
import  bg  from "@/public/peter-thomas-he4j9YyWFoo-unsplash.jpg"
import { Ephesis } from "next/font/google";

const ephesis = Ephesis({
  weight:'400'
})

function Hero() {
  return (

    <div className="relative w-full h-full">
      <Image className="object-cover  bg-center h-screen w-full "
        alt="Background"
        src={bg}
        placeholder="blur"
        quality={100} 
      />
      <div className="absolute h-screen inset-0 bg-black/60"></div>

      <div className="absolute left-6 top-50 text-white">
        <h1 className={`text-8xl font-extrabold ${ephesis.className}`}>Welcome to <br /> Lumen Book Store</h1>
      </div>
    </div>
  )
}

export default Hero