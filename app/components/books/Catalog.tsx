import React from 'react'
import Image from "next/image"
import Link from "next/link";
import narnia from "@/public/narnia.jpg"
import { books } from "@/lib/data";


export async function fetchBooks() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return books;
}

const categories = [
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Business",
  "Self-Help",
  "Adventure",
  "Horror",
  "History",
];

type Props = {
  searchParams: Promise<{
    category?: string;
    sort?: string;
  }>;
};

async function Catalog({searchParams}: Props) {
      const params = await searchParams;
      console.log(params?.category);

     const books = await fetchBooks();
  return (
    <div className="flex flex-col gap-2.5 ">
        <div className="flex gap-10 p-4">
            <Link href="/books?all" className="text-white font-bold hover:border-b-2 hover:border-b-white transition active:scale-90">All</Link>
            <Link href="/books?category" className="text-white font-bold hover:border-b-2 hover:border-b-white transition active:scale-90">Category</Link>
            <Link href="/books?sort"  className="text-white font-bold hover:border-b-2 hover:border-b-white transition active:scale-90">Newest</Link>
        </div>

        <div className="text-white md:flex justify-between items-center gap-20">
            <p className="font-bold text-3xl p-4 ml-16">All the books <br /> you will ever need!</p>

            <div id="catalog-grid" className="grid grid-cols-2 gap-2.5 p-2.5 bg-[#1E1E1E] rounded-md h-130 overflow-y-auto md:grid-cols-4 md:p-5 md:w-160">{
                books.map(book => {
                    return <div className="flex flex-col items-center gap-2 py-5" key={book.id}>
                    <Image className="w-28 rounded-md shadow-sm shadow-amber-50"
                        alt="Narnia"
                        src={narnia}
                        placeholder="blur"
                        quality={100}
                    />
                    <p className="text-white text-wrap text-xs" >{book.title}</p>
                </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Catalog