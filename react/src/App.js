import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Page1 from "./pages/Page1";
import Page2Option1 from "./pages/Page2Option1";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/page-1" element={<Page1 />} />
        <Route path="/dashboard/page-2/option-1" element={<Page2Option1 />} />
        <Route path="/dashboard/page-2/option-2" element={<Page2Option1 />} />

      </Routes>
    </Router>
  );
};

export default App;
