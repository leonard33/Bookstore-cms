import React from "react";
import { createStore, combineReducers } from "react-redux";
import bookReducer from "./books/books";
import categoriesReducers from "./categories/categories";

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducers,
});

const store = createStore(rootReducer);
