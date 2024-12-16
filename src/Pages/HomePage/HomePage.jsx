import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userSearch } from "../../Slice/searchSlice";

function HomePage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const searchinput = data.searchinput
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .join(" ");

    dispatch(userSearch(searchinput));
    console.log(searchinput);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="bg-HomePage absolute min-h-screen w-full -z-10"></div>
      <div className="max-w-3xl flex flex-col items-center justify-between mb-44 space-y-36 w-full p-4">
        <h1 className="font-Roboto text-yellow-0 font-bold text-2xl md:text-6xl md:tracking-widest italic text-center">
          SEARCH, FIND, ENJOY
        </h1>
        <form
          className="relative flex flex-col items-center justify-center  w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative w-full flex items-center ">
            <input
              type="text"
              className={`w-full p-3 md:px-9 md:py-4 rounded-2xl text-left ${
                errors.searchinput ? "border-2 border-red-600" : ""
              }`}
              placeholder="search your favorite movie..."
              {...register("searchinput", {
                required: "Please type the name of a film you want to watch",
              })}
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
          {errors.searchinput && (
            <span
              style={{
                color: "black",
                fontSize: "12px",
                background: "white",
                padding: "4px",
                marginTop: "10px",
                display: "block",
              }}
            >
              {errors.searchinput.message}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default HomePage;
