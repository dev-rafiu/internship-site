import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import Details from "./pages/Details";

import AuthContextProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route
          path="/internships"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/internship/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
