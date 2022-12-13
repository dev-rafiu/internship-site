import React, { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Header() {
  const { user } = UserAuth();

  return (
    <nav className="nav py-3">
      <div className="section-center">
        <div className="d-flex align-items-center justify-content-between top">
          <h3 className="site-name">internshipy</h3>
          {user && (
            <button>
              <Link to="/account" className="account-link">
                <FaUserCircle />
              </Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Header;
