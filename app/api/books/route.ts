import { books } from "@/lib/data";

export async function GET() {
  return Response.json(books);
}