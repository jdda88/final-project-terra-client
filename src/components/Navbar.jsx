import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import SearchBar from "./Searcbar";

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
          <ul className="text-center flex flex-row space-x-16 justify-evenly ">
            <Link to="/plan">
              <li>
                <p className="mt-2">Destinations</p>
              </li>
            </Link>
            <div>
            <SearchBar /></div>
          </ul>
        </div>
        {user ? (
          <div className="flex flex-row space-x-4 items-center">
            <button
              onClick={logout}
              className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
              type="button"
            >
              Log out
            </button>
            <Link to="/create">
              <button
                // onClick={logout}
                className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
                type="button"
              >
                Create post
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-row space-x-4 items-center">
            <Link to="/signup">
              <button
                className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
                type="button"
              >
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button
                className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl"
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
