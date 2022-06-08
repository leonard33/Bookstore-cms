import bookdetail from "../../Components/booksdata";

const CREATE_BOOK = "bookstore-cms/books/CREATE_BOOK";
const REMOVE_BOOK = "bookstore-cms/books/REMOVE_BOOK";

const bookReducer = (state = bookdetail, action) => {
  console.log(bookdetail, "from bookdata");
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((e) => e.id !== action.payload.id)];
    default:
      return state;
  }
};

// action creator
export const createdata = (id, title, author) => ({
  type: CREATE_BOOK,
  payload: {
    id,
    title,
    author,
  },
});

export const deletedata = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export default bookReducer;

/*[
  ...state.slice(0, action.index),
  ...state.slice(action.index + 1, state.length)
]; */
