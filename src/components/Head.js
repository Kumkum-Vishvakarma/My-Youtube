import { useDispatch } from "react-redux";
import {
  BELL_ICON,
  LOGO_ICON,
  MENU_ICON,
  MIC_ICON,
  PLUS_ICON,
  SEARCH_ICON,
  USER_ICON,
} from "../utils/iconConstants";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHanndler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" grid grid-flow-col p-2 m-2 items-center ">
      <div className="flex gap-4 col-span-1">
        <div className="">
          <img
            className="cursor-pointer h-6"
            alt="menu"
            src={MENU_ICON}
            onClick={() => toggleMenuHanndler()}
          />
        </div>
        <a href="/">
          <div className="relative group">
            <img className="cursor-pointer h-6 " alt="logo" src={LOGO_ICON} />
            <span className="absolute hidden group-hover:block whitespace-nowrap bg-gray-700 text-white text-xs px-2 py-1 top-8 left-1/2 -translate-x-1/2">
              YouTube Home
            </span>
          </div>
        </a>
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 px-4 py-1 w-1/2 rounded-l-full "
        />

        <div className="relative group ">
          <button className="h-8 w-10  border border-gray-400 rounded-r-full flex items-center p-2 justify-center bg-gray-200">
            <img className="" alt="search" src={SEARCH_ICON} />
          </button>

          <span className="absolute hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
            Search
          </span>
        </div>
        <div className="relative group">
          <button className="h-7 w-7 ">
            <img className="mx-4 my-1" alt="mic icon" src={MIC_ICON} />
          </button>
          <span className="absolute hidden group-hover:block bg-gray-700 text-white text-xs whitespace-nowrap px-2 py-1 left-1/2 ">
            Search with you voice
          </span>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="h-9 cursor-pointer flex ">
          <img className="font-bold " alt="plus" src={PLUS_ICON} />
          <button> Create</button>
        </div>

        <div className="h-8 w-7 relative group">
          <button className="">
            <img alt="bell" src={BELL_ICON} />
          </button>
          <span className="absolute hidden group-hover:block bg-gray-500 text-white text-xs whitespace-nowrap px-2 py-1 left-1">
            Notifications
          </span>
        </div>
        <div className="h-8 w-8 cursor-pointer col-span-1">
          <img alt="user" src={USER_ICON} />
        </div>
      </div>
    </div>
  );
};

export default Head;
