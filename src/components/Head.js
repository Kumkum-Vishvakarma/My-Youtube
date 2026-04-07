import { LOGO, MENU_ICON, SEARCH_ICON, USER_ICON } from "../utils/constants";

const Head = () => {
  return (
    <div className=" grid grid-flow-col p-2 m-2 items-center">
      <div className="flex gap-4 col-span-1">
        <div className="">
          <img className="cursor-pointer h-6" alt="menu" src={MENU_ICON} />
        </div>
        <div className="relative group">
          <img className="cursor-pointer h-6 " alt="logo" src={LOGO} />
          <span className="absolute hidden group-hover:block whitespace-nowrap bg-gray-700 text-white text-xs px-2 py-1 top-8 left-1/2 -translate-x-1/2">
            YouTube Home
          </span>
        </div>
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 px-4 py-1 w-1/2 rounded-l-full"
        />

        <div className="relative group">
          <button className="h-8 w-10  border border-gray-400 rounded-r-full flex items-center justify-center">
            <img alt="search" src={SEARCH_ICON} />
          </button>

          <span className="absolute hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
            Search
          </span>
        </div>
      </div>
      ;
      <div className="h-8 w-8 cursor-pointer col-span-1">
        <img alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
