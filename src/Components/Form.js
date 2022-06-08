import React from "react";
import "./Form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createdata } from "../redux/books/books";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const booktitle = (e) => setTitle(e.target.value);
  const bookauthor = (e) => setAuthor(e.target.value);

  const onsubmithandler = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(createdata(uuidv4(), title, author));
    }
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="book-form">
      <div className="form-title">ADD NEW BOOK</div>
      <div className="form">
        <input
          value={title}
          type="text"
          placeholder="BOOK TITLE"
          onChange={booktitle}
        />
        <input
          value={author}
          type="text"
          placeholder="AUTHOR"
          onChange={bookauthor}
        />
        <button className="btn-submit" type="submit" onClick={onsubmithandler}>
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default Form;
