import { cookies } from "next/headers";
import { books } from "@/lib/data";

export default async function Dashboard() {
  const cookieStore = await cookies();

  const sellerEmail =
    cookieStore.get("sellerEmail")?.value;

  const sellerBooks =
    books.filter(
      book =>
        book.sellerEmail === sellerEmail
    );

  return (
    <main className="bg-[#0a0a0a] text-white h-screen">
      <h1 className="text-2xl font-bold">My Listings</h1>

      {sellerBooks.map(book => (
        <div key={book.id}>
          {book.title}
        </div>
      ))}
    </main>
  );
}