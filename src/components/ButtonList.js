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
    "Recently uploaded",
    "New to you",
  ];

  return (
    <div className="flex gap-3 whitespace-nowrap overflow-x-scroll">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};
export default ButtonList;
