'use client';

import { BookContext } from '@/app/context/BookContext';
import IBook from '@/app/Types/IBook';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishLiestButton = ({ book }: { book: IBook }) => {
  // read স্টেটও এখানে ডিকনস্ট্রাক্ট করে আনুন
  const { wishlist, setWishlist, read } = useContext(BookContext);

  const handleWishlistButton = () => {
    // ১. চেক করুন বইটি ইতোমধ্যে Read লিস্টে আছে কি না
    const isAlreadyRead = read?.find((item: IBook) => item.bookId === book.bookId);

    if (isAlreadyRead) {
      toast.error('You have already read this book!');
      return;
    }

    // ২. চেক করুন বইটি ইতোমধ্যে Wishlist-এ আছে কি না
    const isExistInWishlist = wishlist?.find((item: IBook) => item.bookId === book.bookId);

    if (isExistInWishlist) {
      toast.warning('This book is already in your wishlist!');
    } else {
      setWishlist((prev: IBook[]) => [...prev, book]);
      toast.success('Book added to Wishlist successfully!');
    }
  };

  return (
    <button
      className="btn btn-active btn-info text-[18px]"
      onClick={handleWishlistButton}
    >
      Wishlist
    </button>
  );
};

export default WishLiestButton;