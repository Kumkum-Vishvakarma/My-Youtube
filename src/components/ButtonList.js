import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "News",
    "Mixes",
    "Javascript",
    "Live",
    "Restaurants",
    "Contemporary Worship Music",
    "Blessings",
    "Pop Music",
    "Tourist destinations",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex overflow-x-auto scrollbar-hide whitespace-nowrap gap-3">
        {list.map((item) => (
          <Button key={item} name={item} />
        ))}
      </div>
    </div>
  );
};
export default ButtonList;
