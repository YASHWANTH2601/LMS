import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Laptops from "./components/Laptops";
import Issues from "./components/Issues";
import ProtectedRoute from "./components/ProtectedRoute";
import Employees from "./components/Employees";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/laptops"
          element={
            <ProtectedRoute>
              <Laptops />
            </ProtectedRoute>
          }
        />
        <Route
          path="/issues"
          element={
            <ProtectedRoute>
              <Issues />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
