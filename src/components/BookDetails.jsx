import React, { useState } from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const BookDetails = () => {
  const bookData = useLoaderData();
  console.log(bookData);
  const { image, title, desc, authors, publisher, year, rating, url, price } = bookData;

  const [fold, setFold] = useState(true);

//   to handle to go to back page
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1)
  }


  //   loading spinner part
  const navigation = useNavigation();
  console.log(navigation.state);

  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="my-container">
      {/* Container Box */}
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={image}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>

        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge">Brand new</p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {title}
          </h5>
          <p className=" text-gray-900">Authors: {authors.substring(0, 50)}</p>
          <p className=" text-gray-900">Publisher: {publisher}</p>
          <p className=" text-gray-900">Year: {year}</p>
          <p className="mb-5 text-gray-900">Rating: {rating}</p>

          {/* Read more & less button funcionality */}
          {fold ? (
            <>
              <p className=" text-gray-500">{desc.substring(0, 100)}.....</p>
              <span
                className="cursor-pointer text-blue-600 "
                onClick={() => setFold(!fold)} >
                Read More
              </span>
            </>
          ) : (
            <>
              <p className=" text-gray-900">{desc}</p>
              <span
                className="cursor-pointer text-blue-600 "
                onClick={() => setFold(!fold)} >
                Read Less
              </span>
            </>
          )}

          {/* Buy now part */}
          <div className="flex gap-5 mt-8 items-center">
            <a href={url} target="_blank" className="btn">
              Buy Now
            </a>
            <p className="items-center font-extrabold text-gray-600 ">
              Price: {price}
            </p>
          </div>
        </div>
      </div>

      {/* back to previous page */}
      <div className="text-center mt-4">
        <button className='btn' onClick={handleNavigate}>Back to All Books</button>
      </div>
    </div>
  );
};

export default BookDetails;
