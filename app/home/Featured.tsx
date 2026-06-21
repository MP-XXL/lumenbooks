import React from 'react'
import Image from "next/image"
import narnia from "@/public/narnia.jpg"
import { books, fetchBooks } from "@/lib/data";

async function Featured() {

      const books = await fetchBooks();
      const featuredBooks = books.slice(0, 6)

    return (
        <div className="bg-[#1E1E1E] p-10">
            <h2 className="font-bold text-3xl border-b-5 pb-1 w-fit border-b-white text-white">Featured</h2>
            
                
            <div id="featured_grid" className="flex gap-2.5 overflow-x-auto my-10 p-5" >
                {featuredBooks.map(book =>{
                return <div className="flex flex-col gap-2 items-center text-center w-44 " key={book.id}>
                    <Image className="w-28 rounded-md"
                        alt={book.title}
                        src={book.coverImageUrl}
                        placeholder="blur"
                        blurDataURL="..."
                        quality={100}
                        width={112}
                        height={150}
                    />
                    <p className="text-white text-wrap" >{book.title}</p>
                </div>
                })}

            </div>
            
        </div>
    )
}

export default Featured