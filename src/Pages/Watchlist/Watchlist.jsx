import { useSelector } from "react-redux";
import GridView from "../../Components/GridView/GridView";

function Watchlist() {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  console.log(watchlist);

  return (
    <div className="w-full p-4">
      <div className="flex w-full items-center justify-between">
        <div>
          <p className="font-Roboto text-base font-semibold md:text-xl md:font-bold">
            {watchlist.length} titles
          </p>
        </div>
        <div className="flex items-center justify-between space-x-1">
          <p className="hidden font-Roboto text-base font-semibold md:block md:text-xl md:font-bold">
            Sort by:
          </p>
          <select
            id="pet-select"
            className="rounded-lg font-Roboto text-base md:px-2 md:text-xl"
          >
            <option value="alphabet">Alphabet</option>
            <option value="imdbrating">imdb Rating</option>
            <option value="yourrating">your Rating</option>
            <option value="runtime">Run Time</option>
            <option value="Releasedate">Release Date</option>
            <option value="year">Year</option>
          </select>
          <img
            src="../../../public/images/grid_view_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="cursor-pointer md:h-10 md:w-10"
          />
          <img
            src="../../../public/images/view_compact_alt_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            className="cursor-pointer md:h-10 md:w-10"
          />
        </div>
      </div>
      <ul className="setSearch grid grid-cols-1 gap-5 p-6 md:grid-cols-3 md:p-4 lg:grid-cols-4 xl:grid-cols-5">
        {watchlist.map((list, index) => (
          <GridView list={list} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
