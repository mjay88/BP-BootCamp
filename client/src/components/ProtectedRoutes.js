import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext/index";

const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();

  console.log("Check user in Private: ", user);

  if (!user) {
    return <Navigate to="/Landing" />;
  }
  return children;
};

export default ProtectedRoutes;
