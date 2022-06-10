const CHECK_STATUS = "bookstore-cms/books/CHECK_STATUS";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return "Under construction";
    default:
      return state;
  }
};
// action creator
export const checkstatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;
