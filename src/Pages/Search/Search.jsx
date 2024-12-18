import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getfilms } from "../../Services/getfilms";
import SearchItem from "../../Components/SearchItem/SearchItem";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";

function Search() {
  const searchUser = useSelector((state) => state.search?.input);
  const navigate = useNavigate();

  const {
    isLoading,
    data: filmsdata,
    error,
  } = useQuery({
    queryKey: ["querykey", searchUser],
    queryFn: () => getfilms(searchUser),
  });

  console.log(error || filmsdata);

  if (isLoading) return <Loading />;

  if (error || filmsdata.Response === "False") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${filmsdata.Error}`,
      backdrop: "rgba(0, 0, 0, 0.9)",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        htmlContainer: "custom-swal-text",
      },
    });
    navigate("/");
    return null;
  }

  return (
    <div className="container mx-auto w-full bg-yellow-0 p-4">
      <ul className="setSearch grid grid-cols-1 gap-5 p-6 md:grid-cols-3 md:p-4 lg:grid-cols-4 xl:grid-cols-5">
        {filmsdata.Search?.map((films, index) => (
          <SearchItem films={films} key={index || films.imdbID} />
        ))}
      </ul>
    </div>
  );
}

export default Search;
