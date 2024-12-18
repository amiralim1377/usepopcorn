import { useNavigate } from "react-router-dom";

// eslint-disable-next-line
function SearchItem({ films }) {
  // eslint-disable-next-line
  const { Poster, Title, Year, imdbID } = films;
  const navigate = useNavigate();

  return (
    <>
      <li className="mx-2 flex flex-col items-center justify-center rounded-2xl bg-itemdark-0 p-4 shadow-2xl hover:bg-itemdarker-0 hover:shadow-none md:mx-0">
        <div className="flex flex-col items-center justify-center p-4">
          <img
            src={Poster}
            alt={Title}
            className="h-64 w-44 rounded-md object-cover"
          />
        </div>
        <div>
          <div className="flex w-full flex-col items-center justify-center space-y-6 py-2">
            <p className="w-44 truncate text-center font-Roboto font-semibold text-white">
              {Title}
            </p>
            <p className="font-Roboto font-semibold text-white">{Year}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <button
              onClick={() => navigate("/app/detailsmovie")}
              className="w-full rounded-md bg-[#2c2c2c] px-8 py-3 text-xs text-[#5799ef] hover:opacity-90 md:text-base"
            >
              More Details
            </button>
            <button className="w-full rounded-md bg-[#2c2c2c] px-8 py-3 text-xs text-[#5799ef] hover:opacity-90 md:text-base">
              +Add to Watchlist
            </button>
            ث
          </div>
        </div>
      </li>
    </>
  );
}

export default SearchItem;
