import { useNavigate } from "react-router-dom";

function Zerowatchlist() {
  const navigate = useNavigate();
  return (
    <div className="m b mx-auto flex w-full flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-semibold text-gray-700">
        Your Watchlist is Empty
      </h2>
      <p className="mt-2 text-gray-500">
        You have not added any movies to your watchlist yet. Start browsing and
        add some!
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Browse Movies
      </button>
    </div>
  );
}

export default Zerowatchlist;
