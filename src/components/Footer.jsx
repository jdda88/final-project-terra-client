import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MessageCircle } from "react-feather";
import { Linkedin } from "react-feather";
import { GitHub } from "react-feather";
//text colors aren't working

function Footer() {
  return (
    <footer className=" h-24 bottom-0 w-full bg-neutral-50 text-customGreen p-5">
      <div className="footer-container mx-auto flex justify-between items-center">
        {/* left side */}
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-bold text-my-custom-color mb-2">
            TERRA TRAVEL FLLC
          </div>
          <div className="flex space-x-4">
            <a href="https://threads.com" aria-label="Threads">
              <MessageCircle size={18} className="hover:text-gray-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/annafricks/"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className=" hover:text-gray-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/juandavid88/"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="hover:text-gray-500" />
            </a>
            <a
              href="https://github.com/jdda88/final-project-terra-client"
              aria-label="GitHub"
            >
              <GitHub size={18} className="hover:text-gray-500" />
            </a>
          </div>
        </div>
        {/* right side  */}
        <div className="flex flex-col space-y-2">
          <div className="grid grid-cols-3 gap-4">
            {/* top row */}
          <Link to="/" className="hover:underline hover:text-gray-500">
            
              Home
            
          </Link>
          <Link to="/plan" className="hover:underline hover:text-gray-500 -ml-5 mr-9">
            
              Destinations
            
          </Link>
          <Link to="/profile" className="hover:underline hover:text-gray-500">
            
              Profile
            
          </Link>

        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
