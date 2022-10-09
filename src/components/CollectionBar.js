import { useNavigate } from "react-router-dom";
import Download from "./Download";

function CollectionBar() {
  const navigate = useNavigate();

  return (
    <div className="collection-bar">
      <div className="prev" onClick={() => navigate("/")}>
        <i className="fa-solid fa-arrow-left"></i> All Brands
      </div>
      <Download />
    </div>
  );
}

export default CollectionBar;
