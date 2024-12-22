import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import HomePage from "./Pages/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "../store";
import Search from "./Pages/Search/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DetailsMovie from "./Pages/DetailsMovie/DetailsMovie";
import Watchlist from "./Pages/Watchlist/Watchlist";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "search/:film",
        element: <Search />,
      },
      {
        path: "detailsmovie/:imdbID",
        element: <DetailsMovie />,
      },
      {
        path: "watchlist",
        element: <Watchlist />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
