const ShimmerCard = () => {
  return (
    <div className="w-full animate-pulse">
      {/* Thumbnail */}
      <div className="bg-gray-200 aspect-video rounded-xl"></div>

      {/* Content */}
      <div className="flex gap-3 mt-4">
        {/* Channel avatar */}
        <div className="bg-gray-200 h-10 w-10 rounded-full shrink-0"></div>

        <div className="flex flex-col gap-2 flex-1">
          {/* Title */}
          <div className="bg-gray-200 h-4 rounded w-[90%]"></div>

          {/* Subtitle */}
          <div className="bg-gray-200 h-4 rounded w-[60%]"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
      {Array(20)
        .fill("")
        .map((_, number) => (
          <ShimmerCard key={number} />
        ))}
    </div>
  );
};

export default Shimmer;
