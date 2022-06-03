import React from "react";
import { FaUserAlt } from "react-icons/fa";
import "./Nav.css";
import booklibrary from "../assets/booklibrary.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const favicon = { color: "blue", size: "50px" };
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <img src={booklibrary} />
        </div>
        <ul className="menu-list">
          <Link className="lang" to="/">
            <li className="logo-name">Bookstore CMS</li>
          </Link>
          <Link className="lang" to="bookstore">
            <li>Books</li>
          </Link>
          <Link className="lang" to="bookstore">
            <li>CATEGORIES</li>
          </Link>
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
