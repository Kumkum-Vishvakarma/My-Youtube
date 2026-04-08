import { useSelector } from "react-redux";
import {
  DOWNLOAD_ICON,
  HISTORY_ICON,
  HOME_ICON,
  LIKE_ICON,
  PLAYLIST_ICON,
  SHORTS_ICON,
  VIDEO_ICON,
  WTC_LTR_ICON,
} from "../utils/constants";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-6 w-52">
      <ul className="font-medium pb-3 cursor-pointer">
        <li className="flex gap-6 ">
          <img className="h-8" alt="home" src={HOME_ICON} /> Home
        </li>
        <li className="flex gap-6 mt-2">
          <img className="h-8" alt="shorts" src={SHORTS_ICON} /> Shorts
        </li>
      </ul>
      <hr className="border-t border-gray-400" />
      <h1 className="font-bold mb-3 mt-2">Subscriptions </h1>
      <ul className="font-medium cursor-pointer pb-3">
        <li className="mt-2">BibleProject</li>
        <li className="mt-2">Yeshu ke geet</li>
        <li className="mt-2">NEW LIFE JESUS</li>
        <li className="mt-2">Ankit Sajwan</li>
        <li className="mt-2">Crazy XYZ</li>
        <li className="mt-2">MyIndia</li>
      </ul>
      <hr className="border-t border-gray-400" />
      <h1 className="font-bold mb-3 mt-3">You</h1>
      <ul className="font-medium pb-3">
        <li className="flex gap-6 mt-2">
          <img className="h-6" alt="history" src={HISTORY_ICON} />
          History
        </li>
        <li className="flex gap-6 mt-2">
          <img className="h-6" alt="playlist" src={PLAYLIST_ICON} />
          Playlists
        </li>
        <li className="flex gap-6 mt-2">
          <img className="h-7" alt="watch" src={WTC_LTR_ICON} />
          Watch Later
        </li>
        <li className="flex gap-6 mt-2">
          <img className="h-6" alt="like" src={LIKE_ICON} />
          Liked Videos
        </li>
        <li className="flex gap-6 mt-2">
          <img className="h-7" alt="video" src={VIDEO_ICON} />
          Your Videos
        </li>
        <li className="flex gap-6 mt-2">
          <img className="h-7" alt="video" src={DOWNLOAD_ICON} />
          Downloads
        </li>
      </ul>
      <hr className="border-t border-gray-400" />
    </div>
  );
};
export default SideBar;
