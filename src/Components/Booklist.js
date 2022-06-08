import React from "react";
import { useSelector } from "react-redux";
import Bookitem from "./Bookitem";
import "./Booklist.css";
import Form from "./Form";

const Booklist = () => {
  const books = useSelector((state) => state.bookReducer);
  console.log(books, "initial state books");

  return (
    <div className="booklist">
      <ul>
        <li>
          {books.map((book) => (
            <Bookitem
              key={book.id}
              genre={book.genre}
              booktitle={book.title}
              author={book.author}
              book={book}
              chapter={book.chapter}
            />
          ))}
        </li>
      </ul>
      <Form />
    </div>
  );
};

export default Booklist;
