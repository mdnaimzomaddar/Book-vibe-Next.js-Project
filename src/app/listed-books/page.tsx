"use client";
import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import IBook from "../Types/IBook";
import BookListStyle from "../components/BookDetails/BookListStyle";

const ListedPage = () => {
  const context = useContext(BookContext);

  if (!context) {
    return <div className="text-center py-10">Loading context...</div>;
  }

  const { read, wishlist } = context;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center p-4 bg-gray-200 rounded-2xl mt-8">
        <h2 className="text-4xl font-bold">Listed Books</h2>
      </div>

      <div className="tabs tabs-lifted mt-8">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="listed_books_tab"
          role="tab"
          className="tab text-lg font-semibold"
          aria-label={`Read Books (${read.length})`}
          defaultChecked
          suppressHydrationWarning
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-4"
        >
          {read.length > 0 ? (
            read.map((book: IBook) => (
              <BookListStyle key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-[18px] font-medium text-center text-gray-500 py-10">
              No books in Read list yet.
            </p>
          )}
        </div>

        {/* Wishlist Books Tab */}
        <input
          type="radio"
          name="listed_books_tab"
          role="tab"
          className="tab text-lg font-semibold"
          aria-label={`Wishlist (${wishlist.length})`}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-4"
        >
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => (
              <BookListStyle key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-[18px] font-medium text-center text-gray-500 py-10">
              No books in Wishlist yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedPage;