import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>
          <Link to="/">BookStore</Link>
        </h1>
        <div className="search_container">
          <input
            type="text"
            className="input_search"
            placeholder="Search by name"
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHeart} color="#413B89" className="font" />
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faShoppingCart}
              color="#413B89"
              className="font"
            />
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} color="#413B89" className="font" />
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
