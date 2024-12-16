import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import HomePage from "./Pages/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "../store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "search/:film",
      //   element: <Search />,
      // },
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
