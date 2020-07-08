import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    // <header role="banner">
    <div>
      <img
        id="logo-main"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
        width="200"
        alt="Logo Thing main logo"
      />
      <nav id="navbar-primary" className="navbar navbar-default">
        <div className="container-fluid">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-primary-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbar-primary-collapse"
          >
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="#">Link</Link>
              </li>
              <li>
                <Link to="#">Link</Link>
              </li>
              <li>
                <Link to="#">Link</Link>
              </li>
              <li>
                <Link to="#">Link</Link>
              </li>
              <li>
                <Link to="#">Link</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
