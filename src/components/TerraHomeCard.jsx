import React from "react";
import { Link } from "react-router-dom";

function TerraHomeCard() {
    return (
        <div className='relative bg-opacity-70 bg-cover bg-center text-black flex flex-col items-center justify-center'>
         <img
        className="w-[100vw] object-cover mb-0"
        src="https://res.cloudinary.com/dprkq4xne/image/upload/v1719429932/final-project-ironhack/landscape_-homepage_wunat7.jpg"
        alt="Image"
      />
      <div className="absolute text-center mt-10">

      <h1 className="text-6xl font-manrope font-extrabold tracking-wider">
      TERRA
      </h1>
      <p className="text-lg font-montserrat mt-5 mb-6 tracking-wide">see the world</p>
      <Link to="/plan"> 
      <button className="bg-black hover:bg-gray-600 text-white py-2 px-4 rounded mt-8" type="button">
        Enter
        </button>
      </Link>
      </div>
      </div>
    );
};

export default TerraHomeCard;