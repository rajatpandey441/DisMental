import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        DisMental
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Business
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Advice
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Therapist Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0 loginButton">
            Login
          </button>
          <button className="btn btn-outline-success my-2 my-sm-0">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
