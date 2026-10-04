'use client';

import { BookContext } from '@/app/context/BookContext';
import IBook from '@/app/Types/IBook';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButtons = ({ book }: { book: IBook }) => {
  const { read, setRead } = useContext(BookContext);

  const handleReadBook = () => {

    const isExist = read.find((item: IBook) => item.bookId === book.bookId);

    if (isExist) {
      toast.warning('This book is already in your Read list!');
    } else {

      setRead((prevRead: IBook[]) => [...prevRead, book]);
      toast.success('Book added to Read list successfully!');
    }
  };

  return (
    <button
      className="btn btn-outline btn-accent text-[18px]"
      onClick={handleReadBook}
    >
      Read
    </button>
  );
};

export default ReadButtons;