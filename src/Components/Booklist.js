import React from "react";
import { useSelector } from "react-redux";
import Bookitem from "./Bookitem";
import { fetchData } from "../redux/books/books";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Booklist.css";
import Form from "./Form";

const Booklist = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchData()), [books.length]);

  return (
    <div className="booklist">
      <ul>
        <li>
          {Object.keys(books).map((book) => (
            <Bookitem
              key={book}
              category={books[book][0].category}
              booktitle={books[book][0].title}
              author={books[book][0].author}
              id={book}
              chapter="chapter 7"
            />
          ))}
        </li>
      </ul>
      <Form />
    </div>
  );
};

export default Booklist;
