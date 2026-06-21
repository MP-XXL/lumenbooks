"use client";

import { useEffect, useState } from "react";

export default function SearchBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then(setBooks);
  }, []);

  return (
    <p className="text-white">
      {books.length} books loaded
    </p>
  );
}