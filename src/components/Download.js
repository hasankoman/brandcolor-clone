import MainContext from "../MainContext";
import { useContext, useEffect, useState } from "react";

function Download() {
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
  const [downloadUrl, setDownloadUrl] = useState();
  const [downloadType, setDownloadType] = useState("css");

  const getLink = () => {
    prompt(
      "Here's the URL to share",
      `http://localhost:3000/collection:${selectedBrands.join(",")}`
    );
  };

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = ":root {\n";
      switch (downloadType) {
        case "css":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color};\n`;
            });
          });
          output += "}";
          break;
        case "scss":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `\$-${slug}-${key}: #${color};\n`;
            });
          });
          output += "}";
          break;
        case "less":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`;
            });
          });
          output += "}";
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrands, downloadType]);

  return (
    <div className="group">
      <div
        className={`toolbar-selection ${
          selectedBrands.length === 0 ? "" : "active"
        }`}
      >
        <select
          onChange={(e) => setDownloadType(e.target.value)}
          disabled={selectedBrands.length === 0 ? true : false}
        >
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a
          download={`brands.${downloadType}`}
          href={downloadUrl}
          disabled={selectedBrands.length === 0 ? true : false}
        >
          <i className="fa-solid fa-download"></i>
        </a>

        <button
          onClick={getLink}
          disabled={selectedBrands.length === 0 ? true : false}
        >
          <i className="fa-solid fa-link"></i>
        </button>
        <button
          onClick={() => setSelectedBrands([])}
          disabled={selectedBrands.length === 0 ? true : false}
        >
          <i className="fa-solid fa-x"></i>
        </button>
        <span className="collected-brands">
          {selectedBrands.length} brands collected
        </span>
      </div>

      <div className="all-download">
        <a href="#!">
          <i className="fa-solid fa-download"></i>
          All Brands
        </a>
      </div>
    </div>
  );
}

export default Download;
