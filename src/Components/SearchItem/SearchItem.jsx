import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating-stars-component";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "react-modal";
import { getfilmsbyid } from "../../services/getfilmsbyid";
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
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
};
// eslint-disable-next-line
function SearchItem({ films }) {
  // eslint-disable-next-line
  const { Poster, Title, Year, imdbID } = films;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const isAdded = watchlist.some((film) => film.imdbID === imdbID);

  const [rating, setRating] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmittingRating, setIsSubmittingRating] = useState(false);

  async function handleSubmitRating() {
    try {
      setIsSubmittingRating(true);
      const filmDetails = await getfilmsbyid(imdbID);

      dispatch(addToWatchList({ ...filmDetails, rating }));
      setModalIsOpen(false);
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `You rated ${Title} with a score of ${rating}`,
      });
    } catch (error) {
      console.error("Error fetching film details:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add film to watchlist. Please try again.",
      });
    } finally {
      setIsSubmittingRating(false);
    }
  }

  function handleAddToWatchList() {
    setModalIsOpen(true);
  }

  function handleRemoveFromWatchList() {
    dispatch(removeFromWatchList(imdbID));
  }

  return (
    <>
      <li className="mx-2 flex flex-col items-center justify-center rounded-2xl bg-itemdark-0 p-4 shadow-2xl hover:bg-itemdarker-0 hover:shadow-none md:mx-0">
        <div className="relative flex flex-col items-center justify-center p-4">
          <img
            src={Poster}
            alt={Title}
            className="z-0 h-64 w-44 rounded-md object-cover"
          />
          {isAdded && (
            <img
              src="/images/bookmark_check_24dp_E2B616_FILL1_wght400_GRAD0_opsz24.svg"
              alt=""
              className="absolute left-2 top-3 z-10 h-10 w-10"
            />
          )}
        </div>
        <div className="w-full">
          <div className="flex w-full flex-col items-center justify-center space-y-6 py-2">
            <p className="w-full truncate text-center font-Roboto font-semibold text-white">
              {Title}
            </p>
            <p className="font-Roboto font-semibold text-white">{Year}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <button
              onClick={() => navigate(`/app/detailsmovie/${imdbID}`)}
              className="w-full rounded-md bg-[#2c2c2c] px-8 py-3 text-xs text-[#5799ef] hover:opacity-90 md:text-base"
            >
              More Details
            </button>
            {!isAdded ? (
              <button
                onClick={handleAddToWatchList}
                className="w-full rounded-md bg-[#2c2c2c] px-8 py-3 text-xs text-[#5799ef] hover:opacity-90 md:text-base"
              >
                +Add to Watchlist
              </button>
            ) : (
              <button
                onClick={handleRemoveFromWatchList}
                className="h-12 w-full whitespace-nowrap rounded-md bg-[#2c2c2c] px-8 py-3 text-xs text-[#5799ef] hover:opacity-90"
              >
                -Remove from Watchlist
              </button>
            )}
          </div>
        </div>
      </li>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Rate Movie Modal"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold">Rate {Title}</h2>
          <div className="mt-4 flex items-center justify-center">
            <Rating
              count={5}
              size={40}
              activeColor="#ffd700"
              onChange={(newRating) => setRating(newRating)}
            />
          </div>
          <div className="mt-4 flex flex-row items-center justify-center space-x-2">
            <button
              onClick={handleSubmitRating}
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              disabled={isSubmittingRating}
            >
              {isSubmittingRating ? "Submitting..." : "Submit"}
            </button>
            <button
              onClick={() => setModalIsOpen(false)}
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              disabled={isSubmittingRating}
            >
              {isSubmittingRating ? "Submitting..." : "Cancel"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SearchItem;
