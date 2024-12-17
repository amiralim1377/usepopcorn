import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import HomePage from "./Pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "../store";
import Search from "./Pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "search/:film",
        element: <Search />,
      },

      // {
      //   path: "details",
      //   element: <DetailsMovie />,
      // },
      // {
      //   path: "watchlist",
      //   element: <WatchList />,
      // },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
