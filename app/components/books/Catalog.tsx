import React from 'react'
import Image from "next/image"
import Link from "next/link";
import { books, fetchBooks } from "@/lib/data";


// export async function fetchBooks() {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return [...books];
// }

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

const sortsCategories = [
    "price",
    "newest"
]

type Props = {
    searchParams: Promise<{
        category?: string;
        sort?: string;
    }>;
};

async function Catalog({ searchParams }: Props) {
    const params = await searchParams;
    console.log(params?.category);

    let books = await fetchBooks();
    if (params?.category) {
        books = books.filter(
            book => book.category === params.category
        );
    }

    if (params.sort === "price") {
        books = books.sort((a, b) => a.price - b.price);
    }

    if (params.sort === "newest") {
        books = books.sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        );
    }



    return (
        <div className="flex flex-col gap-2.5 bg-[#0a0a0a]  py-20">
            <div className="flex gap-10 p-4">
                <Link href="/components/books" className="text-white font-bold  transition active:scale-90">All</Link>

                <form className="relative group">
                    <label className="text-white font-bold cursor-pointer">
                        Categories
                    </label>

                    <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-[#1E1E1E] p-3 rounded-md mt-2 min-w-45 z-50">
                        {categories.map((category) => (
                            <p key={category}>
                                <Link
                                    href={`/components/books?category=${category}`}
                                    className="text-white hover:text-amber-400"
                                >
                                    {category}
                                </Link>
                            </p>
                        ))}
                    </div>
                </form>

                <form className="relative group">
                    <label className="text-white font-bold cursor-pointer">
                        Sort
                    </label>

                    <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-[#1E1E1E] p-3 rounded-md mt-2 min-w-45 z-50">
                        {sortsCategories.map((sortCat) => (
                            <p key={sortCat}>
                                <Link
                                    href={`/components/books?sort=${sortCat}`}
                                    className="text-white hover:text-amber-400"
                                >
                                    {sortCat}
                                </Link>
                            </p>
                        ))}
                    </div>
                </form>
            </div>

            <div className="text-white md:flex justify-between items-center gap-20">
                <p className="font-bold text-3xl p-4 ml-16">All the books <br /> you will ever need!</p>

                <div id="catalog-grid" className="grid grid-cols-2 gap-2.5 p-2.5 bg-[#1E1E1E] rounded-md h-130 overflow-y-auto md:grid-cols-4 md:p-5 md:w-160">{
                    books.map(book => {


                        return <Link href={`/components/books/${book.slug}`} key={book.id}>
                            <div className="flex flex-col items-center gap-2 py-5" key={book.id}>
                                <Image className="w-28 rounded-md shadow-sm shadow-amber-50"
                                    alt={book.title}
                                    src={book.coverImageUrl}
                                    placeholder="blur"
                                    blurDataURL="..." 
                                    quality={100}
                                    width={112}
                                    height={150}
                                />
                                <p className="text-white text-center text-wrap text-xs" >{book.title}</p>
                                <p className="text-white text-wrap text-xs font-bold" >{`$${book.price}`}</p>

                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Catalog