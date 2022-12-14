import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = UserAuth();

  return (
    <nav className="navbar">
      <div className="section-center">
        <div className="d-flex align-items-center justify-content-between top">
          <h3 className="site-name">internshipy</h3>
          {/* {user && (
            <button>
              <Link to="/account" className="account-link">
                <FaUserCircle />
              </Link>
            </button>
          )} */}

          <button>
            {user && (
              <Link to="/account" className="account-link">
                <FaUserCircle />
              </Link>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
