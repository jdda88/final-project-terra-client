import React from "react";
import { Link } from "react-router-dom";

function TerraHomeCard() {
    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage: "url('../homecardimg')"}}>
        <div className="max-w-sm bg-white border-gray-100 rounded-lg shadow dark:bg-stone-700 dark:border-gray-700">
          <img
          className="rounded-t-lg"
          src="../homecardimg" //post on cloudinary
          alt="homepic"
        />
        <div className="p-4">
          <h1 className=" text-3x1 font-extra-bold block text-center">TERRA</h1>
          <p className="text-black text-medium">See the world</p>
          <Link 
          to="/destinations" className="btn mt-4 px-8 py-2 bg-black block text-center">
              Enter
          </Link>
      </div>
      </div>
      </div>
    );
};

export default TerraHomeCard;