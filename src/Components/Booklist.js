import React from "react";
import Bookitem from "./Bookitem";

const Booklist = () => {
  return (
    <div className="booklist">
      <Bookitem
        genre="Action"
        booktitle="The Hunger Games"
        author="Suzzane Collins"
        chapter="Chapter 17"
      />
      <Bookitem
        genre="Science Fiction"
        booktitle="Dune"
        author="Frank Herbert"
        chapter="Chapter 3: Lesson learned"
      />
      <Bookitem
        genre="Science Fiction"
        booktitle="Capital in the Twenty First Century"
        author="Frank Herbert"
        chapter="Introduction"
      />
    </div>
  );
};

export default Booklist;
