import React from "react";
const CHECK_STATUS = "bookstore-cms/widgets/CHECK_STATUS";

const initialState = {
  checkstatus: [],
};

const categoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_STATUS":
      return "Under construction";
    default:
      state;
  }
};

export default categoriesReducers;
