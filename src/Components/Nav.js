import React from "react";
import { FaUserAlt } from "react-icons/fa";
import "./Nav.css";
import booklibrary from "../assets/booklibrary.png";

const Nav = () => {
  const favicon = { color: "blue", size: "50px" };
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <img src={booklibrary} />
        </div>
        <div className="logo-name">Bookstore CMS</div>
        <ul className="menu-list">
          <li>
            <a href="#">BOOKS</a>
          </li>
          <li>
            <a href="#">CATEGORIES</a>
          </li>
        </ul>
      </div>
      <div className="notification">
        <div className="favicon">
          <FaUserAlt style={favicon} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
