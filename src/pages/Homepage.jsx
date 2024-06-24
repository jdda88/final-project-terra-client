import React from "react";
import Footer from "../components/Footer";
import TerraHomeCard from "../components/TerraHomeCard";

function Homepage() {
  return (
    <div>
    <TerraHomeCard />
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Who We Are</h1>
      <p className="text-center">
        About us.... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, odio?
      </p>
      <Footer />
    </div>
    </div>
  );
}

export default Homepage;
