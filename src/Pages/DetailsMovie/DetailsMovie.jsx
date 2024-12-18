function DetailsMovie() {
  return (
    <div className="container mx-auto flex flex-col space-y-4 bg-yellow-0 p-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex flex-shrink-0 flex-col justify-between">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
          alt=""
          className="w-full rounded-lg"
        />
        <div className="flex flex-col space-y-3">
          <button className="rounded bg-gray-700 p-2 text-white">Back</button>
          <button className="rounded bg-gray-700 p-2 text-white">
            Watchlist
          </button>
          <button className="rounded bg-gray-700 p-2 text-white">
            Show Watchlist
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between rounded-lg bg-dark-0 p-5 text-white">
        <h2 className="text-center font-Roboto text-xl font-bold md:text-left md:text-4xl">
          Crazy, Stupid, Love.
        </h2>
        <div className="grid grid-cols-1 gap-2 border-t-2 p-2 text-base font-semibold md:grid-cols-2 md:text-xl md:font-bold lg:grid-cols-3">
          <p>Year: 2011</p>
          <p>Runtime: 118 min</p>
          <p>Genre: Comedy, Drama, Romance</p>
          <p>Released: 29 Jul 2011</p>
          <p>imdbRating: 7.4</p>
          <p>Awards: 5 wins & 23 nominations</p>
        </div>
        <p className="mt-2 border-t-2 p-2 text-left font-Roboto text-base font-bold leading-8 md:text-left md:text-2xl">
          A middle-aged husband's life changes dramatically when his wife asks
          him for a divorce. He seeks to rediscover his manhood with the help of
          a newfound friend, Jacob, learning to pick up girls at bars.
        </p>
        <div className="mt-2 flex flex-col border-t-2 md:flex-row">
          <div className="md:text-2xlmt-2 mt-2 flex flex-col p-2 text-left font-Roboto text-base font-bold leading-8 md:text-left md:text-2xl">
            <p>Director: Glenn Ficarra, John Requa</p>
            <p>Writer: Dan Fogelman</p>
            <p>Actors: Steve Carell, Ryan Gosling, Julianne Moore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMovie;
