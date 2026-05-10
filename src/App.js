import { Provider } from "react-redux";
import "./App.css";
import Body from "./Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import VideoResults from "./components/VideoResults";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <VideoResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Head /> */}
        <RouterProvider router={appRouter} />

        {/**
         * Head
         * Body
         *  SideBar
         *   MenuItems
         *  MainContainer
         *   ButtonList
         *   VideoContainer
         *    VideoCard
         */}
      </div>
    </Provider>
  );
}

export default App;
