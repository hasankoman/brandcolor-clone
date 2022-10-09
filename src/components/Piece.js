import MainContext from "../MainContext";
import { useContext } from "react";
import Copied from "./Copied";
import PieceBrandBar from "../components/PieceBrandBar";
import { getContrastYIQ } from "../helpers";
import { MdOutlineContentCopy } from "react-icons/md";
import Clipboard from "react-clipboard.js";

function Collection() {
  const { brands, setToggleCopied, setCopiedBrandColor } =
    useContext(MainContext);

  const showHideCopied = () => {
    setToggleCopied("show");
    setTimeout(() => {
      setToggleCopied("");
    }, 2000);
  };

  const slug = window.location.pathname.replace("/brand:", "");

  const brand = brands.find((brand) => brand.slug === slug);

  return (
    <main className="content">
      <PieceBrandBar />
      <section className="brand">
        <h5 className="brand-name">{brand.title}</h5>
        <div className="brand-colors">
          {brand.colors.map((color, index) => (
            <Clipboard
              key={index}
              data-clipboard-text={`#${color}`}
              onClick={() => {
                showHideCopied();
                setCopiedBrandColor(color);
              }}
              className="brand-color"
              style={{
                "--bg-color": `#${color}`,
                "--text-color": `${getContrastYIQ(color)}`,
              }}
            >
              <MdOutlineContentCopy /> <span> {`${color}`}</span>
            </Clipboard>
          ))}
        </div>
        <footer className="brand-footer">
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
          </ul>
        </footer>
      </section>

      <Copied />
    </main>
  );
}

export default Collection;
