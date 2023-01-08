import React, { Component } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext/index";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  console.log("Check user in Private: ", user);

  //   if (!user) {
  //     return <Navigate to="/Landing" />;
  //   }
  //   return children;
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Navigate to="Landing" />;
      }}
    ></Route>
  );
};

export default ProtectedRoutes;
