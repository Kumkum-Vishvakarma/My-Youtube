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
    <div className="w-full px-4 py-2">
      <div
        className="
        flex
        gap-3
        overflow-x-auto
        whitespace-nowrap
        scrollbar-hide
      "
      >
        {list.map((item, index) => (
          <Button key={item} name={item} active={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
