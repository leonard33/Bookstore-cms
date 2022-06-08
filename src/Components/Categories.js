import React from "react";
import "./Categories.css";
import { useDispatch } from "react-redux";
import { checkstatus } from "../redux/categories/categories";

const Categories = () => {
  const dispatch = useDispatch();
  const statushandler = () => {
    dispatch(checkstatus);
  };

  return (
    <div className="prog">
      <button type="button" className="btn-progress onClick={statushandler} ">
        Check status
      </button>
    </div>
  );
};

export default Categories;
