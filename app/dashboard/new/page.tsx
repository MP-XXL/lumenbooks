import { createBook } from "../actions";
import Link from "next/link";

export default function NewBook() {
  return (
    <div className="h-screen bg-[#0a0a0a] text-white font-bold p-10">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 mb-8 text-white hover:text-amber-300 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" fill="#ffffff" viewBox="0 0 256 256"><path d="M208,68H132V32a12,12,0,0,0-20.49-8.48l-96,96a12,12,0,0,0,0,17l96,96A12,12,0,0,0,132,224V188h76a20,20,0,0,0,20-20V88A20,20,0,0,0,208,68Zm-4,96H120a12,12,0,0,0-12,12v19L41,128l67-67V80a12,12,0,0,0,12,12h84Z"></path></svg>Back to dashboard
      </Link>
      <div className="flex justify-center items-center ">
        <form action={createBook} className="flex flex-col gap-4 p-10">
          <input
            name="title"
            placeholder="Title"
            className="border p-2 rounded-lg"
          />

          <input
            name="author"
            placeholder="Author"
            className="border p-2 rounded-lg"
          />

          <button className="bg-white text-black p-2 rounded-lg transition active:scale-90">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}