import React from 'react';
import { useState } from 'react'
import './App.css'
import { PlanContext } from './context/plan.context';
import Footer from "./components/Footer";
import TerraHomeCard from './components/TerraHomeCard';
import PlanList from './pages/PlanListPage';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Homepage from "./pages/Homepage";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar /> */}
      <TerraHomeCard />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    <Footer />
</div>
  );
}

export default App;
