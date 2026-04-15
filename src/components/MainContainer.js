import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`
        pt-14
        ${isMenuOpen ? "ml-60" : "ml-20"}
      `}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
