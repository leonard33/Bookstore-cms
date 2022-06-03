import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="book-form">
      <div className="form-title">ADD NEW BOOK</div>
      <div className="form">
        <input type="text" placeholder="BOOK TITLE" />
        <input type="text" placeholder="AUTHOR" />
        <button className="btn-submit" type="submit">
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default Form;
