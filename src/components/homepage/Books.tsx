import React, { Suspense } from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/books.type';


 const getBooks = async () => {
  const res = await fetch('http://localhost:3000/booksData.json');
  const data = await res.json();
  return data;
}

const Books = async () => {
  const booksData = await getBooks();
  return (
    <section className='container mx-auto py-17.5'>
      <h2 className='text-4xl text-center font-medium pb-10'>
        Books
      </h2>
        <Suspense fallback={<div>Loading.........</div>}>
      <div className='grid grid-cols-3 gap-10'>
        
        {
            booksData.map((book:IBook, ind:number) => {
             return <BookCard key={ind} book={book}></BookCard>
            })
        }
    </div>
        </Suspense>
    </section>
  );
};

export default Books;
