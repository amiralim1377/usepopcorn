import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSearch } from "../../Slice/searchSlice";
import Swal from "sweetalert2";

function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchinput = search.toLowerCase().trim().split(/\s+/).join("");
    if (!searchinput) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please type the name of a film you want to watch",
        backdrop: "rgba(0, 0, 0, 0.9)",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          htmlContainer: "custom-swal-text",
        },
      });
    } else {
      dispatch(userSearch(searchinput));
      navigate(`search/:${searchinput}`);
      setSearch("");
      setSearchVisible(false);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="z-10 flex h-14 items-center justify-between bg-black px-2 shadow-md">
        <Link to="/">
          <div className="flex items-center justify-between">
            <img
              src="/images/popcorn-svgrepo-com (1).svg"
              className="h-4 w-4 md:h-8 md:w-8"
              alt="Popcorn Icon"
            />
            <p className="text-center font-Roboto text-xs font-bold text-yellow-0 md:text-base md:tracking-widest lg:text-xl">
              USE-POPCORN
            </p>
          </div>
        </Link>
        <form
          onSubmit={handleFormSubmit}
          className="hidden w-full flex-col items-center justify-center md:flex md:max-w-xs lg:max-w-lg"
        >
          <div className="relative flex w-full items-center">
            <input
              type="text"
              className="w-full rounded-md p-2 text-left"
              placeholder="search your favorite movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
              className="absolute right-4 md:right-6"
            >
              <path d="M783.52-110.91 529.85-364.59q-29.76 23.05-68.64 36.57-38.88 13.52-83.12 13.52-111.16 0-188.33-77.17-77.17-77.18-77.17-188.33t77.17-188.33q77.17-77.17 188.33-77.17 111.15 0 188.32 77.17 77.18 77.18 77.18 188.33 0 44.48-13.52 83.12-13.53 38.64-36.57 68.16l253.91 254.15-63.89 63.66ZM378.09-405.5q72.84 0 123.67-50.83 50.83-50.82 50.83-123.67t-50.83-123.67q-50.83-50.83-123.67-50.83-72.85 0-123.68 50.83-50.82 50.82-50.82 123.67t50.82 123.67q50.83 50.83 123.68 50.83Z" />
            </svg>
          </div>
        </form>
        <div className="flex flex-row items-center justify-between space-x-2 p-2 text-white">
          <div className="md:hidden" onClick={handleSearchClick}>
            <img
              src="/images/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Search Icon"
            />
          </div>
          <div onClick={() => navigate(-1)}>
            <img
              src="/images/undo_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Undo Icon"
              className="cursor-pointer md:h-10 md:w-10"
            />
          </div>
          <div onClick={() => navigate("watchlist")}>
            <img
              src="/images/list_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="watchlist Icon"
              className="cursor-pointer md:h-10 md:w-10"
            />
          </div>
        </div>
        {isSearchVisible && (
          <form
            onSubmit={handleFormSubmit}
            className="search-input absolute left-0 top-14 flex w-full items-center justify-between bg-black p-2 md:hidden"
          >
            <input
              type="text"
              className="mx-2 w-full rounded-md border border-black p-2 text-left"
              placeholder="search your favorite movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              src="/images/close_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
              onClick={handleSearchClick}
            />
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;
