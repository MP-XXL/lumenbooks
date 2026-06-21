"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { books } from "@/lib/data";

export async function createBook(
  formData: FormData
) {
  const cookieStore =
    await cookies();

  const sellerEmail =
    cookieStore.get(
      "sellerEmail"
    )?.value;

  const title =
    formData.get("title") as string;

  const author =
    formData.get("author") as string;


    books.push({
  id: crypto.randomUUID(),

  sellerEmail: sellerEmail!,

  slug: title
    .toLowerCase()
    .replaceAll(" ", "-"),

  title,

  author,

  isbn: crypto.randomUUID(),

  category: "Business",

  price: 20,

  description: "",

  coverImageUrl:
    "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",

  createdAt:
    new Date().toISOString(),

  rating: 0,

  ratingsCount: 0,

  stock: 10,

  pages: 200,

  publisher:
    "Lumen Publishing",

  language: "English",
});

  revalidatePath(
    "/components/books"
  );
}