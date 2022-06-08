import React from "react";
import "./Bookitem.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletedata } from "../redux/books/books";
// import { v4 as uuidv4 } from "uuid";

const Bookitem = ({ title, author, genre, chapter, book }) => {
  const dispatch = useDispatch();

  const deletehandler = () => {
    dispatch(deletedata(book.id));
  };

  return (
    <div className="item-container">
      <div className="book-details">
        <div className="genre">{genre}</div>
        <div className="book-title">{title} </div>
        <div className="author">{author}</div>
        <div className="action">
          <div className="comment">comments</div>
          <div className="remove" onClick={deletehandler}>
            remove
          </div>
          <div className="edit">edit</div>
        </div>
      </div>
      <div className="status">
        <a type="button" className="btn-progress">
          Check status
        </a>
      </div>
      <div className="progress">
        <div className="current-chapter">CURRENT CHAPTER</div>
        <div className="number-chapter">{chapter}</div>
        <a type="button" className="btn-add">
          update progress
        </a>
      </div>
    </div>
  );
};

export default Bookitem;
