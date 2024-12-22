import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Compactview from "../../Components/Compactview/Compactview";
import GridView from "../../Components/GridView/GridView";
import Zerowatchlist from "../../Components/Zerowatchlist/Zerowatchlist";
import { deleteAllWatchlist } from "../../Slice/watchlistSlice";

function Watchlist() {
  const watchlist = useSelector((state) => state.watchlist?.watchlist);
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState("compact");
  const [sortType, setSortType] = useState("alphabet");

  function toggleViewMode(mode) {
    setViewMode(mode);
  }

  function handleSortTypeChange(event) {
    setSortType(event.target.value);
  }

  function handleDeleteAllWatchList() {
    if (confirm("Are you sure you want to clear all the list?")) {
      dispatch(deleteAllWatchlist());
    }
  }

  function getSortedWatchlist() {
    switch (sortType) {
      case "alphabet":
        return watchlist
          ?.slice()
          .sort((a, b) => a.Title.localeCompare(b.Title));
      case "imdbrating":
        return watchlist?.slice().sort((a, b) => b.imdbRating - a.imdbRating);
      case "yourrating":
        return watchlist?.slice().sort((a, b) => b.rating - a.rating);
      case "runtime":
        return watchlist?.slice().sort((a, b) => {
          const aRuntime = parseInt(a.Runtime) || 0;
          const bRuntime = parseInt(b.Runtime) || 0;
          return bRuntime - aRuntime;
        });
      case "releasedate":
        return watchlist
          ?.slice()
          .sort((a, b) => new Date(b.Released) - new Date(a.Released));
      case "year":
        return watchlist?.slice().sort((a, b) => b.Year - a.Year);
      default:
        return watchlist;
    }
  }
  const sortedWatchlist = getSortedWatchlist();

  if (watchlist?.length == 0) return <Zerowatchlist />;

  return (
    <div className="w-full p-4">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="flex items-center space-x-3">
          <p className="font-Roboto text-base font-semibold md:text-xl md:font-bold">
            {watchlist.length} titles
          </p>
          <button
            onClick={handleDeleteAllWatchList}
            className="flex transform items-center space-x-1 rounded-full border-2 border-black shadow-2xl transition duration-300 ease-in-out hover:scale-x-110 hover:scale-y-110 hover:px-4 md:px-2"
          >
            <img
              src="/images/delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
            <span className="hidden font-Roboto font-semibold md:block">
              Delete All
            </span>
          </button>
        </div>
        <div className="flex items-center justify-between space-x-1">
          <p className="hidden font-Roboto text-base font-semibold md:block md:text-xl md:font-bold">
            Sort by:
          </p>
          <select
            id="sort-select"
            value={sortType}
            onChange={handleSortTypeChange}
            className="w-20 rounded-lg font-Roboto text-base md:w-auto md:px-2 md:text-xl"
          >
            <option value="alphabet">Alphabet</option>
            <option value="imdbrating">IMDB Rating</option>
            <option value="yourrating">Your Rating</option>
            <option value="runtime">Run Time</option>
            <option value="releasedate">Release Date</option>
            <option value="year">Year</option>
          </select>
          <img
            src="/images/grid_view_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Grid View"
            className={`cursor-pointer md:h-10 md:w-10 ${viewMode === "grid" ? "opacity-100" : "opacity-50"}`}
            onClick={() => toggleViewMode("grid")}
          />
          <img
            src="/images/format_list_numbered_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Compact View"
            className={`cursor-pointer md:h-10 md:w-10 ${viewMode === "compact" ? "opacity-100" : "opacity-50"}`}
            onClick={() => toggleViewMode("compact")}
          />
        </div>
      </div>
      {viewMode === "compact" ? (
        <ul className="mx-auto flex w-full flex-col space-y-4 border-2 p-2">
          {sortedWatchlist?.map((list, index) => (
            <Compactview list={list} index={index} key={index} />
          ))}
        </ul>
      ) : (
        <ul className="setSearch grid grid-cols-1 gap-5 p-6 md:grid-cols-3 md:p-4 lg:grid-cols-4 xl:grid-cols-5">
          {sortedWatchlist?.map((list, index) => (
            <GridView list={list} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Watchlist;
