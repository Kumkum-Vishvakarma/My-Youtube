// import SideBar from "./components/SideBar";
// import { Outlet } from "react-router-dom";

// const Body = () => {
//   return (
//     <div className="flex">
//       <SideBar />
//       <Outlet />
//     </div>
//   );
// };
// export default Body;

import Head from "./components/Head";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      {/* 🔝 Header */}
      <Head />

      {/* 📦 Main layout */}
      <div className="flex">
        {/* 📚 Sidebar */}
        <SideBar />

        {/* 📺 Page Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
