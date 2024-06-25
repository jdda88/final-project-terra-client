import React from "react";
import { Link } from "react-router-dom";

function TerraHomeCard() {
    return (
        <div className='relative bg-opacity-70 bg-cover bg-center h-96 text-black flex flex-col items-center justify-center'>
      <h1 className="text-4xl font-bold">
      TERRA
      </h1>
      <p className="text-lg mb-6">the world at your fingertips</p>
      <Link to="/plan"> 
      <button className="bg-black hover:bg-gray-600 text-white py-2 px-4 rounded-full" type="button">
        Enter
        </button>
      </Link>
      </div>
    );
}

export default TerraHomeCard;