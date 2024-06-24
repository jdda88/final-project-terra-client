import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth.context.jsx";
import { PlanProvider } from "./context/plan.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <PlanProvider>
      <App />
      </PlanProvider>
    </AuthProvider>
  </BrowserRouter>
);
