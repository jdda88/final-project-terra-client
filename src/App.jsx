import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PlanList from "./pages/PlanList";
import PlanDetails from "./pages/PlanDetails";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Error from "./pages/Error";
import React, { useState } from "react";
import CreatePlanPage from "./pages/CreatePlanPage";
import EditPlanForm from "./components/EditPlanForm";

function App() {
  
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plan" element={<PlanList />} />
        <Route path="/plan/:planId" element={<PlanDetails />} />

        <Route path="/create" element={<CreatePlanPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/edit" element={<EditPlanPage/>} /> */}
        {/* <Route path="/profile" element={<ProfilePage/>} /> */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
