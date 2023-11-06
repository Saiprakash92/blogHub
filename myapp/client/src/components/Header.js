import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          | BlogHub |
        </Link>

        <div className="hidden md:flex md:space-x-4">
          {isLoggedIn && (
            <>
              <Link to="/" className="text-white">All Blogs</Link>
              <Link to="/myBlogs" className="text-white">My Blogs</Link>
              <Link to="/blogs/add" className="text-white">Create Blogs</Link>
            </>
          )}
        </div>

        <div className="space-x-4 ml-auto">
          {!isLoggedIn && (
            <>
              <Link to="/auth">
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg">Login</button>
              </Link>
              <Link to="/auth">
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg">Register</button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={() => dispatch(authActions.logout())}
              className="bg-white text-gray-700 px-4 py-2 rounded-lg"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
