import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { userSearch } from "../../Slice/searchSlice";
import "./custom-swal.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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
      navigate(`app/search/:${searchinput}`);
    }
  };

  return (
    <div className="relative flex items-start justify-center  min-h-screen">
      <div className="bg-HomePage absolute min-h-screen w-full -z-10 "></div>
      <div className="max-w-3xl flex flex-col items-center justify-between   space-y-36 w-full m-3 p-4 ">
        <div className="flex items-center justify-center   p-2">
          <img
            src="../../../public/images/popcorn-svgrepo-com (1).svg"
            className="w-10 h-10"
            alt=""
          />
          <div className="font-Roboto  text-yellow-0 font-bold text-xl md:text-2xl md:tracking-widest  text-center">
            USEPOPCORN
          </div>
        </div>
        <h1 className="font-Roboto text-yellow-0 font-bold text-2xl md:text-6xl md:tracking-widest italic text-center">
          SEARCH, FIND, ENJOY
        </h1>
        <form
          className="relative flex flex-col items-center justify-center w-full"
          onSubmit={handleFormSubmit}
        >
          <div className="relative w-full flex items-center">
            <input
              type="text"
              className="w-full p-3 md:px-9 md:py-4 rounded-2xl text-left"
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
      </div>
    </div>
  );
}

export default HomePage;
