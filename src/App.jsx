import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlanList from "./pages/PlanList";
import PlanDetails from "./pages/PlanDetails";
import About from "./pages/About";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Error from "./pages/Error";
import React from "react";
import TerraHomeCard from "./components/TerraHomeCard";

function App() {
  return (
    <div>
      <Navbar />
      <TerraHomeCard />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destinations" element={<PlanList />} />
        <Route path="/destinations/:planId" element={<PlanDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
