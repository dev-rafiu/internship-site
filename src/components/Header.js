import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  const { user } = UserAuth();

  const navRef = useRef();
  const listRef = useRef();

  useEffect(() => {
    const listHeight = listRef.current.getBoundingClientRect().height;

    if (toggleNav) {
      navRef.current.style.height = `${listHeight}px`;
    } else {
      navRef.current.style.height = `0px`;
    }
  }, [toggleNav]);

  return (
    <header className="header py-3">
      <div className="section-center">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="name">Be-an-intern</h3>

          <button
            onClick={() => setToggleNav(!toggleNav)}
            className="nav-toggle p-0"
            variant="none"
          >
            <FaBars />
          </button>
        </div>

        <nav className="nav" ref={navRef}>
          <ul className="nav-list" ref={listRef}>
            <li>
              <Link to="/" className="cta">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="cta">
                Sign Up
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/account">{user.email}</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
