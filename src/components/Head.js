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

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className="
        fixed
        top-0
        left-0
        right-0
        h-14
        flex
        items-center
        justify-between
        px-4
        border-b border-gray-200
        bg-white
        z-50
      "
    >
      <div className="flex items-center gap-4">
        <img
          className="cursor-pointer h-6"
          alt="menu"
          src={MENU_ICON}
          onClick={toggleMenuHandler}
        />

        <a href="/">
          <img className="cursor-pointer h-6" alt="logo" src={LOGO_ICON} />
        </a>
      </div>

      <div className="flex items-center flex-grow justify-center">
        <div className="flex w-[40rem] max-w-full">
          <input
            type="text"
            placeholder="Search"
            className="
              w-full
              border border-gray-300
              px-4 py-2
              rounded-l-full
              focus:outline-none
            "
          />

          <button
            className="
              px-6
              border border-gray-300
              rounded-r-full
              bg-gray-100
              flex items-center justify-center
              hover:bg-gray-200
            "
          >
            <img className="h-5" alt="search" src={SEARCH_ICON} />
          </button>
        </div>

        <button className="ml-3 p-2 rounded-full hover:bg-gray-100">
          <img className="h-5" alt="mic" src={MIC_ICON} />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-gray-100">
          <img className="h-5" alt="plus" src={PLUS_ICON} />
          <span className="text-sm font-medium">Create</span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100">
          <img className="h-5" alt="bell" src={BELL_ICON} />
        </button>

        <img
          className="h-8 w-8 rounded-full cursor-pointer"
          alt="user"
          src={USER_ICON}
        />
      </div>
    </div>
  );
};

export default Head;
