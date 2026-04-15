const VideoCards = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="cursor-pointer">
      <img
        className="
          w-full
          rounded-xl
          aspect-video
          object-cover
          hover:scale-[1.02]
          transition
        "
        alt="thumbnail"
        src={thumbnails?.medium?.url}
        loading="lazy"
      />

      <div className="mt-3">
        <h3
          className="
            font-semibold
            text-sm
            line-clamp-2
          "
        >
          {title}
        </h3>

        <p className="text-xs text-gray-600 mt-1">{channelTitle}</p>

        <p className="text-xs text-gray-600">{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCards;
