import React from "react";
import Bookitem from "./Bookitem";
import "./Booklist.css";
import Form from "./Form";

const Booklist = () => {
  const books = [
    {
      id: 1,
      genre: "Action",
      title: "The Hunger Games",
      author: "Suzzane Collins",
      chapter: "Chapter 17",
    },
    {
      id: 2,
      genre: "Science Fiction",
      title: "Dune",
      author: "Frank Herbert",
      chapter: "Chapter 3: Lesson learned",
    },
    {
      id: 3,
      genre: "Economy",
      title: "Chapter 3: Lesson learned",
      author: "Frank Herbert",
      chapter: "Introduction",
    },
  ];
  return (
    <div className="booklist">
      <ul>
        <li>
          {books.map((book) => (
            <Bookitem
              key={book.id}
              genre={book.genre}
              booktitle={book.booktitle}
              author={book.author}
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
