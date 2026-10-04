import IBook from "@/app/Types/IBook";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookListStyle = ({ book }: { book: IBook }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    category,
    publisher,
    totalPages,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-2xl bg-white shadow-sm mb-4">
      {/* Book Image Wrapper */}
      <div className="bg-gray-100 flex items-center justify-center p-8 rounded-2xl md:w-[230px] w-full shrink-0">
        <Image
          src={image}
          alt={bookName}
          width={130}
          height={180}
          className="object-contain h-[170px] w-auto drop-shadow-md"
        />
      </div>

      {/* Book Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{bookName}</h2>
          <p className="text-gray-600 font-medium mb-4">By : {author}</p>

          {/* Tags & Year */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
            <span className="font-bold text-gray-800">Tag</span>
            <div className="flex flex-wrap gap-2">
              {tags && tags.length > 0 ? (
                tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium px-4 py-1.5"
                  >
                    #{tag}
                  </span>
                ))
              ) : (
                <span className="rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium px-4 py-1.5">
                  #Young Adult
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-gray-600 ml-0 md:ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Year of Publishing: {yearOfPublishing}</span>
            </div>
          </div>

          {/* Publisher & Pages */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Publisher: {publisher}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Page {totalPages}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-3"></div>

        {/* Badges & Button */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[#328EFF26] text-[#328EFF] px-5 py-2 rounded-full text-sm font-medium">
            Category: {category}
          </span>
          <span className="bg-[#FFAC3326] text-[#FFAC33] px-5 py-2 rounded-full text-sm font-medium">
            Rating: {rating}
          </span>
          <Link href={`/books/${bookId}`}>
            <button className="bg-[#23BE0A] hover:bg-[#1fa109] text-white px-5 py-2 rounded-full font-medium text-sm transition-all cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookListStyle;