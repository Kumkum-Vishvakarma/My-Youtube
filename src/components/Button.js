const Button = ({ name, active }) => {
  return (
    <button
      className={`
        px-4 py-1.5
        rounded-lg
        text-sm font-medium
        whitespace-nowrap
        transition

        ${
          active
            ? "bg-black text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }
      `}
    >
      {name}
    </button>
  );
};

export default Button;
