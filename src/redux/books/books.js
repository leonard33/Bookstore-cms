const ADD_BOOK = "bookstore-cms/books/ADD_BOOK";
const REMOVE_BOOK = "bookstore-cms/books/REMOVE_BOOK";
const SHOW_BOOK = "bookstore-cms/books/SHOW_BOOK";

const URL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KtUn20KQ4sDDZBtVu9u2/books";

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_BOOK:
      return action.data || state;
    case ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

// Action creators
//add data to api
export const craetedata = (data) => {
  return {
    type: ADD_BOOK,
    payload: {
      item_id: data.item_id,
      title: data.title,
      author: data.author,
      category: data.category,
    },
  };
};

// delete from api direct
export const removeBook = (id) => {
  return (dispatch) => {
    fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KtUn20KQ4sDDZBtVu9u2/books/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_id: id,
        }),
      }
    ).then(() => dispatch(fetchData()));
  };
};

//show book
export const showBook = (data) => ({
  type: SHOW_BOOK,
  data,
});
// POST DATA TO API

export function createdata(item_id, title, author, category) {
  return (dispatch) => {
    //return function
    fetch(
      "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KtUn20KQ4sDDZBtVu9u2/books",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_id,
          title,
          author,
          category,
        }),
      }
    );
  };
}

//fetch data from api
export const fetchData = () => (dispatch) => {
  // Fetch (GET), then dispatch showBook action
  fetch(
    "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KtUn20KQ4sDDZBtVu9u2/books"
  )
    .then((response) => response.json())
    .then((json) => dispatch(showBook(json)));
};

export default bookReducer;
