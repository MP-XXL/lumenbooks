import { createBook }
from "../actions";

export default function NewBook() {
  return (
    <form
      action={createBook}
      className="flex flex-col gap-4 p-10"
    >
      <input
        name="title"
        placeholder="Title"
        className="border p-2"
      />

      <input
        name="author"
        placeholder="Author"
        className="border p-2"
      />

      <button
        className="bg-black text-white p-2"
      >
        Add Book
      </button>
    </form>
  );
}