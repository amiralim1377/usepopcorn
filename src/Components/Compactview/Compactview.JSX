import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromWatchList } from "../../Slice/watchlistSlice";
// eslint-disable-next-line
function Compactview({ list, index }) {
  // eslint-disable-next-line
  const { Poster, Title, Year, imdbID, Released, imdbRating, rating, Runtime } =
    list;
  console.log(list);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGoToDetailsMovie() {
    navigate(`/app/detailsmovie/${imdbID}`);
  }
  function handleRemoveFromWatchList() {
    dispatch(removeFromWatchList(imdbID));
  }

  return (
    <li className="relative flex w-full flex-row justify-start space-x-2 border-b border-b-gray-200 p-1">
      <div>
        <img
          src={Poster}
          alt=""
          className="h-full w-20 cursor-pointer rounded-md object-cover md:w-24 md:rounded-lg"
          onClick={handleGoToDetailsMovie}
        />
      </div>
      <div className="flex max-w-36 flex-col justify-between py-1 md:max-w-xl lg:max-w-none">
        <h5
          onClick={handleGoToDetailsMovie}
          className="cursor-pointer font-Roboto text-xs font-bold md:text-xl"
        >
          {index + 1}. {Title}
        </h5>
        <div className="flex w-full flex-col items-start text-nowrap md:flex-row md:items-center md:space-x-6">
          <p className="text-xs font-semibold md:text-base">Year:{Year}</p>
          <p className="text-xs font-semibold md:text-base">
            RunTime: {Runtime}
          </p>
          <p className="text-xs font-semibold md:text-base">
            imdbRating: {imdbRating}
          </p>
          <p className="text-xs font-semibold md:text-base">
            Relase Date: {Released}
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold md:text-base">
            Your Rating: {rating}⭐
          </span>
        </div>
      </div>
      <button
        onClick={handleRemoveFromWatchList}
        className="group absolute bottom-0 right-0 z-10"
      >
        <img
          src="../../../public/images/bookmark_remove_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
          className="md:h-10 md:w-10"
        />
        <span className="absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded bg-black p-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100">
          {" "}
          Remove from Watchlist{" "}
        </span>
      </button>
    </li>
  );
}

export default Compactview;
