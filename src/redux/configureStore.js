import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bookReducer from "./books/books";
import categoriesReducers from "./categories/categories";

const rootReducer = combineReducers({
  bookReducer: bookReducer,
  // categoriesReducers: categoriesReducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
