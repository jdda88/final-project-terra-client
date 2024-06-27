import { useState, useEffect, React } from "react";
import Footer from "../components/Footer";
import TerraHomeCard from "../components/TerraHomeCard";
import Map from "../components/Map";
import MapComponent from "../components/Map";


function Homepage() {

  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-auto">
    <TerraHomeCard />
      <div className="ml-10 mb-56">
      <h1 className="text-3xl text-customGreen font-montserrat font-extrabold mb-4 mt-20 ">Who We Are</h1>
      <p className="text-center font-montserrat">
         A little bit about us, the writers and the travelers. 
      </p>
      </div>
      <MapComponent/>
      <Footer />
    </div>
    
  );
}

export default Homepage;
