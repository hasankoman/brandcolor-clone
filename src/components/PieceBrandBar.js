import { useNavigate } from "react-router-dom";

function PeaceBrandBar() {
  const navigate = useNavigate();

  return (
    <div className="collection-bar">
      <div className="prev" onClick={() => navigate("/")}>
        <i className="fa-solid fa-arrow-left"></i> All Brands
      </div>
    </div>
  );
}

export default PeaceBrandBar;
