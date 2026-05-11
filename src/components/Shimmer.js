const ShimmerCard = () => {
  return (
    <div className="w-[230px] animate-pulse">
      {/*Thumbnail*/}
      <div className="bg-gray-200 h-[120px] rounded-xl"></div>
      {/*content*/}
      <div className="flex gap-3 mt-8">
        {/*Channel avatar*/}
        <div className="bg-gray-200 h-10 w-10 rounded-full"></div>
        <div className="flex flex-col gap-2 flex-1">
          {/*Title*/}
          <div className="bg-gray-200 h-4 rounded w-[90%]"></div>
          {/*SubTitle*/}
          <div className="bg-gray-200 h-4 rounded w-[60%] mb-6"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-5 gap-5">
      {Array(50)
        .fill("")
        .map((_, number) => (
          <ShimmerCard key={number} />
        ))}
    </div>
  );
};

export default Shimmer;
