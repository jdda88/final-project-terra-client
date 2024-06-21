import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full">
      <nav className="flex flex-row items-center justify-between w-full px-16">
        <div className="flex flex-row items-center justify-between">
          <Link to="/">
            <img
              className="w-16 h-16"
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1718996728/final-project-ironhack/terra-bg-transparent_vfsiuz.png"
              alt="brand-logo"
              href="/"
            />
          </Link>
          <span>Terra Travelers</span>
        </div>
        <div className="flex flex-row ml-4">
          <ul className="flex flex-row space-x-4 justify-evenly">
            <Link to="/destinations">
              <li>
                <a href="">Destinations</a>
              </li>
            </Link>
            <Link to="/favorites">
              <li>
                <a href="">Favorites</a>
              </li>
            </Link>
            <Link to="about">
              <li>
                <a href="">About</a>
              </li>
            </Link>
            <li>
              <a href="">Search</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <button type="button">Sign up</button>
          <button type="button">Log in</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
