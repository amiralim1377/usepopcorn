import { useNavigate, useParams } from "react-router-dom";
// eslint-disable-next-line
import { getfilmsbyid } from "../../Services/getfilmsbyid";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import Rating from "react-rating-stars-component";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "react-modal";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../Slice/watchlistSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

function DetailsMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const isAdded = watchlist.some((film) => film.imdbID === imdbID);

  const {
    isLoading,
    data: filmsdata,
    error,
  } = useQuery({
    queryKey: ["querykey", imdbID],
    queryFn: () => getfilmsbyid(imdbID),
  });

  const [rating, setRating] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (isLoading) return <Loading />;
  if (error) return <span>error fetching data</span>;

  function handleAddToWatchList() {
    setModalIsOpen(true);
  }

  function handleRemoveFromWatchList() {
    dispatch(removeFromWatchList(imdbID));
  }

  function handleSubmitRating() {
    dispatch(addToWatchList({ ...filmsdata, rating }));
    setModalIsOpen(false);
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `You rated ${filmsdata.Title} with a score of ${rating}`,
    });
  }

  return (
    <div className="container mx-auto flex flex-col space-y-4 bg-yellow-0 p-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex flex-shrink-0 flex-col justify-between space-y-2">
        <img
          src={filmsdata?.Poster}
          alt=""
          className="shadow-y-2xl w-full rounded-lg"
        />

        <div className="hidden flex-col space-y-3 md:flex">
          <button
            className="rounded bg-gray-700 p-2 text-white"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          {!isAdded ? (
            <button
              onClick={handleAddToWatchList}
              className="rounded bg-gray-700 p-2 text-white"
            >
              Add To Watchlist
            </button>
          ) : (
            <button
              onClick={handleRemoveFromWatchList}
              className="rounded bg-gray-700 p-2 text-white"
            >
              -Remove from Watchlist
            </button>
          )}
          <button
            onClick={() => navigate("/app/watchlist")}
            className="rounded bg-gray-700 p-2 text-white"
          >
            Show Watchlist
          </button>
        </div>
      </div>
      <div className="relative flex w-full flex-col justify-between rounded-lg bg-[#151515] p-5 text-white/90">
        <h2 className="text-center font-Roboto text-sm font-bold md:text-left md:text-xl lg:text-2xl">
          {filmsdata?.Title}
        </h2>
        {isAdded && (
          <img
            src="/images/bookmark_check_24dp_E2B616_FILL1_wght400_GRAD0_opsz24.svg"
            alt=""
            className="absolute right-0 top-0 z-10 hidden h-10 w-10 md:block"
          />
        )}
        <div className="grid grid-cols-1 gap-2 border-t-2 p-2 font-Roboto text-base md:grid-cols-2 md:text-base lg:grid-cols-3 lg:text-lg">
          <p>Year: {filmsdata?.Year}</p>
          <p>Runtime: {filmsdata?.Runtime}</p>
          <p>Genre: {filmsdata?.Genre}</p>
          <p>Released: {filmsdata?.Released}</p>
          <p>imdbRating: {filmsdata?.imdbRating}</p>
          <p>Awards: {filmsdata?.Awards}</p>
        </div>
        <p className="mt-2 border-t-2 p-2 text-left font-Roboto text-base leading-8 md:text-left md:text-base lg:text-lg">
          {filmsdata?.Plot}
        </p>
        <div className="mt-2 flex flex-col border-t-2 md:flex-row">
          <div className="md:text-2xlmt-2 mt-2 flex flex-col p-2 text-left font-Roboto text-base leading-8 md:text-left md:text-base lg:text-lg">
            <p>Director: {filmsdata?.Director}</p>
            <p>Writer: {filmsdata?.Writer}</p>
            <p>Actors: {filmsdata?.Actors}</p>
          </div>
          <div className="flex flex-col space-y-3 md:hidden">
            <button
              className="rounded bg-gray-700 p-2 text-white"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            {!isAdded ? (
              <button
                onClick={handleAddToWatchList}
                className="rounded bg-gray-700 p-2 text-white"
              >
                Add To Watchlist
              </button>
            ) : (
              <button
                onClick={handleRemoveFromWatchList}
                className="whitespace-nowrap rounded bg-gray-700 p-2 text-white"
              >
                -Remove from Watchlist
              </button>
            )}
            <button
              onClick={() => navigate("/app/watchlist")}
              className="rounded bg-gray-700 p-2 text-white"
            >
              Show Watchlist
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Rate Movie Modal"
      >
        <h2>Rate {filmsdata?.Title}</h2>
        <Rating
          count={5}
          size={40}
          activeColor="#ffd700"
          onChange={(newRating) => setRating(newRating)}
        />
        <div className="flex flex-row space-x-2">
          <button
            onClick={handleSubmitRating}
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            onClick={() => setModalIsOpen(false)}
            className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default DetailsMovie;
