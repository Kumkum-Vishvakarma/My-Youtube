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
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    if (cache[searchQuery]) {
      setSuggestions(cache[searchQuery]);
      return;
    }

    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

      const json = await data.json();

      setSuggestions(json[1]);

      setCache({
        ...cache,
        [searchQuery]: json[1],
      });
    } catch (error) {
      console.error("Suggestion error:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-4 border-b border-gray-200 bg-white z-50">
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
        <div className="relative w-[40rem] max-w-full">
          <div className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search"
              className="w-full border border-gray-300 px-4 py-2 rounded-l-full focus:outline-none"
            />

            <button className="px-6 border border-gray-300 rounded-r-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <img className="h-5" alt="search" src={SEARCH_ICON} />
            </button>
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-12 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-50">
              <ul>
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className=" px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onMouseDown={() => setSearchQuery(s)}
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
