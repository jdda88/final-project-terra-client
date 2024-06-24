<<<<<<< HEAD

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
// import PlanList from './pages/PlanList'
import PlanDetails from './pages/PlanDetails'
import About from './pages/About'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Error from './pages/Error'
import React from 'react';
import { useState } from 'react'
import { PlanContext } from './context/plan.context';
import TerraHomeCard from './components/TerraHomeCard';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

=======
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
>>>>>>> 200c9acf8ccd86d2c68f09a5f0c0f13eb79e4b7e

function App() {
  return (
    <div>
      <Navbar />
      <TerraHomeCard />
      <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Homepage/>} />
      {/* <Route path="/destinations" element={<PlanList />} /> */}
      <Route path="/destinations/:planId" element={<PlanDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Error />} />
      </Routes>
    <Footer />
=======
        <Route path="/" element={<Homepage />} />
        <Route path="/plan" element={<PlanList />} />
        <Route path="/plan/:planId" element={<PlanDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
>>>>>>> 200c9acf8ccd86d2c68f09a5f0c0f13eb79e4b7e
    </div>
  );
}

export default App;
