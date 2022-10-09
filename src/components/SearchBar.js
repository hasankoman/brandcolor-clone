import { AiOutlineSearch } from "react-icons/ai";
import MainContext from "../MainContext";
import { useContext } from "react";
import Download from "./Download";

function SearchBar() {
  const { setSearchInput, selectedBrands, setSelectedBrands } =
    useContext(MainContext);

  return (
    <div className="search-bar">
      <div className="search">
        <div className="icon">
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          placeholder="Search Brands"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <Download />
    </div>
  );
}

export default SearchBar;
