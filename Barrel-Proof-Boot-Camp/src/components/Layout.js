import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div>
      <Header />

      {/**An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
      <div className="flex flex-row">
        <div className="basis-1/4">
          <SideBar />
        </div>

        <div className="basis-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
