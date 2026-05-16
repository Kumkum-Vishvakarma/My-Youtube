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
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  // return (
  //   <div
  //     className="
  //         fixed top-14 left-0
  //         w-20 h-[calc(100vh-56px)]
  //         flex flex-col items-center
  //         py-3
  //         bg-white
  //         border-r border-gray-200
  //       "
  //   >
  //     <ul className="space-y-6 text-[10px] text-center">
  //       <li className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
  //         <img className="h-6 mb-1" src={HOME_ICON} alt="home" />
  //         <Link to="/">Home</Link>
  //       </li>

  //       <li className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
  //         <img className="h-6 mb-1" src={SHORTS_ICON} alt="shorts" />
  //         Shorts
  //       </li>

  //       <li className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
  //         <img className="h-6 mb-1" src={SUBS_ICON} alt="subscriptions" />
  //         Subscriptions
  //       </li>

  //       <li className="flex flex-col items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
  //         <img className="h-6 mb-1" src={USER_ICON} alt="you" />
  //         You
  //       </li>
  //     </ul>
  //   </div>
  // );

  return (
    <div className="fixed top-14 left-0 w-16 md:w-60 overflow-y-auto px-2 md:px-4 py-3 pr-2 bg-white border-r border-gray-200">
      <ul className="font-medium">
        <li>
          <Link
            to="/"
            className="flex md:flex-row flex-col md:items-center md:gap-4 p-2 md:mb-0 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <img className="h-6 shrink-0 " src={HOME_ICON} alt="home" />
            <span className="hidden md:block">Home</span>
          </Link>
        </li>

        <li className="flex md:flex-row flex-col items-center md:gap-4 p-2 md:mb-0 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img className="h-6 shrink-0" src={SHORTS_ICON} alt="shorts" />
          <span className="hidden md:block">Shorts</span>
        </li>

        <li className="flex md:flex-row flex-col items-center md:gap-4 p-2 md:mb-0 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img className="h-6 shrink-0" src={SUBS_ICON} alt="subscriptions" />
          <span className="hidden md:block">Subscriptions</span>
        </li>
      </ul>

      <div className="hidden md:block">
        <hr className="my-3" />

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
    </div>
  );
};

export default SideBar;
