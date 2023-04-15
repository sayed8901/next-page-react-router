import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2">
        <img
          src={book.image}
          alt="Book Cover"
          className="object-cover w-full h-56 md:h-64 xl:h-80"
        />

        <div className="bg-black bg-opacity-75 text-gray-300 px-6 py-4 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded shadow-lg hover:shadow-2xl flex flex-col">
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle.substring(0, 45)}...</p>
          <br />
          <p className="mt-auto">{book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
