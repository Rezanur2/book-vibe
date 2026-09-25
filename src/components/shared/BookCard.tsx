import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  const { bookId, author, bookName, image, rating } = book;
  // const {author, bookName, category, image, publisher, rating, resolveViewport, tags,  totalPages, yearOfPublishing } = book;
  return (
    <div
      key={bookId}
      className="card bg-white border border-slate-200 rounded-3xl p-5 shadow-sm max-w-sm w-full mx-auto"
    >
      {/* Gray Background Image Container */}
      <div className="relative aspect-square w-full bg-slate-100 rounded-2xl flex items-center justify-center p-6 overflow-hidden">
        <div className="relative w-full h-full max-w-45 transition-transform duration-300 hover:scale-105">
          <Image
            src={image}
            alt={bookName}
            fill
            unoptimized
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-5 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-sm border-none bg-emerald-50 text-emerald-600 font-medium px-3 py-3 rounded-xl text-xs">
            Young Adult
          </span>
          <span className="badge badge-sm border-none bg-emerald-50 text-emerald-600 font-medium px-3 py-3 rounded-xl text-xs">
            Identity
          </span>
        </div>

        {/* Typography Content */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-serif text-slate-900 tracking-tight leading-tight line-clamp-2">
            {bookName}
          </h3>
          <p className="text-sm font-medium text-slate-600">
            By : <span className="text-slate-800">{author}</span>
          </p>
        </div>

        {/* Footer Divider & Specs */}
        <div className="pt-4 border-t border-dashed border-slate-200 flex items-center justify-between text-slate-600 font-medium text-sm">
          <span>{book.category || "Fiction"}</span>

          {/* Rating Row */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-800">
              {book.rating ? Number(rating).toFixed(2) : "5.00"}
            </span>
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499c.153-.433.746-.433.898 0l2.12 6.53a.75.75 0 00.707.53h6.865c.456 0 .646.58.274.83l-5.552 4.032a.75.75 0 00-.273.84l2.12 6.53c.152.432-.345.792-.72.533L12 19.467l-5.517 4.012c-.375.259-.872-.101-.72-.533L7.93 14.72a.75.75 0 00-.273-.84L2.105 9.85c-.372-.25-.182-.83.274-.83h6.865a.75.75 0 00.707-.53l2.12-6.53z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
