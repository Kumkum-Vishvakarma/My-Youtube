const CommentContainer = ({ videoDetails }) => {
  return (
    <div className="ml-10 p-3 -mt-16 font-bold text-2xl">
      {videoDetails?.statistics?.commentCount} Comments:
    </div>
  );
};

export default CommentContainer;
