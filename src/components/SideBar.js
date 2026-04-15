import { useSelector } from "react-redux";
import {
  DOWNLOAD_ICON,
  HISTORY_ICON,
  HOME_ICON,
  LIKE_ICON,
  PLAYLIST_ICON,
  SHORTS_ICON,
  SUBS_ICON,
  USER_ICON,
  VIDEO_ICON,
  WTC_LTR_ICON,
} from "../utils/iconConstants";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // COLLAPSED SIDEBAR
  if (!isMenuOpen) {
    return (
      <div
        className="
          fixed top-14 left-0
          w-20 h-[calc(100vh-56px)]
          flex flex-col items-center
          py-3
          bg-white
          border-r border-gray-200
        "
      >
        <ul className="space-y-6 text-[10px] text-center">
          <li className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            <img className="h-6 mb-1" src={HOME_ICON} alt="home" />
            Home
          </li>

          <li className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            <img className="h-6 mb-1" src={SHORTS_ICON} alt="shorts" />
            Shorts
          </li>

          <li className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            <img className="h-6 mb-1" src={SUBS_ICON} alt="subscriptions" />
            Subscriptions
          </li>

          <li className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            <img className="h-6 mb-1" src={USER_ICON} alt="you" />
            You
          </li>
        </ul>
      </div>
    );
  }

  // EXPANDED SIDEBAR
  return (
    <div
      className="
        fixed top-14 left-0
        w-60 h-[calc(100vh-56px)]
        overflow-y-auto
        px-4 py-3 pr-2
        bg-white
        border-r border-gray-200
      "
    >
      {/* MAIN MENU */}

      <ul className="space-y-1 font-medium">
        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img className="h-6" src={HOME_ICON} alt="home" />
          Home
        </li>

        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img className="h-6" src={SHORTS_ICON} alt="shorts" />
          Shorts
        </li>

        <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img className="h-6" src={SUBS_ICON} alt="subscriptions" />
          Subscriptions
        </li>
      </ul>

      <hr className="my-3" />

      {/* SUBSCRIPTIONS */}

      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
        Subscriptions
      </h2>

      <ul className="space-y-1 text-sm">
        <li className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          BibleProject
        </li>

        <li className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          Yeshu ke geet
        </li>

        <li className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          NEW LIFE JESUS
        </li>

        <li className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          Ankit Sajwan
        </li>
      </ul>

      <hr className="my-3" />

      {/* YOU SECTION */}

      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
        You
      </h2>

      <ul className="space-y-1 text-sm">
        <li className="flex gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img className="h-5" src={HISTORY_ICON} alt="history" />
          History
        </li>

        <li className="flex gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img className="h-5" src={PLAYLIST_ICON} alt="playlist" />
          Playlists
        </li>

        <li className="flex gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img className="h-5" src={LIKE_ICON} alt="liked videos" />
          Liked Videos
        </li>

        <li className="flex gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img className="h-5" src={VIDEO_ICON} alt="your videos" />
          Your Videos
        </li>

        <li className="flex gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img className="h-5" src={WTC_LTR_ICON} alt="watch later" />
          Watch Later
        </li>

        <li className="flex gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img className="h-5" src={DOWNLOAD_ICON} alt="downloads" />
          Downloads
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
