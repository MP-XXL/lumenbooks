import React from 'react'
import Link from "next/link";
import { getRecommendedBooks } from "@/lib/data";

async function RecommendedBooks() {
  const books = await getRecommendedBooks();

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">
        Recommended For You
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.slug}`}
            className="border rounded p-3 hover:bg-gray-100 hover:text-black"
          >
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm">{book.author}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default RecommendedBooks
