import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
  }, [dispatch]);

  const videoId = searchParams.get("v");
  
  return (
    <div className="p-6 m-10 pl-3">
      <iframe
        className="rounded-lg"
        width="1000"
        height="520"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
