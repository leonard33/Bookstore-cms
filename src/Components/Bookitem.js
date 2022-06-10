import React from "react";
import "./Bookitem.css";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Bookitem = ({ booktitle, author, category, chapter, id }) => {
  const dispatch = useDispatch();

  const deletehandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="item-container">
      <div className="book-details">
        <div className="genre">{category}</div>
        <div className="book-title">{booktitle} </div>
        <div className="author">{author}</div>
        <div className="action">
          <div className="comment">comments</div>
          <div className="remove" onClick={deletehandler}>
            remove
          </div>
          <div className="edit">edit</div>
        </div>
      </div>
      <div className="middle-progress">
        <div className="icon-percent">
          <AiOutlineLoading3Quarters size={50} />
        </div>
        <div className="status">
          <div className="number">60%</div>
          <div className="complete">completed</div>
        </div>
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
