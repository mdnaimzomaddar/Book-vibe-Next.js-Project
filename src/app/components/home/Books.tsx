import React from 'react';
import BookCard from './BookCard';

const getBooks = async() =>{
    const respons = await fetch('http://localhost:3000/booksData.json')
    const book = await respons.json()
    return book
}

const Books = async() => {

    const books =await getBooks()

    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-4xl font-bold'>Books</h2>
            </div>
            <div>
                <div className='container mx-auto py-[70px] grid grid-cols-3 gap-4'>
                    {books?.map((book) => <BookCard key={book.bookId} book = {book}></BookCard>)}
                </div>
            </div>
        </div>
    );
};

export default Books;