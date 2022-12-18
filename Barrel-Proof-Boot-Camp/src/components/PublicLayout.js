import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="mx-auto h-screen max-w-7xl">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
