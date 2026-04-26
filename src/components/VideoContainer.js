import { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="px-6 py-4">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-6
        "
      >
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCards info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
