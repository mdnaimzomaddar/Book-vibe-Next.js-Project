'use client';

import React, { createContext, ReactNode, useState, useEffect } from 'react';
import IBook from '../Types/IBook';

export interface BookContextType {
  read: IBook[];
  setRead: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BookContext = createContext<BookContextType | null>(null);

const BookProvider = ({ children }: { children: ReactNode }) => {
  // ১. useState-এর ভেতরেই সরাসরি localStorage থেকে ডাটা নেওয়া (Warning আসবে না)
  const [read, setRead] = useState<IBook[]>(() => {
    if (typeof window !== 'undefined') {
      const savedRead = localStorage.getItem('readList');
      return savedRead ? JSON.parse(savedRead) : [];
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<IBook[]>(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem('wishList');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });

  // ২. read পরিবর্তন হলে সাথে সাথে localStorage আপডেট হবে
  useEffect(() => {
    localStorage.setItem('readList', JSON.stringify(read));
  }, [read]);

  // ৩. wishlist পরিবর্তন হলে সাথে সাথে localStorage আপডেট হবে
  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <BookContext.Provider value={{ read, setRead, wishlist, setWishlist }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;