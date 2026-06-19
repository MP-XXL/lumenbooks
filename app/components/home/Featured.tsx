"use client"
import React from 'react'
import Image from "next/image"
import narnia from "@/public/narnia.jpg"

function Featured() {
    return (
        <div className="bg-[#1E1E1E] p-10">
            <h2 className="font-bold text-3xl border-b-5 pb-1 w-fit border-b-white text-white">Featured</h2>
            <div id="featured_grid" className="flex gap-20 overflow-x-auto my-10 p-5">
                <div className="flex flex-col items-center">
                    <Image className="w-28 rounded-md"
                        alt="Narnia"
                        src={narnia}
                        placeholder="blur"
                        quality={100}
                    />
                    <p className="text-white">Narnia</p>
                </div>

            </div>
        </div>
    )
}

export default Featured