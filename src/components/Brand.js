import { useContext } from "react";
import { getContrastYIQ } from "../helpers";
import MainContext from "../MainContext";
import { MdOutlineContentCopy } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import Clipboard from "react-clipboard.js";
import { useNavigate } from "react-router-dom";

function Brand({ brand }) {
  const {
    selectedBrands,
    setSelectedBrands,
    setCopiedBrandColor,
    setToggleCopied,
  } = useContext(MainContext);

  const showHideCopied = () => {
    setToggleCopied("show");
    setTimeout(() => {
      setToggleCopied("");
    }, 2000);
  };

  const toogleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const navigate = useNavigate();

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
      onClick={toogleSelected}
    >
      <div className="brand-main ">
        <h5 className="brand-name">
          <HiCheck />
          <span>{brand.title}</span>
        </h5>
        <div className="brand-colors">
          {brand.colors.map((color, index) => (
            <Clipboard
              key={index}
              data-clipboard-text={`#${color}`}
              onClick={(e) => {
                showHideCopied();
                setCopiedBrandColor(color);
                e.stopPropagation();
              }}
              className="brand-color"
              style={{
                "--bg-color": `#${color}`,
                "--text-color": `${getContrastYIQ(color)}`,
              }}
            >
              <MdOutlineContentCopy />
              <span>
                {selectedBrands.includes(brand.slug) ? `#${color}` : ""}
              </span>
            </Clipboard>
          ))}
        </div>
      </div>

      <footer className="brand-footer =>">
        <ul>
          <li>
            <span>{brand.modified.slice(0, 10)}</span>
          </li>
          <li className="footer-link">
            <a href={brand.brand_url} target="_blank">
              Brand URL
            </a>
          </li>
          <li className="footer-link">
            <a href={brand.source_url} target="_blank">
              Source URL
            </a>
          </li>
          <li className="footer-link">
            <a onClick={() => navigate(`brand:${brand.slug}`)}>Perma Link</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Brand;
