import { cookies } from "next/headers";
import { books } from "@/lib/data";
import Link from "next/link";
import Image from "next/image"

export default async function Dashboard() {
  const cookieStore = await cookies();

  const sellerEmail = cookieStore.get("sellerEmail")?.value;

  const sellerBooks = books.filter(book => book.sellerEmail === sellerEmail);

  return (
    <main className="bg-[#0a0a0a] text-white h-screen px-10">
      <div className="flex items-center justify-between mt-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-white hover:text-amber-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" fill="#ffffff" viewBox="0 0 256 256"><path d="M208,68H132V32a12,12,0,0,0-20.49-8.48l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h76a20,20,0,0,0,20-20V88A20,20,0,0,0,208,68Zm-4,96H120a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h84Z"></path></svg>Back to home
        </Link>
        <h1 className="text-2xl font-bold">My Listings</h1>
        <button className="text-black p-2.5 bg-white  hover:text-amber-400 rounded-md font-bold flex items-center gap-1.5 transition active:scale-90">
          <Link href="/dashboard/new">Add new book
          </Link>
        </button>
      </div>

      {sellerBooks.map(book => (
        <div key={book.id} className="flex flex-col items-center gap-2 py-5">
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
      ))}
    </main>
  );
}