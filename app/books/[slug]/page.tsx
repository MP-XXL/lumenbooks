import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchBooks, getBookBySlug } from "@/lib/data";
import RecommendedBooks from "@/app/books/[slug]/RecomendedBooks";





export const revalidate = 3600;

export async function generateStaticParams() {
    const books = await fetchBooks();

    return books.map((book) => ({
        slug: book.slug,
    }));
}

export async function generateMetadata({params}: {params: Promise<{ slug: string }>;}) { 
    const { slug } = await params;

    const book = await getBookBySlug(slug);

    if (!book) {
        notFound()
      
    }

    return {
        title: book.title,
        description: book.description,

        openGraph: {
            title: book.title,
            description: book.description,
            images: [book.coverImageUrl],
        },
    };
}

function RecommendationSkeleton() {
    return (
        <div className="mt-8 space-y-3">
            <div className="h-6 w-48 bg-gray-300 animate-pulse rounded" />
            <div className="h-6 w-40 bg-gray-300 animate-pulse rounded" />
            <div className="h-6 w-56 bg-gray-300 animate-pulse rounded" />
        </div>
    );
}

async function BookPage({ params, }: { params: Promise<{ slug: string }>; }) {
    const { slug } = await params;

    const book = await getBookBySlug(slug);

    if (!book) {
        notFound();
    }

    return (
        <main className="w-full mx-auto p-8 bg-[#0a0a0a] text-white">
            <Link
                href="/books"
                className="inline-flex items-center gap-2 mb-8 text-white hover:text-amber-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" fill="#ffffff" viewBox="0 0 256 256"><path d="M208,68H132V32a12,12,0,0,0-20.49-8.48l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h76a20,20,0,0,0,20-20V88A20,20,0,0,0,208,68Zm-4,96H120a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h84Z"></path></svg>Back to Books
            </Link>
            <div className="grid md:grid-cols-2 gap-10">
                <Image
                    src={book.coverImageUrl}
                    alt={book.title}
                    width={400}
                    height={600}
                    className="rounded-lg shadow-sm shadow-amber-50"
                />

                <div>
                    <h1 className="text-4xl font-bold">{book.title}</h1>

                    <p className="mt-3 text-lg">{book.author}</p>

                    <p className="mt-6">{book.description}</p>

                    <p className="mt-6 text-2xl font-bold">${book.price}</p>
                </div>
            </div>

            <Suspense fallback={<RecommendationSkeleton />}>
                <RecommendedBooks />
            </Suspense>
        </main>
    );
}
export default BookPage
