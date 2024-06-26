import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="w-full">
      <nav className="flex flex-row items-center justify-between px-16 text-customGreen border-b-2 ">
        <div className="flex flex-row items-center justify-between space-x-2">
          <Link to="/">
            <img
              className="w-16 h-16"
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719238599/final-project-ironhack/terra-travel-solid-white_ilt4jn.png"
              alt="brand-logo"
              href="/"
            />
          </Link>
          <span className="font-bold text-2xl">Terra Travel</span>
        </div>
        <div className="flex flex-row ml-4">
          <ul className="flex flex-row space-x-16 justify-evenly">
            <Link to="/plan">
              <li>
                <p>Destinations</p>
              </li>
            </Link>
            <Link to="/favorites">
              <li>
                <p>Favorites</p>
              </li>
            </Link>
            <Link to="/create">
              <li>
                <p>Create</p>
              </li>
            </Link>
            <li>
              <p>Search</p>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="flex flex-row space-x-4 items-center">
            <button
              onClick={logout}
              className="bg-customGreen text-white rounded w-24 h-9 "
              type="button"
            >
              Log out
            </button>
            <button
              // onClick={logout}
              className="bg-customGreen text-white rounded w-24 h-9"
              type="button"
            >
              Profile
            </button>
          </div>
        ) : (
          <div className="flex flex-row space-x-4 items-center">
            <Link to="/signup">
              <button
                className="bg-customGreen text-white rounded w-24 h-9"
                type="button"
              >
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button
                className="bg-customGreen text-white rounded w-24 h-9"
                type="button"
              >
                Log in
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
