import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="book-form">
      <div className="form-title">ADD NEW BOOK</div>
      <div className="form">
        <input type="text" placeholder="BOOK TITLE" />
        <input type="text" placeholder="AUTHOR" />
        <a className="btn-submit" input type="button">
          ADD BOOK
        </a>
      </div>
    </div>
  );
};

export default Form;
