import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext/index";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import AccordionCopy from "./AccordionCopy";
{
  /**we pass the ProtectedRoutes component as the element of <Route> wrapping the protected routes. Since we need to preserve the Layout, I placed that inside of the render for the ProtectedRoutes component.  */
}

const ProtectedRoutes = () => {
  const { user } = useAuth();

  console.log("Check user in Private: ", user);

  if (!user) {
    return <Navigate to="/Landing" />;
  }
  return (
    <div>
      <Header />

      {/**An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route. Essentially we replaced our <Layout/> component with <ProtectedRoutes />, we pass the ProtectedRoutes component as the element of <Route> wrapping the protected routes. Since we need to preserve the layout, we took it from our old <Layout/> component and placed that inside of the render for the ProtectedRoutes component.*/}

      <div className="flex flex-column">
        <div className="basis-1/4">
          <AccordionCopy />
        </div>

        <div className="flex justify-center basis-3/4">
          <div className=""></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoutes;
