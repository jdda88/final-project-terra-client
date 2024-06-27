import { useState, useEffect, React } from "react";
import Footer from "../components/Footer";
import TerraHomeCard from "../components/TerraHomeCard";

import { Link } from "react-router-dom";

import Map from "../components/Map";
import MapComponent from "../components/Map";



function Homepage() {

  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-auto">
      <TerraHomeCard />
      <div className="flex flex-col ml-10 items-center justify-center w-1/3 mb-5">
        <h1 className="text-3xl text-customGreen font-montserrat font-extrabold mb-4 mt-20 ">
          Who We Are
        </h1>
        <p className="text-center font-montserrat">
          Imagine a group of passionate travelers, each with their own unique
          way of exploring the world. From bustling Asian markets to remote
          European villages, they capture hidden gems and share their
          experiences online. One member dives deep into local cuisines across
          Latin America and Africa, uncovering street food delights and hidden
          eateries. Another focuses on negotiating prices in markets and finding
          the best spots for sunrise photography. Together, they offer tips on
          cultural respect, learning local customs, and embracing spontaneous
          adventures, making every journey a rich tapestry of discovery and
          shared wisdom for fellow travelers.
        </p>
        <Link to="/plan">
          <button className="bg-customGreen text-white rounded w-40 h-16 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl mt-5">
            Find your next adventure
          </button>
        </Link>
      </div>
      <MapComponent/>
      <Footer />
    </div>
  );
}

export default Homepage;
