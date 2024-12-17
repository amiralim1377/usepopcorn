function Header() {
  return (
    <div className="bg-black mx-auto   h-14 flex items-center justify-between px-2 ">
      <div className="flex items-center justify-between ">
        <img
          src="../../../public/images/popcorn-svgrepo-com (1).svg"
          className="w-4 h-4 md:w-8 md:h-8"
          alt=""
        />
        <p className="font-Roboto   text-yellow-0 font-bold text-xs md:text-base lg:text-xl md:tracking-widest  text-center">
          USE-POPCORN
        </p>
      </div>
      <form className="lg:max-w-lg md:max-w-xs md:flex flex-col items-center justify-center w-full hidden">
        <div className="relative w-full flex items-center">
          <input
            type="text"
            className="w-full p-2 rounded-md text-left"
            placeholder="search your favorite movie..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
            className="absolute  right-4 md:right-6"
          >
            <path d="M783.52-110.91 529.85-364.59q-29.76 23.05-68.64 36.57-38.88 13.52-83.12 13.52-111.16 0-188.33-77.17-77.17-77.18-77.17-188.33t77.17-188.33q77.17-77.17 188.33-77.17 111.15 0 188.32 77.17 77.18 77.18 77.18 188.33 0 44.48-13.52 83.12-13.53 38.64-36.57 68.16l253.91 254.15-63.89 63.66ZM378.09-405.5q72.84 0 123.67-50.83 50.83-50.82 50.83-123.67t-50.83-123.67q-50.83-50.83-123.67-50.83-72.85 0-123.68 50.83-50.82 50.82-50.82 123.67t50.82 123.67q50.83 50.83 123.68 50.83Z" />
          </svg>
        </div>
      </form>
      <div className="text-white flex flex-row items-center justify-between space-x-2 p-2">
        <div className="md:hidden">
          <img
            src="../../../public/images/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="../../../public/images/undo_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
        </div>
        <div>
          <img
            src="../../../public/images/list_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
