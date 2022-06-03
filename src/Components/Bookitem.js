/* eslint-disable react/prop-types */
import React from "react";
import "./Bookitem.css";

const Bookitem = ({ booktitle, author, genre, chapter }) => {
  return (
    <div className="item-container">
      <div className="book-details">
        <div className="genre">{genre}</div>
        <div className="book-title">{booktitle} </div>
        <div className="author">{author}</div>
        <div className="action">
          <div className="comment">comments</div>
          <div className="remove">remove</div>
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
