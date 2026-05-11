import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoResults = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const [videos, setVideos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getSearchResults();
  }, [query]);

  const getSearchResults = async () => {
    try {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=" +
          query +
          "&key=" +
          process.env.REACT_APP_YOUTUBE_API_KEY,
      );

      const json = await data.json();

      //console.log(json);

      setVideos(json.items || []);
    } catch (error) {
      console.log(error);
      setVideos([]);
    }
  };

  const restVideos = videos.slice(1);

  return (
    <div className={`p-5 m-5 ${isMenuOpen ? "ml-60" : "ml-20"}`}>
      <div className="grid grid-cols-1 mt-6">
        {restVideos.map((video) => (
          <div
            onClick={() => navigate("/watch?v=" + video?.id?.videoId)}
            key={video?.id?.videoId}
            className="flex p-2 rounded-lg"
          >
            <img
              className="rounded-lg h-[350px] w-[500px] cursor-pointer"
              src={video?.snippet?.thumbnails?.high?.url}
              alt="thumbnail"
            />

            <div className=" ml-3">
              <h1 className="font-semibold text-xl cursor-pointer ">
                {video?.snippet?.title}
              </h1>

              <p className="text-sm font-medium cursor-pointer mt-2">
                {video?.snippet?.channelTitle}
              </p>

              <p className="text-sm cursor-pointer mt-2">
                {video?.snippet?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoResults;
