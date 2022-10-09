import SearchBar from "./SearchBar";
import Brand from "./Brand";
import Copied from "./Copied";
import MainContext from "../MainContext";
import { useContext } from "react";
import { useEffect } from "react";
import LazyLoad from "react-lazyload";
import Loader from "./Loader";

function Content() {
  const {
    brands,
    searchInput,
    sortedBrands,
    setSortedBrands,
    setSelectedBrands,
  } = useContext(MainContext);

  useEffect(() => {
    if (searchInput === "") {
      setSortedBrands(brands);
      return;
    }
    setSortedBrands(
      brands.filter((b) => {
        return b.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
      })
    );
  }, [searchInput]);

  useEffect(() => {
    setSelectedBrands([]);
  }, []);

  return (
    <main className="content">
      <SearchBar />
      <section className="brands">
        {sortedBrands.map((brand, index) => (
          <LazyLoad
            key={index}
            once={true}
            overflow={true}
            placeholder={<Loader />}
          >
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
      <Copied />
    </main>
  );
}
export default Content;
