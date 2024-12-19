import { useState } from "react";
import { removeFromWatchList } from "../../Slice/watchlistSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function GridView({ list }) {
  // eslint-disable-next-line

  // eslint-disable-next-line
  const { Poster, Title, Year, imdbID } = list;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const isAdded = watchlist.some((film) => film.imdbID === imdbID);

  function handleGoToDetailsMovie() {
    navigate(`/app/detailsmovie/${imdbID}`);
  }

  function handleRemoveFromWatchList() {
    dispatch(removeFromWatchList(imdbID));
  }

  return (
    <li className="relative mx-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl bg-itemdark-0 shadow-2xl hover:bg-itemdarker-0 hover:shadow-none md:mx-0">
      {isAdded && (
        <img
          src="../../../public/images/bookmark_check_24dp_E2B616_FILL1_wght400_GRAD0_opsz24.svg"
          alt=""
          className="absolute left-0 top-0 z-10 h-10 w-10"
        />
      )}
      <img
        src={Poster}
        alt={Title}
        className="z-0 h-48 w-full rounded-md rounded-t-2xl"
      />

      <div>
        <div className="flex w-full flex-col items-center justify-center space-y-6 py-2">
          <p className="w-44 truncate text-center font-Roboto font-semibold text-white">
            {Title}
          </p>
          <p className="font-Roboto font-semibold text-white">{Year}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <button
            onClick={handleRemoveFromWatchList}
            className="mb-3 rounded-md bg-yellow-0 p-1 text-xs text-[#5799ef] hover:opacity-90 md:text-base"
          >
            <img
              src="../../../public/images/bookmark_remove_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
          </button>
          <button
            onClick={handleGoToDetailsMovie}
            className="mb-3 rounded-md bg-yellow-0 p-1 text-xs text-[#5799ef] hover:opacity-90 md:text-base"
          >
            <img
              src="../../../public/images/info_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </li>
  );
}

export default GridView;
