import Head from "./components/Head";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Head />
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
