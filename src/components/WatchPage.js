import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { DISLIKE_ICON, LIKE_ICON } from "../utils/iconConstants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const [videoDetails, setVideoDetails] = useState(null);

  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
    getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${GOOGLE_API_KEY}`,
    );
    const json = await data.json();
    setVideoDetails(json.items[0]);
    //  console.log(json.items[0]);
  };

  return (
    <div className="p-6 m-10 pl-3">
      <iframe
        className="rounded-lg"
        width="1000"
        height="565"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex justify-between items-start mt-4">
        <div>
          <h1 className="font-bold text-xl">{videoDetails?.snippet?.title}</h1>
          <p className="font-medium">{videoDetails?.snippet?.channelTitle}</p>
          <p className="text-xs my-2">
            {videoDetails?.statistics?.viewCount} Views
          </p>
        </div>

        <div className="flex items-center gap-5 my-12 -ml-72">
          <button className="bg-black text-white rounded-full px-4 py-2">
            Subscribe
          </button>

          <div className="flex">
            <button className="flex items-center gap-2 px-4 py-2 rounded-l-full bg-gray-300 hover:bg-gray-400">
              <img className="h-5" alt="like" src={LIKE_ICON} />
              {videoDetails?.statistics?.likeCount}
            </button>

            <button className="flex items-center px-4 py-2 rounded-r-full bg-gray-300 hover:bg-gray-400">
              <img className="h-7" alt="dislike" src={DISLIKE_ICON} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
