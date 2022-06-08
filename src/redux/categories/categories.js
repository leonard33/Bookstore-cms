const CHECK_STATUS = "bookstore-cms/books/CHECK_STATUS";

const initialState = {
  checkstatus: [],
};

const categoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return "Under construction";
    default:
      state;
  }
};

export const checkstatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducers;
