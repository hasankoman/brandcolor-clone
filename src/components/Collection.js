import CollectionBar from "./CollectionBar";
import Copied from "./Copied";
import MainContext from "../MainContext";
import { useContext } from "react";
import LazyLoad from "react-lazyload";
import Brand from "./Brand";
import { useEffect } from "react";
import Loader from "./Loader";

function Collection() {
  const { brands, setSelectedBrands, selectedBrands } = useContext(MainContext);

  const slugs = window.location.pathname.replace("/collection:", "").split(",");

  let slugArray = [];
  let brandArray = [];

  for (let brand of brands) {
    for (let slug of slugs) {
      if (brand.slug === slug) {
        brandArray.push(brand);
        slugArray.push(slug);
      }
    }
  }
  useEffect(() => {
    setSelectedBrands(slugArray);
  }, []);
  return (
    <main className="content">
      <CollectionBar />
      <section className="brands">
        {brandArray.map((brand, index) => (
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

export default Collection;
