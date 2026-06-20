import React from 'react'
import Image from "next/image"
import narnia from "@/public/narnia.jpg"
import { books } from "@/lib/data";

export async function fetchBooks() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return books;
}
   
async function Featured() {

      const books = await fetchBooks();
      const featuredBooks = books.slice(0, 6)

    return (
        <div className="bg-[#1E1E1E] p-10">
            <h2 className="font-bold text-3xl border-b-5 pb-1 w-fit border-b-white text-white">Featured</h2>
            
                
            <div id="featured_grid" className="flex gap-20 overflow-x-auto my-10 p-5" >
                {featuredBooks.map(book =>{
                return <div className="flex flex-col items-center" key={book.id}>
                    <Image className="w-28 rounded-md"
                        alt="Narnia"
                        src={narnia}
                        placeholder="blur"
                        quality={100}
                    />
                    <p className="text-white text-nowrap" >{book.title}</p>
                </div>
                })}

            </div>
            
        </div>
    )
}

export default Featured