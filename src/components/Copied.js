import MainContext from "../MainContext";
import { useContext } from "react";

function Copied() {
  const { copiedBrandColor, toggleCopied } = useContext(MainContext);

  return (
    <div className={`clipboard-action ${toggleCopied}`}>
      Copied to <strong>{`#${copiedBrandColor}`}</strong> clipboard
    </div>
  );
}

export default Copied;
