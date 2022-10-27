import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Collection from "./components/Collection";
import Piece from "./components/Piece";
import MainContext from "./MainContext";
import { useState } from "react";
import BrandsData from "./brands.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copiedBrandColor, setCopiedBrandColor] = useState();
  const [toggleCopied, setToggleCopied] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortedBrands, setSortedBrands] = useState(brands);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    copiedBrandColor,
    setCopiedBrandColor,
    toggleCopied,
    setToggleCopied,
    searchInput,
    setSearchInput,
    sortedBrands,
    setSortedBrands,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/brandcolor-clone" element={<Content />} />
            <Route
              path="/brandcolor-clone/collection:slugs"
              element={<Collection />}
            />
            <Route path="/brandcolor-clone/brand:slug" element={<Piece />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  );
}

export default App;
