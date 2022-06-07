import React from "react";

const CREATE = "bookstore-cms/widgets/CREATE";
const REMOVE = "bookstore-cms/widgets/REMOVE";

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "REMOVE":
      return {
        ...state.books.filter((book) => book !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
